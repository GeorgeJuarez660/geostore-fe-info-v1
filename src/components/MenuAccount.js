import back from "../img/back.png";
import '../css/MenuAccount.css';



function Back() { //dichiarare sempre con la lettera maiusc
    return (
        <button><img src={back} className="back_btn" alt="back" /></button>
    );
}

function Btns(){
    return (
        <>
            <div className="relog">
                <h2>Non hai un account?</h2>
                <button className="relog_btn">REGISTRATI</button>
            </div>
            <div className="relog">
                <div className="divider"></div>
            </div>
            <div className="relog">
                <h2>Hai già un account?</h2>
                <button className="relog_btn">ACCEDI</button>
            </div>
        </>
    );
}


function MenuAccount() { //per chiamare le funzioni vengono usati i tag con il nome della function
    return (
        <div className="MenuAccount">
            <div className="MenuAccount-header">
                <div className="MenuAccount-white_window">
                    <div className="back">
                        <Back />
                    </div>
                    <div className="btns">
                        <Btns />
                    </div>
                </div>
            </div>
        </div>
    );
}


export default MenuAccount;
