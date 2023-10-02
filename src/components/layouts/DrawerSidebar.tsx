// import { useState } from 'react';
// import { useSelector, useDispatch } from 'react-redux';
// import { Link } from 'react-router-dom';
// import { type RootState } from '../../redux/store/store';
// import { toggleMenu } from '../../redux/features/menuSlice';
// const DrawerSideBar = () => {
//   const [showDropDownMenu, setShowDropDownMenu] = useState(false);
//   const isOpen = useSelector((state: RootState) => state.menu.isOpen);
//   const dispatch = useDispatch();

//   const toggleMenuHandler = () => {
//     dispatch(toggleMenu());
//   };
//   return (
//     <>
//       <div
//         className="flex fixed top-0  z-40 h-screen bg-white  dark:bg-gray-800"
//         aria-labelledby="drawer-navigation-label"
//       >
//         <div
//           className={`${
//             isOpen ? 'w-72' : 'w-16'
//           } duration-300 h-screen pt-0  relative`}
//         >
//           <img
//             src="arrow-icon.webp"
//             className={`absolute cursor-pointer -right-3 top-4 w-10 border-2 border-gray-900 rounded-full ${
//               !isOpen && 'rotate-180'
//             }`}
//             onClick={toggleMenuHandler}
//           />
//           {isOpen && (
//             <div>
//               <div
//                 className={`py-4 overflow-y-auto bg-gray-100 dark:hover:bg-gray-700`}
//               >
//                 <ul className="space-y-2 font-medium origin-left">
//                   <li>
//                     <a
//                       href="#"
//                       className="flex items-center p-2 text-gray-900 rounded-lg dark:text-white hover:bg-gray-100 dark:hover:bg-gray-700 group"
//                     >
//                       <svg
//                         className="w-5 h-5 text-gray-500 transition duration-75 dark:text-gray-400 group-hover:text-gray-900 dark:group-hover:text-white"
//                         aria-hidden="true"
//                         xmlns="http://www.w3.org/2000/svg"
//                         fill="currentColor"
//                         viewBox="0 0 22 21"
//                       >
//                         <path d="M16.975 11H10V4.025a1 1 0 0 0-1.066-.998 8.5 8.5 0 1 0 9.039 9.039.999.999 0 0 0-1-1.066h.002Z" />
//                         <path d="M12.5 0c-.157 0-.311.01-.565.027A1 1 0 0 0 11 1.02V10h8.975a1 1 0 0 0 1-.935c.013-.188.028-.374.028-.565A8.51 8.51 0 0 0 12.5 0Z" />
//                       </svg>
//                       <span className={`ml-3 ${!open && 'hidden'} `}>
//                         Dashboard
//                       </span>
//                     </a>
//                   </li>
//                   <li>
//                     <button
//                       onClick={() => {
//                         setShowDropDownMenu(!showDropDownMenu);
//                       }}
//                       type="button"
//                       className="flex items-center w-full p-2 text-base text-gray-900 transition duration-75 rounded-lg group hover:bg-gray-100 dark:text-white dark:hover:bg-gray-700"
//                       aria-controls="dropdown-example"
//                       data-collapse-toggle="dropdown-example"
//                     >
//                       <svg
//                         className="flex-shrink-0 w-5 h-5 text-gray-500 transition duration-75 group-hover:text-gray-900 dark:text-gray-400 dark:group-hover:text-white"
//                         aria-hidden="true"
//                         xmlns="http://www.w3.org/2000/svg"
//                         fill="currentColor"
//                         viewBox="0 0 18 21"
//                       >
//                         <path d="M15 12a1 1 0 0 0 .962-.726l2-7A1 1 0 0 0 17 3H3.77L3.175.745A1 1 0 0 0 2.208 0H1a1 1 0 0 0 0 2h.438l.6 2.255v.019l2 7 .746 2.986A3 3 0 1 0 9 17a2.966 2.966 0 0 0-.184-1h2.368c-.118.32-.18.659-.184 1a3 3 0 1 0 3-3H6.78l-.5-2H15Z" />
//                       </svg>
//                       <span
//                         className={`${
//                           !open && 'hidden'
//                         } flex-1 ml-3 text-left whitespace-nowrap`}
//                       >
//                         Setup
//                       </span>
//                       <svg
//                         className={`w-3 h-3 ${!open && 'hidden'} `}
//                         aria-hidden="true"
//                         xmlns="http://www.w3.org/2000/svg"
//                         fill="none"
//                         viewBox="0 0 10 6"
//                       >
//                         <path
//                           stroke="currentColor"
//                           strokeLinecap="round"
//                           strokeLinejoin="round"
//                           strokeWidth="2"
//                           d="m1 1 4 4 4-4"
//                         />
//                       </svg>
//                     </button>
//                     <ul
//                       id="dropdown-example"
//                       className={`py-2 space-y-2 ${
//                         !showDropDownMenu && 'hidden'
//                       }`}
//                     >
//                       <li className={`${!open && 'hidden'}`}>
//                         <Link to="/contact">Contact</Link>
//                       </li>
//                       <li className={`${!open && 'hidden'}`}>
//                         <Link to="/billing">Billing</Link>
//                       </li>
//                       <li className={`${!open && 'hidden'}`}>
//                         <a
//                           href="#"
//                           className="flex items-center w-full p-2 text-gray-900 transition duration-75 rounded-lg pl-11 group hover:bg-gray-100 dark:text-white dark:hover:bg-gray-700"
//                         >
//                           Invoice
//                         </a>
//                       </li>
//                     </ul>
//                   </li>
//                 </ul>
//               </div>
//             </div>
//           )}
//         </div>
//       </div>
//     </>
//   );
// };

// export default DrawerSideBar;
