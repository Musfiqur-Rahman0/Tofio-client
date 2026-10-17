import { Assignment } from "@/types/assignments"
import { StatusBadge } from "./StatusBadge"

interface AssignmentRowProps {
  item: Assignment
}

export function AssignmentRow({ item }: AssignmentRowProps) {
  return (
    <tr className="border-b border-slate-100 last:border-0">
      <td className="py-3 pr-3 text-[10px] font-medium text-slate-900">
        {item.title}
      </td>

      <td className="py-3 pr-3 text-[10px] text-slate-500">{item.course}</td>

      <td className="py-3 pr-3 text-[10px] text-slate-500">{item.dueDate}</td>

      <td className="py-3">
        <StatusBadge status={item.status} />
      </td>
    </tr>
  )
}
