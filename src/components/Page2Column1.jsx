export default function Page2Column1(){
    return (
      <div className="w-2/5 bg-white p-3 rounded-md">
        <div>
          <div className="flex justify-between p-2 font-inter text-lg font-semibold">
            <div>Shipment Updates</div>
            <div className="flex justify-between gap-1">
              <div>Total Orders :</div>
              <div>394</div>
            </div>
          </div>
          <diu className="flex gap-4 p-2 font-inter text-sm font-semibold justify-start flex-wrap">
            <div className="bg-yellow-light rounded-md">
              <button className="p-2"> Delivered</button>
            </div>
            <div className="bg-delivery-color rounded-md">
              <button className="p-2 "> Out For Delivery</button>
            </div>
            <div className="bg-delivery-color rounded-md">
              <button className="p-2 "> Intransit</button>
            </div>
            <div className="bg-delivery-color rounded-md">
              <button className="p-2 "> Pending</button>
            </div>
          </diu>
          <div className="flex justify-center align-middle">
            <img src="../assets/icons/circle.jpg" alt="graph" />
          </div>
          <div className="p-3 flex justify-between flex-wrap">
            <div className="flex items-center gap-2">
              <div className="h-3 w-6 bg-exception-color rounded-full"></div>
              <p className="m-0">Exception</p>
            </div>
            <div className="flex items-center gap-2">
              <div className="h-3 w-6 bg-intransit-color rounded-full"></div>
              <p className="m-0">Intransit</p>
            </div>
            <div className="flex items-center gap-2">
              <div className="h-3 w-6 bg-pending-color rounded-full"></div>
              <p className="m-0">Pending</p>
            </div>
            <div className="flex items-center gap-2">
              <div className="h-3 w-6 bg-delivered-color rounded-full"></div>
              <p className="m-0">Delivered</p>
            </div>
            <div className="flex items-center gap-2">
              <div className="h-3 w-6 bg-out-for-delivery-color rounded-full"></div>
              <p className="m-0">Out For Delivery</p>
            </div>
          </div>
        </div>
      </div>
    );
}