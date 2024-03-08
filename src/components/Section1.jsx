import React from 'react'
import Link from 'next/link'
import Image from 'next/image'
import logo from '../../public/images/logo/algoea-logo-black.png'
import Robot from '@/components/icon/Robot'

const Section1 = () => {
  return (
    <>
      <section className='mb-3'>
        <div className='section-one'>
          <div className="logo">
            <Link href={'/'}><Image alt='' src={logo} /> </Link>
            <p>AITrader - Best our product</p>
          </div>
          <div className='ai'>
            <Robot />
            <h4>AITrader</h4>
            <p>Please check the price below</p>
          </div>
          <div className='action'>
            <div>
              <Link href={''} className='btn btn-login'>Login</Link>
            </div>
            <div className='mt-3'>
              <Link href={''} className='btn btn-sign'>Sign up</Link>
            </div>
          </div>
        </div>
      </section>
    </>
  )
}

export default Section1
