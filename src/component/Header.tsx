'use client';
import { BiSearchAlt } from 'react-icons/bi';
import { AiOutlineMenu } from 'react-icons/ai';

export function Header() {
  return (
    <div className="Header">
      <div className="item">
        <button className="header-button" onClick={() => {}}>
          Everything is a dot
        </button>
      </div>
      <div className="item"></div>
      <div className="item">
        <button className="header-button"></button>
      </div>
      <div className="item">
        <button className="header-button">
          <AiOutlineMenu size="1.6em"></AiOutlineMenu>
        </button>
      </div>
    </div>
  );
}
