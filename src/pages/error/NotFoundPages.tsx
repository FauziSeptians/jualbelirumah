import { useNavigate } from "react-router-dom";

export default function NotFoundPages() {
  const navigate = useNavigate();

  const handleBack = () => {
    navigate(-1); // Kembali ke previous route
  };
  return (
    <div className="w-full h-screen  flex  justify-center items-center text-center">
      <div>
        <div className="text-[120px] font-bold">404</div>
        <div className="text-[24px] font-semibold">
          Ooops! Pages Not Found !!
        </div>
        <div className="mt-3 flex flex-col gap-3">
          <div className="tracking-widest">
            Sorry, the pages you're looking does not exist.
          </div>
          <button onClick={handleBack}>
            <div className="underline">Back to Previous</div>
          </button>
        </div>
      </div>
    </div>
  );
}
