import logo from './logo.svg';
import './App.css';
import Header from './Header';
import { blog } from './Data/blog';
import weblogo from "./images/yc1.jpg"
import { useState } from 'react';
import btnmodule from './button.module.css'


function App() {

  // we write only js here

  let name = "Syeda Atruba";
  let l = [10, 20, 30, 40];
  let obj = {
    'name': "Atruba",
    'class': "Graduation",
    'uni': "IU"
  }
  let status = true;



  let Add = () => {
    setcount(count + 1)

  }

  let [count, setcount] = useState(1)





  let [pshow, setpshow] = useState(false)
  let template = '';
  if (pshow) {
    template = <> <button onClick={() => setpshow(!pshow)}>Hide</button>
      <p>WELCOME</p>
    </>
  } else {
    template = <> <button onClick={() => setpshow(!pshow)}>show</button></>
  }

  let [show, setshow] = useState(false)


  let [showpass, setpass] = useState(false)


  return (

    // we write html, css, js all here
    <div className='main'>





      

      {/* SHOW HIDE PASSWORD PROJECT */}

      <input type={showpass ? 'text' : 'password'} />
      <button className={btnmodule.error} onClick={() => setpass(!showpass)}>{showpass ? 'Hide' : 'show'}</button>

      {/* SHOW HIDE PASSWORD PROJECT END */}



      <button onClick={() => setshow(!show)}>{(show) ? "Hide" : "Show"}</button>

      {(show) ? <h1>Hello</h1> : ""}

      {template}












      {count}

      <button onClick={() => Add()}>Add Data</button>



      {l.map((v, i) => {
        return (
          <p key={i}>{v}</p>
        )
      })}

      <h1>{obj.name}</h1>
      <h1>{obj.class}</h1>
      <h1>{obj.uni}</h1>
      <h1>{10 + 90}</h1>

      {(status) ? <h1 style={{ color: "yellow", backgroundColor: "purple" }}>{name}</h1> : ""}

      <Header email="atrubaabid@gmail.com" obj={obj}>
        <h1 style={{ color: "red" }}>I'm Child of the header</h1>
      </Header>

      <Card></Card>
      <Card></Card>
      <Card></Card>
      <Card></Card>

      <img width={500} src={weblogo} /><br></br>
      <img width={500} src={weblogo} />


      {blog.map((v, i) => {
        return (

          <Productitems pitems={v} key={i} />
        )
      })}



    </div>


  );
}

export default App;

// card

function Card() {
  return (
    <h1>I'm Card</h1>
  )
}

// Products

function Productitems({ pitems }) {
  return (
    <div className='divy'>
      <div>
        <h4>{pitems.title}</h4>
        <p>{pitems.body}</p>
        <button>{pitems.id}</button>
      </div>
    </div>
  )
}
