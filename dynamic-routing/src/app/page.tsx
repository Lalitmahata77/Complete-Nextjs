import Link from "next/link";

export default function Home() {
  return (
    <div className=" flex flex-col items-center justify-center min-h-screen p-24">
      <div>
        <h1 className="">Profiles</h1>
        <Link href={`/users`}>Go to</Link>
      </div>

    </div>
  );
}
