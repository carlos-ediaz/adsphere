const AWS = require("aws-sdk");

const getAd = async (event) => {
  try {
    const dynamodb = new AWS.DynamoDB.DocumentClient();
    const { id } = event.pathParameters;
    const result = await dynamodb
      .get({
        TableName: "AdsTable",
        Key: {
          id,
        },
      })
      .promise();
    const ad = result.Item;
    return {
      status: 200,
      body: { ad },
    };
  } catch (error) {
    console.log(error);
  }
};

module.exports = {
  getAd,
};
