import React from 'react'

export default function Home() {
    return (
        <div className='pb-3' style={{backgroundImage:"url('/images/moti-bg-main.jpg')",minHeight : "100vh",backgroundSize:'cover'}}>
            <div className='container'>
                <div className='text-center' style={{direction:'RTL'}}>
                    <h1 className='text-white pt-5'>מוטי אוחנה מנעולן מוסמך זמין 24/7</h1>
                    <a style={{textDecoration:'none'}} href='tel:+9720509601100' className='text-white fs-2'><span>להתקשר לחצו כאן-</span><i className="fas fa-phone">0509601100</i></a>
                </div>
                <div className='row'>
                    <div className='col-sm-4 col-md-3 p-4 text-center'>
                        <img className='img-fluid' src='/images/moti-manolan.jpeg' alt='profile-picture' style={{height:'40vh',borderRadius:'30px'}} /><br/>
                        <a href='https://wa.me/+9720509601100'><i style={{fontSize: "80px"}} className="fab fa-whatsapp text-success mt-3"></i></a><br/>
                        <span className='text-white fs-5'>זמין לשאלות גם בוואטסאפ</span><br/>
                    </div>
                    <div className='col-sm-12 col-md-6 pt-5 d-flex justify-content-center'>
                        <ul style={{direction:'RTL'}} className='text-white fs-4'>
                            <li>פריצת כל סוגי הדלתות</li>
                            <li>החלפת צילינדר ומנעולים</li>
                            <li>פריצת כל סוגי המנעולים</li> 
                            <li>כיוון דלדות מכל הסוגים</li>
                            <li>החלפת מנגנון</li> 
                            <li>חילוץ מפתחות מרכב</li>
                            <li>תיקוני חשמל ע"י חשמלאי מוסמך</li>  
                        </ul><br/>
                    </div>
                </div>
            </div>
        </div>
    )
}