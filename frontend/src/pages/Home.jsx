import Navbar from "../components/Navbar";

function Home() {
  return (
    <>
      <Navbar />

      <div className="min-h-screen flex flex-col justify-center items-center bg-slate-100 text-center px-6">
        <h1 className="text-5xl font-bold text-blue-700 mb-6">
          Medical Diagnosis Assistant
        </h1>

        <p className="text-xl text-gray-600 max-w-2xl">
          Upload your medical reports, ask questions, and receive
          AI-assisted explanations using Retrieval-Augmented Generation (RAG).
        </p>

        <div className="mt-8 flex gap-4">
          <button className="bg-blue-600 text-white px-6 py-3 rounded-xl hover:bg-blue-700">
            Get Started
          </button>

          <button className="border border-blue-600 text-blue-600 px-6 py-3 rounded-xl hover:bg-blue-50">
            Learn More
          </button>
        </div>
      </div>
    </>
  );
}

export default Home;