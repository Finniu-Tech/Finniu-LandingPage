import Link from "next/link"

interface Props {
  text: string
  href: string
  className?: string
}

const ButtonLink = ({text, href, className}:Props) => {
  return (
    <Link href={href} className={className}>
      {text}
    </Link>
  )
}

export default ButtonLink