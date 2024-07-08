import React,{useId} from 'react'   //useId is a React Hook for generating unique IDs that can be passed to accessibility attributes. ===> const id = useId()
import '../App.css'


function InputBox( 
{
label,
amount,
onAmountChange,
onCrurencyChange,
currencyOptions =[],
selectCurrency="usd",
amountDisable=false,
currencyDisable=false,
className = "",
} 

) {  // in argument box, these are props name
 
    const amountInputId = useId()

  return (
      // here we used ${} bcoz variable is written inside string , if it would not be written inside string , then we can write --- {className}
       <div className={`bg-white p-3 rounded-lg text-sm flex ${className} `}> 

          <div className="w-1/2">
              <label htmlFor={amountInputId} className="text-black/40 mb-2 inline-block">
                  {label}
              </label>
              <input
                  id={amountInputId}
                  className="outline-none w-full bg-transparent py-1.5"
                  type="number"
                  placeholder="Amount"
                  disabled={amountDisable}
                  value={amount}
              />
          </div>
          <div className="w-1/2 flex flex-wrap justify-end text-right">
              <p className="text-black/40 mb-2 w-full">Currency Type</p>
              <select
                  className="rounded-lg px-1 py-1 bg-gray-100 cursor-pointer outline-none"
                 value={selectCurrency}
                 onChange={(e)=> onCurrencyChange && onCurrencyChange((e.target.value))}
                 disabled={currencyDisable} 
              >
              {currencyOptions.map((currency)=>(
                //whenever we do looping in jsx , we SHOULD use key for each indiviual loop ,otherwise it will degrade our coding and react will give warning 
                <option key={currency} value={currency}>  
                    {currency} 
                </option>
              )

              )}    
            
              </select>
          </div>
      </div>
  );
}

export default InputBox;
