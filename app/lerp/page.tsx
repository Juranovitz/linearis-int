import LinearInterpolationChart from "./LinearInterpolationChart";

type SearchParams = {
  a?: string;
  b?: string;
  c?: string;
  d?: string;
};

function lerp(a: number, b: number, t: number): number {
  return a + (b - a) * t;
}

export default async function PageWithSearchParams({ searchParams }: { searchParams: Promise<SearchParams>; }) {
  const sps = await searchParams;
  const a: number = sps.a !== undefined ? Number(sps.a) : 3;
  const b: number = sps.b !== undefined ? Number(sps.b) : 10;
  const c: number = sps.c !== undefined ? Number(sps.c) : 1;
  let d: number = sps.d !== undefined ? Number(sps.d) : 10;

if (c > d) {
  d = c+1;
}

  const t = d === 0 ? 0 : c / d;
  const y = lerp(a, b, t);
  




  return (
    <div id="elem" className="flex min-h-screen flex-col items-center justify-center bg-blue-200 p-4">
      <div className="flex w-full max-w-3xl flex-col gap-10 rounded-xl bg-blue-100 p-3 shadow-xl shadow-gray-500">
        <div className="rounded-xl bg-white p-5 shadow-inner shadow-slate-200">
          <form className="flex flex-col gap-4">
            <p className="text-2xl text-center font-semibold">Lineáris interpoláció</p>
            <div className="flex flex-wrap items-center gap-3">
              <label htmlFor="a" className="flex w-56 items-center justify-between text-xl">
                <span className="text-left font-semibold font-size-2x">kezdőpont</span>
                <span className="w-6 text-right">=</span>
              </label>
              <input
                className="input input-primary text-2xl"
                defaultValue={a}
                id="a"
                name="a"
                required
                type="text"
              />
            </div>
            <div className="flex flex-wrap items-center gap-3">
              <label htmlFor="b" className="flex w-56 items-center justify-between text-xl">
                <span className="text-left font-semibold font-size-2x">végpont</span>
                <span className="w-6 text-right">=</span>
              </label>
              <input
                className="input input-primary text-2xl"
                defaultValue={b}
                id="b"
                name="b"
                required
                type="text"
              />
            </div>
            <div className="flex flex-wrap items-center gap-3">
              <label htmlFor="c" className="flex w-56 items-center justify-between text-xl">
                <span className="text-left font-semibold font-size-2xl">keresett y érték</span>
                <span className="w-6 text-right">=</span>
              </label>
              <input
                className="input input-primary text-2xl"
                defaultValue={c}
                id="c"
                name="c"
                required
                type="text"
              />
            </div>
            <div className="flex flex-wrap items-center gap-3">
              <label htmlFor="d" className="flex w-56 items-center justify-between text-xl">
                <span className="text-left font-semibold font-size-2x">ábrázolt táv</span>
                <span className="w-6 text-right">=</span>
              </label>
              <input
                className="input input-primary text-2xl"
                defaultValue={d}
                id="d"
                name="d"
                required
                type="text"
              />
            </div>
            <div className="flex justify-center">
              <input className="btn btn-primary w-30 h-15 bg-indigo-100 text-xl rounded-3xl border-3 border-indigo-300 hover:cursor-pointer" type="submit" value="Számol" />
            </div>
            <div className="flex justify-around text-lg font-medium">
              <p className="text-2xl font-semibold">Y = {y}</p>
            </div>
          </form>
        </div>

        <LinearInterpolationChart a={a} b={b} t={t} d={d} />
      </div>
    </div>
  );
}
