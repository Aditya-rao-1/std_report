export const fetchReport = async () => {
  const response = await fetch("http://localhost:5000/api/report");
  return response.json();
};
