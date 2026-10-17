"use client"

import {
  RiBookOpenLine,
  RiCalendarTodoLine,
  RiCheckboxCircleLine,
  RiFileList3Line,
  RiHome4Line,
  RiMedalLine,
  RiRobot2Line,
  RiTeamLine,
} from "@remixicon/react"
import Link from "next/link"
import { usePathname } from "next/navigation"

const sidebarIcons = {
  achievement: RiCheckboxCircleLine,
  book: RiBookOpenLine,
  calendar: RiCalendarTodoLine,
  home: RiHome4Line,
  medal: RiMedalLine,
  resources: RiFileList3Line,
  team: RiTeamLine,
  tutor: RiRobot2Line,
}

export interface SidebarLinkProps {
  href: string
  linkText: string
  icon: keyof typeof sidebarIcons
}

export function SidebarLink({ href, linkText, icon }: SidebarLinkProps) {
  const pathname = usePathname()
  const isActive = pathname === href
  const Icon = sidebarIcons[icon]

  return (
    <Link
      href={href}
      aria-current={isActive ? "page" : undefined}
      className={`flex h-8 w-full items-center gap-2 rounded-md px-2 text-left text-[10px] transition-colors ${
        isActive
          ? "bg-violet-100 font-semibold text-violet-700"
          : "text-slate-700 hover:bg-violet-50"
      }`}
    >
      <Icon
        className={`size-3 shrink-0 ${
          isActive ? "text-violet-700" : "text-slate-500"
        }`}
      />
      <span>{linkText}</span>
    </Link>
  )
}
