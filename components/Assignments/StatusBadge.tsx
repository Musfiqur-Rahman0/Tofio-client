import { AssignmentStatus } from "@/types/assignments"

interface StatusBadgeProps {
  status: AssignmentStatus
}

const statusStyles: Record<AssignmentStatus, string> = {
  "Due soon": "bg-amber-50 text-amber-700",
  "In progress": "bg-slate-100 text-slate-600",
  "Not started": "bg-slate-100 text-slate-600",
  Submitted: "bg-emerald-50 text-emerald-600",
}

export function StatusBadge({ status }: StatusBadgeProps) {
  return (
    <span
      className={`inline-flex min-w-[64px] rounded-md px-2 py-1 text-[9px] font-medium ${statusStyles[status]}`}
    >
      {status}
    </span>
  )
}
