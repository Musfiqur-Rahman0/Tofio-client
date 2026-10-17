import { DueToday } from "@/types/assignments"
import Link from "next/link"

interface DueTodayCardProps {
  item: DueToday
  href: string
}

export function DueTodayCard({ item, href }: DueTodayCardProps) {
  return (
    <section className="rounded-xl border border-slate-200 bg-white p-3">
      <span className="inline-flex rounded-md bg-orange-50 px-2 py-1 text-[8px] font-medium text-orange-600">
        DUE TODAY
      </span>

      <h3 className="mt-3 text-xs font-semibold text-slate-900">
        {item.title}
      </h3>

      <p className="mt-1 text-[9px] text-slate-500">{item.course}</p>

      <p className="mt-2 text-[10px] text-slate-700">{item.deadline}</p>

      <Link
        href={href}
        className="mt-3 flex min-h-8 items-center justify-center rounded-md bg-indigo-600 px-3 py-2 text-[10px] font-medium text-white transition-colors hover:bg-indigo-700"
      >
        Continue assignment
      </Link>
    </section>
  )
}
