import React from 'react'

const Hero = () => {
  return (
    <div className='bg-white'>
      <div className="relative isolate px-6 pt-14 lg:px-8">
        <div className="mx-auto max-w-3xl py-16">
          <div className="hidden sm:mb-8 sm:flex sm:justify-center">
          </div>
          <div className="text-center">
            <h1 className="text-balance text-5xl font-serif tracking-tight text-gray-900 sm:text-7xl">
              Kyler Baldwin
            </h1>
            <p className="mt-8 text-pretty text-lg font-serif font-medium text-gray-500 sm:text-xl/8">
              My Portfolio Website is currently under construction. Lots of cool things in the works! In the meatime, connect with me on LinkedIn:
            </p>
            <div className="flex items-center justify-center gap-x-6">
              <a
                href="https://www.linkedin.com/in/kyler-baldwin"
                className="rounded-md px-3.5 py-2.5 text-sm font-semibold text-white"
              >
                <img src="/In-Blue-26-Γö¼┬½@2x.png" alt="" className='pl-2 object-fill' />
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Hero
