import React, { useEffect, useRef, useState } from 'react'

export default function Game() {
    const [tries, setTries] = useState(3);
    const [position, setPosition] = useState(0);
    const [message, setMessage] = useState(null);
    const [numA, setNumA] = useState(Math.floor(2+Math.random()*8));
    const [numB, setNumB] = useState(Math.floor(2+Math.random()*7)*numA);
    const [numC, setNumC] = useState((numA+numB)*(Math.floor(2+Math.random()*6)));
    const [combo, setCombo] = useState(numA +'-'+ numB +'-'+ numC);
    const numberRef = useRef(null);
    const discountDate = new Date();
    const messages = [{content:'טעות! נסו מספר גבוה יותר',theme:'danger'},{content:'טעות! נסו מספר נמוך יותר',theme:'danger'},{content:'נגמר המשחק לא הצלחתם לפרוץ את המנעול, אבל אתם יכולים לנסות שוב',theme:'danger'},{content:'יופי! , ניחשתם בול עכשיו תנסו את המספר הבא',theme:'success'},{content:`כל הכבוד! אתם אלופים בלפרוץ אבל אם בכל זאת אתם צריכים אותי אז זכיתם בהנחה של 50 ש"ח שתקפה ל24 שעות מעכשיו, כדי להשתמש בהנחה פשוט צלמו את המסך ${'('+discountDate.getUTCDate()+'-'+(discountDate.getMonth()+1)+'-'+discountDate.getUTCFullYear()+')'}`,theme:'success'}]


    function myGuess(){
        const numbers = [numA,numB,numC];
        const i = position;
        const tempTries = tries

        if (Number(numberRef.current.value) === numbers[i]){
            if(i===2){
                setMessage(messages[4]);
                setPosition(i+1)
                setTries(0)
            }
            else{
                setMessage(messages[3]);
                setPosition(i+1);
                setTries(tempTries+3);
            }
        }
        else {
            setTries(tempTries-1)
            if(tempTries>1){
                if(Number(numberRef.current.value) > numbers[i]){
                    setMessage(messages[1]);
                }
                else {
                    setMessage(messages[0])
                }
            }
            else{
                setMessage(messages[2])
            }
        }
    }

    

    return (
        <div className='container pt-5 pb-3' style={{minHeight:'90vh'}}>
            <div className='row'>
                <div className='col-12 p-3 text-center'>
                    <span className='fs-4'><b>:נחשו נכון את כל שלושת המספרים וזכו בהנחה! החוקים</b></span><br/>
                </div>
                <div className='col-sm-12 col-md-6 offset-md-3'>
                    <ol className='reverse fs-5' style={{direction: "RTL"}}>
                        <li className=''>המספר הראשן הוא בין 2 ל 9</li>
                        <li>המספר השני הוא כפולה של המספר הראשון במספר בין 2 ל 8</li>
                        <li>המספר השלישי הוא כפולה של הסכום של שני המספרים הראשונים במספר בין 2 ל7</li>
                        <li>לכל מספר ישנם שלושה ניחושים (הניחושים מצטברים)</li>
                        <li>ההנחה הינה חד פעמית ותקפה ל 24 שעות</li>
                    </ol>
                </div>
                {message && <div className={`col-12 text-center text-white p-4 rounded-3 fs-5 bg-${message.theme}`}>{message.content}</div>}
                <div className='col-sm-12 col-md-7 offset-md-2'>
                    <input className='form-control mt-3 mb-3 fs-3' type='number' ref={numberRef} placeholder='נחש מספר' style={{direction:'RTL'}} />
                </div>
                <div className='col-sm-12 col-md-2'>
                    {tries>0?<button className='btn btn-success mt-3 fs-3 w-100' onClick={()=>myGuess()}>שלח ניחוש</button>:<button className='btn btn-success mt-2 fs-3' onClick={()=>window.location.reload()} >שחקו שוב</button>}
                </div>
                <div className='col-4 border border-info text-center mt-3 p-2'>
                    {position>0 ? <span className='text-success fs-4'>{numA}</span>:<span className='text-info fs-3'>מספר ראשון</span>}
                </div>
                <div className='col-4 border border-info text-center mt-3 p-2'>
                    {position>1 ? <span className='text-success fs-4'>{numB}</span>:<span className='text-info fs-3'>מספר שני</span>}
                </div>
                <div className='col-4  border border-info text-center mt-3 p-2'>
                    {position>2 ? <span className='text-success fs-4'>{numC}</span>:<span className='text-info fs-3'>מספר שלישי</span>}
                </div>
                <div className='col-12 text-center mt-2'>
                    <span className='fs-4'>נסיונות שנשארו<b>-{tries}</b></span>
                </div>
            </div>
        </div>
    )
}
