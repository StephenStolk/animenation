import Image from "next/image";

function Footer() {
  return (
    <section className="sm:px-16 py-4 px-8 flex justify-between items-center gap-2 flex-wrap bg-[#df6d63]">
      <p className="text-base font-bold text-white">@2023 ANIMENATION</p>
      <Image
        src="/./logo3.jpeg"
        alt="logo"
        width={47}
        height={44}
        className="object-contain border rounded-full border-red-50"
      />
      <div className="flex items-center gap-6">
        <Image
          src="./tiktok.svg"
          alt="logo"
          width={19}
          height={19}
          className="object-contain"
        />
        <Image
          src="./instagram.svg"
          alt="logo"
          width={19}
          height={19}
          className="object-contain"
        />
        <Image
          src="./twitter.svg"
          alt="logo"
          width={19}
          height={19}
          className="object-contain"
        />
      </div>
    </section>
  );
}

export default Footer;
