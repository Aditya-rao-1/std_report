import { useEffect, useState } from "react";
import { fetchReport } from "./services/api";

import Report from "./components/Report";
import ScoreChart from "./components/ScoreChart";
import Feedback from "./components/Feedback";

const App = () => {
  const [report, setReport] = useState(null);

  useEffect(() => {
    fetchReport().then(setReport);
  }, []);

  if (!report) {
    return (
      <div className="min-h-screen bg-black text-white flex items-center justify-center">
        Loading...
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gradient-to-b from-green-950 via-black to-black text-white py-12">
      <div className="max-w-5xl mx-auto px-6">
        <h1 className="text-4xl font-bold mb-7">
          Speaking Assessment Report
        </h1>
        <p className="text-gray-400 mb-2">
          <span className="text-green-400 text-2xl">
            {report.studentName}
          </span>
        </p>

        <p className="text-gray-400 mb-8 ">
          Date of Examination:{" "}
          <span className="text-gray-300">
            {new Date(report.examDate).toLocaleDateString()}
          </span>
        </p>


        <Report report={report} />

        <div className="my-16">
          <ScoreChart skills={report.skills} />
        </div>

        <Feedback skills={report.skills} />
      </div>
    </div>
  );
};

export default App;
