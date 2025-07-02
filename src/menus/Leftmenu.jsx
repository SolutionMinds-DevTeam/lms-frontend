import React from 'react'
import { Link, NavLink } from 'react-router-dom'
import { Image, imgFile } from '../components/ui/Image'
import { Button } from '../components/ui/Form'

const Leftmenu = () => {
    return (
        <div className='flex flex-col h-full px-3'>
            <ul className='flex justify-between items-center p-2 mt-3'>
                <li className='flex gap-3 items-center'>
                    <Image src={imgFile.logo} />
                    <p className='text-white text-[18px] font-bold'>YT-Learning</p>
                </li>
                <Button className={''}><Image src={imgFile.Arroetoggel} w='w-5' /></Button>
            </ul>
            <ul className='flex flex-col justify-start p-2 gap-5 mt-6'>
                <NavLink
                    to='/dashboard' end
                    className={({ isActive }) => `flex gap-3 items-center hover:bg-[#2c2c2c] px-2 py-1 ${isActive ? 'bg-[#2c2c2c]' : ''}`}>
                    <Image src={imgFile.Dashboard} w='w-[22px]' h='h-auto' />
                    <span className='text-white text-[14px] font-bold'>Dashboard</span>
                </NavLink>

                <NavLink to='/dashboard/space' className={({ isActive }) => `flex gap-3 items-center hover:bg-[#2c2c2c] px-2 py-1 ${isActive ? 'bg-[#2c2c2c]' : ''}`}>
                    <Image src={imgFile.Space} w='w-[24px]' h='h-auto' />
                    <span className='text-white text-[14px] font-bold'>Space</span>
                </NavLink>

                <NavLink to='/dashboard/history' className={({ isActive }) => `flex gap-3 items-center hover:bg-[#2c2c2c] px-2 py-1 ${isActive ? 'bg-[#2c2c2c]' : ''}`}>
                    <Image src={imgFile.History} w='w-[20px]' h='h-auto' />
                    <span className='text-white text-[14px] font-bold'>History</span>
                </NavLink>
            </ul>

            <ul className='flex flex-col justify-start p-2 gap-5 mt-6 border-t border-gray-600 pt-5'>
                <NavLink to={'/'} className={({ isActive }) => `flex gap-3 items-center hover:bg-[#2c2c2c] px-2 py-1 ${isActive ? 'bg-[#2c2c2c]' : ''}`}>
                    <Image src={imgFile.ToDo} w='w-[18px]' h='h-auto' />
                    <span className='text-white text-[14px] font-bold'>To-Do</span>
                </NavLink>

                <NavLink to={'/'} className={({ isActive }) => `flex gap-3 items-center hover:bg-[#2c2c2c] px-2 py-1 ${isActive ? 'bg-[#2c2c2c]' : ''}`}>
                    <Image src={imgFile.Notes} w='w-[24px]' h='h-auto' />
                    <span className='text-white text-[14px] font-bold'>Notes</span>
                </NavLink>

                <NavLink to={'/'} className={({ isActive }) => `flex gap-3 items-center hover:bg-[#2c2c2c] px-2 py-1 ${isActive ? 'bg-[#2c2c2c]' : ''}`}>
                    <Image src={imgFile.Analytics} w='w-[18px]' h='h-auto' />
                    <span className='text-white text-[14px] font-bold'>Analytics</span>
                </NavLink>
            </ul>




        </div >
    )
}

export default Leftmenu