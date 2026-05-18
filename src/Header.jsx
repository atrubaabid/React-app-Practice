import React from 'react'
import './Header.css'

export default function Header({obj, email, children}) {
    console.log(children);
    // let {obj} = props;
    // console.log(obj.name);
    // console.log(obj.class);
    // console.log(obj.uni);

    
  return (
    <div className='hdiv'>
    <h1 style={{color:"green"}}>Header {obj.class} {email} {children}</h1>
    </div>
  )
}
