'use client';
import Image from 'next/image';
import styles from './page.module.css';
import { BrowserView, MobileView, isMobile } from 'react-device-detect';
import { useMediaQuery } from '@chakra-ui/react';
import Nav from 'react-bootstrap/Nav';
import Link from 'next/link';
import { useRouter } from 'next/navigation';
import { BiSearchAlt } from 'react-icons/bi';
import { AiOutlineMenu } from 'react-icons/ai';
function Header() {
  return (
    <div className="Header">
      <div className="item">
        <button className="header-button">BLOG</button>
      </div>
      <div className="item"></div>
      <div className="item">
        <button className="header-button">
          <BiSearchAlt size="1.6em"></BiSearchAlt>
        </button>
      </div>
      <div className="item">
        <button className="header-button">
          <AiOutlineMenu size="1.6em"></AiOutlineMenu>
        </button>
      </div>
    </div>
  );
}

function Cover() {
  return (
    <div className="Cover">
      <div className="cover-item">1</div>
      <div className="cover-item">
        <h1 className="title">suhyeon의 블로그</h1>
      </div>
      <div className="cover-item">
        <p style={{ marginLeft: '1rem' }}>웹 페이지 공사중입니다...</p>
      </div>
    </div>
  );
}

function Main() {
  return (
    <div className="Main">
      <div className="main-item">
        <h3>첫번째 글</h3>
        <p>동해물과 백두산이 마르고 닳도록..</p>
      </div>
      <div className="main-item">
        <h3>두번째 글</h3>
        <p>동해물과 백두산이 마르고 닳도록..</p>
      </div>
      <div className="main-item">
        <h3>세번째 글</h3>
        <p>동해물과 백두산이 마르고 닳도록..</p>
      </div>
      <div className="main-item">
        <h3>네번째 글</h3>
        <p>동해물과 백두산이 마르고 닳도록..</p>
      </div>
      <div className="main-item">
        <h3>다섯번째 글</h3>
        <p>동해물과 백두산이 마르고 닳도록..</p>
      </div>
      <div className="main-item">
        <h3>여섯번째 글</h3>
        <p>동해물과 백두산이 마르고 닳도록..</p>
      </div>
      <div className="main-item">
        <h3>일곱번째 글</h3>
        <p>동해물과 백두산이 마르고 닳도록..</p>
      </div>
    </div>
  );
}

function Notice() {
  return (
    <div className="Notice">
      <h1>notice</h1>
      <p>웹페이지 공사중 입니다</p>
      <hr />
    </div>
  );
}
function Footer() {}

export default function Home() {
  // const [mobileView] = useMediaQuery('(max-width: 768px)', {
  //   ssr: true,
  //   fallback: false,
  // });

  return (
    <div>
      <Header></Header>

      <Cover></Cover>
      <Notice></Notice>
      <Main></Main>

      <></>
    </div>
  );
}
