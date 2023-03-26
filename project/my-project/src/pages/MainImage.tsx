import React, { useState } from 'react'
import Image from "next/image";
import image1 from "../../public/images/image-product-1.jpg";
import thumbnail1 from "../../public/images/image-product-1-thumbnail.jpg";
import image2 from "../../public/images/image-product-2.jpg";
import thumbnail2 from "../../public/images/image-product-2-thumbnail.jpg";
import image3 from "../../public/images/image-product-3.jpg";
import thumbnail3 from "../../public/images/image-product-3-thumbnail.jpg";
import image4 from "../../public/images/image-product-4.jpg";
import thumbnail4 from "../../public/images/image-product-4-thumbnail.jpg";
import plus from "../../public/images/icon-plus.svg";
import minus from "../../public/images/icon-minus.svg";

const imageArray = [
    {
        image: image1,
        thumbnail: thumbnail1
    },
    {
        image: image2,
        thumbnail: thumbnail2
    }, {
        image: image3,
        thumbnail: thumbnail3
    }, {
        image: image4,
        thumbnail: thumbnail4
    },
]
const MainImage = () => {
    const [activeImage, setActiveImage] = useState(0)//stores no. of image tthat is active
    const [count, setCount] = useState(0)//stores no. of items 

    return (
        <div className='mt-[90px] mb-[132px] mx-[48px] flex sm:flex-row justify-center items-center md:gap-[125px] flex-col'>
            <div className='flex justify-center items-center flex-col'>
                <div className='rounded-md cursor-pointer'>
                    <Image src={imageArray[activeImage].image} alt="shoe-display" className={"h-[445px] w-[445px] rounded-md  cursor-pointer transition-all "} />
                    {/* add arrows  */}
                </div>
                <div className='sm:flex gap-[31px] mt-[32px] hidden'>
                    {imageArray.map((image, index) => {
                        return (
                            <Image onClick={() => {
                                setActiveImage(index)
                            }} key={`image${index}`} src={image.image} alt="shoe-display" className={`hover:opacity-75 h-[88px] w-[88px] rounded-md   cursor-pointer transition-all ${activeImage === index ? 'border-[2px] border-[#FF7E1B]' : ''}`} />
                        )
                    })}
                </div>
            </div>
            {/* description */}
            <div className='w-[445px] h-[426px]'>
                <h3 className='text-[#FF7E1B] font-[700] text-[13px] leading-[16.12px]'>Sneaker Company</h3>
                <h2 className='text-[#1D2026]  text-[44px] leading-[48px] font-[700] mt-[24px]'>Fall Limited Edition Sneakers</h2>
                <p className='mt-[32px]  text-base leading-[26px] font-medium text-[#69707D]'>These low-profile sneakers are your perfect casual wear companion. Featuring a durable rubber outer sole, they’ll withstand everything the weather can offer.</p>
                <div className='relative w-[173px] h-[68px] mt-[24px]'>
                    <h4 className='text-[#1D2026] leading-[48px] font-[700] text-3xl'>$125.00</h4>
                    <h5 className='text-[#B6BCC8] font-[700]'>$250</h5>
                    <p className='text-[#FF7E1B] bg-[#FFEEE2] text-center font-[700] text-base absolute right-0 top-1 rounded-md w-[51px] h-[27px]'>50%</p>
                </div>
                <div className='flex justify-start gap-[16px] mt-[32px] items-center'>
                    <div className='flex justify-between items-center text-center px-[21px] bg-[#F6F8FD] rounded-xl w-[157px] h-[56px]'>
                        <svg className='cursor-pointer' onClick={() => {
                            if (count <= 1) return
                            setCount((count) => count - 1)
                        }
                        } width="12" height="4" xmlns="http://www.w3.org/2000/svg" xmlnsXlink="http://www.w3.org/1999/xlink"><defs><path d="M11.357 3.332A.641.641 0 0 0 12 2.69V.643A.641.641 0 0 0 11.357 0H.643A.641.641 0 0 0 0 .643v2.046c0 .357.287.643.643.643h10.714Z" id="a" /></defs><use fill="#FF7E1B" fillRule="nonzero" xlinkHref="#a" /></svg>
                        <p>{count}</p>
                        <svg className='cursor-pointer' onClick={() => {
                            setCount((count) => count + 1)
                        }
                        } width="12" height="12" xmlns="http://www.w3.org/2000/svg" xmlnsXlink="http://www.w3.org/1999/xlink"><defs><path d="M12 7.023V4.977a.641.641 0 0 0-.643-.643h-3.69V.643A.641.641 0 0 0 7.022 0H4.977a.641.641 0 0 0-.643.643v3.69H.643A.641.641 0 0 0 0 4.978v2.046c0 .356.287.643.643.643h3.69v3.691c0 .356.288.643.644.643h2.046a.641.641 0 0 0 .643-.643v-3.69h3.691A.641.641 0 0 0 12 7.022Z" id="b" /></defs><use fill="#FF7E1B" fillRule="nonzero" xlinkHref="#b" /></svg>
                    </div>
                    <div onClick={() => {
                        alert("Added to cart!")
                    }
                    } className='flex cursor-pointer justify-center gap-[16px] items-center text-center px-[21px] bg-[#FF7E1B] text-white rounded-xl w-[272px] h-[56px]'>
                        <svg className="cursor-pointer" width="22" height="20" xmlns="http://www.w3.org/2000/svg"><path d="M20.925 3.641H3.863L3.61.816A.896.896 0 0 0 2.717 0H.897a.896.896 0 1 0 0 1.792h1l1.031 11.483c.073.828.52 1.726 1.291 2.336C2.83 17.385 4.099 20 6.359 20c1.875 0 3.197-1.87 2.554-3.642h4.905c-.642 1.77.677 3.642 2.555 3.642a2.72 2.72 0 0 0 2.717-2.717 2.72 2.72 0 0 0-2.717-2.717H6.365c-.681 0-1.274-.41-1.53-1.009l14.321-.842a.896.896 0 0 0 .817-.677l1.821-7.283a.897.897 0 0 0-.87-1.114ZM6.358 18.208a.926.926 0 0 1 0-1.85.926.926 0 0 1 0 1.85Zm10.015 0a.926.926 0 0 1 0-1.85.926.926 0 0 1 0 1.85Zm2.021-7.243-13.8.81-.57-6.341h15.753l-1.383 5.53Z" fill="white" fillRule="nonzero" /></svg>
                        <p>Add to cart</p>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default MainImage