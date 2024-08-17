import Link from "next/link";
import ProductCard from "./components/ProductCard";
import { getServerSession } from "next-auth";
import { authOption } from "./api/auth/[...nextauth]/route";
import Image from "next/image";
//import bird from "/images/bird.jpg";
export default async function Home() {
  const session = await getServerSession(authOption);
  return (
    <main className="relative h-screen">
      {/* <h1>Hello {session && <span>{session.user!.name}</span>}</h1>
      <Link href="/users">Users</Link>
      <ProductCard /> 
      <Image src="/images/bird.jpg" alt="bird" width={500} height={300} />*/}
      <Image
        src="https://bit.ly/react-cover"
        alt="bird"
        fill
        className="object-cover"
        sizes="(max-width:480px) 100vw,(max-width:768) 50vw ,33vw"
        quality={100}
        priority
      />
    </main>
  );
}
