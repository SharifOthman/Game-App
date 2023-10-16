import React from 'react'
import './SectionHeader.css'

const SectionHeader = (props) => {
  return (
    <div className="loader">
  <p className="text">
    {props.children}
  </p>
</div>

  )
}

export default SectionHeader