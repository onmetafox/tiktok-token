import React from 'react'
import clsx from 'clsx'

import { ReactComponent as TiktokLogo } from 'src/assets/icons/tiktok-icon.svg'
import { ReactComponent as TelegramIcon } from 'src/assets/icons/telegram-icon.svg'
import { ReactComponent as MenuIcon } from 'src/assets/icons/menu-icon.svg'
import { BaseDivProps } from 'src/types'
import useScreen from 'src/hooks/useScreen'

function Header({ className }: BaseDivProps) {
  // const [open, setOpen] = useState(false)
  const greaterThan2md = useScreen('md')
  return (
    <div className={clsx('w-full z-10', className)}>
      {greaterThan2md && (
        <div className='max-w-screen-base mx-auto flex justify-between items-center h-[88px] h-22 px-3'>
          <div className='w-full block flex-grow lg:flex lg:items-center lg:w-auto'>
            <div className='lg:flex-grow gap-10 flex'>
              <a href='#about' className='block'>
                About
              </a>
              <a href='#buy' className='block'>
                How to buy
              </a>
              <a href='#tokenomics' className='block'>
                Tokenomics
              </a>
            </div>
          </div>
          <TiktokLogo className='absolute left-1/2' />
          <a className='flex min-w-[160px] gap-[10px] px-5 py-3 rounded-xl border-white border border-opacity-10 cursor-pointer hover:bg-tghover hover:border-tghover'>
            <TelegramIcon />
            <div className='white text-sm inline-block'>Join Telegram</div>
          </a>
        </div>
      )}
      {!greaterThan2md && (
        <div className='max-w-screen-base mx-auto flex justify-between items-center p-5'>
          <div className='w-full flex flex-col items-center gap-5'>
            <TiktokLogo />
            <hr className='w-full opacity-10'></hr>
            <div className='w-full flex justify-between'>
              {/* {!open && (
                <div className='p-3 border rounded-xl border-white border-opacity-10'>
                  <MenuIcon onClick={() => setOpen(true)} />
                </div>
              )} */}
              <div className='p-3 border rounded-xl border-white border-opacity-10'>
                <MenuIcon />
              </div>
              <a className='flex items-center gap-[10px] px-5 py-3 rounded-xl border-white border-opacity-10 border cursor-pointer hover:bg-tghover hover:border-tghover'>
                <TelegramIcon />
                <div className='white text-sm inline-block'>Join Telegram</div>
              </a>
            </div>
          </div>
        </div>
      )}
    </div>
  )
}

export default Header
