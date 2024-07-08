//THIS API IS NOT WORKING , BUT INSTEAD , I AM WRITING TO REVISE MY CONCEPT ON HOW TO DEAL WITH APIS AND HOW TO MAKE CUSTOM HOOK

// we are directly accessing useCurrencyInfo file (API fetching happening here)
// in the App.jsx and from there, we are passing all variables as a prop to Component/InputBox.jsx

import { useEffect,useState } from "react";

function useCurrencyInfo(currency){ 
    
    const [data,setData] = useState({}) // empty object so that it can deal with error

  useEffect(()=>{   // useEffect is used bcoz whenever the currency will change , then only again fetch api and set the new data

// BELOW, in place of currency, usd,inr will be seated automatically but in google , search for --- 
// https://cdn.jsdelivr.net/gh/fawazahmed0/currency-api@1/latest/currencies/$uds.json ====== it should give  
// json/string *********** BUT ********  IT IS GIVING ----> Failed to fetch fawazahmed0/currency-api@1 from GitHub.
 
fetch(`https://cdn.jsdelivr.net/gh/fawazahmed0/currency-api@1/latest/currencies/${currency}.json`) 

.then((res)=> res.json())     //--------------- fetch(...) gives respond and .then (which takes a callback fn) access that res , here ... it changes to json 

.then((res)=>{

/* when currency = usd , response is according to usd , when currency=inr , response is according to inr ,
IN THIS TUTORIAL , WHEN THE API IS WORKING FINE , IS IS GIVING RESPONSE LIKE ---
 { "date":"2023-08-31" ,
 "usd": {
 "00":0.15126753,
 "linch" : 0.04... ,
 .....,
 ... many more...
 "inr":82...}
*/

   setData(res[currency])   // res[currency] is related to API , here there are two keys in api -- date and currency(ie. usd/inr ..etc) , to access currency(usd,inr) key data , we wrote -- res[currency] ==> res[usd] or res[inr] or res.inr or res.usd etc
//console.log(data); ---> if this api would work , this statement will work butt right now *_*
})
}, [currency])
 return data;
}

export default useCurrencyInfo;



//Custom hook basic idea ---
//function custom_hook(){
//    return [....]
//}