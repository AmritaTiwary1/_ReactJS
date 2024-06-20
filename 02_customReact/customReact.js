/*     //VERSION 1 - [SIMPLE]
function customRender(reactElement,mainContainer){  //we are writing render function manually to understand the react innerworking
   
    const DOM_element = document.createElement(reactElement.type) //making an element of type "a" manually and then we will add(appendChild) it in mainContainer (inside root id DIV)
   
    DOM_element.innerHTML = reactElement.children  // "a tag " innerHtml is reactElement.children => children : 'click me to visit google'
   
    DOM_element.setAttribute('href' , reactElement.props.href) //"a tag " attributes are href , target
   
    DOM_element.setAttribute('target',reactElement.props.target) // Now, "a tag" looks like => <a href= 'https://google.com'  target='_blank'>click me to visit google </a>

    mainContainer.appendChild(DOM_element)  //now , appending DOM_element to the mainContainer , here mainContainer is the  <div id="root"</div>  of index.hyml
}
    */




//     VERSION 2 -- setting all the attributes using props name and their values e.g :--- DOM_element.setAttribute(href , "https://google.com")  &  DOM_element.setAttribute(target , "_blank")

function customRender(reactElement,mainContainer){  //we are writing render function manually to understand the react innerworking
   
    const DOM_element = document.createElement(reactElement.type) //making an element of type "a" manually and then we will add(appendChild) it in mainContainer (inside root id DIV)
   
    DOM_element.innerHTML = reactElement.children  // "a tag " innerHtml is reactElement.children => children : 'click me to visit google'
   
  for (const prop in reactElement.props){
    if (prop == 'children') {
        continue; //sometimes , inside prop,there is children also
    }
    DOM_element.setAttribute(prop, reactElement.props[prop])
  }

    mainContainer.appendChild(DOM_element)  //now , appending DOM_element to the mainContainer , here mainContainer is the  <div id="root"</div>  of index.hyml
}




// In react file structure , the innerworking is just like this -----
const reactElement = {
    type : 'a',
    props :{
        href: 'https://google.com',
        target: '_blank'
    },
  children : 'click me to visit google'
}


// const mainContainer = document.getElementById('root');
//or
const mainContainer = document.querySelector('#root');

//Now , rendering(adding things) in root

customRender(reactElement,mainContainer) 
/* here, we have written our own custom render but In react, there is inbuild fn root.render(...) which takes fn( <Apps><Apps/>....) and convert it into object and then render it , just like our customRender is doing
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
    <App />
);


