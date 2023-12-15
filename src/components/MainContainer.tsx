import { useState } from "react";
import Navbar from "./Navbar";
import Gallery from "./Gallery";
import { useCart } from "../utils/cartContext";

const mainImageDefault = "src/assets/img/image-product-1.jpg";

export default function MainContainer() {
  const [mainImage, setMainImage] = useState(mainImageDefault);

  const handleThumbnailClick = (newImage: string) => {
    setMainImage(newImage);
  };

  const { dispatch } = useCart();

  const handleAddToCart = () => {
    const newItem = {
      id: 0,
      name: "Fall Limited Edition Sneakers",
      img: "src/assets/img/image-product-1-thumbnail.jpg",
      nowPrice: 125,
      count: 1,
    };

    dispatch({ type: "ADD_TO_CART", payload: newItem });
  };

  return (
    <main className="mx-40 min-h-screen">
      <header className="">
        <Navbar />
      </header>
      <div className="flex mt-10 gap-28 px-10">
        <section className="h-full">
          <Gallery
            handleThumbnailClick={handleThumbnailClick}
            mainImage={mainImage}
          />
        </section>
        <aside className="flex flex-col text-DarkBlue-900">
          <h4 className="text-Orange uppercase text-[12px] font-bold tracking-[2px]">
            Sneaker Company
          </h4>
          <h2 className="text-[45px] font-bold w-[27rem] pt-4 leading-[1.1]">
            Fall Limited Edition Sneakers
          </h2>
          <p className="text-DarkBlue-800 w-[27rem] pt-10 pb-7">
            These low-profile sneakers are your perfect casual wear companion.
            Featuring a durable rubber outer sole, they’ll withstand everything
            the weather can offer.
          </p>
          <div className="flex justify-start font-sans items-center gap-5">
            <h3 className="font-bold text-2xl">$125.00</h3>
            <span className="bg-Orange bg-opacity-20 text-Orange rounded-md px-2 font-bold">
              50%
            </span>
          </div>
          <del className="opacity-30 font-bold pt-2 pb-8">$250.00</del>
          <div className="flex justify-between w-full">
            <div className="flex justify-center items-center gap-5 bg-DarkBlue-600 rounded-md">
              <button className="text-Orange bg-DarkBlue-600 p-3 rounded-md font-bold text-xl">
                <svg width="12" height="4" xmlns="http://www.w3.org/2000/svg">
                  <defs>
                    <path
                      d="M11.357 3.332A.641.641 0 0 0 12 2.69V.643A.641.641 0 0 0 11.357 0H.643A.641.641 0 0 0 0 .643v2.046c0 .357.287.643.643.643h10.714Z"
                      id="a"
                    />
                  </defs>
                  <use fill="#FF7E1B" fill-rule="nonzero" href="#a" />
                </svg>
              </button>
              <span className="font-bold">3</span>
              <button className="text-Orange bg-DarkBlue-600 p-3 rounded-md font-bold text-xl">
                <svg
                  width="12"
                  height="12"
                  className="w-full h-full"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <defs>
                    <path
                      d="M12 7.023V4.977a.641.641 0 0 0-.643-.643h-3.69V.643A.641.641 0 0 0 7.022 0H4.977a.641.641 0 0 0-.643.643v3.69H.643A.641.641 0 0 0 0 4.978v2.046c0 .356.287.643.643.643h3.69v3.691c0 .356.288.643.644.643h2.046a.641.641 0 0 0 .643-.643v-3.69h3.691A.641.641 0 0 0 12 7.022Z"
                      id="b"
                    />
                  </defs>
                  <use fill="#FF7E1B" fill-rule="nonzero" href="#b" />
                </svg>
              </button>
            </div>
            <button
              className="flex gap-3 px-16 font-bold bg-Orange text-white rounded-lg hover:bg-opacity-70 py-3"
              onClick={handleAddToCart}
            >
              <svg width="22" height="20" xmlns="http://www.w3.org/2000/svg">
                <path
                  d="M20.925 3.641H3.863L3.61.816A.896.896 0 0 0 2.717 0H.897a.896.896 0 1 0 0 1.792h1l1.031 11.483c.073.828.52 1.726 1.291 2.336C2.83 17.385 4.099 20 6.359 20c1.875 0 3.197-1.87 2.554-3.642h4.905c-.642 1.77.677 3.642 2.555 3.642a2.72 2.72 0 0 0 2.717-2.717 2.72 2.72 0 0 0-2.717-2.717H6.365c-.681 0-1.274-.41-1.53-1.009l14.321-.842a.896.896 0 0 0 .817-.677l1.821-7.283a.897.897 0 0 0-.87-1.114ZM6.358 18.208a.926.926 0 0 1 0-1.85.926.926 0 0 1 0 1.85Zm10.015 0a.926.926 0 0 1 0-1.85.926.926 0 0 1 0 1.85Zm2.021-7.243-13.8.81-.57-6.341h15.753l-1.383 5.53Z"
                  fill="#ffffff"
                  fill-rule="nonzero"
                />
              </svg>
              Add to cart
            </button>
          </div>
        </aside>
      </div>
    </main>
  );
}
