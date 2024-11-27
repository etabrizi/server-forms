import type { Metadata } from "next";
import "../global.scss";

export const metadata: Metadata = {
  title: "Server Forms Example",
  description: "server forms using only serverside components",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>
        <div className="container">
        {children}
        </div>
      </body>
    </html>
  );
}
