import logo from './logo.svg';
import './App.css';
import Header from './Header';


function App() {

  let name = "Syeda Atruba";
  let l = [10, 20, 30, 40];
  let obj = {
    'name': "Atruba",
    'class': "Graduation",
    'uni': "IU"
  }
  let status = true;


  return (

    <div className='main'>



      {l.map((v) => {
        return (
          <p>{v}</p>
        )
      })}

      <h1>{obj.name}</h1>
      <h1>{obj.class}</h1>
      <h1>{obj.uni}</h1>
      <h1>{10 + 90}</h1>

      {(status) ? <h1 style={{ color: "yellow", backgroundColor: "purple" }}>{name}</h1> : ""}

      <Header></Header>

    </div>


  );
}

export default App;
