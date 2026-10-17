export type AssignmentStatus =
  "Due soon" | "In progress" | "Not started" | "Submitted"

export interface Assignment {
  id: number
  title: string
  course: string
  dueDate: string
  status: AssignmentStatus
}

export interface AssignmentStat {
  id: number
  value: string
  label: string
  accentColor: string
}

export interface DueToday {
  title: string
  course: string
  deadline: string
}

export interface RecentFeedback {
  status: string
  title: string
  score: number
  totalScore: number
  instructorNote: string
}
