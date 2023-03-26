import Link from "next/link"
import avatar from "../../public/images/image-avatar.png";
import Image from "next/image";
import MainImage from "./MainImage";
const navArray = ['Collections', 'Men', 'Women', 'About', 'Contact']
export default function Home() {
  console.log(avatar, "from ");

  return (
    <div className="pt-[19px] px-0 sm:pt-[28px] lg:px-[165px] sm:px-[65px]">
      <nav className="px-[24px] sm:px-0 sm:pt-[13px] flex justify-between">
        <div className="flex sm:gap-10 sm:w-[60%] items-center">
          <div className="mr-[16px] block sm:hidden cursor-pointer">

            <svg  width="16" height="15" xmlns="http://www.w3.org/2000/svg"><path d="M16 12v3H0v-3h16Zm0-6v3H0V6h16Zm0-6v3H0V0h16Z" fill="#69707D" fillRule="evenodd" /></svg>
          </div>
          <h2 className=" text-[#1D2026] text-2xl font-semibold items-center">
            sneakers
          </h2>
          <div className="sm:flex justify-between gap-[32px] hidden items-center pt-[2px]">
            {navArray.map((item) => {
              return (
                <Link key={item} href={"#"} className={"text-[#69707D] font-medium text-normal leading-[26px] hover:text-[#1D2026] active:text-[#1D2026]"} style={{ fontFamily: 'Kumbh Sans' }}>{item}</Link>
              )
            })}
          </div>
        </div>
        <div className="flex sm:gap-[47px] gap-[22px] items-center">
          <div className="relative">
            <p className="text-white rounded-[6.5px] w-[19px] h-[13px] text-center bg-[#FF7E1B] font-bold text-[10px] leading-[12.5px] absolute bottom-3 left-2">1</p>
          <svg className="cursor-pointer" width="22" height="20" xmlns="http://www.w3.org/2000/svg"><path d="M20.925 3.641H3.863L3.61.816A.896.896 0 0 0 2.717 0H.897a.896.896 0 1 0 0 1.792h1l1.031 11.483c.073.828.52 1.726 1.291 2.336C2.83 17.385 4.099 20 6.359 20c1.875 0 3.197-1.87 2.554-3.642h4.905c-.642 1.77.677 3.642 2.555 3.642a2.72 2.72 0 0 0 2.717-2.717 2.72 2.72 0 0 0-2.717-2.717H6.365c-.681 0-1.274-.41-1.53-1.009l14.321-.842a.896.896 0 0 0 .817-.677l1.821-7.283a.897.897 0 0 0-.87-1.114ZM6.358 18.208a.926.926 0 0 1 0-1.85.926.926 0 0 1 0 1.85Zm10.015 0a.926.926 0 0 1 0-1.85.926.926 0 0 1 0 1.85Zm2.021-7.243-13.8.81-.57-6.341h15.753l-1.383 5.53Z" fill="#69707D" fillRule="nonzero" /></svg>
          </div>
          {/* <Image src={'image-avatar'} alt="avatar"/> */}
          <Image src={avatar.src} alt="userAvatar" height={50} width={50} className={"sm:h-[50px] sm:w-[50px] h-[24px] w-[24px] rounded-full border-[2px] hover:border-[#FF7E1B] cursor-pointer transition-all "} />
        </div>
      </nav>
      <div className="hidden sm:block h-[1px] mt-[34px] w-full bg-[#E4E9F2]"></div>
      <MainImage/>
    </div>
  )
}