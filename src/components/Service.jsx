"use client"

import React, { useEffect, useState } from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCube, faTrophy, faShieldAlt } from '@fortawesome/free-solid-svg-icons';
import Checkbox_cirle from './icon/Checkbox-cirle';
import Modal from 'react-modal';
import { useTranslation } from 'react-i18next';
import { URL_API } from '../libs/libs';
import axios from 'axios';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const Service = () => {
    const [isOpen, setIsOpen] = useState(false);
    const [isClient, setIsClient] = useState(false)
    const [packageName, setPackageName] = useState("")
    const [checkUsername, setCheckUsername] = useState(true);
    const [checkEmail, setCheckEmail] = useState(true);
    const [checkPhone, setCheckPhone] = useState(true);
    const [formData, setFormData] = useState({
        id: 0,
        userName: '',
        email: '',
        phoneNumber: '',
        package: '',
        dateTime: new Date()
    });

    const {t} = useTranslation()

    useEffect(() => {
        setIsClient(true)
    }, [])

     // Hàm mở modal
    const openModal = (packageType) => {
        setFormData({ ...formData, package: packageType });
        setIsOpen(true);
    };

    // Hàm đóng modal
    const closeModal = () => {
        setIsOpen(false)
        setCheckUsername(true)
        setCheckPhone(true)
        setCheckEmail(true)
    };

    const validateEmail = (email) => {
        // Biểu thức chính quy để kiểm tra địa chỉ email
        const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        return emailPattern.test(email);
    };
    
    const isValidVietnamesePhoneNumber = (phoneNumber) => {
        // Regex cho số điện thoại Việt Nam, ví dụ: +84xxxxxxxxx hoặc 0xxxxxxxxx
        const vietnamesePhoneRegex = /^(?:\+?84|0)(?:\d){9}$/;
        return vietnamesePhoneRegex.test(phoneNumber);
    };
    
    // Hàm kiểm tra số điện thoại quốc tế
    const isValidInternationalPhoneNumber = (phoneNumber) => {
        // Regex cho số điện thoại quốc tế, ví dụ: +xxxxxxxxxxx
        const internationalPhoneRegex = /^\+(?:\d){8,15}$/;
        return internationalPhoneRegex.test(phoneNumber);
    };

    //remove spaace
    const removeSapce = (string) => {
        const str_replace = string.replace(/\s/g, '');
        return str_replace;
    }

    const handleSubmit = async (e) => {
        e.preventDefault();
        console.log(packageName);
        setCheckUsername(true)
        setCheckEmail(true)
        setCheckPhone(true)
        if(formData.userName.length > 0 && validateEmail(formData.email) && formData.phoneNumber.length > 0 && 
        (isValidVietnamesePhoneNumber(removeSapce(formData.phoneNumber)) || isValidInternationalPhoneNumber((formData.phoneNumber)))) {
            try {
                const response = await axios.post(`${URL_API}/UserRequest/Post`, formData, {
                    headers: {
                        'Content-Type': 'application/json'
                    }
                });
                if (response.status === 200) {
                    // Xử lý khi gửi thành công
                    toast.success(`Đăng ký thành công`, {
                        icon: "😊",
                        position: "top-right",
                    });
                    setIsOpen(false);
                    setFormData({
                        id: 0,
                        userName: '',
                        email: '',
                        phoneNumber: '',
                        package: '',
                        dateTime: new Date()
                    });
                    console.log('Data sent successfully!');
                } else {
                    // Xử lý khi gửi thất bại
                    console.error('Failed to send data');
                }
            } catch (error) {
                console.error('Error sending data:', error);
            }
        }
        else {
            console.log(formData.userName, "ee");
            if(formData.userName.length == 0) {
                setCheckUsername(false)
            }
            if(formData.phoneNumber.length == 0) {
                setCheckPhone(false)
            }
            if(validateEmail(formData.email) == false) {
                setCheckEmail(false)
            }
            if((isValidVietnamesePhoneNumber(removeSapce(formData.phoneNumber)) || isValidInternationalPhoneNumber(removeSapce(formData.phoneNumber))) == false) {
                setCheckPhone(false)
            }
        }
    };

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData({ ...formData, [name]: value });
        setCheckUsername(true)
        setCheckPhone(true)
        setCheckEmail(true)
    };    
    return (
    <>
        <div className="list-card">
            <div className="card">
                <div className="card-body p-4">
                    <div className="card-top">
                        <div className="d-flex">
                            <div className="avata">
                                <span>
                                    <FontAwesomeIcon icon={faCube} className='color-white' />
                                </span>
                            </div>
                            <div className='info'>
                                <div className="type">
                                    <h5>{isClient ? t('TRIAL') : ''}</h5>
                                </div>
                                <span>{isClient ? t('Free') : ''}</span>
                            </div>
                        </div>
                    </div>
                    <div className="card-mid">
                        <h4><sup><small>$</small></sup> 0/<span> {isClient ? t('MONTH') : ''}</span></h4>
                        <button onClick={() => openModal('Free')} >{isClient ? t('Buy Now') : ''}</button>
                    </div>
                    <div className="card-bottom">
                        <h5>{isClient ? t('Plan Features') : ''} :</h5>
                        <ul>
                            <li><Checkbox_cirle />{isClient ? t('One license only') : ''}</li>
                            <li><Checkbox_cirle />{isClient ? t('Recommended balance only') : ''} 200$</li>
                            <li><Checkbox_cirle />{isClient ? t('PAIR') : ''}: EURUSD Only</li>
                            <li><Checkbox_cirle />{isClient ? t('Momentum tech') : ''}</li>
                            <li><Checkbox_cirle />{isClient ? t('Profit') : ''}: 10-25%/ {isClient ? t('MONTH') : ''}</li>
                            <li><Checkbox_cirle />{isClient ? t('Risk') : ''}: 0%</li>
                            <li><Checkbox_cirle />{isClient ? t('Fee share') : ''}: 30% {isClient ? t('Profit') : ''}</li>
                        </ul>
                        
                    </div>
                </div>
            </div>
            <div className="card">
                <div className="card-body p-4">
                    <div className="card-top">
                        <div className="d-flex">
                            <div className="avata">
                                <span>
                                    <FontAwesomeIcon icon={faTrophy} className='color-white' />
                                </span>
                            </div>
                            <div className='info'>
                                <div className="type">
                                    <h5>{isClient ? t('BASIC') : ''}</h5>
                                </div>
                                {/* <span>Multiple Pair</span> */}
                            </div>
                        </div>
                    </div>
                    <div className="card-mid">
                        <h4><sup><small>$</small></sup> 100/<span> {isClient ? t('MONTH') : ''}</span></h4>
                        <button onClick={() => openModal('Basic')}>{isClient ? t('Buy Now') : ''}</button>
                    </div>
                    <div className="card-bottom">
                        <h5>{isClient ? t('Plan Features') : ''} :</h5>
                        <ul>
                            <li><Checkbox_cirle />{isClient ? t('One license only') : ''}</li>
                            <li><Checkbox_cirle />{isClient ? t('Recommended balance only') : ''} 500$</li>
                            <li><Checkbox_cirle />{isClient ? t('PAIR') : ''}: GBPUSD, USDJPY</li>
                            <li><Checkbox_cirle />{isClient ? t('Momentum tech') : ''}</li>
                            <li><Checkbox_cirle />{isClient ? t('Profit') : ''}: 10-40$ {isClient ? t('MONTH') : ''}</li>
                            <li><Checkbox_cirle />{isClient ? t('Risk') : ''}: 5-10% (max drawdown)</li>
                            <li><Checkbox_cirle />{isClient ? t('Fee share') : ''}: 30% {isClient ? t('Profit') : ''}</li>
                        </ul>
                        
                    </div>
                </div>
            </div>
            <div className="card">
                <div className="card-body p-4">
                    <div className="card-top">
                        <div className="d-flex">
                            <div className="avata">
                                <span>
                                    <FontAwesomeIcon icon={faTrophy} className='color-white' />
                                </span>
                            </div>
                            <div className='info'>
                                <div className="type">
                                    <h5>{isClient ? t('ADVANCE') : ''}</h5>
                                </div>
                                {/* <span>Multiple Pair</span> */}
                            </div>
                        </div>
                    </div>
                    <div className="card-mid">
                        <h4><sup><small>$</small></sup> 100/<span> {isClient ? t('MONTH') : ''}</span></h4>
                        <button onClick={() => openModal('Advance')}>{isClient ? t('Buy Now') : ''}</button>
                    </div>
                    <div className="card-bottom">
                        <h5>{isClient ? t('Plan Features') : ''} :</h5>
                        <ul>
                            <li><Checkbox_cirle />{isClient ? t('One license only') : ''}</li>
                            <li><Checkbox_cirle />{isClient ? t('Recommended balance only') : ''} 500$</li>
                            <li><Checkbox_cirle />{isClient ? t('PAIR') : ''}: GBPUSD, USDJPY</li>
                            <li><Checkbox_cirle />{isClient ? t('Momentum tech') : ''}</li>
                            <li><Checkbox_cirle />{isClient ? t('Profit') : ''}: {'>'} 50$ {isClient ? t('MONTH') : ''}</li>
                            <li><Checkbox_cirle />{isClient ? t('Risk') : ''}: 20-30% (max drawdown)</li>
                            <li><Checkbox_cirle />{isClient ? t('Fee share') : ''}: 30% {isClient ? t('Profit') : ''}</li>
                        </ul>
                        
                    </div>
                </div>
            </div>
            
        </div>
        {/* Modal */}
        <div className='modal'>
            <Modal
                isOpen={isOpen}
                onRequestClose={closeModal}
                contentLabel="Example Modal"
            >
                <div className='heading'>
                    <h2>{isClient ? t('Register') : ''}</h2>
                </div>
                <form onSubmit={handleSubmit}>
                    <div>
                        <input type="text" name='userName' placeholder={isClient ? t('Enter fullname') : ''} onChange={handleChange}/>
                        {checkUsername == false ? <span className='error'>{isClient ? t('validate_username') : ''}</span> : ""}
                    </div>
                    <div>
                        <input type="text" name='email' placeholder={isClient ? t('Enter email') : ''} onChange={handleChange}/>
                        {checkEmail == false ? <span className='error'>{isClient ? t('validate_email') : ''}</span> : ""}
                    </div>
                    <div>
                        <input type="text" name='phoneNumber' placeholder={isClient ? t('Enter phone') : ''} onChange={handleChange}/>
                        {checkPhone == false ? <span className='error'>{isClient ? t('validate_phone') : ''}</span> : ""}
                    </div>
                    <input type="submit" value={isClient ? t('Submit') : ''} />
                </form>
            </Modal>
        </div>
        <ToastContainer autoClose={1500} />
    </>
  )
}

export default Service
