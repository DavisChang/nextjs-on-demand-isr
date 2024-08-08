import { GlobalState } from "@/lib/types";
import "../styles/globals.css";
import StoreProvider from "./StoreProvider";
export const metadata = {
  title: "On-Demand Incremental Static Regeneration with Next.js",
};

const initialGlobalState: GlobalState = {
  language: "zh-TW",
  country: "TW",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <StoreProvider global={initialGlobalState}>
      <html lang="en">
        <body>{children}</body>
      </html>
    </StoreProvider>
  );
}
