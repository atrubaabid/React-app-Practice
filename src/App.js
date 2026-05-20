import logo from './logo.svg';
import './App.css';
import Header from './Header';
import { blog } from './Data/blog';
import weblogo from "./images/yc1.jpg"
import { useState } from 'react';
import btnmodule from './button.module.css'
import { questions } from './Data/faqQuestion';
import Faqs from './Faqs';
import 'react-notifications/lib/notifications.css';



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

  let [menustatus, setmenustatus] = useState(false)


  let [modalstatus, setmodalstatus] = useState(false)

  let [showAns, setshowAns] = useState(questions[0].id)
  // let showNotification=()=>{
  //     NotificationManager.info('Info message');

  // }


  return (

    // we write html, css, js all here
    <div className='main'>













































      {/*REACT NOTIFICATION ye kam nhi ker raha qk insall shi nhi hua i'll check it later */}
      {/* <NotificationContainer/> */}


        
    {/* <button onClick={showNotification}>Save</button> */}




      {/*REACT NOTIFICATION END */}




<br></br>



      <Faqs></Faqs>


      {/*CREATE FAQ WITH PROPS DRILING PROJECT */}


      {/*CREATE FAQ WITH PROPS DRILING PROJECT END */}


      <br></br>


      {/*CREATE FAQ USING STATE PROJECT */}

      <div>
        <h1>FREQUENTLY ASKED QUESTIONS (FAQs)</h1>

        <div className='faqOuter'>

          {questions.map((faqitems, i) => {

          return(
              <div className='faqitems' key={i}>
              <h2 onClick={()=>setshowAns(faqitems.id)}>{faqitems.Question}</h2>

              <p className={showAns == faqitems.id ? 'activeAns': ''}>{faqitems.Answer}</p>
            </div>
          )

          })}



        </div>
      </div>




      {/*CREATE FAQ USING STATE PROJECT  END*/}



      <br></br>


      {/*CREATE LOGIN MODAL PROJECT */}

      <button className='en' onClick={() => setmodalstatus(true)}>Enquire Now</button>

      <div className={`modaloverly ${modalstatus ? 'showmodal' : ''}`}></div>


      <div className={`modaldiv ${modalstatus ? 'showmodaldiv' : ''}`}>
        <h3>Enquiry Now <span className='closebtn' onClick={() => setmodalstatus(false)}>&times;</span> </h3>
      </div>



      {/*CREATE LOGIN MODAL PROJECT END */}

      <br></br>




      {/* RESPONSIVE MENU PROJECT */}


      <button className='micon' onClick={() => setmenustatus(!menustatus)}>{menustatus ? <span>&times;</span> : <span>&#9776;</span>}</button>

      <div className={`menu ${menustatus ? 'activemenu' : ''}`}>
        <ul>
          <li>Home</li>
          <li>About</li>
          <li>Services</li>
          <li>Contact</li>
          <li>Help</li>
        </ul>
      </div>

      {/* RESPONSIVE MENU PROJECT END */}












      <br></br>

      {/* SHOW HIDE PASSWORD PROJECT */}

      <input type={showpass ? 'text' : 'password'} />
      <button className={btnmodule.error} onClick={() => setpass(!showpass)}>{showpass ? 'Hide' : 'show'}</button>

      {/* SHOW HIDE PASSWORD PROJECT END */}

      <br></br>



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
