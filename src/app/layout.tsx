import "./global.css";

export const metadata = {
  title: "TextMagic - Customized Content Creator",
  description:
    "TextMagic allows you to create customized content with unique font styles.",
  viewport: "width=device-width, initial-scale=1",
  charset: "utf-8",
  favicon: "/favicon.ico",
  themeColor: "#000000",
  colorScheme: "auto",
  keywords: "TextMagic, customized content, font styles, text generator",
  author: "TejasLamba2006",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
