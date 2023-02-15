import Link from 'next/link'
import { AiOutlineUser, AiOutlineHeart } from 'react-icons/ai';
import { RiArrowDropDownLine } from 'react-icons/ri';
import { BsCart4, BsSearch } from 'react-icons/bs';
import { useSession, signOut } from 'next-auth/react';
import { useDispatch, useSelector } from 'react-redux';
import Image from 'next/image'
import { removeFromCart } from '@/Redux/Feature/cart/cartSlice';


const Navbar = () => {

    const cart = useSelector((state) => state.cart.cart)
    const dispatch = useDispatch()

    let shopingCart

    if (cart?.length) {
        shopingCart = cart?.map((product, index) => <div className='flex p-2 items-center gap-2 w-full'>
            <div>
                <p>{index + 1}</p>
            </div>
            <div>
                <Image
                    src={product.img}
                    width="70"
                    height="70"
                    alt="product image"
                />
            </div>
            <div className='flex flex-col' >
                <h1 className='text-black font-extrabold text-sm' >{product.name}</h1>
                <p className='text-sm' >${product.subTotal}.00</p>
                <p className='text-sm' > Quantity:{product.item}</p>
            </div>
            <div>
                <button onClick={() => dispatch(removeFromCart(product))} className="text-xs" >X</button>
            </div>
        </div>)
    } else {
        shopingCart = <p className='font-extralight text-center text-xs p-10'>You have no items in your shopping cart.</p>
    }

    const { data: session } = useSession();

    console.log(session)

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
                            <Link href="/collection" >
                                Collection
                            </Link>
                            <Link href="/category" >
                                Category
                            </Link>
                            {
                                session && <Link href="/dashboard" >
                                    Dashboard
                                </Link>
                            }

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
                            {/* <Link href="/login" ><button><AiOutlineUser></AiOutlineUser></button></Link> */}
                            <div className="dropdown dropdown-hover">
                                <label className='flex items-center' tabIndex={3}><AiOutlineUser></AiOutlineUser> <span><RiArrowDropDownLine className='text-2xl'></RiArrowDropDownLine></span></label>
                                <ul tabIndex={3} className="dropdown-content menu p-2 w-40 mt-24 bg-white text-black text-xs">
                                    {
                                        !session && <li><Link href="/login" >Log in</Link></li>
                                    }
                                    {
                                        session && <>
                                            <li><Link href="/login" >{session.user.name}</Link></li>
                                            <li><button onClick={() => signOut()} >Sign out</button></li>
                                        </>
                                    }

                                </ul>
                            </div>

                        </li>
                        <li className='text-3xl' >
                            <button><AiOutlineHeart></AiOutlineHeart></button>
                        </li>
                        <li className='text-3xl'>
                            <div className="dropdown dropdown-hover flex justify-center items-center relative ">
                                {
                                    cart.length === 0 ? <label className='flex justify-center items-center' tabIndex={1}><span><BsCart4></BsCart4></span> <span className='bg-red-500 text-white rounded-full py-1 px-2 text-xs -mt-5' >0</span>  </label> :

                                        <label className='flex justify-center items-center' tabIndex={1}><span><BsCart4></BsCart4></span> <span className='bg-red-500 text-white rounded-full py-1 px-2 text-xs -mt-5' >{cart.length}</span>  </label>
                                }
                                <div tabIndex={1} className="dropdown-content absolute top-0 bg-gray-100 mt-12 mr-20  w-60 rounded-lg shadow-lg text-[#777]">
                                    <div className="flex flex-col justify-center items-center ">
                                        {shopingCart}
                                    </div>

                                </div>
                            </div>
                        </li>
                        <div>

                        </div>

                    </ul>
                </div>

            </div>
        </div >

    );
};

export default Navbar;
