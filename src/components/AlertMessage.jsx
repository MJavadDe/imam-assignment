function AlertMessage({ productName, className, clickHandler }) {
    return (
    <div className={`fixed bottom-10 ${className} border bg-slate-600 flex flex-col items-start p-5 gap-5 rounded-3xl`}>
      <p><span className="text-white font-bold">{productName}</span> has been added to cart</p>
      <button onClick={() => clickHandler(false)} className="bg-white rounded-3xl p-3 px-5">حذف از سبد خرید</button>
    </div>
  )
}

export default AlertMessage
