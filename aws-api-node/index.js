export async function handler(event) {
  return {
    statusCode: 200,
    body: JSON.stringify(
      {
        message: "Hello",
        input: event,
      },
      null,
      2
    ),
  };
}
