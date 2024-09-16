import React, { useState, useRef, useEffect } from 'react';
import Transition from './Transition';
import langKh from '../../../assets/images/flag/kh-flag.png';
import langEn from '../../../assets/images/flag/en-flag.png';
function DropdownLang({
  align,
}) {
  const handleLanguageChange = (addCode) => {
    setBtnChange(addCode);
    localStorage.setItem('language', addCode);
    window.location.reload();
  };
  const [btnChange, setBtnChange] = useState(localStorage.getItem('language') || 'en');

  const [dropdownOpen, setDropdownOpen] = useState(false);

  const trigger = useRef(null);
  const dropdown = useRef(null);

  // close on click outside
  useEffect(() => {
    const clickHandler = ({ target }) => {
      if (!dropdown.current) return;
      if (!dropdownOpen || dropdown.current.contains(target) || trigger.current.contains(target)) return;
      setDropdownOpen(false);
    };
    document.addEventListener('click', clickHandler);
    return () => document.removeEventListener('click', clickHandler);
  });

  // close if the esc key is pressed
  useEffect(() => {
    const keyHandler = ({ keyCode }) => {
      if (!dropdownOpen || keyCode !== 27) return;
      setDropdownOpen(false);
    };
    document.addEventListener('keydown', keyHandler);
    return () => document.removeEventListener('keydown', keyHandler);
  });
  const language = (btnChange === 'kh' || btnChange === '') ? langKh : langEn;
  const languageL = (btnChange === 'kh' || btnChange === '') ? 'ភាសាខ្មែរ' : 'English';
  
  return (
    <div className="relative inline-flex">
      <button
        ref={trigger}
        className="inline-flex justify-center items-center group"
        aria-haspopup="true"
        onClick={() => setDropdownOpen(!dropdownOpen)}
        aria-expanded={dropdownOpen}
      >
        <img className="w-6 h-6 rounded-full" src={language} width="32" height="32" alt="lang" />
        <div className="flex items-center truncate">
          <span className="truncate hidden xl:block ml-2 text-sm font-medium text-gray-600  group-hover:text-gray-800">{languageL}</span>
        </div>
      </button>

      <Transition
        className={`origin-top-right z-[999999] absolute top-full min-w-44 bg-white border border-gray-200  py-1.5 rounded-lg shadow-lg overflow-hidden mt-1 ${align === 'right' ? 'right-0' : '-left-36 xl:left-0'}`}
        show={dropdownOpen}
        enter="transition ease-out duration-200 transform"
        enterStart="opacity-0 -translate-y-2"
        enterEnd="opacity-100 translate-y-0"
        leave="transition ease-out duration-200"
        leaveStart="opacity-100"
        leaveEnd="opacity-0"
      >
        <div
          ref={dropdown}
          onFocus={() => setDropdownOpen(true)}
          onBlur={() => setDropdownOpen(false)}
        >
          <ul>
            <li>
              <button
                className="flex gap-4 font-medium text-sm text-[#233C96] hover:text-[#30448b]flex items-center py-1 px-3"
                onClick={()=>handleLanguageChange('en')}
              >
               <img className="w-6 h-6 rounded-full" src={langEn} width="32" height="32" alt="lang" />
                <span>English</span>
              </button>
            </li>
            <li className='my-2'>
              <button
                className="flex gap-4 font-medium text-sm text-[#233C96] hover:text-[#30448b]flex items-center py-1 px-3"
                onClick={()=>handleLanguageChange('kh')}
              >
                <img className="w-6 h-6 rounded-full" src={langKh} width="32" height="32" alt="lang" />
                <span>ភាសាខ្មែរ</span>
              </button>
            </li>
          </ul>
        </div>
      </Transition>
    </div>
  )
}

export default DropdownLang;