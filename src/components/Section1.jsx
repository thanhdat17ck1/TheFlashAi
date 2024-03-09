import React, { useEffect, useState } from 'react'
import Link from 'next/link'
import Image from 'next/image'
import logo from '../../public/images/logo/algoea-logo-black.png'
import Robot from '@/components/icon/Robot'
import { useTranslation } from 'react-i18next'

const Section1 = () => {
    const [isClient, setIsClient] = useState(false)
    const {t} = useTranslation()

    useEffect(() => {
        setIsClient(true)
    }, [])
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
              <Link href={''} className='btn btn-login'>{isClient ? t('Login') : ''}</Link>
            </div>
            <div className='mt-3'>
              <Link href={''} className='btn btn-sign'>{isClient ? t('SignUp') : ''}</Link>
            </div>
          </div>
        </div>
      </section>
    </>
  )
}

export default Section1
