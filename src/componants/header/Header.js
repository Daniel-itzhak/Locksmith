import React from 'react'
import {Link} from 'react-router-dom'

export default function Header() {
    return (
        <div className='row bg-dark'>
            <div className='col-sm-12 col-md-2 offset-md-5 text-center pt-2 pb-2'>
                <Link className='btn btn-dark fs-4' to='/about-me'>קצת עליי</Link>
            </div>
            <div className='col-sm-12 col-md-3 text-center pt-2 pb-2' style={{direction:'RTL'}}>
                <Link className='btn btn-dark fs-4' to='/discount-game'>שחקו משחק וקבלו הנחה!</Link>
            </div>
            <div className='col-sm-12 col-md-2 text-center'>
                <Link className='btn btn-dark fs-3 pt-1' to='/'><img className='img-fluid rounded-pill' src='/images/moti-logo.png' alt='' style={{height:70}} /></Link>
            </div>
        </div>
    )
}
