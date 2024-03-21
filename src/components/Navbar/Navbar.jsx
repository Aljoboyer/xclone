import { Disclosure, Menu } from '@headlessui/react'
// import { Bars3Icon, BellIcon, XMarkIcon } from '@heroicons/react/24/outline'
import SiteLogo from '../../assets/logo.svg';
import { useNavigate } from 'react-router-dom'
import { FaBars } from "react-icons/fa";
import { RxCross1 } from "react-icons/rx";

const navigation = [
    { name: 'Home', href: '/teamsDashboard', current: true },
    { name: 'Availability', href: '3', current: false },
    { name: 'Integration', href: '#', current: false },
    { name: 'Community', href: '#', current: false },
  ]

  function classNames(...classes) {
    return classes.filter(Boolean).join(' ')
  }
export default function Navbar() {
  const navigate = useNavigate();
 

  return (
    <Disclosure as="nav" className="bg-[#FFF9F9]">
    {({ open }) => (
      <>
        <div className="container mx-auto w-full h-[80px]  pt-4">

          <div className="relative flex h-16 items-center justify-between">
          <img src={SiteLogo} alt="" className='md:h-[70px] ps-4 md:ps-0' />


            <div className=" flex items-center ">
              {/* Mobile menu button*/}
              <Disclosure.Button className="inline-flex items-center justify-center rounded-md p-2 text-gray-400 hover:bg-gray-700 hover:text-white focus:outline-none focus:ring-2 focus:ring-inset focus:ring-white">
                <span className="sr-only">Open main menu</span>
            
            {open ? (
                  <p className='text-7xl'>x</p>
                ) : (
                    <FaBars size={50} />
                )}
              </Disclosure.Button>
            </div>
          </div>
        </div>

        <Disclosure.Panel className="">
          <div className="h-fit md:h-screen space-y-1 px-2 pb-3 pt-2 container mx-auto lg:flex lg:flex-row md:flex md:flex-row sm:flex sm:flex-col justify-evenly items-start mt-4 md:mt-17" >
                <div>
                    <p className='text-[#ffb300] text-2xl font-bold'>EXPLORE</p>

                    <p className='text-xl md:text-5xl mt-7'>X</p>
                    <p className='text-xl md:text-5xl mt-7'>Projects</p>
                    <p className='text-xl md:text-5xl mt-7'>Life At X</p>
                    <p className='text-xl md:text-5xl mt-7'>Careers</p>

                </div>

                <div className='mt-9 md:mt-0'>
                    <p className='text-[#ffb300] text-2xl font-bold'>CONNECT</p>

                    <p className='text-xl md:text-3xl mt-7'>LinkedIn</p>
                    <p className='text-xl md:text-3xl mt-7'>Twitter</p>
                    <p className='text-xl md:text-3xl mt-7'>Instagram</p>
                    <p className='text-xl md:text-3xl mt-7'>Youtube</p>

                </div>

                <div className='mt-4 md:mt-0'>
                    <p className='text-[#ffb300] text-2xl font-bold'>LEARN</p>

                    <p className='text-xl md:text-3xl mt-7'>Connect</p>
                    <p className='text-xl md:text-3xl mt-7'>Google</p>
                    <p className='text-xl md:text-3xl mt-7'>Privacy + Terms</p>
                    <p className='text-xl md:text-3xl mt-7'>Alphabet</p>

                </div>
          </div>
        </Disclosure.Panel>
      </>
    )}
  </Disclosure>
  )
}