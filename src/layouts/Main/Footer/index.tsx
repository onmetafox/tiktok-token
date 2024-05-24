import React from 'react'
import { ReactComponent as TiktokLogo } from 'src/assets/images/tiktok.svg'
import { ReactComponent as TelegramIcon } from 'src/assets/icons/telegram-icon.svg'
import { ReactComponent as TwitterIcon } from 'src/assets/icons/twitter-icon.svg'
import { ReactComponent as DiscordIcon } from 'src/assets/icons/dicord-icon.svg'
import useScreen from 'src/hooks/useScreen'

function Footer() {
  const greaterThan2md = useScreen('md')
  return (
    <div id='footer' className='w-full border-t-[1px] border-white border-opacity-10'>
      <div className='container max-w-screen-base mx-auto flex-col  items-center py-10 px-3'>
        <div className='grid grid-cols-1 md:grid-cols-2 gap-5'>
          <div className='flex flex-col gap-10 items-center md:items-start'>
            <TiktokLogo className='w-14' />
            <div className='flex justify-start gap-5'>
              <a href='https://github.com'>
                <TelegramIcon className='w-[23px] h-[23px]' />
              </a>
              <a href='https://github.com'>
                <TwitterIcon />
              </a>
              <a href='https://github.com'>
                <DiscordIcon />
              </a>
            </div>
          </div>
          {!greaterThan2md && <hr className='w-full bg-white opacity-10 my-5'></hr>}
          <div className='flex flex-col gap-10 justify-between items-center md:items-start pt-5'>
            <div className='md:text-start text-center text-sm'>
              Join the TikTokCoin movement today and help us make the world a more fun and inclusive
              place for everyone!
            </div>
            <div className='text-subtitle text-sm'>© 2023 TikTokCoin • All Rights Reserved</div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Footer
