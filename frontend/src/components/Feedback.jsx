const getFeedback = (score) => {
  if (score >= 8)
    return "Excellent performance with strong control and natural usage.";
  if (score >= 6)
    return "Good performance with minor inaccuracies.";
  if (score >= 4)
    return "Fair performance but lacks consistency.";
  return "Weak performance. Significant improvement required.";
};

const Feedback = ({ skills }) => {
  return (
    <div className="bg-black/40 border border-green-900 rounded-2xl p-8">
      <h2 className="text-2xl font-semibold mb-6">
        Descriptive Feedback
      </h2>

      <div className="space-y-3">
        {Object.entries(skills).map(([skill, score]) => (
          <p key={skill} className="text-gray-300">
            <span
              className={`font-semibold uppercase ${
                score < 6 ? "text-red-400" : "text-green-400"
              }`}
            >
              {skill}:
            </span>{" "}
            {getFeedback(score)}
          </p>
        ))}
      </div>
    </div>
  );
};

export default Feedback;
