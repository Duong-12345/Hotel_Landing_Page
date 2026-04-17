const offerItems = [
  "Giảm giá 20% cho khách đặt phòng trước",
  "FREE - Sử dụng quầy mỹ phẩm số 1 Nhật Bản",
  'FREE - Mượn đồ cosplay, "dụng cụ vui vẻ"',
  "FREE - Board game tăng hưng phấn, cảm xúc",
  "Trải nghiệm máy sấy DYSON cao cấp set 5 đầu sấy",
  "JACUZZI - Bồn tắm sục nhiều màu, bath bomb tạo bọt",
  "NETFLIX COMBO - Netflix Premium, TV 4K và loa Bose",
];

const highlights = [
  {
    title: "Không gian riêng tư",
    description:
      "Thiết kế dành cho cặp đôi, tinh tế và kín đáo, phù hợp cho một đêm nghỉ trọn cảm xúc.",
  },
  {
    title: "Màu sắc quyến rũ",
    description:
      "Ngôn ngữ thị giác lấy cảm hứng từ tông hồng neon, đen sang trọng và ánh kim champagne.",
  },
  {
    title: "Trải nghiệm cao cấp",
    description:
      "Từ Jacuzzi, Dyson đến hệ giải trí 4K đều được chọn để tăng cảm giác thư giãn và khác biệt.",
  },
];

const contactActions = [
  {
    label: "Chỉ đường",
    href: "https://maps.app.goo.gl/tYAh6rUY2Q9P4nwP7",
    tone: "primary",
  },
  {
    label: "Fanpage",
    href: "https://www.facebook.com/6SensesHotel",
    tone: "secondary",
  },
  {
    label: "Zalo 03773.23.247",
    href: "https://zalo.me/0377323247",
    tone: "secondary",
  },
];

export const metadata = {
  title: "6 Senses Hotel - Khách sạn tình yêu Hà Nội",
  description:
    "Landing page chiến dịch cho 6 Senses Hotel với ưu đãi đặt phòng sớm và các trải nghiệm dành cho cặp đôi.",
};

export default function Home() {
  return (
    <div className="relative overflow-hidden bg-[#14070d] text-[#fff7f7]">
      <div className="pointer-events-none absolute inset-x-0 top-0 h-[36rem] bg-[radial-gradient(circle_at_top,rgba(252,106,172,0.32),transparent_55%)]" />
      <div className="pointer-events-none absolute inset-x-0 top-64 h-[28rem] bg-[radial-gradient(circle_at_center,rgba(255,214,224,0.18),transparent_62%)]" />

      <section className="relative mx-auto flex max-w-6xl flex-col gap-8 px-4 pb-16 pt-28 sm:px-6 md:pb-24 md:pt-32">
        <div
          className="inline-flex w-fit items-center rounded-full border border-[#f3b6ca]/30 bg-white/5 px-4 py-2 text-xs uppercase tracking-[0.28em] text-[#f8cad8]"
          data-aos="fade-up"
        >
          6 Senses Hotel • Khách sạn tình yêu Hà Nội
        </div>

        <div className="grid items-end gap-8 lg:grid-cols-[1.15fr_0.85fr]">
          <div>
            <p
              className="mb-4 text-sm uppercase tracking-[0.32em] text-[#f4bccf]"
              data-aos="fade-up"
              data-aos-delay={100}
            >
              Love hotel campaign
            </p>
            <h1
              className="max-w-4xl font-display text-5xl leading-[0.95] text-white sm:text-6xl md:text-7xl"
              data-aos="fade-up"
              data-aos-delay={150}
            >
              Không gian riêng tư, cảm xúc trọn vẹn cho hai người.
            </h1>
            <p
              className="mt-5 max-w-2xl text-base leading-7 text-[#f7dde5] sm:text-lg"
              data-aos="fade-up"
              data-aos-delay={250}
            >
              Ưu đãi đặt phòng sớm cùng chuỗi trải nghiệm miễn phí và cao cấp,
              được thiết kế để biến một đêm nghỉ thành kỷ niệm đáng nhớ tại 6
              Senses Hotel.
            </p>

            <div
              className="mt-8 flex flex-col gap-3 sm:flex-row"
              data-aos="fade-up"
              data-aos-delay={350}
            >
              <a
                href="https://zalo.me/0377323247"
                target="_blank"
                rel="noreferrer"
                className="inline-flex min-h-12 items-center justify-center rounded-full bg-[linear-gradient(135deg,#f35f99,#ffc7d8)] px-6 py-3 text-sm font-semibold text-[#2c0917] shadow-[0_20px_60px_rgba(243,95,153,0.35)] transition hover:scale-[1.02]"
              >
                Đặt phòng qua Zalo
              </a>
              <a
                href="#uu-dai"
                className="inline-flex min-h-12 items-center justify-center rounded-full border border-white/15 bg-white/6 px-6 py-3 text-sm font-semibold text-white transition hover:bg-white/10"
              >
                Xem ưu đãi hiện có
              </a>
            </div>
          </div>

          <div data-aos="zoom-in" data-aos-delay={200}>
            <div className="relative overflow-hidden rounded-[2rem] border border-[#f4b1c8]/25 bg-[linear-gradient(180deg,rgba(255,255,255,0.12),rgba(255,255,255,0.04))] p-6 shadow-[0_30px_80px_rgba(0,0,0,0.45)] backdrop-blur-sm">
              <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_right,rgba(255,144,188,0.28),transparent_38%)]" />
              <div className="relative">
                <p className="text-xs uppercase tracking-[0.28em] text-[#f5c5d4]">
                  Ưu đãi nổi bật
                </p>
                <div className="mt-5 rounded-[1.5rem] border border-white/10 bg-[#1f0b13]/80 p-5">
                  <p className="text-sm text-[#f4d1db]">Đặt phòng trước</p>
                  <p className="mt-2 font-display text-5xl text-[#ffd7e4]">
                    -20%
                  </p>
                  <p className="mt-3 text-sm leading-6 text-[#f6e6eb]">
                    Áp dụng cho khách đặt sớm, phù hợp để chốt lịch hẹn riêng tư
                    mà vẫn tối ưu chi phí.
                  </p>
                </div>

                <div className="mt-4 grid grid-cols-2 gap-3 text-sm text-[#fff3f6]">
                  <div className="rounded-[1.25rem] border border-white/10 bg-white/6 p-4">
                    Jacuzzi nhiều màu
                  </div>
                  <div className="rounded-[1.25rem] border border-white/10 bg-white/6 p-4">
                    Netflix Premium 4K
                  </div>
                  <div className="rounded-[1.25rem] border border-white/10 bg-white/6 p-4">
                    Dyson 5 đầu sấy
                  </div>
                  <div className="rounded-[1.25rem] border border-white/10 bg-white/6 p-4">
                    Mỹ phẩm & cosplay
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section
        id="uu-dai"
        className="relative mx-auto max-w-6xl px-4 pb-10 sm:px-6 md:pb-14"
      >
        <div className="rounded-[2rem] border border-[#f3b6ca]/20 bg-[#1a0b12]/80 p-6 shadow-[0_24px_80px_rgba(0,0,0,0.28)] backdrop-blur-sm md:p-8">
          <div className="max-w-2xl">
            <p className="text-sm uppercase tracking-[0.3em] text-[#f3bed0]">
              Nội dung chính
            </p>
            <h2 className="mt-3 font-display text-3xl text-white sm:text-4xl">
              Những lý do khách hàng dễ bấm đặt phòng ngay trên mobile.
            </h2>
          </div>

          <div className="mt-8 grid gap-4 md:grid-cols-2">
            {offerItems.map((item, index) => (
              <div
                key={item}
                className="rounded-[1.5rem] border border-white/10 bg-[linear-gradient(180deg,rgba(255,255,255,0.08),rgba(255,255,255,0.03))] p-5"
                data-aos="fade-up"
                data-aos-delay={index * 60}
              >
                <div className="mb-3 h-2 w-12 rounded-full bg-[linear-gradient(90deg,#f4689d,#ffd7e3)]" />
                <p className="text-base leading-7 text-[#fff6f8]">{item}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section
        id="tien-ich"
        className="mx-auto grid max-w-6xl gap-6 px-4 pb-10 sm:px-6 md:grid-cols-3 md:pb-14"
      >
        {highlights.map((item, index) => (
          <article
            key={item.title}
            className="rounded-[1.75rem] border border-white/10 bg-white/5 p-6"
            data-aos="fade-up"
            data-aos-delay={index * 80}
          >
            <p className="text-sm uppercase tracking-[0.28em] text-[#efb2c4]">
              0{index + 1}
            </p>
            <h3 className="mt-4 font-display text-2xl text-white">
              {item.title}
            </h3>
            <p className="mt-3 text-sm leading-7 text-[#f5dde4]">
              {item.description}
            </p>
          </article>
        ))}
      </section>

      <section
        id="lien-he"
        className="mx-auto max-w-6xl px-4 pb-28 sm:px-6 md:pb-24"
      >
        <div className="overflow-hidden rounded-[2rem] border border-[#f3b6ca]/20 bg-[linear-gradient(135deg,rgba(244,98,157,0.18),rgba(255,255,255,0.04))] p-6 md:p-8">
          <div className="grid gap-8 lg:grid-cols-[0.95fr_1.05fr] lg:items-end">
            <div>
              <p className="text-sm uppercase tracking-[0.3em] text-[#f5c1d1]">
                Liên hệ nhanh
              </p>
              <h2 className="mt-3 font-display text-3xl text-white sm:text-4xl">
                Đặt lịch nhanh, đi đường dễ, nhắn tin ngay trên điện thoại
              </h2>
            </div>

            <div className="grid gap-3 sm:grid-cols-3">
              {contactActions.map((action) => (
                <a
                  key={action.label}
                  href={action.href}
                  target="_blank"
                  rel="noreferrer"
                  className={`inline-flex min-h-14 items-center justify-center rounded-full px-5 py-3 text-center text-sm font-semibold transition hover:scale-[1.02] ${
                    action.tone === "primary"
                      ? "bg-[#fff1f5] text-[#3d1222]"
                      : "border border-white/15 bg-white/8 text-white"
                  }`}
                >
                  {action.label}
                </a>
              ))}
            </div>
          </div>
        </div>
      </section>

      <div className="fixed inset-x-0 bottom-0 z-40 border-t border-white/10 bg-[#14070d]/90 px-3 py-3 backdrop-blur-md md:hidden">
        <div className="mx-auto grid max-w-6xl grid-cols-3 gap-2">
          {contactActions.map((action) => (
            <a
              key={action.label}
              href={action.href}
              target="_blank"
              rel="noreferrer"
              className={`inline-flex min-h-12 items-center justify-center rounded-2xl px-3 text-center text-xs font-semibold ${
                action.tone === "primary"
                  ? "bg-[linear-gradient(135deg,#f4679c,#ffc5d6)] text-[#390f1f]"
                  : "border border-white/10 bg-white/6 text-white"
              }`}
            >
              {action.label}
            </a>
          ))}
        </div>
      </div>
    </div>
  );
}
