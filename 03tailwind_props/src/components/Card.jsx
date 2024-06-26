import React from 'react'

// i } USING PROPS KEYWORD
// ii } WITHOUT USING PROPS KEYWORD ,DIRECTLY USING IT AS VARIABLE OF FUNCTION {propsNAME}


//**************************************************************************************************************** */

/*
// i } USING PROPS KEYWORD
export default function Card(props) {
  
  //console.log(props); //props is a defined keyword in react internally , and it is in form of object [collection of items]
 
  console.log(props.myarr);  //(3) [1, 2, 3]  ---> only one times, bcoz i had written arr in one card only
 
  console.log(props.channel);  //4 Amrita === 4times amrita bcoz i had written 4 times <card channel="amrita"...
  return (
    <>
     <figure className="md:flex bg-slate-100 rounded-xl p-8 md:p-0 dark:bg-slate-80 h-100">
  <img className="w-24 h-24 md:w-48 md:h-auto md:rounded-none rounded-full mx-auto"
   src="https://images.pexels.com/photos/7319105/pexels-photo-7319105.jpeg" alt="" width="384" height="512"/>
  <div className="pt-6 md:p-8 text-center md:text-left space-y-4">
    <blockquote>
      <p className="text-lg font-medium">
        “Tailwind CSS is the only framework that I've seen scale
        on large teams. It’s easy to customize, adapts to any design,
        and the build size is tiny.”
      </p>
    </blockquote>
    <figcaption className="font-medium">
      <div className="text-sky-500 dark:text-sky-400">
        Sarah Dayan
      </div>
      <div className="text-slate-700 dark:text-slate-500">
        Staff Engineer, Algolia
      </div>
    </figcaption>
  </div>
</figure>

    </>
  )
}
*/


// ii } WITHOUT USING PROPS KEYWORD ,DIRECTLY USING IT AS VARIABLE OF FUNCTION {propsNAME}

export default function Card({channel,btnText}) {  //NOTE : using bracket --- {propsName1,propsName2...}
  
  return (
    <>
     <figure className="md:flex bg-slate-100 rounded-xl p-8 md:p-0 dark:bg-slate-80 h-100">
  <img className="w-24 h-24 md:w-48 md:h-auto md:rounded-none rounded-full mx-auto"
   src="https://images.pexels.com/photos/7319105/pexels-photo-7319105.jpeg" alt="" width="384" height="512"/>
  <div className="pt-6 md:p-8 text-center md:text-left space-y-4">
    <blockquote>
      <p className="text-lg font-medium">
        “Tailwind CSS is the only framework that I've seen scale
        on large teams. It’s easy to customize, adapts to any design,
        and the build size is tiny.”
      </p>
    </blockquote>
    <figcaption className="font-medium">
      <div className="text-sky-500 dark:text-sky-400">{channel}
      </div>
      <div className="text-slate-700 dark:text-slate-500">
         {btnText || "App.jsx didnt pass btnText as props in this card"}       {/* if no value is passed in btnText in card as props then (btnText || "this value will be taken in the place of btnText")  */}
      </div>
    </figcaption>
  </div>
</figure>

    </>
  )
}

