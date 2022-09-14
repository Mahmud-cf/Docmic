import React, { useState } from 'react'
import useCollapse from 'react-collapsed'
import './Collaps.css'

function Collaps(props) {
  const [isExpanded, setExpanded] = useState(false)
  const { getCollapseProps, getToggleProps } = useCollapse({ isExpanded })

    const expand = <div className='d-flex expand'><p>{props.title} </p><p>+</p></div>
    const Collaps = <div className='d-flex expand'> <p>{props.title} </p><p>-</p> </div>


  return (
    <div>
      <div
        {...getToggleProps({
          onClick: () => setExpanded((prevExpanded) => !prevExpanded),
        })}
      >
        {isExpanded ? Collaps : expand}
      </div>
      <section {...getCollapseProps()}> <div className='expand-details' ><p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Cupiditate harum delectus, accusantium veniam ipsam numquam alias necessitatibus quaerat sunt nam.</p></div> </section>
    </div>
  )
}
export default Collaps