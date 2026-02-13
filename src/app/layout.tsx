import "./globals.css";

export const metadata = {
  title: "AI UI Generator",
  description: "Deterministic AI UI Builder",
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
