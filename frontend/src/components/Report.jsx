const getBarColor = (score) =>
  score < 6 ? "bg-red-500" : "bg-green-500";

const getTextColor = (score) =>
  score < 6 ? "text-red-400" : "text-green-400";

const Report = ({ report }) => {
  const { skills } = report;

  // overall score calculation
  const skillValues = Object.values(skills);
  const overallScore = (
    skillValues.reduce((a, b) => a + b, 0) / skillValues.length
  ).toFixed(1);

  return (
    <div className="bg-black/40 border border-green-900 rounded-2xl p-8">
      <h2 className="text-2xl font-semibold mb-6">
        Summary of Scores
      </h2>

    
      <div className="mb-10">
      <span
          className={`text-5xl font-bold ${
            overallScore < 6 ? "text-red-400" : "text-green-400"
          }`}
        >
          {overallScore}
        </span>
        <span className="text-5xl font-bold text-gray-400"> / 9</span>
      </div>

      <div className="space-y-6">
        {Object.entries(skills).map(([skill, score]) => (
          <div key={skill}>
            <div className="flex justify-between mb-2">
              <span className="uppercase tracking-wide text-sm">
                {skill}
              </span>
              <span className={`text-sm font-semibold ${getTextColor(score)}`}>
                {score} / 9
              </span>
            </div>

            <div className="w-full h-3 bg-gray-800 rounded-full">
              <div
                className={`h-3 rounded-full ${getBarColor(score)}`}
                style={{ width: `${(score / 9) * 100}%` }}
              />
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Report;
