import Image from "next/image";

export default function Home() {
  return (
    <main className=" pl-[16.666667%] flex flex-col items-center justify-between">
      <figure
        className="overflow-hidden w-full  flex items-center justify-center bg-black"
      >
        <Image
          src="/assets/images/library-futuristic-3.jpg"
          alt="logo"
          width={1368}
          height={768}
          className="h-screen w-full object-cover"
          priority
        />
      </figure>
    </main>
  );
}
