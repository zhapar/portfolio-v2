import { contacts } from 'features/Navigation'
import ExternalLink from 'icons/ExternalLink'

export default function Footer() {
  return (
    <div className="flex flex-col items-center py-7">
      <div className="flex">
        {contacts.map(({ Icon, link }) => (
          <a
            href={link}
            key={link}
            target="_blank"
            className="font-primary font-bold text-lg leading-xl text-gray-20 hover:text-white px-5">
            <Icon className="w-5 sm:w-auto" />
          </a>
        ))}
      </div>
      <h6 className="mt-6">© 2021 Zhapar Manas uulu</h6>
      <a
        target="_blank"
        href="https://github.com/zhapar/portfolio-v2"
        className="text-sm mt-2 underline flex items-center">
        <ExternalLink className="w-4 mr-2" />
        Code
      </a>
    </div>
  )
}
