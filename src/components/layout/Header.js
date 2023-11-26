import Link from "next/link";

export default function Header() {
  return (
    <>
      <header className="flex items-center justify-between font-semibold py-3 sticky top-0 z-50 isolation bg-white">
        {/* logo & App text */}
        <div className="text-2xl text-emerald-600">
          <Link href={""}>Food Court</Link>
        </div>

        {/* navigations */}
        <nav className="flex col-auto items-center gap-16 text-gray-500">
          <Link href={"#home"}>Home</Link>
          <Link href={""}>Menu</Link>
          <Link href={""}>About</Link>
          <Link href={""}>Contact</Link>
        </nav>

        {/* login button */}
        <nav className="flex items-center justify-end">
          <Link
            href={"#login"}
            className="text-white bg-emerald-500 rounded-full px-10 py-2  hover:text-gray-300"
          >
            Login
          </Link>
        </nav>
      </header>
    </>
  );
}
