// index.js
export const handler = async (event) => {
  return {
    statusCode: 200,
    body: JSON.stringify({
      message: "Hello from GitHub Actions! Deployment successful.",
    }),
  };
};