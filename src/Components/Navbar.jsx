// import React, { useState } from 'react';
// import { NavLink } from 'react-router-dom';
// import styles from '../Styles/Navbar.module.css';
// import { FiHome } from "react-icons/fi";
// import { IoPersonOutline, IoWalletOutline } from "react-icons/io5";
// import { TbCoinBitcoin } from "react-icons/tb";
// import { IoMenu } from "react-icons/io5";

// export const Navbar = () => {
//   const [containerWidth, setContainerWidth] = useState('250px'); // Initial width
//   const [containerHeight, setContainerHeight] = useState('100vh'); // Initial height
//   const [menuRotated, setMenuRotated] = useState(false); // Initial rotation state

//   const handleresize = () => {
//     const newWidth = containerWidth === '250px' ? '35px' : '250px';
//     const newHeight = containerHeight === '100vh' ? '35px' : '100vh';
//     setContainerWidth(newWidth);
//     setContainerHeight(newHeight);
//     setMenuRotated(!menuRotated); // Toggle rotation state

//   };


//   return (
//     <div id={styles.main_container} style={{ width: containerWidth, height: containerHeight }}>
//       <div >
//         <IoMenu onClick={handleresize} style={{ transform: menuRotated ? 'rotate(0deg)' : 'rotate(90deg)' }} />
//       </div>
//       <header>
//         <nav>
//           <ul id={styles.container} >
//             <li onClick={handleresize}><NavLink to='/'><FiHome />Home</NavLink></li>
//             <li onClick={handleresize}><NavLink to='/crypto'><TbCoinBitcoin />Crypto</NavLink></li>
//             <li onClick={handleresize}><NavLink to='/population'><IoPersonOutline />Population</NavLink></li>
//             <li onClick={handleresize}><NavLink to='/wallet'><IoWalletOutline />Wallet</NavLink></li>
//           </ul>
//         </nav>
//         <nav>
//           <ul id={styles.containerlargescreen}>
//             <li><NavLink to='/'><FiHome />Home</NavLink></li>
//             <li><NavLink to='/crypto'><TbCoinBitcoin />Crypto</NavLink></li>
//             <li><NavLink to='/population'><IoPersonOutline />Population</NavLink></li>
//             <li><NavLink to='/wallet'><IoWalletOutline />Wallet</NavLink></li>
//           </ul>
//         </nav>
//       </header>
//     </div>
//   );
// };



// import React, { useState, useEffect } from 'react';
// import { NavLink } from 'react-router-dom';
// import styles from '../Styles/Navbar.module.css';
// import { FiHome } from "react-icons/fi";
// import { IoPersonOutline, IoWalletOutline } from "react-icons/io5";
// import { TbCoinBitcoin } from "react-icons/tb";
// import { IoMenu } from "react-icons/io5";

// export const Navbar = () => {
//   const [containerWidth, setContainerWidth] = useState('250px'); // Initial width
//   const [containerHeight, setContainerHeight] = useState('100vh'); // Initial height
//   const [menuRotated, setMenuRotated] = useState(false); // Initial rotation state

//   useEffect(() => {
//     const screenWidth = window.innerWidth;
//     if (screenWidth <= 700) {
//       setContainerWidth('35px');
//       setContainerHeight('35px');
//     } else {
//       setContainerWidth('250px');
//       setContainerHeight('100vh');
//     }
//   }, []); // Empty dependency array ensures the effect runs only once after the initial render

//   const handleresize = () => {
//     const newWidth = containerWidth === '250px' ? '35px' : '250px';
//     const newHeight = containerHeight === '100vh' ? '35px' : '100vh';
//     setContainerWidth(newWidth);
//     setContainerHeight(newHeight);
//     setMenuRotated(!menuRotated); // Toggle rotation state
//   };

//   return (
//     <div id={styles.main_container} style={{ width: containerWidth, height: containerHeight }}>
//       <div >
//         <IoMenu onClick={handleresize} style={{ transform: menuRotated ? 'rotate(0deg)' : 'rotate(90deg)' }} />
//       </div>
//       <header>
//         <nav>
//           <ul id={styles.container} >
//             <li onClick={handleresize}><NavLink to='/'><FiHome />Home</NavLink></li>
//             <li onClick={handleresize}><NavLink to='/crypto'><TbCoinBitcoin />Crypto</NavLink></li>
//             <li onClick={handleresize}><NavLink to='/population'><IoPersonOutline />Population</NavLink></li>
//             <li onClick={handleresize}><NavLink to='/wallet'><IoWalletOutline />Wallet</NavLink></li>
//           </ul>
//         </nav>
//         <nav>
//           <ul id={styles.containerlargescreen}>
//             <li><NavLink to='/'><FiHome />Home</NavLink></li>
//             <li><NavLink to='/crypto'><TbCoinBitcoin />Crypto</NavLink></li>
//             <li><NavLink to='/population'><IoPersonOutline />Population</NavLink></li>
//             <li><NavLink to='/wallet'><IoWalletOutline />Wallet</NavLink></li>
//           </ul>
//         </nav>
//       </header>
//     </div>
//   );
// };

import React, { useState, useEffect } from 'react';
import { NavLink } from 'react-router-dom';
import styles from '../Styles/Navbar.module.css';
import { FiHome } from "react-icons/fi";
import { IoPersonOutline, IoWalletOutline } from "react-icons/io5";
import { TbCoinBitcoin } from "react-icons/tb";
import { IoMenu } from "react-icons/io5";

export const Navbar = () => {

  useEffect(() => {
    const handleResize = () => {
      const screenWidth = window.innerWidth;
      if (screenWidth <= 700) {
        setContainerWidth('35px');
        setContainerHeight('35px');
      } else {
        setContainerWidth('250px');
        setContainerHeight('100vh');
      }
    };

    // Add event listener for window resize
    window.addEventListener('resize', handleResize);

    // Initial call to handleResize
    handleResize();

    // Remove event listener on component unmount
    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []); // Empty dependency array ensures the effect runs only once after the initial render
  const [containerWidth, setContainerWidth] = useState('35px'); // Initial width
  const [containerHeight, setContainerHeight] = useState('35px'); // Initial height

  const handleresize = () => {
    const newWidth = containerWidth === '250px' ? '35px' : '250px';
    const newHeight = containerHeight === '100vh' ? '35px' : '100vh';
    setContainerWidth(newWidth);
    setContainerHeight(newHeight);
  };

  return (
    <div id={styles.main_container} style={{ width: containerWidth, height: containerHeight }}>
      <div onClick={handleresize} >
        <IoMenu />
      </div>
      <header>
        <nav>
          <ul id={styles.container}>
            <li onClick={handleresize}><NavLink to='/'><FiHome />Home</NavLink></li>
            <li onClick={handleresize}><NavLink to='/crypto'><TbCoinBitcoin />Crypto</NavLink></li>
            <li onClick={handleresize}><NavLink to='/population'><IoPersonOutline />Population</NavLink></li>
            <li onClick={handleresize}><NavLink to='/wallet'><IoWalletOutline />Wallet</NavLink></li>
          </ul>
        </nav>
        <nav>
          <ul id={styles.containerlargescreen}>
            <li><NavLink to='/'><FiHome />Home</NavLink></li>
            <li><NavLink to='/crypto'><TbCoinBitcoin />Crypto</NavLink></li>
            <li><NavLink to='/population'><IoPersonOutline />Population</NavLink></li>
            <li><NavLink to='/wallet'><IoWalletOutline />Wallet</NavLink></li>
          </ul>
        </nav>
      </header>
    </div>
  );
};
