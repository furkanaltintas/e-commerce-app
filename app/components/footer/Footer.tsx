import Link from "next/link"

const Footer = () => {
  return (
    <div className="w-full h-24 bg-orange-600 text-slate-100 flex justify-center items-center mt-3 md:mt-10">
      <Link href={"/"} className="hover:text-slate-800 transition">Burada.com</Link>
    </div>
  )
}

export default Footer