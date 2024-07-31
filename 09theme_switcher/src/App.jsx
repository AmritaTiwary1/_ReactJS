import './App.css'

function App() {

  return (
    <>
     <h1 className='bg-gray-300 p-4 text-center '>Context API</h1>
   
<div className="flex flex-wrap min-h-screen items-center">
                <div className="w-full">
                    <div className="w-full max-w-sm mx-auto flex justify-end mb-4">
                     <theme></theme>   
                    </div>

                    <div className="w-full max-w-sm mx-auto">
                       <card></card>
                    </div>
                </div>
            </div>

    </>
  )
}

export default App
