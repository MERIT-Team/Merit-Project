'use client';

import Image from 'next/image';
import { useRouter } from "next/navigation";


const Logo = () =>{
    const router = useRouter();
    return (
        <Image alt="Logo" className="cursor-pointer hidden md:block" height="100" width="150" src="/images/merit.svg" />
    )

}
export default Logo