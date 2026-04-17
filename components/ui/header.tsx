import Link from "next/link";
import Logo from "./logo";

export default function Header() {
  return (
    <header className="fixed top-0 z-30 w-full px-3 pt-3 md:px-0 md:pt-6">
      <div className="mx-auto max-w-6xl px-4 sm:px-6">
        <div className="relative flex min-h-16 items-center justify-between gap-3 rounded-[1.5rem] border border-white/10 bg-[#1a0b12]/75 px-4 py-3 shadow-[0_18px_50px_rgba(0,0,0,0.25)] backdrop-blur-md">
          <div className="flex flex-1 items-center">
            <Logo />
          </div>

          <ul className="hidden flex-1 items-center justify-end gap-6 lg:flex">
            <li>
              <Link
                href="#uu-dai"
                className="text-sm text-[#f6d6e0] transition hover:text-white"
              >
                Ưu đãi
              </Link>
            </li>
            <li>
              <Link
                href="#tien-ich"
                className="text-sm text-[#f6d6e0] transition hover:text-white"
              >
                Trải nghiệm
              </Link>
            </li>
            <li>
              <Link
                href="#lien-he"
                className="text-sm text-[#f6d6e0] transition hover:text-white"
              >
                Liên hệ
              </Link>
            </li>
            <li>
              <a
                href="https://zalo.me/0377323247"
                target="_blank"
                rel="noreferrer"
                className="inline-flex min-h-11 items-center rounded-full bg-[linear-gradient(135deg,#f35f99,#ffd0dc)] px-5 text-sm font-semibold text-[#3a0e1d] transition hover:scale-[1.02]"
              >
                Đặt phòng ngay
              </a>
            </li>
          </ul>

          <div className="text-right lg:hidden">
            <div className="text-[11px] uppercase tracking-[0.22em] text-[#efb5c7]">
              Hotline
            </div>
            <a
              href="tel:0377323247"
              className="text-sm font-semibold text-white"
            >
              03773.23.247
            </a>
          </div>
        </div>
      </div>
    </header>
  );
}
