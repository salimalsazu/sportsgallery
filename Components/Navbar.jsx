import Link from 'next/link'
import { AiOutlineUser, AiOutlineHeart } from 'react-icons/ai';
import { BsCart4, BsSearch } from 'react-icons/bs';



const Navbar = () => {


    return (

        <div className='font-bold' >
            <div className=" flex h-24 items-center mx-10  ">
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
                        <div rel="noopener noreferrer" href="#" aria-label="Back to homepage" className="flex items-end">
                            <Link href="/" className='text-2xl font-extrabold uppercase' >Sports <br /> Gallery </Link> <hr className='border-yellow-500 border-b-4 w-5' />
                        </div>
                    </div>
                </div>
                <div className='hidden lg:block mx-auto lg:mx-0'>
                    <ul className="menu menu-horizontal flex justify-between">


                        <li className='text-[#777]'>
                            <Link href="/" >
                                Home
                            </Link>
                            <Link href="/dashboard" >
                                Collection
                            </Link>
                            <Link href="/dashboard" >
                                Category
                            </Link>
                            <Link href="/dashboard" >
                                Dashboard
                            </Link>

                        </li>



                        <li >
                            <div className="dropdown dropdown-hover ">
                                <label className='flex justify-center items-center text-3xl' tabIndex={1}><span><BsSearch></BsSearch></span></label>
                                <div tabIndex={1} className="dropdown-content  shadow-lg w-60 mt-24 text-[#777]">
                                    <form action="" className='flex ' >
                                        <input type="text" name="" id="" placeholder='Search your Product' className=' border  p-1 ' />
                                        <button className='border shadow-lg p-2'>Serach</button>
                                    </form>

                                </div>
                            </div>
                        </li>
                        <li className='text-3xl' >
                            <button><AiOutlineUser></AiOutlineUser></button>
                        </li>
                        <li className='text-3xl' >
                            <button><AiOutlineHeart></AiOutlineHeart></button>
                        </li>
                        <li className='text-3xl'>
                            <div className="dropdown dropdown-hover flex justify-center items-center">
                                <label className='flex justify-center items-center' tabIndex={1}><span><BsCart4></BsCart4></span> <span className='bg-red-500 text-white rounded-full py-1 px-2 text-xs -mt-5' >0</span>  </label>
                                <div tabIndex={1} className="dropdown-content  bg-gray-100 mt-32 mr-20  w-60 rounded-lg shadow-lg text-[#777]">
                                    <div className='flex justify-center items-center p-5 '>
                                        <p className='font-extralight text-center text-xs'>You have no items in your shopping cart.</p>
                                    </div>

                                </div>
                            </div>
                        </li>


                    </ul>
                </div>

            </div>
        </div >

    );
};

export default Navbar;
