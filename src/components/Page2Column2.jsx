export default function Page2Column2(){
    return (
      <div className="w-1/5 rounded-lg p-3 bg-gray-dark text-white">
        <h1 className="font-inter text-md font-semibold">
          Star Facts about your orders!!!
        </h1>
        <br />
        <p className="font-inter text-sm font-normal">
          There are 8 shipments that have been in out for delivery for more than
          3 days.
        </p>
        <br />
        <p className="font-inter text-sm font-normal ">
          There are 5 shipments in exception right now
        </p>
        <br />
        <p className="font-inter text-sm font-normal ">
          The maximum chargebacks are from Miami.
        </p>
        <br />
        <button className="font-inter text-sm font-medium bg-white text-black rounded-md px-2 py-2">
          Check Orders Page
        </button>
      </div>
    );
}