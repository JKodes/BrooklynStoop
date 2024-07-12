export default function Wrapper({children}) {
  return (
    <div className="flex flex-col min-h-[100dvh]">{children}</div>
  )
}