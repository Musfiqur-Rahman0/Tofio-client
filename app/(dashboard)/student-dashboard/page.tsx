import OverviewCard from "@/components/shared/OverviewCard"
import PageHeading from "@/components/shared/Pageheading"
import { CourseCardComponent } from "@/components/StudentDashboard/CourseCardComponent"
import { RecommendedCourses } from "@/components/StudentDashboard/RecommendedCourses"
import { WeeklyLearningGoalCard } from "@/components/StudentDashboard/WeeklyLearningGoalCard"

import Link from "next/link"

export const courseOverview: CourseOverview[] = [
  {
    id: "enrolled",
    title: "Enrolled courses",
    value: 12,
    description: "+2 this month",
    trendColor: "primary",
  },
  {
    id: "in-progress",
    title: "In progress",
    value: "04",
    description: "2 due this week",
    trendColor: "primary",
  },
  {
    id: "completed",
    title: "Completed",
    value: "08",
    description: "Great progress",
    trendColor: "success",
  },
  {
    id: "completion",
    title: "Avg. completion",
    value: "76%",
    description: "Across all courses",
    trendColor: "primary",
  },
]

export interface CourseOverview {
  id: string
  title: string
  value: number | string
  description: string
  trend?: string
  trendColor?: "primary" | "success" | "warning" | "danger"
}

export interface CourseCard {
  id: string
  title: string
  abbreviation: string
  category: "Design" | "Development" | "AI"
  module: number
  subtitle: string
  progress: number
  theme: "purple" | "blue" | "green"
  actionLabel: string
}

export const courseCards: CourseCard[] = [
  {
    id: "ux-design",
    title: "UX Design Fundamentals",
    abbreviation: "UX",
    category: "Design",
    module: 4,
    subtitle: "User research",
    progress: 68,
    theme: "purple",
    actionLabel: "Continue learning",
  },
  {
    id: "python",
    title: "Introduction to Python",
    abbreviation: "PY",
    category: "Development",
    module: 2,
    subtitle: "Control flow",
    progress: 35,
    theme: "blue",
    actionLabel: "Continue learning",
  },
  {
    id: "ai-work",
    title: "AI & Everyday Work",
    abbreviation: "AI",
    category: "AI",
    module: 6,
    subtitle: "Prompt patterns",
    progress: 82,
    theme: "green",
    actionLabel: "Continue learning",
  },
]

export interface WeeklyLearningGoal {
  targetHours: number
  completedHours: number
  progress: number
  period: "weekly"
  nextMilestone: {
    title: string
    lessonsRemaining: number
  } | null
}

export const weeklyLearningGoal: WeeklyLearningGoal = {
  targetHours: 5,
  completedHours: 3.5,
  progress: 70,
  period: "weekly",
  nextMilestone: {
    title: "Finish 1 more lesson",
    lessonsRemaining: 1,
  },
}

interface CourseCardProps {
  course: CourseCard
  onContinue?: (courseId: string) => void
}

interface WeeklyLearningGoalCardProps {
  goal: WeeklyLearningGoal
}

export default function page() {
  return (
    <div className="space-y-8">
      <PageHeading
        buttonText="Browse course"
        link=""
        visibleButton={true}
        subtitle="STUDENT WORKSPACE"
        title="My courses"
        description="Keep your momentum going. Your next lesson is just one click away."
      />
      {/* course overview */}
      <div className="flex w-full flex-wrap gap-5">
        {courseOverview.map((item) => (
          <OverviewCard item={item} key={item.id} />
        ))}
      </div>

      {/* Learning section */}

      <div className="grid grid-cols-12 gap-5">
        <div className="col-span-9">
          <div className="mb-2 flex w-full items-center justify-between">
            <h3 className="text-xl">Continue Learning</h3>
            <Link
              href={"/"}
              className="font-semibold text-primary hover:underline"
            >
              View all courses
            </Link>
          </div>

          <div className="grid grid-cols-3 gap-5">
            {courseCards.map((course) => (
              <CourseCardComponent key={course.id} course={course} />
            ))}
          </div>
        </div>

        <div className="col-span-3 h-full w-full">
          <WeeklyLearningGoalCard goal={weeklyLearningGoal} />
        </div>
      </div>

      <RecommendedCourses />
    </div>
  )
}
