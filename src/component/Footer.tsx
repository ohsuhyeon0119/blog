'use client';

import { BiSearchAlt } from 'react-icons/bi';
import { CgProfile } from 'react-icons/cg';
import { BsLayoutTextWindowReverse } from 'react-icons/bs';
import { BsInfoCircle } from 'react-icons/bs';
import { useRouter } from 'next/navigation';

export function Footer() {
  const router = useRouter();
  function goTo(url: string) {
    router.push(url);
  }

  return (
    <div className="Footer">
      <div className="item">
        <button
          onClick={() => {
            goTo('/');
          }}
          className="header-button"
        >
          <CgProfile size="1.6em"></CgProfile>
        </button>
      </div>
      <div className="item">
        <button
          onClick={() => {
            goTo('/search');
          }}
          className="header-button"
        >
          <BiSearchAlt size="1.6em"></BiSearchAlt>
        </button>
      </div>
      <div className="item">
        <button
          onClick={() => {
            goTo('/contents');
          }}
          className="header-button"
        >
          <BsLayoutTextWindowReverse size="1.6em"></BsLayoutTextWindowReverse>
        </button>
      </div>
      <div className="item">
        <button
          onClick={() => {
            goTo('/info');
          }}
          className="header-button"
        >
          <BsInfoCircle size="1.6em"></BsInfoCircle>
        </button>
      </div>
    </div>
  );
}
