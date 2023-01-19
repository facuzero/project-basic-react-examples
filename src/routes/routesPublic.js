import { Error404 } from "../components/Error404";
import { Home } from "../components/Home";
import { ProgressBar } from "../components/ProgressBar/ProgressBar";
import { ProgressBar as PracticePB } from "../components/MyPractices/ProgressBar/ProgressBar";
import { ShowHideMessage } from "../components/ShowHideMessage";
import { ShowHideMessage as PracticeSHM } from "../components/MyPractices/ShowHideMessage/ShowHideMessage";
import { StopWatchTimer } from "../components/StopWatchTimer/StopWatchTimer";

export const routesPublic = [
  {
    path: "/",
    element: <Home />,
  },
  {
    path: "/showhidemessage",
    element: <ShowHideMessage />,
  },
  {
    path: "/progressbar",
    element: <ProgressBar />,
  },
  {
    path: "/stopwatchtimer",
    element: <StopWatchTimer />,
  },
  {
    path: "/practices/showhidemessage",
    element: <PracticeSHM />,
  },
  {
    path: "/practices/progressbar",
    element: <PracticePB />,
  },
  {
    path: "/practices/stopwatchtimer",
    element: <StopWatchTimer />,
  },
  {
    path: "/*",
    element: <Error404 />,
  },
];
