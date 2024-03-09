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
                                <span>{isClient ? t('Free') : ''}</span>
                            </div>
                        </div>
                    </div>
                    <div className="card-mid">
                        <h4><sup><small>$</small></sup> 0/<span> {isClient ? t('MONTH') : ''}</span></h4>
                        <button onClick={openModal}>{isClient ? t('Buy Now') : ''}</button>
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
                        <button onClick={openModal}>{isClient ? t('Buy Now') : ''}</button>
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
                        <button onClick={openModal}>{isClient ? t('Buy Now') : ''}</button>
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
                <form action="">
                    <div>
                        <input type="text" name='name' placeholder={isClient ? t('Enter fullname') : ''} />
                    </div>
                    <div>
                        <input type="text" name='email' placeholder={isClient ? t('Enter email') : ''} />
                    </div>
                    <div>
                        <input type="text" name='phone' placeholder={isClient ? t('Enter phone') : ''} />
                    </div>
                    <input type="submit" value={isClient ? t('Submit') : ''} />
                </form>
                {/* <button onClick={closeModal}>Close Modal</button> */}
            </Modal>
        </div>
    </>
  )
}

export default Service
