import React from 'react'
import {BsFillSunFill, BsFillMoonFill} from 'react-icons/bs'
import { useTheme } from 'next-themes'

function ThemeButton() {
    const {resolvedTheme, setTheme} = useTheme()
  return (
    <button
    // aria-label='Toogle Dark Mode'
    // type='button'
    className='flex items-center justify-center rounded-lg p-2 '
    onClick={() => setTheme('light')}
    >
        {
            resolvedTheme === 'dark'? (
                <BsFillSunFill className='h-5 w-5 text-orange-300'/>
            ) : (
                <BsFillMoonFill className='h-5 w-5 text-slate-300'/>
            )
        }

    </button>
  )
}

export default ThemeButton