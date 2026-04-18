import Image from "next/image";
import Link from "next/link";

export default function Logo() {
  return (
    <Link
      href="/"
      className="inline-flex items-center gap-3"
      aria-label="6 Senses Hotel"
    >
      <div className="relative flex h-12 w-12 items-center justify-center overflow-hidden rounded-full border border-[#f192ba]/30 bg-black/50 shadow-[0_12px_30px_rgba(0,0,0,0.35)]">
        <Image
          src="/images/hotel/logo/6SENSES-PINK.png"
          alt="Logo 6 Senses Hotel"
          width={64}
          height={64}
          className="h-10 w-10 object-contain"
          priority
        />
      </div>
      <div>
        <div className="font-display text-lg leading-none text-white">
          6 Senses Hotel
        </div>
        <div className="mt-1 text-[11px] uppercase tracking-[0.24em] text-[#f4c1d2]">
          Khách sạn tình yêu Hà Nội
        </div>
      </div>
    </Link>
  );
}
