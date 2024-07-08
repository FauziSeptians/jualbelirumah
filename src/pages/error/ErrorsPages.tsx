import { useNavigate } from "react-router-dom";

export default function ErrorsPages() {
  const navigate = useNavigate();

  const handleBack = () => {
    navigate(-1); // Kembali ke previous route
  };
  return (
    <div className="flex h-screen w-full items-center justify-center text-center">
      <div>
        <div className="text-lg font-bold">500</div>
        <div className="text-sm font-semibold">
          Ooops! Something went wrong !!
        </div>
        <div className="mt-3 flex flex-col gap-3">
          <div className="tracking-widest text-sm">
            Sorry, we're not exactly sure what happend, but something went
            wrong.
          </div>
          <button onClick={handleBack}>
            <div className="underline text-sm">Back to Previous</div>
          </button>
        </div>
      </div>
    </div>
  );
}
