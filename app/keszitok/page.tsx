export default function KeszitokPage() {



  return (
    <div id="elem" className="flex min-h-screen flex-col items-center justify-center bg-blue-200 p-4">
      <div className="flex w-full max-w-3xl flex-col gap-10 rounded-xl bg-blue-100 p-3 shadow-xl shadow-gray-500">
        <div className="rounded-xl bg-white p-5 shadow-inner shadow-slate-200">
          <form className="flex flex-col gap-4">
            <p className="text-2xl text-center font-semibold">Készítők</p>
            <div className="flex flex-col gap-3">
              <p className="font-semibold text-xl mb-5 mt-10 ml-3">Juranovitz Olivér:</p>
              <p className="text-xl text-left ml-7 mb-2">Weboldal építése</p>
              <p className="text-xl text-left ml-7 ">Weboldal tesztelése</p>
            </div>
            <div className="flex flex-col gap-3">
              <p className="font-semibold text-xl mb-5 mt-10 ml-3">Kéki Mihály:</p>
              <p className="text-xl text-left ml-7 mb-2">Webdesign</p>
              <p className="text-xl text-left ml-7 mb-10">Bugfix</p>
            </div>
          </form>  
        </div>
      </div>
    </div>
  )
}