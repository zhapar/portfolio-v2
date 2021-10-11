import ArrowDownCircle from 'icons/ArrowDownCircle'

export default function Header() {
  return (
    <header className="flex flex-col container px-4 items-center">
      <div className="grid grid-cols-2 mt-16 w-full space-y-10 md:space-y-0">
        <div className="col-span-2 md:col-span-1 flex flex-col justify-center items-center md:items-start">
          <h1 className="max-w-sm">What a beautiful day for coding!</h1>
          <p className="body-lg max-w-md mt-8 text-gray-20">
            I am Zhapar, a front-end developer, and I love building
            user-friendly, simple and delightful websites with attention to
            details.
          </p>
        </div>
        <div className="col-span-2 md:col-span-1 relative">
          <img src="/icons/desktop.svg" className="object-fill w-full" />
        </div>
      </div>
      <a href="#projects">
        <ArrowDownCircle className="w-12 h-12 text-gray-20 hover:text-white cursor-pointer stroke-current transition-colors hidden md:block" />
      </a>
    </header>
  )
}
