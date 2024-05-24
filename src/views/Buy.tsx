import React from 'react'
import { ReactComponent as SwapIcon } from 'src/assets/icons/swap-icon.svg'
import { ReactComponent as ConnectIcon } from 'src/assets/icons/connect-icon.svg'
import { ReactComponent as CoinBaseIcon } from 'src/assets/icons/coinbase-icon.svg'
import { ReactComponent as TiktokLogo } from 'src/assets/icons/tiktok-border-icon.svg'
import { ReactComponent as TltIcon } from 'src/assets/icons/tlt-icon.svg'
import CoinImg from 'src/assets/images/coin.png'
function Buy() {
  return (
    <div id='buy' className='buy my-20'>
      <div className='container m-auto items-center max-w-screen-base flex flex-col pt-[450px] p-3'>
        <div className='lg:text-max font-semibold text-4xl'>How to Buy</div>
        <div className='lg:text-max text-4xl font-semibold'>TikTokCoin?</div>
        <div className='flex flex-col items-center justify-center relative max-w-[740px] my-10'>
          <img src={CoinImg} alt='coin' className='w-[320px]' />
          <div className='flex flex-col justify-start gap-16 z-1 relative bg-white p-10 sm:p-16 rounded-3xl'>
            <div className='flex flex-col sm:flex-row justify-start sm:gap-10 gap-3'>
              <div className=''>
                <SwapIcon className='min-w-16 min-h-16 bg-pink rounded-full p-3' />
              </div>
              <div className='flex flex-col gap-2'>
                <div className='text-xl text-dark font-semibold'>Enter Uniswap</div>
                <div className='text-dark'>
                  Visit the{' '}
                  <a href='www.uniswap.org' className='underline'>
                    www.uniswap.org
                  </a>{' '}
                  platform and hit launch app.
                </div>
              </div>
            </div>
            <div className='flex justify-start flex-col sm:flex-row sm:gap-10 gap-3'>
              <div className=''>
                <ConnectIcon className='min-w-16 min-h-16 bg-pink rounded-full  p-3' />
              </div>
              <div className='flex flex-col gap-2'>
                <div className='text-xl text-dark font-semibold'>Connect your Wallet</div>
                <div className='text-dark'>
                  These wallets can be found in the appstore. We recommend coinbase wallet. Download
                  and open the app on your phone and connect by scanning the QR code from within the
                  app.
                </div>
              </div>
            </div>
            <div className='flex justify-start sm:gap-10 gap-3 flex-col sm:flex-row'>
              <div className=''>
                <CoinBaseIcon className='min-w-16 min-h-16 bg-pink rounded-full  p-3' />
              </div>
              <div className='flex flex-col gap-2'>
                <div className='text-xl text-dark font-semibold'>
                  Polygon Network on Coinbase Wallet
                </div>
                <div className='text-dark'>
                  Once connected, use your desktop and click on the dropdown next to your coinbase
                  wallet, here you can choose the polygon network.
                </div>
              </div>
            </div>
            <div className='flex justify-start sm:gap-10 gap-3 flex-col sm:flex-row'>
              <div className=''>
                <TltIcon className='min-w-16 min-h-16 bg-pink rounded-full  p-3' />
              </div>
              <div className='flex flex-col gap-2'>
                <div className='text-xl text-dark font-semibold'>
                  Buying TikTokCoin for MATIC Swaps
                </div>
                <div className='text-dark'>
                  Here you can buy TikTokCoin and use it to swap it for MATIC.{' '}
                </div>
              </div>
            </div>
            <a className='border rounded-xl black-gradient hover:redGradient justify-center flex gap-5 p-5 cursor-pointer default-shadow'>
              <div>Buy TikTokCoin Now</div>
              <TiktokLogo />
            </a>
          </div>
        </div>
      </div>
    </div>
  )
}
export default Buy
