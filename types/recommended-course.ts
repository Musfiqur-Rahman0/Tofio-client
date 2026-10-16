export type CourseLevel = "Beginner" | "Intermediate" | "Advanced"

export type RecommendationBadge = "Popular" | "New" | "Recommended"

export type RecommendationTheme = "purple" | "blue" | "green"

export interface RecommendedCourse {
  id: string
  title: string
  level: CourseLevel
  durationHours: number
  badge: RecommendationBadge
  abbreviation: string
  theme: RecommendationTheme
}
