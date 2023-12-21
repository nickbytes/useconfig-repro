import "@radix-ui/themes/styles.css";
import "@/styles/globals.css";
import "@rainbow-me/rainbowkit/styles.css";

import type { Metadata } from "next";
import { Theme } from "@radix-ui/themes";
import { Providers } from "./providers";

export const metadata: Metadata = {
  title: "useconfig repro",
  description: "useconfig repro",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body>
        <Theme appearance="dark">
          <Providers>{children}</Providers>
        </Theme>
      </body>
    </html>
  );
}
