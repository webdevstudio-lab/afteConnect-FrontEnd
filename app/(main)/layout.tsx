"use client";
import { SidebarProvider, SidebarInset } from "@/components/ui/sidebar";
import Header from "./_components/Header";
// import { AuthProvider } from "@/context/auth-provider";
import { AppSidebar } from "./_components/AppSidebar";
import { AuthProvider } from "@/context/auth-provider";
export default function MainLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <AuthProvider>
      <SidebarProvider>
        <AppSidebar />
        <SidebarInset>
          <main className="w-full">
            <Header />
            {children}
          </main>
        </SidebarInset>
      </SidebarProvider>
    </AuthProvider>
  );
}
