import React from 'react'

const Card = () => {
  return (
    <div className='flex  mt-8 mx-20 px-6 py-6 rounded-lg bg-white/30 backdrop-blur-md border border-white/30 shadow-lg '>
        <pre className='text-white'>
     <code>
      { `const student = { 
  year: 2,
  college : "cummins college of engineering, pune",
  hobbies : ["reading", "music"],
  likes   : ["machine learning", "web development"],
  dislikes: ["slow wi-fi"],
   }; `}
   </code>
   </pre>
    </div>
  )
}

export default Card

