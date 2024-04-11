import { useNavigate } from "react-router-dom";

export default function ErrorsPages() {
  const navigate = useNavigate();

  const handleBack = () => {
    navigate(-1); // Kembali ke previous route
  };
  return (
    <div className="w-full h-screen  flex  justify-center items-center text-center">
      <div>
        <div className="text-[120px] font-bold">500</div>
        <div className="text-[24px] font-semibold">
          Ooops! Something went wrong !!
        </div>
        <div className="mt-3 flex flex-col gap-3">
          <div className="tracking-widest">
            Sorry, we're not exactly sure what happend, but something went
            wrong.
          </div>
          <button onClick={handleBack}>
            <div className="underline">Back to Previous</div>
          </button>
        </div>
      </div>
    </div>
  );
}
