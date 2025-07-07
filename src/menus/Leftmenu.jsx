import React, { useEffect, useState } from 'react'
import { NavLink } from 'react-router-dom'
import { Image, imgFile } from '../components/ui/Image'
import { Button } from '../components/ui/Form'

const Leftmenu = ({setOpenMenu}) => {
     
    const [toggle,setToggle]=useState(false);


    return (
        <div className='flex flex-col h-full px-3 justify-between'>

            <div>
                <ul className='flex justify-center items-center p-2 mt-3'>
                    <li className='flex gap-3 items-center'>
                        <Image src={imgFile.logo} />
                        <p className={`${toggle?'hidden':''} text-white text-[18px] font-bold w-[145px]`.trim()}>YT-Learning</p>
                    </li>
                </ul>
                <ul className='flex flex-col justify-start p-2 gap-5 mt-6'>
                    <NavLink
                        to='/dashboard' end
                        className={({ isActive }) => `flex gap-3 items-center hover:bg-[#2c2c2c] px-2 py-1 ${isActive ? 'bg-[#2c2c2c]' : ''}`}>
                        <Image src={imgFile.Dashboard} w='w-[22px]' h='h-auto' />
                        <span className={`${toggle?'hidden':''} text-white text-[14px] font-bold`.trim()}>Dashboard</span>
                    </NavLink>

                    <NavLink to='/dashboard/space' className={({ isActive }) => `flex gap-3 items-center hover:bg-[#2c2c2c] px-2 py-1 ${isActive ? 'bg-[#2c2c2c]' : ''}`}>
                        <Image src={imgFile.Space} w='w-[24px]' h='h-auto' />
                        <span className={`${toggle?'hidden':''} text-white text-[14px] font-bold`.trim()}>Space</span>
                    </NavLink>

                    <NavLink to='/dashboard/history' className={({ isActive }) => `flex gap-3 items-center hover:bg-[#2c2c2c] px-2 py-1 ${isActive ? 'bg-[#2c2c2c]' : ''}`}>
                        <Image src={imgFile.History} w='w-[20px]' h='h-auto' />
                        <span className={`${toggle?'hidden':''} text-white text-[14px] font-bold`.trim()}>History</span>
                    </NavLink>
                </ul>

                <ul className='flex flex-col justify-start p-2 gap-5 mt-6 border-t border-gray-600 pt-5'>
                    <NavLink to={'/dashboard/todo'} className={({ isActive }) => `flex gap-3 items-center hover:bg-[#2c2c2c] px-2 py-1 ${isActive ? 'bg-[#2c2c2c]' : ''}`}>
                        <Image src={imgFile.ToDo} w='w-[18px]' h='h-auto' />
                        <span className={`${toggle?'hidden':''} text-white text-[14px] font-bold`.trim()}>To-Do</span>
                    </NavLink>

                    <NavLink to={'/dashboard/notes'} className={({ isActive }) => `flex gap-3 items-center hover:bg-[#2c2c2c] px-2 py-1 ${isActive ? 'bg-[#2c2c2c]' : ''}`}>
                        <Image src={imgFile.Notes} w='w-[24px]' h='h-auto' />
                        <span className={`${toggle?'hidden':''} text-white text-[14px] font-bold`.trim()}>Notes</span>
                    </NavLink>

                    <NavLink to={'/dashboard/analytics'} className={({ isActive }) => `flex gap-3 items-center hover:bg-[#2c2c2c] px-2 py-1 ${isActive ? 'bg-[#2c2c2c]' : ''}`}>
                        <Image src={imgFile.Analytics} w='w-[18px]' h='h-auto' />
                        <span className={`${toggle?'hidden':''} text-white text-[14px] font-bold`.trim()}>Analytics</span>
                    </NavLink>
                </ul>
            </div>

            <div>
                <ul className='flex justify-end py-4 shadow-lg '>
                    <Button onClick={()=>setToggle(!toggle)} className={'lg:flex hidden justify-items-end bg-[#2c2c2c] rounded-[50%]'}><Image src={imgFile.Arroetoggel} w='w-6' h='h-6' className='border rounded-[50%]' /></Button>
                    
                    <Button onClick={()=>setOpenMenu(false)} className={'flex justify-items-end bg-[#2c2c2c] rounded-[50%] lg:hidden'}><Image src={imgFile.CancelToggel} w='w-6' h='h-6' className='border rounded-[50%]' /></Button>
                </ul>
            </div>

        </div >


    )
}

export default Leftmenu