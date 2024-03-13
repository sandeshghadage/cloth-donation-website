export default function AboutUS() {
  return (
    <>
      <h1 className=" text-2xl underline font-extrabold leading-none tracking-tight m-10 text-center text-gray-900 md:text-3xl lg:text-4xl dark:text-white">
        HOW WE WORK
      </h1>
      <div className="flex flex-wrap">
        <div className="max-w-sm bg-white border border-gray-200 rounded-lg shadow mx-auto my-3  dark:bg-gray-800 dark:border-gray-700">
          <a href="#">
            <img
              className="rounded-t-lg mx-auto"
              src="https://shareatdoorstep.com/wp-content/uploads/2018/07/icon1-300x250.png"
              alt=""
            />
          </a>
          <div className="p-5">
            <a href="#">
              <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
                Schedule a Pickup
              </h5>
            </a>
            <p className="mb-3 font-normal text-gray-700 dark:text-gray-400">
              Enter the pickup location, and schedule a pickup. *convenience fee
              applicable. You can also choose to go for the drop off option in
              case you want to drop the donations yourself.
            </p>
            {/* <a
              href="#"
              className="inline-flex items-center px-3 py-2 text-sm font-medium text-center text-white bg-blue-700 rounded-lg hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
            >
              Read more
              <svg
                className="rtl:rotate-180 w-3.5 h-3.5 ms-2"
                aria-hidden="true"
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 14 10"
              >
                <path
                  stroke="currentColor"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="2"
                  d="M1 5h12m0 0L9 1m4 4L9 9"
                />
              </svg>
            </a> */}
          </div>
        </div>
        <div className="max-w-sm bg-white border border-gray-200 rounded-lg shadow mx-auto my-3 dark:bg-gray-800 dark:border-gray-700">
          <a href="#">
            <img
              className="rounded-t-lg mx-auto"
              src="https://shareatdoorstep.com/wp-content/uploads/2018/07/iconvannew-1-300x200.png"
              alt=""
            />
          </a>
          <div className="p-5">
            <a href="#">
              <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
                Donate at your Doorstep
              </h5>
            </a>
            <p className="mb-3 font-normal text-gray-700 dark:text-gray-400">
              We will come to your doorstep to pick up the donations in the
              chosen slot and deliver them to the NGO where they can be given a
              new life.
            </p>
            {/* <a
              href="#"
              className="inline-flex items-center px-3 py-2 text-sm font-medium text-center text-white bg-blue-700 rounded-lg hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
            >
              Read more
              <svg
                className="rtl:rotate-180 w-3.5 h-3.5 ms-2"
                aria-hidden="true"
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 14 10"
              >
                <path
                  stroke="currentColor"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="2"
                  d="M1 5h12m0 0L9 1m4 4L9 9"
                />
              </svg>
            </a> */}
          </div>
        </div>
        <div className="max-w-sm bg-white border border-gray-200 rounded-lg shadow mx-auto my-3 dark:bg-gray-800 dark:border-gray-700">
          <a href="#">
            <img
              className="rounded-t-lg mx-auto"
              src="https://shareatdoorstep.com/wp-content/uploads/2018/07/icon3-300x250.png"
              alt=""
            />
          </a>
          <div className="p-5">
            <a href="#">
              <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
                Get Rewards
              </h5>
            </a>
            <p className="mb-3 font-normal text-gray-700 dark:text-gray-400">
              Our brand partners provide our donors gifts* as a “gesture of
              thanks” for making a difference. Be ready to get surprised!
            </p>
            {/* <a
              href="#"
              className="inline-flex items-center px-3 py-2 text-sm font-medium text-center text-white bg-blue-700 rounded-lg hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
            >
              Read more
              <svg
                className="rtl:rotate-180 w-3.5 h-3.5 ms-2"
                aria-hidden="true"
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 14 10"
              >
                <path
                  stroke="currentColor"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="2"
                  d="M1 5h12m0 0L9 1m4 4L9 9"
                />
              </svg>
            </a> */}
          </div>
        </div>
      </div>
      <hr className="my-12 border-t-2 border-gray-300 dark:border-gray-600" />
      <div className="mb-12 mx-6">
        <p className="mb-3 font-normal text-gray-700 dark:text-gray-400">
          Share At Door Step makes it super easy for you to make non-cash
          donations. Don’t we all have a lot of clothes, books, and other
          household goods just lying at some corner and getting dusted. It’s
          time to give them a new life by donating them to those who in need and
          bring smiles on their faces!! Just schedule a pickup and get the
          donations picked up from your doorstep. Now Spreading Happiness is
          just a click away!!
        </p>
      </div>
      <div>
        <h3 className="text-3xl font-bold dark:text-white ml-6">
          How to Schedule a pickup?
        </h3>

        <ul className="space-y-4 text-gray-500  list-inside dark:text-gray-400">
          <li>
            <ol className="ps-5 my-4 mb-24 space-y-1 list-decimal list-inside ">
              <li>Go to our Home page and enter your location.</li>
              <li>
                Choose the option that you want to avail- Doorstep pickup (to
                avail a pickup) or Drop off (in case you want to drop off the
                items yourself).
              </li>
              <li>
                Select a convenient slot, fill in your details, and schedule a
                pickup.
              </li>
            </ol>
          </li>
        </ul>
      </div>
    </>
  );
}
