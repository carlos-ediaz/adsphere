const { v4 } = require("uuid");
const AWS = require("aws-sdk");

const createAd = async (event) => {
  const dynamodb = new AWS.DynamoDB.DocumentClient();
  const { title, description } = JSON.parse(event.body);
  const createdAt = new Date();
  const id = v4();

  const newAd = {
    id,
    title,
    description,
    createdAt,
  };
  await dynamodb
    .put({
      TableName: "AdsTable",
      Item: newAd,
    })
    .promise();

  return {
    statusCode: 200,
    body: JSON.stringify(newAd),
  };
};

module.exports = {
  createAd,
};
