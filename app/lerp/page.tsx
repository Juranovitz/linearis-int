import LinearInterpolationChart from "./LinearInterpolationChart";

type SearchParams = {
  a?: string;
  b?: string;
  c?: string;
  d?: string;
  advanced?: string;
};

function lerp(a: number | string, b: number | string, t: number | string): number | string {
  if (typeof a === "number" && typeof b === "number" && typeof t === "number") {
    return a + (b - a) * t;
  } else {
    return "Kérlek számot adj meg";
  }
}

export default async function PageWithSearchParams({ searchParams }: { searchParams: Promise<SearchParams>; }) {
  const sps = await searchParams;
  let a: number | string = sps.a !== undefined ? Number(sps.a) : 3;
  let b: number | string = sps.b !== undefined ? Number(sps.b) : 10;
  let c: number | string = sps.c !== undefined ? Number(sps.c) : 1;
  let d: number | string = sps.d !== undefined ? Number(sps.d) : 10;
  const advanced: boolean = sps.advanced !== undefined;

if (c > d) {
  d = c+1;
}

  const t = d === 0 ? 0 : c / d;
  let y: number | string = lerp(a, b, t);
  




  return (
    <div id="elem" className="flex min-h-screen flex-col items-center justify-center bg-blue-100 p-4">
      <div className="flex w-full max-w-3xl flex-col gap-3 rounded-xl bg-blue-100 p-3 shadow-xl shadow-gray-500">
        <div className="rounded-xl bg-white p-5 shadow-inner shadow-slate-200">
          <form className="flex flex-col gap-4">
            <p className="text-2xl text-center font-semibold">Lineáris interpoláció</p>
            <div className="flex flex-wrap items-center gap-3">
              <label htmlFor="a" className="flex w-56 items-center justify-between text-xl">
                <span className="text-left font-semibold font-size-2x">kezdőpont x=0, y</span>
                <span className="w-6 text-right">=</span>
              </label>
              <input
                className="input input-primary text-2xl peer-focus:border-blue-500 focus:outline-none focus:ring-2 focus:ring-blue-200 focus:ring-opacity-50"
                defaultValue={a}
                id="a"
                name="a"
                required
                type="text"
              />
            </div>
                        <div className="flex flex-wrap items-center gap-3">
              <label htmlFor="d" className="flex w-56 items-center justify-between text-xl">
                <span className="text-left font-semibold font-size-2x">végpont x</span>
                <span className="w-6 text-right">=</span>
              </label>
              <input
                className="input input-primary text-2xl peer-focus:border-blue-500 focus:outline-none focus:ring-2 focus:ring-blue-200 focus:ring-opacity-50"
                defaultValue={d}
                id="d"
                name="d"
                required
                type="text"
              />
            </div>
            <div className="flex flex-wrap items-center gap-3">
              <label htmlFor="b" className="flex w-56 items-center justify-between text-xl">
                <span className="text-left font-semibold font-size-2x">végpont x={d}, y</span>
                <span className="w-6 text-right">=</span>
              </label>
              <input
                className="input input-primary text-2xl peer-focus:border-blue-500 focus:outline-none focus:ring-2 focus:ring-blue-200 focus:ring-opacity-50"
                defaultValue={b}
                id="b"
                name="b"
                required
                type="text"
              />
            </div>
            <div className="flex flex-wrap items-center gap-3">
              <label htmlFor="c" className="flex w-56 items-center justify-between text-xl">
                <span className="text-left font-semibold font-size-2xl">keresett pont x</span>
                <span className="w-6 text-right">=</span>
              </label>
              <input
                className="input input-primary text-2xl peer-focus:border-blue-500 focus:outline-none focus:ring-2 focus:ring-blue-200 focus:ring-opacity-50"
                defaultValue={c}
                id="c"
                name="c"
                required
                type="text"
              />
            </div>

            <div className="flex flex-wrap items-center justify-center gap-4">
              <button
                className="w-30 h-15 bg-indigo-200 p-3 shadow-md shadow-gray-500 text-xl rounded-xl border-3 border-indigo-300 hover:cursor-pointer 
            hover:bg-indigo-400 hover:text-white hover:shadow-lg hover:shadow-gray-400 transition-colors duration-300"
                type="submit"
              >Számol</button>
              <label className="flex items-center gap-2 text-lg font-medium">
                <input
                  type="checkbox"
                  name="advanced"
                  value="on"
                  defaultChecked={advanced}
                  className="checkbox checkbox-primary"
                />
                Ne az origóból ábrázolja
              </label>
            </div>
            <div className="flex justify-around text-lg font-medium">
              <p className="text-2xl font-semibold">Y = {y}</p>
            </div>
          </form>
        </div>

        <LinearInterpolationChart a={a} b={b} t={t} d={d} advanced={advanced} />
      </div>
    </div>
  );
}
