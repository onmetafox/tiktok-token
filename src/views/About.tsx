import React from 'react'
import { ReactComponent as TiktokLogo } from 'src/assets/icons/tiktok-border-icon.svg'
import useScreen from 'src/hooks/useScreen'
import { ReactComponent as HeartImg } from 'src/assets/images/heart.svg'
import clsx from 'clsx'
function About() {
  const greaterThan2md = useScreen('md')
  return (
    <div className='about flex flex-col items-center' id='about'>
      <div className='red-effect'></div>
      <div className='blue-effect'></div>
      <div className='container max-w-screen-base m-auto relative flex flex-col items-center px-3'>
        <div className='flex flex-col items-center gap-10 max-w-[645px] '>
          {!greaterThan2md && <HeartImg className='mt-36' />}
          <div className='lg:text-max md:text-max sm:text-4xl text-4xl text-dark font-extrabold'>
            TikTok Club
          </div>
          <div className='text-dark leading-5 text-center'>
            We&apos;re a movement dedicated to preserving the legacy of TikTok and empowering
            individuals to express themselves freely, no matter what challenges may arise.
          </div>
          <a
            className={clsx(
              'font-semibold border rounded-xl black-gradient hover:redGradient flex gap-5 p-5 cursor-pointer default-shadow items-center justify-center',
              { 'w-full': !greaterThan2md },
            )}
          >
            <div>Buy TikTokCoin Now</div>
            <TiktokLogo />
          </a>
        </div>
      </div>
    </div>
  )
}

export default About
