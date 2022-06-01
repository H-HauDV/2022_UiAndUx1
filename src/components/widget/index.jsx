import React from 'react'
import "./widget.scss"
const Widget = ({children}) => {
  return (
    <div className="widget">
        <div className="general">{children}</div>
    </div>
  )
}

export default Widget