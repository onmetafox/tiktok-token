import React from 'react'
import clsx from 'clsx'
import TikTokImg from 'src/assets/images/tiktok-coin.png'
import useScreen from 'src/hooks/useScreen'
function Content() {
  const greaterThan2md = useScreen('md')
  return (
    <div className='content' id='content'>
      <div className='container max-w-screen-base m-auto relative flex flex-col items-center px-3'>
        <div
          className={clsx(
            'my-24 grid',
            { 'grid-cols-1': !greaterThan2md },
            { 'grid-cols-2': greaterThan2md },
          )}
        >
          <img
            src={TikTokImg}
            alt='tiktok-coin'
            className={clsx('max-w-[380px] w-full', { 'm-auto': !greaterThan2md })}
          />
          <div className='text-start items-center flex flex-col justify-center'>
            <div className='text-3xl leading-10'>
              In a world where digital trends come and go, there are phenomena that leave an
              indelible mark on our culture.
            </div>
            <div className='mt-10 leading-5 text-white text-opacity-60'>
              TikTok transcended being just an app; it became a cultural touchstone, sparking
              trends, and shaping conversations worldwide.{' '}
            </div>
          </div>
        </div>
      </div>
      <div className='ontainer max-w-screen-base m-auto relative flex flex-col items-center px-3'>
        <hr className='my-5 text-white w-full opacity-20 '></hr>
      </div>
      <div className='relative flex flex-col items-center detail pb-20 '>
        <div className='relative my-20 max-w-screen-base m-auto px-3'>
          <div className='absolute rectangle'></div>
          <div
            className={clsx('p-8 py-20 relative z-1 flex flex-col gap-16', {
              'pl-20': greaterThan2md,
            })}
          >
            <div className='leading-[75px] text-2xl lg:text-4xl md:text-4xl'>
              While its future may be uncertain, the essence of TikTok—the spirit of creativity and
              connection — will always endure.{' '}
            </div>
            <div className='text-2xl text-primary hover:text-pink font-semibold cursor-pointer'>
              Learn More
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Content
