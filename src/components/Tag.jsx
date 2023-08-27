function Tag({ children, className,onClick}) {
  return (
    <span onClick={onClick} className={`border p-2 rounded-2xl bg-slate-800 text-white ${className}`}>
      {children}
    </span>
  )
}

export default Tag
