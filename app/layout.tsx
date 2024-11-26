import type { Metadata } from "next";

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
        {children}
      </body>
    </html>
  );
}
