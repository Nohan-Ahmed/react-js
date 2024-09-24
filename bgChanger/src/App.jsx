import {useState} from 'react';

function App() {
  const [bg, setBg] = useState('bg-slate-700')

  return (
    <>
    <div className={`w-full h-screen ${bg}`}>
      <div className="conatiner flex flex-wrap justify-center gap-3 fixed inset-x-0 bottom-12 py-2 bg-sky-500 rounded-3xl">
        <button onClick={()=>setBg('bg-slate-700')} type="button" className='py-2 px-3 rounded-full bg-slate-700'>Default</button>
        <button onClick={()=>setBg('bg-white')} type="button" className='py-2 px-3 rounded-full bg-white'>White</button>
        <button onClick={()=>setBg('bg-black')} type="button" className='py-2 px-3 rounded-full bg-black text-white'>Black</button>
        <button onClick={()=>setBg('bg-red-600')} type="button" className='py-2 px-3 rounded-full bg-red-600'>Red</button>
        <button onClick={()=>setBg('bg-yellow-500')} type="button" className='py-2 px-3 rounded-full bg-yellow-500'>Yellow</button>
        <button onClick={()=>setBg('bg-blue-800')} type="button" className='py-2 px-3 rounded-full bg-blue-800'>Blue</button>
      </div>
    </div>
    </>
  )
}

export default App
