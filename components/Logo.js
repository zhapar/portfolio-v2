import Image from 'next/image'
import cn from 'classnames'
import Link from 'next/link'

export default function Logo({ className }) {
  return (
    <Link href="/">
      <a style={{ cursor: 'pointer' }} className={cn('p-3', className)}>
        <Image width={90} height={51} src="/assets/shuttle.png" />
      </a>
    </Link>
  )
}
