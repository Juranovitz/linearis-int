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
  const a: number = Number(sps.a) || 3;
  const b: number = Number(sps.b) || 10;
  const c: number = Number(sps.c) || 1;
  const d: number = Number(sps.d) || 10;

  const t = d === 0 ? 0 : c / d;
  const y = lerp(a, b, t);

  return (
    <div id="elem" className="flex min-h-screen flex-col items-center justify-center bg-blue-200 p-4">
      <div className="flex w-full max-w-3xl flex-col gap-10 rounded-xl bg-blue-100 p-3 shadow-xl shadow-gray-500">
        <div className="rounded-xl bg-white p-5 shadow-inner shadow-slate-200">
          <form className="flex flex-col gap-4">
            <p className="text-2xl text-center font-semibold">Lineáris interpoláció</p>
            <div>
              <label htmlFor="a" className="text-2xl font-semibold ml-15">I. Y pont értéke = </label>
              <input
                className="input input-primary text-2xl"
                defaultValue={a}
                id="a"
                name="a"
                required
                type="text"
              />
            </div>
            <div>
              <label htmlFor="b" className="text-2xl font-semibold ml-15">II. Y pont értéke = </label>
              <input
                className="input input-primary text-2xl"
                defaultValue={b}
                id="b"
                name="b"
                required
                type="text"
              />
            </div>
            <div>
              <label htmlFor="c" className="text-2xl font-semibold ml-15">Keresett Y érték = </label>
              <input
                className="input input-primary text-2xl"
                defaultValue={c}
                id="c"
                name="c"
                required
                type="text"
              />
            </div>
            <div>
              <label htmlFor="d" className="text-2xl font-semibold ml-15">Ábrázolás X távja = </label>
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
              <input className="btn btn-primary w-30 h-15 bg-indigo-100 text-xl rounded-3xl border-3 border-indigo-300" type="submit" value="Számol" />
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
