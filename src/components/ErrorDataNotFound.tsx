export default function ErrorDataNotFound() {
  return (
    <div className="flex h-screen w-full items-center justify-center text-center">
      <div className="mx-3">
        <div className="text-7xl font-bold">404</div>
        <div className="text-sm font-semibold">
          Ooops! Data Not Found !!
        </div>
        <div className="mt-3 flex flex-col gap-3">
          <div className="tracking-widest text-sm">
            Sorry, the data you're looking does not exist.
          </div>
        </div>
      </div>
    </div>
  );
}
