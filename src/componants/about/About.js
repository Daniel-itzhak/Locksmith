import React from 'react'

export default function About() {
    return (
        <div className='container pb-3' style={{minHeight:'85vh'}}>
            <div className='row'>
                <div className='col-sm-12 col-md-4 mt-5 text-center'>
                    <img className='img-fluid rounded-circle' src='/images/moti-profile.jpeg' alt='profile-picture' style={{height:'15vh'}} />
                </div>
                <div className='col-sm-12 col-md-8 mt-5' style={{direction:'RTL'}}>
                    <h1 className='text-center'>קצת עליי</h1><br/>
                    <span className='fs-4'>
                    אני מוטי בן 32 מאיזור ירושלים, מפקד צוות כיבוי אש ומנעולן בהכשרתי.
                    <br/>שואף תמיד לתת את השירות המקצועי האדיב והישיר ביותר.
ניסיון של שנים כלוחם אש בשטח מאפשר לי לחשוב מחוץ לקופסא,וכשמדובר בפריצת דלתות לחשוב על אפשרויות נוספות מלבד פריצה בכוח, ואם הדבר אפשרי לצמצם נזק מיותר לדלת.
השירותים שאני מציעה הם:החלפת צילינדר/מנגנון, תיקון דלת,שירותי פריצה לדלתות כניסה ופנים ועוד.
וכמובן מגיע תמיד עם חיוך ורצון לעזור
                    </span>
                </div>
            </div>
        </div>
    )
}
