import React from 'react'
import Layout from '../../components/Layout/Layout';
import { FaWallet } from "react-icons/fa";

const DashboardHome = () => {
  return (
    <Layout>
        <div className='flex flex-row justify-center '>
           <div className='border border-2 border-black rounded-lg w-[330px]  mt-32 p-7'>
              <div className='flex flex-row justify-center'>
              <p className='mr-4'>Your Wallet </p>
              <FaWallet size={30} color='green' />
              </div>
              <p className='text-center ms-4'>$ 00.00</p>
            </div>
        </div>
    </Layout>
  )
}

export default DashboardHome;