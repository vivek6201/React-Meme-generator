import React, { useContext, useState } from 'react'
import { AppContext } from '../Context/AppContext'

export const CustomMemeCard = () => {

  const {customGif,fetchCustomGif,loading} = useContext(AppContext);

  const [tag,setTag] = useState("");

  return (
    <div className='flex flex-col gap-y-5 items-center bg-blue-500 rounded-md w-[50%] mb-10 py-6'>
      <h2>Custom {tag} Meme Generator</h2>
      {
        loading ? <p>Loading...</p> : <img src={customGif} className='w-[300px]'/>
      }
      <input 
        type="text"  
        onChange={(e) => setTag(e.target.value)}
        value={tag} 
        className='border py-2 w-8/12 rounded-md text-center'
        placeholder='search...'/>
      <button onClick={() => fetchCustomGif(tag)} className='bg-gray-300 w-10/12 py-2 rounded-md'>Generate</button>
    </div>
  )
}
