import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import InputBox from './components/index'
import useCurrencyInfo from './hooks/useCurrencyInfo'  //we are directly accessing useCurrencyInfo file (API fetching happening here) in the App.jsx and from here, we are passing all variables as a prop to Component/InputBox.jsx

function App() {
  
  const [amount,setAmount] = useState(0)
  const [from, setFrom] = useState("usd")
  const [to, setTo] = useState("inr")
  const [convertedAmount , setConvertedAmount] = useState(0)

  const currencyInfo = useCurrencyInfo(from)   //this fn will return data => Data was one of the key in API fetched JSON, which contain the currency conversion info of one specific currency to all different type of currency ,for more info --- visit hooks/useCurrencyI fo

  const options = Object.keys(currencyInfo)

  const swap = ()=>{
   const temp = from
   setFrom(to)
   setTo(temp)
  }

  const convert = ()=>{
    setConvertedAmount(amount * currencyInfo[to])
  }


  return (
    <>
       <div
            className="w-full h-screen flex flex-wrap justify-center items-center bg-cover bg-no-repeat"
            style={{
                backgroundImage: `url('${BackgroundImage}')`, // choose any bg-img
            }} 
        >
            <div className="w-full">
                <div className="w-full max-w-md mx-auto border border-gray-60 rounded-lg p-5 backdrop-blur-sm bg-white/30">
                    <form
                        onSubmit={(e) => {
                            e.preventDefault();
                           
                        }}
                    >
                        <div className="w-full mb-1">
                            <InputBox
                                label="From"
                                
                            />
                        </div>
                        <div className="relative w-full h-0.5">
                            <button
                                type="button"
                                className="absolute left-1/2 -translate-x-1/2 -translate-y-1/2 border-2 border-white rounded-md bg-blue-600 text-white px-2 py-0.5"
                                
                            >
                                swap
                            </button>
                        </div>
                        <div className="w-full mt-1 mb-4">
                            <InputBox
                                label="To"
                                
                            />
                        </div>
                        <button type="submit" className="w-full bg-blue-600 text-white px-4 py-3 rounded-lg">
                            Convert 
                        </button>
                    </form>
                </div>
            </div>
        </div>
    
     
    </>
  )
}

export default App
