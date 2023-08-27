function PriceTag({ children}) {
  return (
    <span className="border rounded-3xl">
      {`${children} $`}
    </span>
  )
}

export default PriceTag
