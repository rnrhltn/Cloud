// index.js
exports.handler = async (event) => {
  return {
    statusCode: 200,
    body: JSON.stringify({
      message: "Hello from GitHub Actions! This is the classic syntax.",
    }),
  };
};