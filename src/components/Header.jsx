import { Search, Bell, Menu } from "lucide-react";

function Header() {
  return (
    <header className="flex h-16 items-center justify-between border-b border-slate-200 bg-white px-5 md:px-8">
      <div className="flex items-center gap-3">
        <button className="rounded-lg p-2 text-slate-600 hover:bg-slate-100 lg:hidden">
          <Menu className="h-5 w-5" />
        </button>

        <div className="hidden items-center gap-2 rounded-xl bg-slate-100 px-3 py-2 sm:flex">
          <Search className="h-4 w-4 text-slate-500" />

          <input
            type="text"
            placeholder="Search lessons..."
            className="w-48 bg-transparent text-sm outline-none"
          />
        </div>
      </div>

      <div className="flex items-center gap-4">
        <button className="rounded-xl p-2 text-slate-500 transition hover:bg-slate-100">
          <Bell className="h-5 w-5" />
        </button>

        <div className="flex items-center gap-3">
          <div className="hidden text-right sm:block">
            <p className="text-sm font-semibold text-slate-800">Ari</p>

            <p className="text-xs text-slate-500">Beginner · A1</p>
          </div>

          <div className="flex h-10 w-10 items-center justify-center rounded-full bg-blue-100 font-semibold text-blue-700">
            A
          </div>
        </div>
      </div>
    </header>
  );
}

export default Header;
