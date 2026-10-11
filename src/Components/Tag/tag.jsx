import React from 'react'

const Tag = (props) => {
    const{tagName}=props;
  return (
    <div>
      <button className="tag">{tagName}</button>
    </div>
  )
}

export default Tag;
