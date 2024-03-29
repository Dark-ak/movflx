import React from 'react'
import Nav from './header/Nav'
import Content from './header/Content'


const Head = () => {
  return (
    <div className='bg-cover bg-center h-[43rem] lg:w-[full] lg:h-[50rem] ' style={{backgroundImage: `url('/banner_bg01.jpg')`}}>
        <Nav />
        <Content />
    </div>
  )
}

export default Head