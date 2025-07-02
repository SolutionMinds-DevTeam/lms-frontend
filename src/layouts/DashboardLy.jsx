import React from 'react'
import { ColContainer, LayoutContainer } from '../components/ui/Container'
import { Link, Outlet } from 'react-router-dom'
import Leftmenu from '../menus/Leftmenu'
import { Image, imgFile } from '../components/ui/Image'

const DashboardLy = () => {
    return (
        <div className='bg-[#1e1e1e] h-[100vh] flex'>
            <div className='border-r border-gray-500 w-[15%]'>
                <Leftmenu/>
            </div>
            <div className='w-[85%]'>
                <div className='h-[8%] flex justify-end items-center  px-[3%]'>
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