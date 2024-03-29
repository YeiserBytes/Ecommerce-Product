const discount = 0.5;
const price = 250 * discount;

interface InfoSectionProps {
  price: number;
  count: number;
  discount: number;
  handleAddToCart: () => void;
  handleIncrease: () => void;
  handleDecrease: () => void;
}

export default function InfoSection({
  price: mount = price,
  count,
  handleAddToCart,
  handleIncrease,
  handleDecrease,
}: InfoSectionProps) {
  return (
    <article className="flex flex-col text-DarkBlue-900">
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
      <section className="flex justify-start font-sans items-center gap-5">
        <h3 className="font-bold text-2xl">${mount}.00</h3>
        <span className="bg-Orange bg-opacity-20 text-Orange rounded-md px-2 font-bold">
          50%
        </span>
      </section>
      <del className="opacity-30 font-bold pt-2 pb-8">${mount * 2}.00</del>

      {/* buttons section */}
      <section className="flex justify-between w-full">
        <section className="flex justify-center items-center gap-5 bg-DarkBlue-600 rounded-md">
          <button className="text-Orange bg-DarkBlue-600 p-3 rounded-md font-bold text-xl hover:opacity-65 transition-all duration-200" onClick={handleDecrease}>
            <svg width="12" height="4" xmlns="http://www.w3.org/2000/svg">
              <defs>
                <path
                  d="M11.357 3.332A.641.641 0 0 0 12 2.69V.643A.641.641 0 0 0 11.357 0H.643A.641.641 0 0 0 0 .643v2.046c0 .357.287.643.643.643h10.714Z"
                  id="a"
                />
              </defs>
              <use fill="#FF7E1B" fillRule="nonzero" href="#a" />
            </svg>
          </button>
          <span className="font-bold">{count}</span>
          <button className="text-Orange bg-DarkBlue-600 p-3 rounded-md font-bold text-xl hover:opacity-65 transition-all duration-200" onClick={handleIncrease}>
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
              <use fill="#FF7E1B" fillRule="nonzero" href="#b" />
            </svg>
          </button>
        </section>
        <button
          className="flex gap-3 px-16 font-bold bg-Orange text-white rounded-lg hover:bg-opacity-70 py-3 transition-colors duration-200"
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
      </section>
    </article>
  )
}
