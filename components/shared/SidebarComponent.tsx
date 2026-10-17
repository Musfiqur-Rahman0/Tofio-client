import { Sidebar } from "@/components/ui/sidebar"

import { RiSparkling2Fill } from "@remixicon/react"

import {
  SidebarLink,
  type SidebarLinkProps,
} from "../StudentDashboard/SidebarLink"

const yourSpaceLinks: SidebarLinkProps[] = [
  {
    href: "/student-dashboard/study-planner",
    linkText: "Study Planner",
    icon: "calendar",
  },
  {
    href: "/student-dashboard/study-groups",
    linkText: "Study Groups",
    icon: "team",
  },
  {
    href: "/student-dashboard/resources",
    linkText: "Resources",
    icon: "resources",
  },
]

const workplaceLinks: SidebarLinkProps[] = [
  {
    href: "/student-dashboard/overview",
    linkText: "Overview",
    icon: "home",
  },
  {
    href: "/student-dashboard/my-courses",
    linkText: "My Courses",
    icon: "book",
  },

  {
    href: "/student-dashboard/assignments",
    linkText: "Assignments",
    icon: "medal",
  },
  {
    href: "/student-dashboard/ai-tutor",
    linkText: "AI Tutor",
    icon: "tutor",
  },
  {
    href: "/student-dashboard/achivements",
    linkText: "Achivements",
    icon: "achievement",
  },
]

export default function SidebarComponent() {
  return (
    <Sidebar className="border-sidebar-border bg-white">
      <div className="flex h-full flex-col">
        <div className="flex h-12 shrink-0 items-center gap-1.5 px-4">
          <RiSparkling2Fill className="size-3 text-violet-600" />
          <span className="text-[10px] font-semibold tracking-tight text-slate-900">
            tofio learn
          </span>
        </div>

        <div className="flex-1 px-2">
          <div className="mb-1 px-1.5 text-[6px] font-semibold tracking-wide text-slate-500 uppercase">
            Workspace
          </div>
          <ul className="flex flex-col gap-0.5">
            {workplaceLinks.map((item, i) => (
              <li key={i}>
                <SidebarLink
                  href={item.href}
                  linkText={item.linkText}
                  icon={item.icon}
                />
              </li>
            ))}
          </ul>

          <div className="mt-4 mb-1 px-1.5 text-[6px] font-semibold tracking-wide text-slate-500 uppercase">
            Your space
          </div>
          <ul className="flex flex-col gap-0.5">
            {yourSpaceLinks.map((item, i) => (
              <li key={i}>
                <SidebarLink
                  href={item.href}
                  linkText={item.linkText}
                  icon={item.icon}
                />
              </li>
            ))}
          </ul>
        </div>

        <div className="mx-3 flex h-11 shrink-0 items-center gap-1.5 border-t border-slate-200 px-1">
          <div className="flex size-5 shrink-0 items-center justify-center rounded-full bg-violet-100 text-[7px] font-semibold text-violet-700">
            MJ
          </div>
          <div className="min-w-0">
            <div className="truncate text-[8px] leading-3 font-medium text-slate-800">
              Maya Johnson
            </div>
            <div className="text-[7px] leading-3 text-slate-500">
              Student account
            </div>
          </div>
        </div>
      </div>
    </Sidebar>
  )
}
