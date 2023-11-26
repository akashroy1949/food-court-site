import Image from "next/image";
import ArrowRightCircle from "../Icons/arrowRightCircle";

const Hero = () => {
  return (
    <>
      <div className="bg-emerald-100 rounded-2xl mt-4">
        <section className="heroSection px-8 pt-2">
          <div className="py-12">
            {/* header */}
            <div className="font-semibold text-4xl leading-tight">
              Feel the{" "}
              <span className="italic font-extrabold text-emerald-500">
                &quot;Culinary Adventure&quot;
              </span>{" "}
              <br /> with Every <br />
              <span className="text-emerald-500">Bite</span>
            </div>

            {/* description */}
            <p className="my-6 text-gray-600">
              Indulge in Pizza Symphony, a harmonious blend of San Marzano
              tomatoes, fresh mozzarella, and your favorite toppings, all on a
              hand-tossed dough.
            </p>

            {/* buttons */}
            <div className="flex gap-8 text-sm items-center">
              <button className="flex items-center gap-1 bg-emerald-400 rounded-full py-2 px-3 uppercase">
                Order Now
                <ArrowRightCircle />
              </button>
              <button className="flex gap-1 items-center font-medium py-2 text-gray-600">
                Learn More
                <ArrowRightCircle />
              </button>
            </div>
          </div>

          {/* Right side Food Image  */}
          <div className="relative">
            <Image
              className="absolute"
              src={"/Images/pizza.png"}
              alt="Pizza - Food Court"
              layout="fill"
              objectFit="contain"
            />
          </div>
        </section>
      </div>
    </>
  );
};
export default Hero;
