import {
  Sidebar,
  
} from "@/components/ui/sidebar"

import {
  RiBookOpenLine,
  RiCalendarTodoLine,
  RiCheckboxCircleLine,
  RiFileList3Line,
  RiHome4Line,
  RiMedalLine,
  RiRobot2Line,
  RiSparkling2Fill,
  RiTeamLine,
} from "@remixicon/react"


export default function SidebarComponent () {
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
              <div className="mb-1 px-1.5 text-[6px] font-semibold uppercase tracking-wide text-slate-500">
                Workspace
              </div>
              <ul className="flex flex-col gap-0.5">
                <li>
                  <button
                    type="button"
                    className="flex h-6 w-full items-center gap-2 rounded-md px-2 text-left text-[9px] text-slate-700 hover:bg-violet-50"
                  >
                    <RiHome4Line className="size-[10px] text-slate-500" />
                    Overview
                  </button>
                </li>
                <li>
                  <button
                    type="button"
                    aria-current="page"
                    className="flex h-6 w-full items-center gap-2 rounded-md bg-violet-100 px-2 text-left text-[9px] font-medium text-violet-700"
                  >
                    <RiBookOpenLine className="size-[10px] text-violet-600" />
                    My courses
                  </button>
                </li>
                <li>
                  <button
                    type="button"
                    className="flex h-6 w-full items-center gap-2 rounded-md px-2 text-left text-[9px] text-slate-700 hover:bg-violet-50"
                  >
                    <RiCheckboxCircleLine className="size-[10px] text-slate-500" />
                    Assignments
                  </button>
                </li>
                <li>
                  <button
                    type="button"
                    className="flex h-6 w-full items-center gap-2 rounded-md px-2 text-left text-[9px] text-slate-700 hover:bg-violet-50"
                  >
                    <RiRobot2Line className="size-[10px] text-slate-500" />
                    AI Tutor
                  </button>
                </li>
                <li>
                  <button
                    type="button"
                    className="flex h-6 w-full items-center gap-2 rounded-md px-2 text-left text-[9px] text-slate-700 hover:bg-violet-50"
                  >
                    <RiMedalLine className="size-[10px] text-slate-500" />
                    Achievements
                  </button>
                </li>
              </ul>

              <div className="mb-1 mt-4 px-1.5 text-[6px] font-semibold uppercase tracking-wide text-slate-500">
                Your space
              </div>
              <ul className="flex flex-col gap-0.5">
                <li>
                  <button
                    type="button"
                    className="flex h-6 w-full items-center gap-2 rounded-md px-2 text-left text-[9px] text-slate-700 hover:bg-violet-50"
                  >
                    <RiCalendarTodoLine className="size-[10px] text-slate-500" />
                    Study planner
                  </button>
                </li>
                <li>
                  <button
                    type="button"
                    className="flex h-6 w-full items-center gap-2 rounded-md px-2 text-left text-[9px] text-slate-700 hover:bg-violet-50"
                  >
                    <RiTeamLine className="size-[10px] text-slate-500" />
                    Study groups
                  </button>
                </li>
                <li>
                  <button
                    type="button"
                    className="flex h-6 w-full items-center gap-2 rounded-md px-2 text-left text-[9px] text-slate-700 hover:bg-violet-50"
                  >
                    <RiFileList3Line className="size-[10px] text-slate-500" />
                    Resources
                  </button>
                </li>
              </ul>
            </div>

            <div className="mx-3 flex h-11 shrink-0 items-center gap-1.5 border-t border-slate-200 px-1">
              <div className="flex size-5 shrink-0 items-center justify-center rounded-full bg-violet-100 text-[7px] font-semibold text-violet-700">
                MJ
              </div>
              <div className="min-w-0">
                <div className="truncate text-[8px] font-medium leading-3 text-slate-800">
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