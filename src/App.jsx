import { Routes, Route } from "react-router-dom";

import Sidebar from "./components/Sidebar";
import Header from "./components/Header";

import Dashboard from "./pages/Dashboard";
import LearnGrammar from "./pages/LearnGrammar";
import SentenceAnalyzer from "./pages/SentenceAnalyzer";
import Practice from "./pages/Practice";
import DeclensionTables from "./pages/DeclensionTables";
import MyProgress from "./pages/MyProgress";

import LessonDetail from "./pages/LessonDetail";

function App() {
  return (
    <div className="flex min-h-screen bg-[#171717]">
      {/* Sidebar */}
      <Sidebar />

      {/* Main Content */}
      <div className="flex min-w-0 flex-1 flex-col">
        <Header />

        <div className="flex-1 p-5 md:p-8">
          <div className="mx-auto max-w-7xl">
            <Routes>
              <Route path="/" element={<Dashboard />} />

              <Route path="/learn" element={<LearnGrammar />} />

              <Route path="/learn/:caseId" element={<LessonDetail />} />

              <Route path="/analyzer" element={<SentenceAnalyzer />} />

              <Route path="/practice" element={<Practice />} />

              <Route path="/declension" element={<DeclensionTables />} />

              <Route path="/progress" element={<MyProgress />} />
            </Routes>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
