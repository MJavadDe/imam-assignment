

function CardContainer({children}) {

  return (
    <section className="grid grid-cols-3 gap-10 px-44 py-28">
      {children}
    </section>
  )
}

export default CardContainer
