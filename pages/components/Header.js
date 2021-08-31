import { useState } from "react";
import Link from "next/link"
import { Menu, Dropdown } from 'antd';
import { DownOutlined } from '@ant-design/icons';



function Header() {

  
  const [visible, setVisible] = useState(false);
  

  return (
    <>
      <div class="pt-10 px-6 sm:px-12 xl:px-24 2xl:px-60">

      <div class="sm:flex flex justify-between cursor-pointer">
        
          <div>
            <Link href="/">
              {/* <img class="w-32" src={logo} alt="logo" /> */}
              <h1 class="text-3xl">Virtual Office</h1>
            </Link>
          </div>
          <div class="hidden md:flex pt-10 sm:p-2 flex space-x-6 cursor-pointer">
          
            <Link href="/resources">
              <h4 class="hover:underline">Resources</h4>
          </Link>
          
            <Link href="/contact-us">
              <h4 class="hover:underline">Call us: +91 989-999-0277</h4>
            </Link>
        </div>
        

        {/* mobile button goes here */}
        
          <div class="md:hidden flex items-center">
            <button id="mobile-menu-button" class="mobile-menu-button" onClick={() => setVisible(!visible)}>
              {!visible ?
                <svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 6h16M4 12h16m-7 6h7" />
                </svg> :
                <svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M6 18L18 6M6 6l12 12" />
              </svg>
              }
            </button>
          </div>
      </div>
      
      {/* mobile menu items */}
      
        {visible &&
          <div style={{backgroundColor: '#f9f9f9'}} class="mobile-menu items-center w-full text-center text-lg pt-8 space-y-8 mt-4 pb-8">
          {/* <Dropdown overlay={menu} onClick={e => e.preventDefault()} trigger={['click']}>
                <a href="/" className="ant-dropdown-link text-black hover:text-black" onClick={e => e.preventDefault()}>
                Browse by location <DownOutlined />
              </a>
              </Dropdown> */}
          
              <Link href="/resources">
              <h4 class="pt-4">Resources</h4>
          </Link>
        
            <Link href="/contact-us">
              <h4 class="pt-4">Call us: 07428669889</h4>
            </Link>
          </div>
      }
      </div>
      
      </>

    
    ) 
}


export default Header;
