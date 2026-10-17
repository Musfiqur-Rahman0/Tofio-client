import SidebarComponent from "@/components/shared/SidebarComponent"
import DashboardHeader from "@/components/shared/DashboardHeader"
import { SidebarProvider } from "@/components/ui/sidebar"

export default function Layout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <SidebarProvider
      style={{ "--sidebar-width": "12rem" } as React.CSSProperties}
    >
      <main className="flex min-h-svh w-full">
        <SidebarComponent />
        <div className="flex min-w-0 flex-1 flex-col">
          <DashboardHeader />
          <div className="min-w-0 flex-1 bg-primary/2 px-6 py-10">
            {children}
          </div>
        </div>
      </main>
    </SidebarProvider>
  )
}
