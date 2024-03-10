import React from 'react'
import Link from 'next/link'
import Window from '@/components/icon/window'
import Macos from '@/components/icon/Macos'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFacebookF, faTwitter } from '@fortawesome/free-brands-svg-icons';

const Footer = () => {
  return (
    <div className='c-footer'>
      <div className="c-footer__inner l-container">
        <div className="left">
          <div className='d-flex align-item-center g-1'>
            <p>Tải MT-5</p>
            <div className='d-flex'>
              <Link target='_blink' href={'https://download.mql5.com/cdn/web/16990/mt5/fxcellc5setup.exe'}><Window /></Link>
              <Link target='_blink' href={'https://download.mql5.com/cdn/web/metaquotes.software.corp/mt5/MetaTrader5.dmg?utm_source=www.metatrader5.com&amp;utm_campaign=download.mt5.macos'}><Macos /></Link>
            </div>
          </div>
          <div className="copy-right">
            © theaiflash 2024. All rights reserved
          </div>
        </div>
        <div className="right">
          <div className='above'>
            <p>Liên hệ</p>
            <ul>
              <li><FontAwesomeIcon icon={faFacebookF} /></li>
              <li><FontAwesomeIcon icon={faTwitter} /></li>
              <li></li>
              <li></li>
            </ul>
          </div>
          <div className="below">
            <div className="download-app">
              <div className="download-app__item">
                <Link href={'#'} >
                  <div className='icon-download download-chplay'>

                  </div>
                </Link>
                
              </div>
              <div className="download-app__item">
                <Link href={'#'} >
                  <div className='icon-download download-appstore'>

                  </div>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Footer
