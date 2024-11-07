import React from 'react'

const Hero = () => {
  return (
    <div className="px-14 lg:px-20 containter align-baseline py-36">
      <h1 className='py-4 text-5xl font-bold'>Kyler Baldwin</h1>
      <h2 className='text-2xl'>Data Engineer and Analytics Enthusiast</h2>
      <p className='py-8 text-zinc-400 max-w-xl'>My focus is on building efficient data systems and using data
        science to empower businesses with the intelligence they need to thrive in
        a data-driven world.</p>
      <div className='container flex gap-10'>
        <a href='#'>
          <img className='object-scale-down' src="In-Blue-26-Γö¼┬½@2x.png" alt="" />
        </a>
        <a href='#'>
          <img src="In-Blue-26-Γö¼┬½@2x.png" alt="" />
        </a>
      </div>
    </div>
  )
}

export default Hero
