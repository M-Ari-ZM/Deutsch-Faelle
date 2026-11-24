import { NavLink } from "react-router-dom";

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
    path: "/",
    icon: LayoutDashboard,
  },
  {
    label: "Learn Grammar",
    path: "/learn",
    icon: BookOpen,
  },
  {
    label: "Sentence Analyzer",
    path: "/analyzer",
    icon: ScanText,
  },
  {
    label: "Practice",
    path: "/practice",
    icon: Brain,
  },
  {
    label: "Declension Tables",
    path: "/declension",
    icon: Table2,
  },
  {
    label: "My Progress",
    path: "/progress",
    icon: ChartNoAxesColumn,
  },
];

function Sidebar() {
  return (
    <aside className="hidden w-64 shrink-0 flex-col border-r border-[#383838] bg-[#111111] lg:flex">
      {/* Logo */}
      <div className="flex h-16 items-center gap-3 border-b border-[#383838] px-6">
        <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-[#C62828] text-white">
          <Languages className="h-5 w-5" />
        </div>

        <div>
          <h1 className="font-bold text-[#F5F5F5]">Deutsch Fälle</h1>

          <p className="text-xs text-[#A3A3A3]">German Grammar Learning</p>
        </div>
      </div>

      {/* Navigation */}
      <nav className="flex-1 space-y-1 px-3 py-6">
        <p className="mb-3 px-3 text-xs font-semibold uppercase tracking-widest text-[#737373]">
          Main Menu
        </p>

        {navigation.map((item) => {
          const Icon = item.icon;

          return (
            <NavLink
              key={item.path}
              to={item.path}
              end={item.path === "/"}
              className={({ isActive }) =>
                `flex w-full items-center gap-3 rounded-xl px-3 py-3 text-sm font-medium transition-all duration-200 ${
                  isActive
                    ? "border border-[#C62828]/20 bg-[#C62828]/10 text-[#E53935]"
                    : "text-[#A3A3A3] hover:bg-[#222222] hover:text-white"
                }`
              }
            >
              <Icon className="h-5 w-5" />

              {item.label}
            </NavLink>
          );
        })}
      </nav>

      {/* Learning Motivation */}
      <div className="border-t border-[#383838] p-4">
        <div className="rounded-xl border border-[#383838] bg-[#222222] p-4">
          <div className="flex items-center gap-2">
            <div className="rounded-lg bg-[#D4AF37]/10 p-2">
              <Languages className="h-4 w-4 text-[#D4AF37]" />
            </div>

            <p className="text-sm font-semibold text-white">Keep Learning!</p>
          </div>

          <p className="mt-2 text-xs leading-relaxed text-[#A3A3A3]">
            Konsistensi adalah kunci menguasai bahasa Jerman.
          </p>
        </div>
      </div>
    </aside>
  );
}

export default Sidebar;
