"use client"

import React from 'react'
import Head from 'next/head';
import './style.css'
import Layout from '@/components/Layout'
import Service from '../components/Service';
import Deposit from '../components/Deposit';

const Page = () => {
  const handleClick = () => {
    alert("haha")
  }
  return (
    <>
      <Head>
        <title>Trang Chủ - Crystal</title>
      </Head>
      <Layout>
        <main className='l-container'>
          <section className='mb-3'>
            <Deposit />
          </section>
          <section className='mb-3'>
            <Deposit />
          </section>
          <section className='mb-3'>
            <Service />
          </section>
        </main>
      </Layout>
    </>
  )
}


export default Page;

