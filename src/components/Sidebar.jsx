import {
  LayoutDashboard,
  BookOpen,
  ScanText,
  Brain,
  Table2,
  ChartNoAxesColumn,
  Languages,
} from "lucide-react";

const navigation = [
  {
    label: "Dashboard",
    icon: LayoutDashboard,
    active: true,
  },
  {
    label: "Learn Grammar",
    icon: BookOpen,
  },
  {
    label: "Sentence Analyzer",
    icon: ScanText,
  },
  {
    label: "Practice",
    icon: Brain,
  },
  {
    label: "Declension Tables",
    icon: Table2,
  },
  {
    label: "My Progress",
    icon: ChartNoAxesColumn,
  },
];

function Sidebar() {
  return (
    <aside className="hidden w-64 shrink-0 border-r border-slate-200 bg-white lg:flex lg:flex-col">
      {/* Logo */}
      <div className="flex h-16 items-center gap-3 border-b border-slate-200 px-6">
        <div className="flex h-9 w-9 items-center justify-center rounded-xl bg-blue-900 text-white">
          <Languages className="h-5 w-5" />
        </div>

        <div>
          <h1 className="font-bold text-slate-900">Deutsch Fälle</h1>

          <p className="text-xs text-slate-500">German Grammar Learning</p>
        </div>
      </div>

      {/* Navigation */}
      <nav className="flex-1 space-y-1 px-3 py-5">
        <p className="mb-3 px-3 text-xs font-semibold uppercase tracking-wider text-slate-400">
          Main Menu
        </p>

        {navigation.map((item) => {
          const Icon = item.icon;

          return (
            <button
              key={item.label}
              className={`flex w-full items-center gap-3 rounded-xl px-3 py-3 text-sm font-medium transition ${
                item.active
                  ? "bg-blue-50 text-blue-700"
                  : "text-slate-600 hover:bg-slate-100"
              }`}
            >
              <Icon className="h-5 w-5" />

              {item.label}
            </button>
          );
        })}
      </nav>

      {/* Footer */}
      <div className="border-t border-slate-200 p-4">
        <div className="rounded-xl bg-slate-50 p-4">
          <p className="text-sm font-semibold text-slate-800">Keep Learning!</p>

          <p className="mt-1 text-xs leading-relaxed text-slate-500">
            Konsistensi adalah kunci menguasai bahasa Jerman.
          </p>
        </div>
      </div>
    </aside>
  );
}

export default Sidebar;
