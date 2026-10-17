import { RecentFeedback } from "@/types/assignments"

interface RecentFeedbackCardProps {
  item: RecentFeedback
}

export function RecentFeedbackCard({ item }: RecentFeedbackCardProps) {
  return (
    <section className="rounded-xl border border-slate-200 bg-white p-3">
      <h2 className="text-xs font-semibold text-slate-900">Recent feedback</h2>

      <span className="mt-3 inline-flex rounded-md bg-emerald-50 px-2 py-1 text-[8px] font-medium text-emerald-700">
        {item.status}
      </span>

      <p className="mt-2 text-[10px] font-medium text-slate-900">
        {item.title}
      </p>

      <div className="mt-2 flex items-center justify-between gap-2">
        <span className="text-[9px] text-slate-500">Score</span>

        <p className="text-base font-semibold text-emerald-600">
          {item.score} / {item.totalScore}
        </p>
      </div>

      <div className="mt-3 border-t border-slate-100 pt-3">
        <p className="text-[9px] text-slate-500">Instructor note</p>

        <p className="mt-1 text-[10px] leading-relaxed text-slate-700">
          {item.instructorNote}
        </p>
      </div>
    </section>
  )
}
