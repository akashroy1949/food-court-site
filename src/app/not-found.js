import "@/styles/font-awesome.min.css";
import Image from "next/image";

export default function NotFound() {
  return (
    <main className="w-full h-full pt-4">
      {/* Images */}
      <div className="relative left-0 right-0 top-0 bottom-0 w-full lg:z-10 sm:z-auto">
        <div className="absolute top-[5px] left-20">
          <Image
            src={"/Images/spinach1.png"}
            alt="spinach-left"
            width={300}
            height={300}
          />
        </div>
        <div className="absolute top-[300px] right-20">
          <Image
            src={"/Images/spinach2.png"}
            alt="spinach-right"
            width={300}
            height={300}
          />
        </div>
      </div>

      {/* 404 Content */}
      <div id="notfound">
        <div className="notfound z-20">
          <div className="notfound-404">
            <h1>404</h1>
          </div>
          <h2>Oops! Nothing was found</h2>
          <p>
            The page you are looking for might have been removed had its name
            changed or is temporarily unavailable.{" "}
            <a href="/">Return to homepage</a>
          </p>
          <div className="notfound-social">
            <a href="/" title="website">
              <i className="fa fa-globe"></i>
            </a>
            <a href="https://www.facebook.com" target="_blank" title="facebbok">
              <i className="fa fa-facebook"></i>
            </a>
            <a href="https://www.twitter.com" target="_blank" title="twitter">
              <i className="fa fa-twitter"></i>
            </a>
            <a
              href="https://www.instagram.com/einsteingonemad/"
              target="_blank"
              title="Instagram"
            >
              <i className="fa fa-instagram"></i>
            </a>
          </div>
        </div>
      </div>
    </main>
  );
}
