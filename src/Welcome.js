import logo from './img/geostore_sign.png';
import './Welcome.css';



function Head() { //dichiarare sempre con la lettera maiusc
    return (
        <>
            <img src={logo} className="logo" alt="logo" />
            <h2>Un programma che ti permette di simulare lo store virtuale</h2>
        </>
    );
}

function Body() { //dichiarare sempre con la lettera maiusc
    return (
        <h1>Benvenuto</h1>
    );
}

function Foot(){
    return (
        <button>ENTRA</button>
    );
}

function NavBar(){
    return (
        <>
            <button className="it"></button>
            <button className="en"></button>
            <button className="ja"></button>
        </>
    );
}


function Welcome() { //per chiamare le funzioni vengono usati i tag con il nome della function
  return (
    <div className="Welcome">
      <header className="Welcome-header">
            <div className="white_window">
                <div className="white_head">
                    <Head />
                </div>
                <div className="white_body">
                    <Body />
                </div>
                <div className="white_foot">
                    <Foot />
                </div>
            </div>
            <div className="foot_bar">
                <NavBar />
            </div>
      </header>
    </div>
  );
}


export default Welcome;
