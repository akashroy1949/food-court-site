import Link from "next/link";

export default function Header() {
  return (
    <>
      <header className="flex items-center justify-between font-semibold py-4 sticky top-0 z-50 isolation bg-emerald-100 shadow-md shadow-black/10 px-2 rounded-b-xl">
        {/* logo & App text */}
        <div className="text-2xl text-emerald-600">
          <Link href={"/"} title="Food Court">
            Food Court
          </Link>
        </div>

        {/* navigations */}
        <nav className="flex col-auto items-center gap-16 text-gray-500">
          <Link href={"/"} title="Home">
            Home
          </Link>
          <Link href={"#homemenu"} title="Menu">
            Menu
          </Link>
          <Link href={""} title="About">
            About
          </Link>
          <Link href={""} title="Contact">
            Contact
          </Link>
        </nav>

        {/* login button */}
        <nav className="flex items-center gap-4">
          <Link
            href={"/login"}
            title="Login"
            className="text-gray-500 relative after:bg-gray-500 after:absolute after:h-[2px] after:w-0 after:bottom-1 after:left-0 hover:after:w-full after:transition-all after:duration-300"
          >
            Login
          </Link>
          <Link
            href={"/register"}
            title="Register"
            className="text-white bg-emerald-500 rounded-full px-5 py-2  hover:text-gray-300"
          >
            Register
          </Link>
        </nav>
      </header>
    </>
  );
}
