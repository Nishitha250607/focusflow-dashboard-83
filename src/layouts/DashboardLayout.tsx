import { Outlet } from "@tanstack/react-router";
import { Sidebar } from "@/components/Sidebar";
import { Header } from "@/components/Header";

export function DashboardLayout() {
  return (
    <div className="min-h-screen flex w-full">
      <Sidebar />
      <main className="flex-1 min-w-0 px-4 sm:px-6 lg:px-10 py-6 lg:py-8">
        <Header />
        <Outlet />
      </main>
    </div>
  );
}