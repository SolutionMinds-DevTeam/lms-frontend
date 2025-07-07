import React, { useState } from 'react'
import { ColContainer, LayoutContainer } from '../components/ui/Container'
import { Link, Outlet } from 'react-router-dom'
import Leftmenu from '../menus/Leftmenu'
import { Image, imgFile } from '../components/ui/Image'
import { Button } from '../components/ui/Form'

const DashboardLy = () => {

    const [openMenu,setOpenMenu] = useState(false);

    return (
        <div className='bg-[#1e1e1e] h-[100vh] flex relative'>
            <div className={`${openMenu?'block absolute z-10 bg-[#2c2c2c] h-[100vh]':'lg:block hidden'} border-r border-gray-500 w-fit`}>
                <Leftmenu setOpenMenu={setOpenMenu}/>
            </div>
            <div className='w-full border'>
                <div className='h-[8%] flex lg:justify-end justify-between items-center  px-[3%] border-b lg:border-0'>

                    <Button className='lg:hidden opacity-[0.7]' onClick={()=>setOpenMenu(!openMenu)}>
                        <Image src={imgFile.menutoggle}/>
                    </Button>

                    <ul className='flex gap-4'>
                        <Image src={imgFile.Notification}  w='w-6' h='auto' />
                        <Image src={imgFile.Profile}  w='w-10' h='auto' className='rounded-[50%] '/>
                    </ul>
                </div>
                <div className='h-[calc(100%-8%)] text-white px-2'>
                   <Outlet/>
                </div>
            </div>
        </div>
    )
}

export default DashboardLy