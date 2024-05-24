import React, { useState } from 'react'
import { TECollapse } from 'tw-elements-react'
import clsx from 'clsx'
import ToknomicImg from 'src/assets/images/toknomics.png'
import { ReactComponent as DownIcon } from 'src/assets/icons/down-icon.svg'
import { ReactComponent as UpIcon } from 'src/assets/icons/up-icon.svg'
import TikTokCoin from 'src/assets/images/logo-tok.png'
import { ReactComponent as TiktokLogo } from 'src/assets/icons/tiktok-border-icon.svg'
function Tokenomics() {
  const [faq1, setFaq1] = useState(false)
  const toggleFaq1 = () => setFaq1(!faq1)
  const [faq2, setFaq2] = useState(false)
  const toggleFaq2 = () => setFaq2(!faq2)
  const [faq3, setFaq3] = useState(false)
  const toggleFaq3 = () => setFaq3(!faq3)
  return (
    <div className='toknomic flex flex-col items-center'>
      <div
        id='tokenomics'
        className='max-w-screen-base w-full flex flex-col items-center py-10 px-3'
      >
        <div className='text-white md:text-max lg:text-max text-4xl font-semibold'>Tokenomics</div>
        <img src={ToknomicImg} alt='toknomic' className='max-w-[680px] w-full mt-10' />
        <div className='inset-0 backdrop-blur-sm -mt-10 py-5 px-[30px] gap-2 flex flex-col text-4xl md:text-max sm:flex-row sm:justify-between justify-center w-full border rounded-[20px] border-white border-opacity-10 bg-white bg-opacity-5'>
          <div className='text-center text-xl'>Total Supply</div>
          <div className='text-center text-xl'>8,888,888.00</div>
        </div>
        <div className='flex flex-col text-4xl md:text-max sm:flex-row gap-10 justify-between w-full my-6'>
          <div className='inset-0 backdrop-blur-sm py-5 px-[30px]  gap-2 flex flex-col text-4xl md:text-max sm:flex-row sm:justify-between justify-center w-full border rounded-[20px] border-white border-opacity-10 bg-white bg-opacity-5'>
            <div className='text-center text-xl'>Team Tokens</div>
            <div className='text-center text-xl'>0%</div>
          </div>
          <div className='inset-0 backdrop-blur-sm py-5 px-[30px]  gap-2 flex flex-col text-4xl md:text-max sm:flex-row sm:justify-between justify-center w-full border rounded-[20px] border-white border-opacity-10 bg-white bg-opacity-5'>
            <div className='text-center text-xl'>Presale</div>
            <div className='text-center text-xl'>0%</div>
          </div>
        </div>
      </div>
      <div id='faq' className='faq py-20 w-full flex justify-center'>
        <div className='max-w-screen-base w-full flex flex-col items-center px-3'>
          <div className='font-semibold text-max my-10'>FAQ</div>
          <div className='flex flex-col w-full items-center gap-5 my-10'>
            <div className='inset-0 backdrop-blur-sm py-5 px-[30px] w-full border rounded-[20px] border-white border-opacity-10 bg-white bg-opacity-5'>
              <div className='flex justify-between' onClick={toggleFaq1}>
                <div className='text-xl cursor-pointer'>What is TikTokCoin?</div>
                {!faq1 && <DownIcon className='my-auto' />}
                {faq1 && <UpIcon className='my-auto' />}
              </div>
              <TECollapse show={faq1}>
                <div className={clsx('font-medium max-w-2xl my-10', { hidden: !faq1 })}>
                  TikTok, like many other social media platforms, has its in-app currency known as
                  Coins. Users can purchase TikTok Coins with real money and use them to buy gifts
                  for their favorite content creators during live streams.
                  <br></br>
                  <br></br>These Coins are an integral part of TikTok monetization and engagement
                  strategies.
                </div>
              </TECollapse>
            </div>
            <div className='inset-0 backdrop-blur-sm py-5 px-[30px] w-full border rounded-[20px] border-white border-opacity-10 bg-white bg-opacity-5'>
              <div className='flex justify-between' onClick={toggleFaq2}>
                <div className='text-xl cursor-pointer'>How can I get involved?</div>
                {!faq2 && <DownIcon className='my-auto' />}
                {faq2 && <UpIcon className='my-auto' />}
              </div>
              <TECollapse show={faq2}>
                <div className='font-medium max-w-2xl my-10'>
                  You can get involved with TikTok Coin by actively participating in the TikTok
                  community and earning coins through various activities on the platform. Create and
                  share engaging content, participate in challenges, interact with other users, and
                  support creators whose content you enjoy.
                  <br></br> <br></br>
                  Additionally, stay updated on TikTok Coin developments and announcements to make
                  the most of the opportunities available.
                </div>
              </TECollapse>
            </div>
            <div className='inset-0 backdrop-blur-sm py-5 px-[30px] w-full border rounded-[20px] border-white border-opacity-10 bg-white bg-opacity-5'>
              <div className='flex justify-between' onClick={toggleFaq3}>
                <div className='text-xl cursor-pointer'>Is TikTokCoin affiliated with TikTok?</div>
                {!faq3 && <DownIcon className='my-auto' />}
                {faq3 && <UpIcon className='my-auto' />}
              </div>
              <TECollapse show={faq3}>
                <div className='font-medium max-w-2xl my-10'>
                  TikTok Coins can be used to purchase virtual gifts to support content creators
                  during live streams. Users can buy TikTok Coins within the app using real money.
                  <br></br>
                  <br></br>The prices vary based on the number of Coins purchased.
                  <br></br> <br></br>
                  Content creators can convert virtual gifts received from fans into Diamonds which
                  can then be exchanged for real money through TikTok payout system.
                </div>
              </TECollapse>
            </div>
          </div>
        </div>
      </div>
      <div id='join' className='join py-10 w-full flex justify-center'>
        <div className='max-w-screen-base w-full flex flex-col items-center px-3'>
          <div className='flex justify-between text-4xl md:text-max sm:flex-row flex-col-reverse w-full'>
            <div className='flex flex-col sm:items-start items-center mt-10'>
              <div className='font-semibold text-4xl sm:text-max'>Join</div>
              <div className='font-semibold text-4xl sm:text-max'>TikTok Club</div>
              <div className='font-semibold text-4xl sm:text-max text-pink'>Today</div>
            </div>
            <div className='sm:my-auto m-auto'>
              <img src={TikTokCoin} alt='tiktok coin' />
            </div>
          </div>
          <a className='text-lg font-semibold rounded-xl red-gradient flex justify-center gap-5 p-5 cursor-pointer default-shadow w-full items-center text-center my-20'>
            <div>Buy TikTokCoin Now</div>
            <TiktokLogo />
          </a>
        </div>
      </div>
    </div>
  )
}

export default Tokenomics
