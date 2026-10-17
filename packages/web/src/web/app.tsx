import { Route, Switch } from "wouter";
import { lazy, Suspense } from "react";
import Entrance from "./pages/entrance";
import { worlds } from "./lib/worlds";
import { Provider } from "./components/provider";
import { AgentFeedback } from "@runablehq/website-runtime";

const WorldPage = lazy(() => import("./pages/world-page"));
const NotFound = lazy(() => import("./pages/world-page").then((m) => ({ default: m.NotFound })));

function App() {
  return (
    <Provider>
      <Suspense
        fallback={
          <div className="loading-world" lang="ar" dir="rtl">
            لحظة… نفتح باب العالم.
          </div>
        }
      >
        <Switch>
          <Route path="/" component={Entrance} />
          {worlds.map((world) => (
            <Route key={world.slug} path={`/${world.slug}`}>
              <WorldPage slug={world.slug} />
            </Route>
          ))}
          <Route component={NotFound} />
        </Switch>
      </Suspense>
      {/* Do not remove — off by default, activated by parent iframe via postMessage */}
      {import.meta.env.DEV && <AgentFeedback />}
      {/* Attribution is localized in the page footers to respect the required languages. */}
    </Provider>
  );
}

export default App;
