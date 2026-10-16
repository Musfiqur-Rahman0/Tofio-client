"use client"

import { useTheme } from "next-themes"
import { RiMoonLine, RiSearchLine } from "@remixicon/react"

import { SidebarTrigger } from "@/components/ui/sidebar"

export default function DashboardHeader() {
  const { resolvedTheme, setTheme } = useTheme()

  return (
    <header className="flex h-12 shrink-0 items-center justify-between gap-3 border-b border-slate-200 bg-white px-4">
      <div className="flex min-w-0 flex-1 items-center gap-3">
        <SidebarTrigger
          aria-label="Toggle sidebar"
          className="size-7 text-slate-600"
        />
        <label className="flex h-7 w-full max-w-80 items-center gap-2 rounded-md border border-slate-200 bg-slate-50 px-2.5 text-slate-400 focus-within:border-violet-300 focus-within:ring-2 focus-within:ring-violet-100">
          <RiSearchLine aria-hidden="true" className="size-3 shrink-0" />
          <input
            type="search"
            placeholder="Search courses, lessons, resources..."
            aria-label="Search courses, lessons, and resources"
            className="min-w-0 flex-1 bg-transparent text-[10px] text-slate-700 outline-none placeholder:text-slate-400"
          />
        </label>
      </div>

      <div className="flex shrink-0 items-center gap-3">
        <button
          type="button"
          onClick={() =>
            setTheme(resolvedTheme === "dark" ? "light" : "dark")
          }
          className="inline-flex h-7 items-center gap-1.5 rounded-md border border-slate-200 bg-white px-2.5 text-[10px] font-medium text-slate-700 transition-colors hover:bg-slate-50"
          aria-label="Toggle dark mode"
        >
          <RiMoonLine aria-hidden="true" className="size-3" />
          Dark mode
        </button>
        <button
          type="button"
          aria-label="Maya Johnson's account"
          className="flex size-6 items-center justify-center rounded-full bg-violet-100 text-[8px] font-semibold text-violet-700"
        >
          MJ
        </button>
      </div>
    </header>
  )
}
