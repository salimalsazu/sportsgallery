import Link from 'next/link'



const Navbar = () => {
    return (
        // <div>
        //     <header className="p-1 bg-black text-white">
        //         <div className=" flex items-center justify-between h-24 mx-20">
        //             <a rel="noopener noreferrer" href="#" aria-label="Back to homepage" className="flex items-end">
        //                 <p className='text-2xl font-extrabold uppercase' >Sports <br /> Gallery </p> <hr className='border-yellow-500 border-b-4 w-5' />
        //             </a>
        //             <ul className="items-stretch uppercase font-extrabold hidden space-x-3 md:flex">
        //                 <li className="flex">
        //                     <a rel="noopener noreferrer" href="#" className="flex items-center px-4 -mb-1 hover:text-yellow-500 focus:outline-none focus:text-yellow-500 underline-custom">Sports</a>
        //                 </li>
        //                 <li className="flex">
        //                     <a rel="noopener noreferrer" href="#" className="flex items-center px-4 -mb-1 hover:text-yellow-500 ">Sports Wear</a>
        //                 </li>
        //                 <li className="flex">
        //                     <a rel="noopener noreferrer" href="#" className="flex items-center px-4 -mb-1 hover:text-yellow-500 ">Fitness</a>
        //                 </li>
        //                 <li className="flex">
        //                     <a rel="noopener noreferrer" href="#" className="flex items-center px-4 -mb-1 hover:text-yellow-500 ">Gym</a>
        //                 </li>
        //                 <li className="flex">
        //                     <a rel="noopener noreferrer" href="#" className="flex items-center px-4 -mb-1 hover:text-yellow-500 ">Shop</a>
        //                     <ul>
        //                         <li>Track Your Order</li>
        //                     </ul>
        //                 </li>

        //             </ul>
        //             <button className="flex justify-end p-4 md:hidden">
        //                 <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" className="w-6 h-6">
        //                     <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h16"></path>
        //                 </svg>
        //             </button>
        //         </div>
        //     </header>
        // </div>

        <div className='bg-black text-white uppercase font-extrabold' >
            <div className=" flex h-24 items-center mx-20 ">
                <div className="navbar-start flex items-center">
                    <div className="dropdown text-white">
                        <label tabIndex={0} className="btn btn-ghost lg:hidden">
                            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
                        </label>
                        <ul tabIndex={0} className="menu menu-compact dropdown-content mt-3 p-2 shadow bg-base-100 rounded-box w-52">
                            <li><a>sports</a></li>
                            <li><a>Item 3</a></li>
                            <li tabIndex={0}>
                                <a className="justify-between">
                                    Parent
                                    <svg className="fill-current" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><path d="M8.59,16.58L13.17,12L8.59,7.41L10,6L16,12L10,18L8.59,16.58Z" /></svg>
                                </a>
                                <ul className="p-2">
                                    <li><a>Submenu 1</a></li>
                                    <li><a>Submenu 2</a></li>
                                </ul>
                            </li>

                        </ul>
                    </div>
                    <div>
                        <a rel="noopener noreferrer" href="#" aria-label="Back to homepage" className="flex items-end">
                            <p className='text-2xl font-extrabold uppercase' >Sports <br /> Gallery </p> <hr className='border-yellow-500 border-b-4 w-5' />
                        </a>
                    </div>
                </div>
                <div className="navbar-center hidden lg:flex">
                    <ul className="menu menu-horizontal px-1">
                        <li><a>sports</a></li>
                        <li><a>Sports Wear</a></li>
                        <li><a>fitness</a></li>
                        <li><a>Equipment</a></li>
                        <li><a>Indoor</a></li>
                        <li><a>outdoor </a></li>
                        <li tabIndex={0}>
                            <a>
                                shop
                                <svg className="fill-current" xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24"><path d="M7.41,8.58L12,13.17L16.59,8.58L18,10L12,16L6,10L7.41,8.58Z" /></svg>
                            </a>
                            <ul className="p-2 bg-black text-white lowercase font-extralight z-50">
                                <li><a>Track your order</a></li>
                                <li><a>My Account</a></li>
                                <li><a>Cart</a></li>
                                <li><a>Checkout</a></li>
                                <li><a>Wishlist</a></li>
                            </ul>
                        </li>

                    </ul>
                </div>

            </div>
        </div>

    );
};

export default Navbar;
