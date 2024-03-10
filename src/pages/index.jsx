"use client"

import React from 'react'
import Head from 'next/head';
import './style.css'
import Layout from '@/components/Layout'
import Service from '../components/Service';
import Deposit from '../components/Deposit';
import Section1 from '../components/Section1';
import LayDuLieu from '../components/LayDuLieu';

const Page = () => {
  return (
    <>
      <Head>
        <title>Trang Chủ - The AI Flash</title>
      </Head>
      <Layout>
        <main className='l-container'>
          <section>
            <Section1 />
          </section>
          <Deposit />
          <section className='mb-3'>
            <Service />
          </section>
        </main>
      </Layout>
    </>
  )
}


export default Page;

