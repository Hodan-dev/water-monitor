import "./globals.css";
import type { ReactNode } from "react";

export const metadata = {
  title: "Somalia Water Monitoring",
  description: "SDG6 Water Point Monitoring",
};

export default function RootLayout({ children }: { children: ReactNode }) {
  return (
    <html lang="en">
      <body>
        {children}
      </body>
    </html>
  );
}
