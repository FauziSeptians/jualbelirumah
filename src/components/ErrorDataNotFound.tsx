export default function ErrorDataNotFound() {
  return (
    <div className="w-full h-screen  flex  justify-center items-center text-center ">
      <div>
        <div className="text-[120px] font-bold">404</div>
        <div className="text-[24px] font-semibold">
          Ooops! Data Not Found !!
        </div>
        <div className="mt-3 flex flex-col gap-3">
          <div className="tracking-widest">
            Sorry, the data you're looking does not exist.
          </div>
        </div>
      </div>
    </div>
  );
}
