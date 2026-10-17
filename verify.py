import asyncio, json
from playwright.async_api import async_playwright

async def main():
    async with async_playwright() as p:
        browser = await p.chromium.launch(executable_path='/usr/bin/google-chrome', headless=True, args=['--no-sandbox'])
        page = await browser.new_page(viewport={'width':390,'height':844})
        errors=[]
        page.on('pageerror', lambda e: errors.append(str(e)))
        results=[]
        for path in ['/','/mind','/chemistry','/philosophy','/reflection','/behavior','/museum']:
            await page.goto('http://localhost:4200'+path)
            await page.wait_for_selector('h1')
            await page.screenshot(path='/home/user/dody-'+('home' if path=='/' else path[1:])+'-mobile.png', full_page=True)
            info=await page.evaluate('({lang:document.documentElement.lang,dir:document.documentElement.dir,width:innerWidth,scrollWidth:document.documentElement.scrollWidth,title:document.querySelector("h1").innerText})')
            assert info['scrollWidth']==info['width'], info
            results.append({'route':path,**info})
            if path=='/':
                await page.get_by_role('link',name='무슨 일이 일어날까?').click()
                assert await page.evaluate('location.hash')=='#worlds'
            if path=='/mind':
                await page.get_by_role('button',name='أزل الخدعة').click()
                assert await page.get_by_role('button',name='أعد الخلفيتين').count()==1
            if path=='/chemistry':
                await page.get_by_role('button',name='قطرة حمضية').click()
                assert await page.locator('#ph').input_value()=='6'
            if path=='/philosophy':
                await page.locator('#parts').fill('8')
                await page.get_by_role('button',name='نعم، قصتها مستمرة').click()
                assert await page.get_by_text('أنت تمنح الاستمرارية وزنًا أكبر.').count()==1
            if path=='/reflection':
                await page.locator('textarea').fill('تأمل تجريبي')
                await page.get_by_role('button',name='احفظ تأمّلك').click()
                await page.reload()
                await page.wait_for_selector('textarea')
                assert await page.locator('textarea').input_value()=='تأمل تجريبي'
                await page.evaluate('localStorage.removeItem("dody-reflection")')
            if path=='/behavior':
                await page.get_by_role('button',name='اضغط الزر الممنوع').click()
                assert await page.locator('.behavior-stats strong').first.inner_text()=='1'
            if path=='/museum':
                await page.get_by_role('button',name='باب إلى لا مكان').click()
                await page.get_by_role('button',name='افتح الباب').click()
                assert await page.locator('.door-object.open').count()==1
        await page.goto('http://localhost:4200/mind')
        await page.get_by_role('button',name='افتح قائمة العوالم').click()
        await page.locator('.world-menu').get_by_role('link',name='كيمياء تفاعلية').click()
        await page.wait_for_selector('#ph')
        assert await page.evaluate('document.documentElement.dir')=='rtl'
        await page.evaluate('localStorage.clear()')
        print(json.dumps({'routes':results,'runtimeErrors':errors,'interactions':'all assertions passed'},ensure_ascii=False,indent=2))
        assert not errors
        await browser.close()

asyncio.run(main())