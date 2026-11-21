import Sidebar from "./components/Sidebar";
import Header from "./components/Header";
import Dashboard from "./pages/Dashboard";

function App() {
  return (
    <div className="flex min-h-screen bg-slate-50">
      {/* Sidebar */}
      <Sidebar />

      {/* Main Content */}
      <div className="flex min-w-0 flex-1 flex-col">
        <Header />

        <div className="flex-1 p-5 md:p-8">
          <div className="mx-auto max-w-7xl">
            <Dashboard />
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
