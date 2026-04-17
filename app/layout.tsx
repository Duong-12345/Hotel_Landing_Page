import "./css/style.css";

export const metadata = {
  title: "6 Senses Hotel - Khách sạn tình yêu Hà Nội",
  description: "Landing page chiến dịch cho 6 Senses Hotel tại Hà Nội.",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="vi" className="scroll-smooth">
      <body className="bg-[#14070d] font-sans tracking-tight text-white antialiased">
        <div className="flex min-h-screen flex-col overflow-hidden supports-[overflow:clip]:overflow-clip">
          {children}
        </div>
      </body>
    </html>
  );
}
