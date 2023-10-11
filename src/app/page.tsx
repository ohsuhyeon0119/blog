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
import { CgProfile } from 'react-icons/cg';
import { BsLayoutTextWindowReverse } from 'react-icons/bs';
function Header() {
  return (
    <div className="Header">
      <div className="item">
        <button className="header-button">EVERYTHING IS A DOT</button>
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
        <h1 className="title">SUHYEON의 블로그</h1>
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
      <div className="main-menu">메인메뉴</div>
      <div className="main-item">
        <p>2023-10-10</p>
        <h3>세번째 글</h3>
        <p>
          동해 물과 백두산이 마르고 닳도록 하느님이 보우하사 우리나라 만세 남산
          위에 저 소나무 철갑을 두른 듯 바람 서리 불변함은 우리 기상일세 가을
          하늘 공활한데 높고 구름 없이 밝은 달은 우리 가슴 일편단심일세 이
          기상과 이 맘으로 충성을 다하여 괴로우나 즐거우나 나라 사랑하세
        </p>
      </div>
      <div className="main-item">
        <p>2023-10-10</p>
        <h3>두번째 글</h3>
        <p>
          동해 물과 백두산이 마르고 닳도록 하느님이 보우하사 우리나라 만세 남산
          위에 저 소나무 철갑을 두른 듯 바람 서리 불변함은 우리 기상일세 가을
          하늘 공활한데 높고 구름 없이 밝은 달은 우리 가슴 일편단심일세 이
          기상과 이 맘으로 충성을 다하여 괴로우나 즐거우나 나라 사랑하세
        </p>
      </div>
      <div className="main-item">
        <p>2023-10-10</p>
        <h3>첫번째 글</h3>
        <p>
          동해 물과 백두산이 마르고 닳도록 하느님이 보우하사 우리나라 만세 남산
          위에 저 소나무 철갑을 두른 듯 바람 서리 불변함은 우리 기상일세 가을
          하늘 공활한데 높고 구름 없이 밝은 달은 우리 가슴 일편단심일세 이
          기상과 이 맘으로 충성을 다하여 괴로우나 즐거우나 나라 사랑하세
        </p>
      </div>
    </div>
  );
}

function Notice() {
  return (
    <div className="Notice">
      <p>
        Instgram <img src="/Instagram_logo.png" className="img-link" alt="" />
      </p>

      <p>
        Github <img src="/GitHub-Mark.png" className="img-link"></img>{' '}
      </p>
      <p>
        Email <img src="/gmail.png" className="img-link"></img>
      </p>
    </div>
  );
}
function Footer() {
  return (
    <div className="Footer">
      <div className="item">
        <button className="header-button">
          <CgProfile size="1.6em"></CgProfile>
        </button>
      </div>
      <div className="item">
        <button className="header-button">
          <BiSearchAlt size="1.6em"></BiSearchAlt>
        </button>
      </div>
      <div className="item">
        <button className="header-button">
          <BsLayoutTextWindowReverse size="1.6em"></BsLayoutTextWindowReverse>
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

function Search() {
  return <div></div>;
}
function Apps() {
  return <div className="Apps"></div>;
}
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

      <Apps></Apps>
      <Main></Main>
      <Search></Search>
      <Footer></Footer>
    </div>
  );
}
