import Link from "next/link"

interface Props {
  text?: string
  href: string
  className?: string
  icon: JSX.Element
}

const ButtonLinkIcon = ({href, className, icon, text}:Props) => {
  return (
    <Link href={href} className={className}>
      {text}{icon}
    </Link>
  )
}

export default ButtonLinkIcon