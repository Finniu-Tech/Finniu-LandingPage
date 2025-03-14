import Link from "next/link"

interface Props {
  href: string
  className?: string
  icon: JSX.Element
}

const ButtonLinkIcon = ({href, className, icon}:Props) => {
  return (
    <Link href={href} className={className}>
      {icon}
    </Link>
  )
}

export default ButtonLinkIcon