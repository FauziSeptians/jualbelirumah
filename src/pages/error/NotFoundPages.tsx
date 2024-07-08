import { useNavigate } from "react-router-dom";

export default function NotFoundPages() {
  const navigate = useNavigate();

  const handleBack = () => {
    navigate(-1); // Kembali ke previous route
  };
  return (
    <div className="flex h-screen w-full items-center justify-center text-center">
      <div className="bg-red-200">
        <div className="text-lg font-bold">404</div>
        <div className="text-sm font-semibold">
          Ooops! Pages Not Found !!
        </div>
        <div className="mt-3 flex flex-col gap-3">
          <div className="tracking-widest text-sm">
            Sorry, the pages you're looking does not exist.
          </div>
          <button onClick={handleBack}>
            <div className="underline text-sm">Back to Previous</div>
          </button>
        </div>
      </div>
    </div>
  );
}
