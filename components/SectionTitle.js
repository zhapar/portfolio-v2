export default function SectionTitle({ children }) {
  return (
    <div className="flex space-x-4 justify-start items-center">
      <div className="w-16 h-[5px] bg-primary-100 rounded-full"></div>
      <h2>{children}</h2>
    </div>
  )
}
