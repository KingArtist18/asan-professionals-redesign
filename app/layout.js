import "./globals.css";

export const metadata = { title: "Asan Professional Services Inc" };

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}