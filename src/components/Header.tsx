import React, { useState } from 'react'
import '../i18n/i18n'
import {useTranslation} from 'react-i18next'
import { locales } from '../i18n/i18n'
import flag_eng from '../../public/images/flags/english.png'
import flag_vn from '../../public/images/flags/vietnamese.png'
import Image from 'next/image'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEarthAmericas } from '@fortawesome/free-solid-svg-icons';
import Link from 'next/link'

const Header = () => {
  const {i18n} = useTranslation()
  const [isOpen, setIsOpen] = useState(false);
  const [isOpenBurger, setIsOpenBurger] = useState(false);
  const [selectedOption, setSelectedOption] = useState('Tiếng Việt');
  const currentLanguage = locales[i18n.language as keyof typeof locales]
  console.log(currentLanguage);
  
  const changeLanguage = (lng: 'en' | 'vi') => {
    if(lng == 'en') {
      setSelectedOption('Tiếng Anh')
    }
    else {
      setSelectedOption('Tiếng Việt')
    }
    i18n.changeLanguage(lng)
    setIsOpen(!isOpen);
  }
 
  const toggleOptions = () => {
    
    setIsOpen(!isOpen);
  };

  const toggleBurger  = () => {
    setIsOpenBurger(!isOpenBurger);

    if (!isOpenBurger) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'visible'; // hoặc 'auto' nếu bạn muốn phục hồi overflow mặc định
    }
  }

  return (
    <>
      <header className='c-header'>
        <div className='l-container select-language'>
          <div className={`custom-select ${isOpen ? 'open' : ''}`} id="customSelect">
          <div className="select-selected" onClick={toggleOptions}>
            <FontAwesomeIcon icon={faEarthAmericas} className='color-white' /> {selectedOption}
          </div>
            <div className="select-options">
              <div className="option" onClick={() => changeLanguage('vi')}> <Image alt='vietnamese' src={flag_vn} width={20} height={20} unoptimized /> Tiếng Việt</div>
              <div className="option" onClick={() => changeLanguage('en')}><Image alt='english' src={flag_eng} width={20} height={20} unoptimized /> Tiếng Anh</div>
            </div>
          </div>
        </div>
        <nav className={`c-header__nav ${isOpenBurger ? 'is-active' : ''}`} onClick={toggleBurger}>
            <ul>
                <li><Link href={''} className='btn btn-login'>Login</Link></li>
                <li><Link href={''} className='btn btn-sign'>Sign up</Link></li>
            </ul>
        </nav>
        <div className={`c-burger ${isOpenBurger ? 'is-active' : ''}`} onClick={toggleBurger} >
            <a>
                <span></span>
                <span></span>
                <span></span>
            </a>
        </div>
      </header>
    </>
  )
}

export default Header
