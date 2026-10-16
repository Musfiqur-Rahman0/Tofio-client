import { Button } from "@base-ui/react"
import Link from "next/link"

interface Props {
  visibleButton: boolean
  buttonText: string
  link: string
  subtitle: string
  title: string
  description: string
}

export default function PageHeading({
  visibleButton,
  buttonText,
  link,
  subtitle,
  title,
  description,
}: Props) {
  return (
    <div className="flex w-full items-center justify-between">
      <div>
        <p className="font-semibold text-primary uppercase">{subtitle}</p>
        <h2 className="text-4xl font-semibold">{title}</h2>
        <p className="text-gray-400">{description}</p>
      </div>
      <Link
        className={`ui-button bg-primary text-white ${visibleButton ? "block" : "hidden"}`}
        href={link}
      >
        {buttonText}
      </Link>
    </div>
  )
}
