import Link from "next/link";

export default function Home() {
  return (
   <div className=" flex flex-col items-center justify-center h-screen bg-gradient-to-r from-blue-500 to-purple-600 text-white">
    <Link href={`/games`} className=" text-8xl font-extrabold">CLICK ME</Link>
   </div>
  );
}
