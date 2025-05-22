import Link from "next/link";

const Logo = () => {
  return ( 
    <div className="bg-orange-700 px-2 py-1 rounded-md text-lg md:text-2xl cursor-pointer hover:bg-orange-800 transition">
      <Link href="/">
        Burada <span className="text-sm">.com</span>
      </Link>
    </div>
  );
};

export default Logo;
