"use client"

import { useState } from "react"

import { AssignmentRow } from "./AssignmentRow"
import { Assignment } from "@/types/assignments"

interface AssignmentOverviewProps {
  items: Assignment[]
}

const filters = [
  "All statuses",
  "Due soon",
  "In progress",
  "Not started",
  "Submitted",
] as const

export function AssignmentOverview({ items }: AssignmentOverviewProps) {
  const [filter, setFilter] = useState<(typeof filters)[number]>("All statuses")

  const filteredItems =
    filter === "All statuses"
      ? items
      : items.filter((item) => item.status === filter)

  return (
    <section className="h-full min-w-0 rounded-xl border border-slate-200 bg-white p-4">
      <div className="flex flex-wrap items-center justify-between gap-3 border-b border-slate-100 pb-3">
        <div>
          <h2 className="text-xs font-semibold text-slate-900">
            Assignment overview
          </h2>
          <p className="mt-1 text-[9px] text-slate-500">
            Filter by course or status
          </p>
        </div>

        <select
          value={filter}
          onChange={(event) =>
            setFilter(event.target.value as (typeof filters)[number])
          }
          className="rounded-md border border-slate-200 bg-white px-2 py-2 text-[10px] text-slate-700 outline-none focus:border-violet-400"
          aria-label="Filter assignments by status"
        >
          {filters.map((status) => (
            <option key={status} value={status}>
              {status}
            </option>
          ))}
        </select>
      </div>

      <div className="overflow-x-auto">
        <table className="w-full min-w-[480px] border-collapse text-left">
          <thead>
            <tr className="border-b border-slate-100">
              <th className="py-2 text-[8px] font-semibold text-slate-500 uppercase">
                Assignment
              </th>
              <th className="py-2 text-[8px] font-semibold text-slate-500 uppercase">
                Course
              </th>
              <th className="py-2 text-[8px] font-semibold text-slate-500 uppercase">
                Due date
              </th>
              <th className="py-2 text-[8px] font-semibold text-slate-500 uppercase">
                Status
              </th>
            </tr>
          </thead>

          <tbody>
            {filteredItems.length > 0 ? (
              filteredItems.map((item) => (
                <AssignmentRow key={item.id} item={item} />
              ))
            ) : (
              <tr>
                <td
                  colSpan={4}
                  className="py-8 text-center text-xs text-slate-500"
                >
                  No assignments found.
                </td>
              </tr>
            )}
          </tbody>
        </table>
      </div>
    </section>
  )
}
