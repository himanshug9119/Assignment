import C1 from "./Page2Column1";
import C2 from "./Page2Column2";
import C3 from "./Page2Column3";

export default function Page2() {
  return (
    <div className="bg-orange-light w-full pl-10 pr-12">
      <h1 className="text-2xl font-inter font-semibold leading-8 tracking-tight p-4">
        Instant Dive into Your Performance Metrics
      </h1>
      <div>
        <diu className="flex gap-6 p-4 font-inter text-sm font-semibold flex-wrap">
          <div>
            <button className="p-2 bg-white rounded-md"> Life Time</button>
          </div>
          <div>
            <button className="p-2 bg-white rounded-md"> Last Time</button>
          </div>
          <div>
            <button className="p-2 bg-white rounded-md"> Last Month</button>
          </div>
          <div>
            <button className="p-2 bg-white rounded-md"> Life Year</button>
          </div>
          <div>
            <button className="p-2 bg-white rounded-md">
              Customize Time Line
            </button>
          </div>
        </diu>
      </div>
      <div className="flex gap-4 p-4">
        {/* first coulmn  */}
        <C1/>
        {/* Second Column  */}
        <C2/>
        {/* Third Column  */}
        <C3/>
      </div>
    </div>
  );
}
