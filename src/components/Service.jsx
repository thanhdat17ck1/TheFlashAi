"use client"

import React, { useEffect, useState } from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCube, faTrophy, faShieldAlt } from '@fortawesome/free-solid-svg-icons';
import Checkbox_cirle from './icon/Checkbox-cirle';
import Modal from 'react-modal';
import { useTranslation } from 'react-i18next';

const Service = () => {
    const [isOpen, setIsOpen] = useState(false);
    const [isClient, setIsClient] = useState(false)
    const {t} = useTranslation()

    useEffect(() => {
        setIsClient(true)
    }, [])

     // Hàm mở modal
    const openModal = () => {
        setIsOpen(true);
    };

    // Hàm đóng modal
    const closeModal = () => {
        setIsOpen(false);
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
                                <span>Free</span>
                            </div>
                        </div>
                    </div>
                    <div className="card-mid">
                        <h4><sup><small>$</small></sup> 0/<span>2 week</span></h4>
                        <button onClick={openModal}>Buy Now</button>
                    </div>
                    <div className="card-bottom">
                        <h5>Plan Features :</h5>
                        <ul>
                            <li><Checkbox_cirle />One license only</li>
                            <li><Checkbox_cirle />Recommended balance from 2000/pair</li>
                            <li><Checkbox_cirle />EURUSD Only</li>
                            <li><Checkbox_cirle />Use default parameters</li>
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
                                <span>Multiple Pair</span>
                            </div>
                        </div>
                    </div>
                    <div className="card-mid">
                        <h4><sup><small>$</small></sup> 50/<span> month</span></h4>
                        <button onClick={openModal}>Buy Now</button>
                    </div>
                    <div className="card-bottom">
                        <h5>Plan Features :</h5>
                        <ul>
                            <li><Checkbox_cirle />Free first license</li>
                            <li><Checkbox_cirle />Discount 30% for additional license</li>
                            <li><Checkbox_cirle />Recommended balance from 2000/pair</li>
                            <li><Checkbox_cirle />EURUSD</li>
                            <li><Checkbox_cirle />Use default parameters</li>
                            <li><Checkbox_cirle />5% discount for semi-annual payment</li>
                            <li><Checkbox_cirle />10% discount for annual payment</li>
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
                                    <FontAwesomeIcon icon={faShieldAlt} className='color-white' />
                                </span>
                            </div>
                            <div className='info'>
                                <div className="type">
                                    <h5>{isClient ? t('PREMIUM') : ''}</h5>
                                </div>
                                <span>Unlimited</span>
                            </div>
                        </div>
                    </div>
                    <div className="card-mid">
                        <h4><sup><small>$</small></sup> 100/<span> month</span></h4>
                        <button onClick={openModal}>Buy Now</button>
                    </div>
                    <div className="card-bottom">
                        <h5>Plan Features :</h5>
                        <ul>
                            <li><Checkbox_cirle />Free first license</li>
                            <li><Checkbox_cirle />Discount 30% for additional license</li>
                            <li><Checkbox_cirle />Recommended balance from 2000/pair</li>
                            <li><Checkbox_cirle />EURUSD, GBPUSD, AUDUSD, NZDUSD, EURJPY, USDCHF, GBPJPY</li>
                            <li><Checkbox_cirle />Customize parameters</li>
                            <li><Checkbox_cirle />5% discount for semi-annual payment</li>
                            <li><Checkbox_cirle />10% discount for annual payment</li>
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
                                    <FontAwesomeIcon icon={faShieldAlt} className='color-white' />
                                </span>
                            </div>
                            <div className='info'>
                                <div className="type">
                                    <h5>{isClient ? t('PREMIUM SHARE') : ''}</h5>
                                </div>
                                <span>Pay later</span>
                            </div>
                        </div>
                    </div>
                    <div className="card-mid">
                        <h4><sup><small>%</small></sup> 30<span> profit share monthly</span></h4>
                        <button onClick={openModal}>Buy Now</button>
                    </div>
                    <div className="card-bottom">
                        <h5>Plan Features :</h5>
                        <ul> 
                            <li><Checkbox_cirle />30% profit share first license</li>
                            <li><Checkbox_cirle />25% profit share for additional license</li>
                            <li><Checkbox_cirle />Recommended balance from 2000/pair</li>
                            <li><Checkbox_cirle />EURUSD, GBPUSD, AUDUSD, NZDUSD, EURJPY, USDCHF, GBPJPY</li>
                            <li><Checkbox_cirle />Customize parameters</li>
                            <li><Checkbox_cirle />-5% profit share for account from $20k</li>
                            <li><Checkbox_cirle />-10% profit share for account from $50k</li>
                            <li><Checkbox_cirle />-15% profit share for account from $70k</li>
                            <li><Checkbox_cirle />-20% profit share for account from $100k</li>
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
                    <h2>Đăng ký</h2>
                </div>
                <form action="">
                    <div>
                        <input type="text" name='name' placeholder='Nhập họ tên' />
                    </div>
                    <div>
                        <input type="text" name='email' placeholder='Nhập email' />
                    </div>
                    <div>
                        <input type="text" name='phone' placeholder='Nhập số điện thoại' />
                    </div>
                    <input type="submit" value="Gửi" />
                </form>
                {/* <button onClick={closeModal}>Close Modal</button> */}
            </Modal>
        </div>
    </>
  )
}

export default Service
