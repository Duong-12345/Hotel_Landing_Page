import Image from "next/image";

const offerItems = [
  "FREE - Sử dụng quầy mỹ phẩm số 1 Nhật Bản",
  'FREE - Mượn đồ cosplay, "dụng cụ vui vẻ"',
  "FREE - Board game tăng hưng phấn, cảm xúc",
  "Trải nghiệm máy sấy DYSON cao cấp set 5 đầu sấy",
  "JACUZZI - Bồn tắm sục nhiều màu, bath bomb tạo bọt",
  "NETFLIX COMBO - Netflix Premium, TV 4K và loa Bose",
];

const highlights = [
  {
    title: "Check in giấu mặt",
    description:
      "Lễ tân có rèm che mặt, bảo đảm tuyệt đối thông tin cá nhân của khách hàng",
  },
  {
    title: "Vệ sinh tiêu chuẩn Nhật Bản",
    description:
      "Từng vị trí tại 6 senses được vệ sinh tiêu chuẩn cao, đặc biệt mùi thơm tự nhiên được duy trì nhằm nâng cao trải nghiệm dịch vụTừng vị trí tại 6 senses được vệ sinh tiêu chuẩn cao, đặc biệt mùi thơm tự nhiên được duy trì nhằm nâng cao trải nghiệm dịch vụ",
  },
  {
    title: "Dịch vụ chu đáo",
    description:
      "Lễ tân phục vụ 24/24h, hỗ trợ khách hàng mọi lúc",
  },
];

const contactActions = [
  {
    label: "Chỉ đường",
    href: "https://maps.app.goo.gl/tYAh6rUY2Q9P4nwP7",
    tone: "primary",
    icon: "map",
  },
  {
    label: "Fanpage",
    href: "https://www.facebook.com/6SensesHotel",
    tone: "secondary",
    icon: "facebook",
  },
  {
    label: "Zalo 03773.23.247",
    href: "https://zalo.me/0377323247",
    tone: "secondary",
    icon: "phone",
  },
];

const roomShowcases = [
  {
    vip: "VIP I",
    name: "PINK WAVE",
    accent: "#f02ac5",
    features: ["Dyson", "GƯƠNG TRẦN", "Netflix", "35M2", "CITY VIEW", "SAUNA"],
    prices: [
      { label: "2 GIỜ", value: "700.000" },
      { label: "1 ĐÊM", value: "1.400.000" },
      { label: "1 NGÀY", value: "1.750.000" },
    ],
    images: [
      "/images/hotel/VIP1/img1.jpg",
      "/images/hotel/VIP1/img2.jpg",
      "/images/hotel/VIP1/img3.jpg",
    ],
    layout: "vip1",
  },
  {
    vip: "VIP II",
    name: "BLACK CAGE",
    accent: "#56e4ea",
    features: ["Dyson", "GƯƠNG TRẦN", "Netflix", "35M2", "CITY VIEW"],
    prices: [
      { label: "2 GIỜ", value: "650.000" },
      { label: "1 ĐÊM", value: "1.300.000" },
      { label: "1 NGÀY", value: "1.625.000" },
    ],
    images: [
      "/images/hotel/VIP2/img1.jpg",
      "/images/hotel/VIP2/img2.jpg",
      "/images/hotel/VIP2/img3.jpg",
    ],
    layout: "default",
  },
  {
    vip: "VIP III",
    name: "RED ALERT",
    accent: "#ff3131",
    features: ["Dyson", "GƯƠNG TRẦN", "Netflix", "30M2"],
    prices: [
      { label: "2 GIỜ", value: "600.000" },
      { label: "1 ĐÊM", value: "1.200.000" },
      { label: "1 NGÀY", value: "1.500.000" },
    ],
    images: [
      "/images/hotel/VIP3/img1.jpg",
      "/images/hotel/VIP3/img2.jpg",
      "/images/hotel/VIP3/img3.jpg",
    ],
    layout: "default",
  },
  {
    vip: "VIP IV",
    name: "ROYAL CINEMA",
    accent: "#d8c09b",
    features: ["Dyson", "GƯƠNG TRẦN", "Netflix", "30M2"],
    prices: [
      { label: "2 GIỜ", value: "550.000" },
      { label: "1 ĐÊM", value: "1.100.000" },
      { label: "1 NGÀY", value: "1.375.000" },
    ],
    images: [
      "/images/hotel/VIP4/img1.jpg",
      "/images/hotel/VIP4/img2.jpg",
      "/images/hotel/VIP4/img3.jpg",
    ],
    layout: "default",
  },
];

function Icon({
  name,
  className = "h-5 w-5",
}: {
  name: string;
  className?: string;
}) {
  const base = {
    fill: "none",
    stroke: "currentColor",
    strokeWidth: 1.8,
    strokeLinecap: "round" as const,
    strokeLinejoin: "round" as const,
    viewBox: "0 0 24 24",
    className,
    "aria-hidden": true,
  };

  switch (name) {
    case "map":
      return (
        <svg {...base}>
          <path d="M12 21s6-5.4 6-11a6 6 0 1 0-12 0c0 5.6 6 11 6 11Z" />
          <circle cx="12" cy="10" r="2.3" />
        </svg>
      );
    case "facebook":
      return (
        <svg {...base}>
          <path d="M14.5 8H16V5.5h-2c-2.3 0-3.5 1.3-3.5 3.7V11H8.5v2.7h2V19h2.8v-5.3h2.3L16 11h-2.7V9.6c0-1 .3-1.6 1.2-1.6Z" />
        </svg>
      );
    case "phone":
      return (
        <svg {...base}>
          <path d="M8.2 4.5h2.5l1.2 3.1-1.5 1.2a14.7 14.7 0 0 0 4.8 4.8l1.2-1.5 3.1 1.2v2.5c0 .8-.7 1.5-1.5 1.5A13.5 13.5 0 0 1 6.7 6c0-.8.7-1.5 1.5-1.5Z" />
        </svg>
      );
    case "sale":
      return (
        <svg {...base}>
          <path d="m10.5 13.5 3-3" />
          <circle cx="9" cy="9" r="1.2" />
          <circle cx="15" cy="15" r="1.2" />
          <path d="M4 12 12 4l8 8-8 8-8-8Z" />
        </svg>
      );
    case "sparkle":
      return (
        <svg {...base}>
          <path d="m12 3 1.3 3.7L17 8l-3.7 1.3L12 13l-1.3-3.7L7 8l3.7-1.3L12 3Z" />
          <path d="m18.5 14 0.8 2.2 2.2 0.8-2.2 0.8-0.8 2.2-0.8-2.2-2.2-0.8 2.2-0.8 0.8-2.2Z" />
          <path d="m5.5 14.5 0.6 1.5 1.5 0.6-1.5 0.6-0.6 1.5-0.6-1.5-1.5-0.6 1.5-0.6 0.6-1.5Z" />
        </svg>
      );
    case "mask":
      return (
        <svg {...base}>
          <path d="M5 8c2.6-1.3 4.6-2 7-2s4.4.7 7 2v2c0 4.2-2.8 7-7 7s-7-2.8-7-7V8Z" />
          <path d="M8.5 11.5c.9-.8 1.6-1.1 2.5-1.1s1.6.3 2.5 1.1" />
          <path d="M7.5 10.7h1M15.5 10.7h1" />
        </svg>
      );
    case "cards":
      return (
        <svg {...base}>
          <path d="M8 5h9a2 2 0 0 1 2 2v9" />
          <rect x="5" y="8" width="11" height="11" rx="2" />
          <path d="m8.4 11.4 4.2 4.2M12.6 11.4l-4.2 4.2" />
        </svg>
      );
    case "dryer":
      return (
        <svg {...base}>
          <path d="M6 10.5h7.5a3.5 3.5 0 0 0 0-7H9.2" />
          <path d="M6 10.5v3.2a2.8 2.8 0 0 0 2.8 2.8H10" />
          <path d="M13.5 7h4.5" />
          <path d="M16 10.5v4.5" />
        </svg>
      );
    case "bath":
      return (
        <svg {...base}>
          <path d="M5 12h14v2.5A3.5 3.5 0 0 1 15.5 18h-7A3.5 3.5 0 0 1 5 14.5V12Z" />
          <path d="M8 12V9a2 2 0 0 1 4 0v1" />
          <path d="M7 20v-2M17 20v-2M6.5 8.5h.01M15 6.5h.01M18 8h.01" />
        </svg>
      );
    case "play":
      return (
        <svg {...base}>
          <rect x="4" y="6" width="16" height="12" rx="2.5" />
          <path d="m11 10 4 2-4 2v-4Z" />
        </svg>
      );
    case "arrow":
      return (
        <svg {...base}>
          <path d="M5 12h14" />
          <path d="m13 6 6 6-6 6" />
        </svg>
      );
    default:
      return null;
  }
}

export const metadata = {
  title: "6 Senses Hotel - Khách sạn tình yêu Hà Nội",
  description:
    "Landing page chiến dịch cho 6 Senses Hotel với ưu đãi đặt phòng sớm và các trải nghiệm dành cho cặp đôi.",
};

export default function Home() {
  const featuredOffer = offerItems[0];
  const secondaryOffers = offerItems.slice(1);

  return (
    <div className="relative overflow-hidden bg-[#080507] text-[#fff7f7]">
      <div className="pointer-events-none absolute inset-x-0 top-72 h-[32rem] bg-[radial-gradient(circle_at_center,rgba(255,180,205,0.12),transparent_65%)]" />

      <section className="relative mx-auto flex max-w-6xl flex-col gap-8 px-4 pb-16 pt-28 sm:px-6 md:pb-24 md:pt-32">
        <div
          className="inline-flex w-fit items-center rounded-full border border-[#f3b6ca]/20 bg-white/[0.04] px-9 py-2 text-xs uppercase tracking-[0.28em] text-[#f8cad8]"
          data-aos="fade-up"
        >
          6 SENSES HOTEL - KHÁCH SẠN TÌNH YÊU TIÊU CHUẨN NHẬT BẢN ĐẦU TIÊN TẠI HÀ NỘI
          <br />
          Địa chỉ: 23 phố Học Phi, p. Yên Hòa, Cầu Giấy, Hà Nội
        </div>

        <div
          className="overflow-hidden rounded-[2rem] bg-black px-4 py-5 sm:px-5 sm:py-6"
          data-aos="fade-up"
          data-aos-delay={120}
        >
          <div className="mb-4 text-center sm:mb-5">
            <p className="font-display text-4xl uppercase tracking-[0.18em] text-[#f3559a] sm:text-5xl">
              Room Tour
            </p>
          </div>

          <div className="space-y-4 sm:space-y-5">
            {roomShowcases.map((room, index) => (
              <div
                key={room.vip}
                className="border p-1.5 sm:p-2"
                style={{ borderColor: room.accent }}
                data-aos="fade-up"
                data-aos-delay={160 + index * 70}
              >
                <div className="bg-black">
                  <div className="flex">
                    <div
                      className="border px-3 py-2 sm:px-4 sm:py-3"
                      style={{ borderColor: room.accent, color: room.accent }}
                    >
                      <p className="font-display text-[1.7rem] leading-none sm:text-[2.4rem]">
                        {room.vip}
                      </p>
                      <p className="mt-1 font-display text-[1.7rem] leading-none sm:text-[2.4rem]">
                        {room.name}
                      </p>
                    </div>
                    <div
                      className="min-h-full flex-1 border border-l-0"
                      style={{ borderColor: room.accent }}
                    />
                  </div>

                  <div
                    className="mt-1 grid gap-[1px] bg-black"
                    style={{
                      color: room.accent,
                      gridTemplateColumns: `repeat(${room.features.length}, minmax(0, 1fr))`,
                    }}
                  >
                    {room.features.map((feature) => (
                      <div
                        key={feature}
                        className="flex min-h-14 items-center justify-center border bg-black px-2 text-center text-[0.82rem] font-medium leading-tight sm:text-[1.05rem]"
                        style={{ borderColor: room.accent }}
                      >
                        {feature}
                      </div>
                    ))}
                  </div>

                  {/* {room.layout === "vip1" ? (
                    <div
                      className="mt-1 grid h-[14rem] gap-[1px] bg-black sm:h-[24rem]"
                      style={{ gridTemplateColumns: "1fr 1fr 0.62fr" }}
                    >
                      <div
                        className="overflow-hidden border"
                        style={{ borderColor: room.accent }}
                      >
                        <Image
                          src={room.images[0]}
                          alt={`${room.name} image 1`}
                          width={1200}
                          height={1600}
                          className="h-full w-full object-cover"
                          priority={index === 0}
                        />
                      </div>
                      <div
                        className="overflow-hidden border"
                        style={{ borderColor: room.accent }}
                      >
                        <Image
                          src={room.images[1]}
                          alt={`${room.name} image 2`}
                          width={1200}
                          height={1600}
                          className="h-full w-full object-cover"
                        />
                      </div>
                      <div className="grid gap-[1px]" style={{ gridTemplateRows: "2.2rem 1fr" }}>
                        <div
                          className="flex items-center justify-center border bg-black text-[0.9rem] font-medium sm:text-[1.15rem]"
                          style={{ borderColor: room.accent, color: room.accent }}
                        >
                          SAUNA
                        </div>
                        <div
                          className="overflow-hidden border"
                          style={{ borderColor: room.accent }}
                        >
                          <Image
                            src={room.images[2]}
                            alt={`${room.name} image 3`}
                            width={1200}
                            height={1600}
                            className="h-full w-full object-cover"
                          />
                        </div>
                      </div>
                    </div>
                  ) : (
                    <div
                      className="mt-1 grid h-[14rem] grid-cols-3 gap-[1px] bg-black sm:h-[24rem]"
                    >
                      {room.images.map((src, imageIndex) => (
                        <div
                          key={src}
                          className="overflow-hidden border"
                          style={{ borderColor: room.accent }}
                        >
                          <Image
                            src={src}
                            alt={`${room.name} image ${imageIndex + 1}`}
                            width={1200}
                            height={1600}
                            className="h-full w-full object-cover"
                            priority={index === 0 && imageIndex === 0}
                          />
                        </div>
                      ))}
                    </div>
                  )} */}

                  <div
                      className="mt-1 grid h-[14rem] grid-cols-3 gap-[1px] bg-black sm:h-[24rem]"
                    >
                      {room.images.map((src, imageIndex) => (
                        <div
                          key={src}
                          className="overflow-hidden border"
                          style={{ borderColor: room.accent }}
                        >
                          <Image
                            src={src}
                            alt={`${room.name} image ${imageIndex + 1}`}
                            width={1200}
                            height={1600}
                            className="h-full w-full object-cover"
                            priority={index === 0 && imageIndex === 0}
                          />
                        </div>
                      ))}
                    </div>

                  <div className="mt-1 grid grid-cols-3 gap-[1px] bg-black">
                    {room.prices.map((price) => (
                      <div
                        key={price.label}
                        className="border px-1.5 py-2 text-center sm:px-3 sm:py-3"
                        style={{ borderColor: room.accent, color: room.accent }}
                      >
                        <p className="text-[0.82rem] sm:text-[1.05rem]">
                          {price.label}
                        </p>
                        <p className="mt-1 break-words text-[1.2rem] font-semibold leading-none tracking-[-0.03em] sm:text-[1.8rem]">
                          {price.value}
                        </p>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        <div className="grid items-start gap-8 lg:grid-cols-[0.92fr_1.08fr] lg:gap-10">
          <div className="lg:pt-2">
            <div
              className="flex flex-col gap-3 sm:flex-row"
              data-aos="fade-up"
              data-aos-delay={320}
            >
              <a
                href="https://zalo.me/0377323247"
                target="_blank"
                rel="noreferrer"
                className="inline-flex min-h-12 items-center justify-center gap-2 rounded-full bg-[linear-gradient(135deg,#f35f99,#ffc7d8)] px-6 py-3 text-sm font-semibold text-[#2c0917] shadow-[0_20px_60px_rgba(243,95,153,0.25)] transition hover:scale-[1.02]"
              >
                <Icon name="phone" className="h-5 w-5" />
                Đặt phòng qua Zalo
              </a>
              <a
                href="#uu-dai"
                className="inline-flex min-h-12 items-center justify-center gap-2 rounded-full border border-white/12 bg-white/[0.05] px-6 py-3 text-sm font-semibold text-white transition hover:bg-white/[0.09]"
              >
                <Icon name="arrow" className="h-4 w-4" />
                Xem ưu đãi hiện có
              </a>
            </div>

            <div
              className="mt-8 rounded-[2rem] border border-[#f29cbc]/20 bg-[linear-gradient(180deg,rgba(255,255,255,0.06),rgba(255,255,255,0.02))] p-5 shadow-[0_30px_80px_rgba(0,0,0,0.35)] lg:mr-6"
              data-aos="fade-up"
              data-aos-delay={420}
            >
              <div className="flex items-start gap-4">
                {/* <div className="flex h-14 w-14 shrink-0 items-center justify-center rounded-2xl bg-[linear-gradient(135deg,#f35f99,#ffc7d8)] text-[#32101d]">
                  <Icon name="sale" className="h-7 w-7" />
                </div> */}
                <div>
                  <p className="text-xs uppercase tracking-[0.3em] text-[#f4bfd0]">
                    Ưu đãi nổi bật
                  </p>
                  <div className="mt-2 flex items-end gap-3">
                    <span className="font-display text-6xl leading-none text-[#ffdbe6]">
                      -20%
                    </span>
                    <span className="pb-2 text-sm text-[#f6e0e7]">
                      cho khách đặt phòng trước
                    </span>
                  </div>
                  <p className="mt-3 text-sm leading-7 text-[#f0dbe3]">
                    Chốt lịch sớm để giữ phòng đẹp, chi phí tốt hơn và thuận
                    tiện chuẩn bị cho buổi hẹn riêng tư.
                  </p>
                </div>
              </div>
            </div>
          </div>

          <div data-aos="zoom-in" data-aos-delay={180} className="lg:pt-2">
            <div className="relative overflow-hidden rounded-[2.2rem] border border-white/10 bg-black shadow-[0_38px_100px_rgba(0,0,0,0.55)]">
              <div className="absolute inset-0 z-10 bg-[linear-gradient(180deg,rgba(0,0,0,0.18),rgba(0,0,0,0.7))]" />
              <div className="absolute inset-0 z-10 bg-[radial-gradient(circle_at_top,rgba(255,90,170,0.26),transparent_34%)]" />
              <Image
                src="/images/hotel/banner2.jpg"
                alt="Phòng khách sạn 6 Senses với ánh sáng neon hồng tím"
                width={1024}
                height={1024}
                className="h-[31rem] w-full object-cover object-center"
                priority
              />

              <div className="absolute inset-x-0 bottom-0 z-20 p-5 sm:p-6">
                <div className="grid gap-1 sm:grid-cols-[1.1fr_0.9fr]">
                  {/* <div className="rounded-[1.6rem] border border-white/10 bg-black/45 p-5 backdrop-blur-sm">
                    <p className="text-xs uppercase tracking-[0.28em] text-[#f5c6d6]">
                      Không gian signature
                    </p>
                    <h2 className="mt-3 font-display text-3xl text-white">
                      Phòng đậm chất cảm xúc, tối màu và sang trọng hơn.
                    </h2>
                    <p className="mt-3 text-sm leading-7 text-[#f7e6eb]">
                      Hình ảnh thật giúp phần banner có chiều sâu và hợp hơn với
                      tinh thần website 6 Senses: đen hơn, moodier và giàu cảm
                      giác riêng tư.
                    </p>
                  </div> */}

                  <div className="overflow-hidden rounded-[1.6rem] border border-white/10 bg-black/50 sm:col-start-2">
                    <div className="relative h-full min-h-48">
                      <div className="absolute inset-0 z-10 bg-[linear-gradient(180deg,rgba(0,0,0,0.2),rgba(0,0,0,0.78))]" />
                      <Image
                        src="/images/hotel/banner1.jpg"
                        alt="Khu vực phòng khách sạn 6 Senses với tông màu tối"
                        width={1024}
                        height={768}
                        className="h-full w-full object-cover"
                      />
                      <div className="absolute inset-x-0 bottom-0 z-20 p-4">
                        <p className="text-xs uppercase tracking-[0.25em] text-[#f2bfd0]">
                          Private mood
                        </p>
                        <p className="mt-2 text-sm leading-6 text-[#fff1f4]">
                          Kết hợp Jacuzzi, ánh sáng nhiều lớp và setup dành cho
                          cặp đôi.
                        </p>
                      </div>
                    </div>
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
          <div className="max-w-4xl">
            {/* <p className="text-sm uppercase tracking-[0.3em] text-[#f3bed0]">
              Nội dung chính
            </p> */}
            <h2 className="mt-3 font-display text-3xl text-white sm:text-4xl">
              Đặt phòng ngay để hưởng các dịch vụ đặc biệt từ 6 SENSES
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
            className="rounded-[1.75rem] border border-white/10 bg-white/[0.04] p-6"
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
        <div className="overflow-hidden rounded-[2rem] border border-[#f3b6ca]/20 bg-[linear-gradient(135deg,rgba(244,98,157,0.14),rgba(255,255,255,0.03))] p-6 md:p-8">
          <div className="grid gap-8 lg:grid-cols-[0.95fr_1.05fr] lg:items-end">
            <div>
              <p className="text-sm uppercase tracking-[0.3em] text-[#f5c1d1]">
                Liên hệ nhanh
              </p>
              <h2 className="mt-3 font-display text-3xl text-white sm:text-4xl">
                Liên hệ ngay để được tư vấn, chúng tôi hoạt động 24/24h
              </h2>
            </div>

            <div className="grid gap-3 sm:grid-cols-3">
              {contactActions.map((action) => (
                <a
                  key={action.label}
                  href={action.href}
                  target="_blank"
                  rel="noreferrer"
                  className={`inline-flex min-h-14 items-center justify-center gap-2 rounded-full px-5 py-3 text-center text-sm font-semibold transition hover:scale-[1.02] ${
                    action.tone === "primary"
                      ? "bg-[#fff1f5] text-[#3d1222]"
                      : "border border-white/15 bg-white/[0.06] text-white"
                  }`}
                >
                  <Icon name={action.icon} className="h-5 w-5" />
                  {action.label}
                </a>
              ))}
            </div>
          </div>
        </div>
      </section>

      <div className="fixed inset-x-0 bottom-0 z-40 border-t border-white/10 bg-[#080507]/92 px-3 py-3 backdrop-blur-md md:hidden">
        <div className="mx-auto grid max-w-6xl grid-cols-3 gap-2">
          {contactActions.map((action) => (
            <a
              key={action.label}
              href={action.href}
              target="_blank"
              rel="noreferrer"
              className={`inline-flex min-h-12 flex-col items-center justify-center rounded-2xl px-3 text-center text-[11px] font-semibold ${
                action.tone === "primary"
                  ? "bg-[linear-gradient(135deg,#f4679c,#ffc5d6)] text-[#390f1f]"
                  : "border border-white/10 bg-white/[0.06] text-white"
              }`}
            >
              <Icon name={action.icon} className="mb-1 h-4 w-4" />
              {action.label}
            </a>
          ))}
        </div>
      </div>
    </div>
  );
}
