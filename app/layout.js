import "./globals.css";


export const metadata = {
  title: "TCMA Website",
  description: "TCMA Website",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
