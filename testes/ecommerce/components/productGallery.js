"use client";
import Link from 'next/link';


export default function ProductGallery() {
  return (
    <div className="relative flex justify-center items-center">
    <img className="w-full" src="images/rectangle-home.jpg" alt="rectanglehome" />
    <Link href="/MyOrders" className="absolute top-[65%] transform translate-y-1/2 bg-orange-500 w-[331px] text-center h-16 rounded-md flex items-center justify-center text-xl text-white">
        Aproveitar Oferta
    </Link>
    </div>
  );
}
