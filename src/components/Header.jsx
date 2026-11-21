import { Search, Bell, Menu } from "lucide-react";

function Header() {
  return (
    <header className="flex h-16 items-center justify-between border-b border-[#383838] bg-[#171717] px-5 md:px-8">
      {/* Search */}
      <div className="flex items-center gap-3">
        <button className="rounded-lg p-2 text-[#A3A3A3] hover:bg-[#222222] lg:hidden">
          <Menu className="h-5 w-5" />
        </button>

        <div className="hidden items-center gap-2 rounded-xl border border-[#383838] bg-[#222222] px-3 py-2 sm:flex">
          <Search className="h-4 w-4 text-[#A3A3A3]" />

          <input
            type="text"
            placeholder="Search lessons..."
            className="w-48 bg-transparent text-sm text-white outline-none placeholder:text-[#737373]"
          />
        </div>
      </div>

      {/* Profile */}
      <div className="flex items-center gap-4">
        <button className="rounded-xl p-2 text-[#A3A3A3] transition hover:bg-[#222222] hover:text-white">
          <Bell className="h-5 w-5" />
        </button>

        <div className="flex items-center gap-3">
          <div className="hidden text-right sm:block">
            <p className="text-sm font-semibold text-white">Ari</p>

            <p className="text-xs text-[#A3A3A3]">Beginner · A1</p>
          </div>

          <div className="flex h-10 w-10 items-center justify-center rounded-full border border-[#D4AF37]/30 bg-[#D4AF37]/10 font-semibold text-[#D4AF37]">
            A
          </div>
        </div>
      </div>
    </header>
  );
}

export default Header;
