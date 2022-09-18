import React from 'react'
import bgimg from '../Assets/flower.jpg'
export default function Form() {
  return (
    <section>
        <div className='register'>
            <div className='col-1'>
                <h2>Sign In</h2>

                <span>Register and enjoy the service</span>

                <form id='form' className='flex flex-col'>

                    <input type="text" placeholder='User name'/>
                    <input type="password" placeholder='Password'/>
                    <input type="password" placeholder='re-enter password'/>
                    <input type="number" placeholder='Mobile'/>

                    <button className='btn'>Sign In</button> 

                    <p className='link'>
                        <a href='#'>LogIn</a> Or <a href='#'>Feed Back</a>
                    </p>
                </form>
            </div>

            <div className='col-2'>
                <img src={bgimg} alt=""/>
            </div>
        </div>
    </section>
  )
}
