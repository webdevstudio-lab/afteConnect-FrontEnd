import type { Metadata } from "next";
import "./globals.css";
import QueryProvider from "@/context/query-provider";
import { Toaster } from "react-hot-toast";

export const metadata: Metadata = {
  title: "AfteConnect",
  description: "Application de gestion ",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="fr">
      <body cz-shortcut-listen="true" className="font-sans">
        <QueryProvider>{children}</QueryProvider>
        <Toaster
          position="top-center"
          gutter={0}
          containerStyle={{ margin: "8px" }}
          toastOptions={{
            success: {
              duration: 3000,
              style: {
                backgroundColor: "#10b981",
                color: "white",
                fontWeight: "semi-bold",
              },
            },
            error: {
              duration: 5000,
              style: {
                backgroundColor: "#ef4444",
                color: "white",
                fontWeight: "semi-bold",
              },
            },
            style: {
              fontSize: "1rem",
              maxWidth: "500px",
              padding: "16px 24px",
            },
          }}
        />
      </body>
    </html>
  );
}
