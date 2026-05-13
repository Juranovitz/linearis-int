type SearchParams = {
  a?: string;
  b?: string;
  c?: string;
  d?: string;
};

function lerp(a: number, b: number, t: number): number {
    return a + (b - a) * t;
};

export default async function PageWithSearchParams({searchParams}: {searchParams: Promise<SearchParams>;}) {
  const sps = await searchParams;
  const a: number = Number(sps.a) || 3;
  const b: number = Number(sps.b) || 10;
  const c: number = Number(sps.c) || 1;
  const d: number = Number(sps.d) || 10;
  
  const t = c / d;
  const eredmeny = lerp(a, b, t);
  
  return (
    <div id="elem" className=" flex min-h-screen flex-col items-center justify-center bg-blue-200">
      <div className="flex w-275 h-125 flex-col rounded-lg bg-blue-100 p-3 shadow-xl shadow-gray-500">
        <form className="flex flex-col gap-4">
          <p className="text-xl text-center font-semibold">Lineáris interpoláció</p>
          <div>
            <label htmlFor="a">a = </label>
            <input
              className="input input-primary"
              defaultValue={a}
              id="a"
              name="a"
              required
              type="text"
            />
          </div>
          <div>
            <label htmlFor="b">b = </label>
            <input
              className="input input-primary"
              defaultValue={b}
              id="b"
              name="b"
              required
              type="text"
            />
          </div>
                    <div>
            <label htmlFor="c">c = </label>
            <input
              className="input input-primary"
              defaultValue={c}
              id="c"
              name="c"
              required
              
              type="text"
            />
          </div>
                    <div>
            <label htmlFor="d">d = </label>
            <input
              className="input input-primary"
              defaultValue={d}
              id="d"
              name="d"
              required
              
              type="text"
            />
          </div>
          <div className="flex justify-center">
            <input className="btn btn-primary" type="submit" value="Számol" />
          </div>
          <div className="flex justify-around">
            <p>y =  {eredmeny}</p>
          </div>
        </form>
      </div>
    </div>
  );
}