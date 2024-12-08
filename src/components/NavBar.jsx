"use client"

import { copyRightIcon, navbarData } from "@/assets"

const NavBar = ({id}) => {
  return (
    <div className="flex z-10 w-[70px] h-full fixed left-0 top-0 flex-col justify-between border-r border-gray-200 px-4 py-10 xl:py-6 ">
        <a href="#" className="-mt-3 mb-3 lg:mb-0 lg:-mt-0">
            <span className="text-3xl font-semibold text-red-400">N</span>.
            <span className="block w-min rotate-90 origin-bottom text-[12px] dark:text-white transition-colors font-semibold">Brown</span>

        </a>
        <div className="flex flex-col gap-y-3 sm:gap-y-2 xl:gap-y-1">
            {navbarData.map((data,i)=>
            <a key={data.id} href={`#${data.id}`} className="group flex flex-col items-center gap-y-2 xs:gap-y-0">
                <span className={`text-2xl xl:group-hover:scale-115 group-hover:scale-115 xs:group-hover:scale-100 transition-all ${data.id ===id ?"text-red-500 scale-110 xl:scale-100 xs:scale-80":"text-yellow-600 xl:scale-90 scale-100 xs:scale-70"}`}>{data.icon}</span>
                <span className={`text-[10px] dark:text-white  tracking-wide  opacity-0 group-hover:translate-x-0 group-hover:opacity-100 transition-all text-center ${i%2===0? "translate-x-2":"-translate-x-2" } ${data.id===id&& "-translate-x-0 opacity-100"}`}>{data.name}</span>
            </a>
            )}
        </div>
        <p className="flex xs:text-[8px] items-center justify-center lg:text-[10px] text-[12px] text-gray-500 mt-6">
            <span className="absolute left-1/2 w-max flex items-center -rotate-90 origin-bottom-left tracking-wider dark:text-gray-200 transition-colors mt-4 lg:mt-0 ">{copyRightIcon}{" "}{new Date().getFullYear()}</span>
        </p>
    </div>
  )
}

export default NavBar