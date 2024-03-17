import Head from 'next/head'
import Footer from '@/components/Footer'
import { useState } from 'react';
import Link from 'next/link';
import { FaDiscord, FaEnvelope, FaGithub, FaInstagram } from 'react-icons/fa';

export default function Home() {

  const [clickCount, setClickCount] = useState(0);
  const [showMessage, setShowMessage] = useState(false);

  const handleClick = () => {
    setClickCount(clickCount + 1);
    if (clickCount >= 10) {
      setShowMessage(true);
      setTimeout(() => {
        setShowMessage(false);
        setClickCount(0);
      }, 5000);
    }
  };

  return (
    <>
      <Head>
        <title>XiaYue的個人網站</title>
        <meta name="description" content="就是個個人網站" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main>
        <div className='bg-slate-900 text-white'>
          <div>
            <div className="h-screen flex flex-col items-center justify-center" style={{backgroundImage: [`linear-gradient(rgba(15,23,42,0.9), rgba(15,23,42,0.9))`, `url('bg.gif')`], backgroundSize: `cover`}}>
              <h1 className="text-6xl font-bold text-indigo-500 no-select" onClick={handleClick}>歡迎</h1>
              <p className="text-xl font-medium mt-4">這是一個主頁</p>{showMessage && (<Link href="https://info.xiayue.tw" className="text-xl font-medium mt-4">恭喜!你找到了彩蛋!</Link>)}
            </div>
            <div className="flex flex-col items-center p-10 pt-10">
              <h1 className="text-4xl font-bold pt-10">關於我</h1>
              <p className="text-lg font-light leading-loose p-5">
                我的名字是XiaYue，我是一位網站開發人員，致力於創建美觀且實用的網站
              </p>
              <p className="text-lg font-light leading-loose p-5">
                我擁有多種程序語言的經驗，並且一直在尋求提升我的技能和接受新挑戰
              </p>
              <div className="flex flex-col items-center mt-10">
                <h2 className="text-2xl font-bold">聯繫我</h2>
                <div className="flex items-center mb-2 text-white pt-4">
                  <Link href='https://discord.com/users/536445172247167016/' className="text-base font-light leading-loose">
                    <FaDiscord className="mr-2 text-4xl" />
                  </Link>
                  <Link href='mailto:admin@xiayue.tw' className="text-base font-light leading-loose">
                    <FaEnvelope className="text-4xl mr-2" />
                  </Link>
                  <Link href='https://github.com/XiaYue1013' className="text-base font-light leading-loose">
                    <FaGithub className="text-4xl mr-2" />
                  </Link>
                  <Link href='https://instagram.com/x_y_.013' className="text-base font-light leading-loose">
                    <FaInstagram className="text-4xl mr-2" />
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </main>
      <Footer />
    </>
  )
}
