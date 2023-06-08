import React from 'react'




function SmallImg({data}) {
  return (
    <div className='small-img'>
     
     <img src={data.image} className = "flower-img" />
     <h1 className='name'>{data.name}</h1>
     <p >{data.price}</p>
     {data.tags.map(tag => (
        <p>{tag}</p>
     ))}

    </div>
  )
}

export default SmallImg
