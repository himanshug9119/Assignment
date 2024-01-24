export default function Page2Column3(){
    return (
      <div className="w-2/5 rounded-md bg-white">
        <div>
          <h1 className="font-inter text-md font-semibold p-4 pb-2">
            Tracking Page Views Vs Orders
          </h1>
          <p className="font-inter text-sm font-normal p-4 pt-2">
            Understand user engagement patterns and optimize your tracking page
            for enhanced customer experiences
          </p>
        </div>
        <div>
          <div className="flex justify-between rounded-lg bg-order-color p-4 m-4">
            {/* First Column */}
            <div className="p-4">
              <p className="font-inter text-sm font-medium pb-2">Orders</p>
              <h1 className="font-inter text-3xl font-bold leading-12 tracking-tighter">
                80
              </h1>
            </div>

            {/* Second Column */}
            <div className="flex items-center ml-4">
              <img src="order.png" alt="order" />
            </div>
          </div>
          <div className="flex justify-between rounded-md bg-eye-color p-4 m-4">
            {/* First Column */}
            <div className="p-4">
              <p className="font-inter text-sm font-medium pb-2">
                Tracking Page Views
              </p>
              <h1 className="font-inter text-3xl font-bold leading-12 tracking-tighter">
                44
              </h1>
            </div>

            {/* Second Column */}
            <div className="flex items-center ml-4">
              <img src="../assets/icons/eye.jpg" alt="order" />
            </div>
          </div>
        </div>
      </div>
    );
}