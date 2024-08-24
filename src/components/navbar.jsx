import React from 'react'

function Navbar() {
  return (
    <div className='ml-20 mr-20 border-s-gray-500 fixed text-gray-800 bg-gray-200'>
    <div className='flex justify-between text-center hover:bg-gray-500'>
        <div>Gourmet au Catering</div>
        <div className='flex gap-10 justify-center hover:bg-gray-500'>
            <div>About</div>
            <div>Menu</div>
            <div>Contact</div>
        </div>
    </div>
    </div>
  )
}

export default Navbar