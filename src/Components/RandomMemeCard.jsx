import React, { useContext, useState } from 'react'
import { AppContext } from '../Context/AppContext'

export const RandomMemeCard = () => {

  const {gif,loading, fetchRandomGif} = useContext(AppContext);

  return (
    <div className='flex gap-y-10 flex-col items-center bg-green-500 w-[50%] mt-20 mb-10 py-5 rounded-md'>
      <h2>Random Meme Generator</h2>
      {
        loading ? <p>Loading...</p> : <img src={gif} className='w-[300px] aspect-square'/>
      }
      <button onClick={fetchRandomGif} className='w-10/12 py-2 bg-yellow-300 rounded-md cursor-pointer'>Generate</button>
    </div>
  )
}
