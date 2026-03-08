import { useAuth } from "@/context/Authcontext";
import Link from "next/link";
import { useReactToPrint } from "react-to-print";
import { ImCross } from "react-icons/im";
function Downloadpop({ TargetRef , setShowDownload }) {
  const { user } = useAuth();

  const handlePrint = useReactToPrint({
    contentRef: TargetRef,
    documentTitle: "Biodata",
    onAfterPrint: () => alert("Download initiated!"),
  });

  const handleClose = () => {
    setShowDownload(false);
}
  return (
    <div className="fixed inset-0 bg-[#00000078] flex items-center justify-center z-50">
      <div className="bg-white rounded-lg p-6 w-100 text-center">
        <div onClick={handleClose}><ImCross /></div>
        <h2 className="text-xl font-semibold mb-4">
          Download Your Biodata 🎉
        </h2>

        <p className="mb-6">
          Your biodata is ready to be downloaded as a PDF.
        </p>

        {user ? (
          <button
            onClick={handlePrint}
            className="bg-[#E11D48] text-white py-2 px-4 rounded-lg font-medium hover:bg-rose-700 transition"
          >
            Download without Watermark
          </button>
        ) : (
          <>
            <button 
            onClick={handlePrint}
            className="bg-[#E11D48] text-white py-2 px-4 rounded-lg font-medium hover:bg-rose-700 transition">
              Download with Watermark
            </button>

            <p className="text-gray-500 mt-4">
              Please login to download without watermark{" "}
              <Link href="/login" className="text-blue-600 underline">
                Login
              </Link>
            </p>
          </>
        )}
      </div>
    </div>
  );
}

export default Downloadpop;