import { useEffect, useState } from "react"
import Tag from "./Tag";

function ToggleOptions({categories,setFilteredCategory }) {


  const [isActive, setisActive] = useState(false)


  const clickHandler = (e) => {
    if (e.target.textContent === "All") {
      setFilteredCategory("")
    } else {
      setFilteredCategory(e.target.textContent)
    }
  }
  
 

 
  return (
    <div className="flex justify-center gap-8 p-5">
      {categories.map((category) => (
        <span className={`border rounded-3xl p-3 cursor-pointer`} onClick={(e) => clickHandler(e)} key={category}>{category}</span>
      ))}
    </div>
  )
}

export default ToggleOptions
