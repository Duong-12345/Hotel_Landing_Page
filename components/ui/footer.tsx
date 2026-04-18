export default function Footer({ border = false }: { border?: boolean }) {
  return (
    <footer className="pb-24 md:pb-10">
      <div className="mx-auto max-w-6xl px-4 sm:px-6">
        <div
          className={`rounded-[2rem] bg-[#12060b] px-6 py-8 text-[#f8e9ee] ${border ? "border border-white/8" : ""}`}
        >
          <div className="flex flex-col gap-6 md:flex-row md:items-end md:justify-between">
            <div>
              <p className="text-xs uppercase tracking-[0.28em] text-[#efb3c6]">
                6 Senses Hotel
              </p>
              <h3 className="mt-3 font-display text-3xl text-white">
                Khách sạn tình yêu Hà Nội
              </h3>
              <p className="mt-3 max-w-xl text-sm leading-7 text-[#f2dbe3]">
                Tập trung vào trải nghiệm riêng tư, thẩm mỹ quyến rũ và các tiện
                ích giúp buổi hẹn của hai người trở nên đáng nhớ hơn.
              </p>
            </div>

            <div className="space-y-2 text-sm text-[#f5e5ea]">
              <p>
                Hotline:{" "}
                <a href="tel:0377323247" className="font-semibold text-white">
                  03773.23.247
                </a>
              </p>
              <p>
                Fanpage:{" "}
                <a
                  href="https://www.facebook.com/6SensesHotel"
                  target="_blank"
                  rel="noreferrer"
                  className="font-semibold text-white"
                >
                  facebook.com/6SensesHotel
                </a>
              </p>
              {/* <p className="text-[#d9b7c4]">
                Giao diện đã được tinh gọn cho chiến dịch landing page ưu tiên
                mobile.
              </p> */}
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
