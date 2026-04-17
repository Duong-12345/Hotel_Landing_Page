import Link from "next/link";

export default function Logo() {
  return (
    <Link href="/" className="inline-flex items-center gap-3" aria-label="6 Senses Hotel">
      <div className="flex h-11 w-11 items-center justify-center rounded-full bg-[linear-gradient(135deg,#f35f99,#ffd0dc)] text-sm font-semibold text-[#411120] shadow-[0_10px_30px_rgba(243,95,153,0.35)]">
        6S
      </div>
      <div>
        <div className="font-display text-lg leading-none text-white">
          6 Senses Hotel
        </div>
        <div className="mt-1 text-[11px] uppercase tracking-[0.24em] text-[#f4c1d2]">
          Love Hotel in Hanoi
        </div>
      </div>
    </Link>
  );
}
