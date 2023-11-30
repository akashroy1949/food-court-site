import Image
 from "next/image";
const MenuItem = () => {
  return (
    <>
      {/* Container */}
      <div className="text-center rounded-2xl p-8 bg-emerald-100 hover:bg-gray-50 hover:shadow-lg hover:shadow-black/20 transition-all">
        {/* Item Image */}
        <div className="w-1/2 text-center block mx-auto">
            <Image src="/Images/pizza.png" alt="chicken Pizza Image" width={1000} height={1000}/>
        </div>

        {/* Item Title */}
        <h4 className="font-semibold text-2xl mt-5 my-2">Chicken Pizza</h4>

        {/* Item Description */}
        <p className="text-gray-500 text-md mb-5">
          Lorem Ipsum Lorem Ipsum Lorem Ipsum Lorem Ipsum Lorem Ipsum Lorem
          Ipsum Lorem Ipsum
        </p>

        {/* Add To Cart Button */}
        <button className="bg-emerald-400 rounded-full py-2 px-4 font-medium uppercase hover:drop-shadow-md hover:text-[15px] transition-all">
          Add To Cart
        </button>
      </div>
    </>
  );
};
export default MenuItem;
