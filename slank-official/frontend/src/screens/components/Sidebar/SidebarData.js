import React from 'react'
import * as FaIcons from 'react-icons/fa'
import * as AiIcons from 'react-icons/ai'
import * as IoIcons from 'react-icons/io'

export const SidebarData = [
  {
    title: 'Home',
    path: '/#home',
    icon: <AiIcons.AiFillHome />,
    cName: 'nav-text'
  },
  {
    title: 'About',
    path: '/#about',
    icon: <FaIcons.FaHeadphonesAlt />,
    cName: 'nav-text'
  },
  {
    title: 'Music',
    path: '/#music',
    icon: <FaIcons.FaCompactDisc />,
    cName: 'nav-text'
  },
  {
    title: 'Merch',
    path: '/#merch',
    icon: <FaIcons.FaTshirt />,
    cName: 'nav-text'
  },
  {
    title: 'Contact',
    path: '/#contact',
    icon: <IoIcons.IoIosMail />,
    cName: 'nav-text'
  }
]