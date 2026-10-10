import TimelinePage from "./pages/TimelinePage";
import PrizePage from "./pages/PrizePage";
import SponsorsPage from "./pages/SponsorsPage";
import MentorsPage from "./pages/MentorsPage";
import FAQPage from "./pages/FAQPage";
import ReadyToBuildPage from "./pages/ReadyToBuildPage";

export default function App() {
  return (
    <main className="w-full overflow-hidden">
      <TimelinePage />
      <PrizePage />
      <SponsorsPage />
      <MentorsPage />
      <FAQPage />
      <ReadyToBuildPage />
    </main>
  );
}
