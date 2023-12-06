const { v4 } = require("uuid");
const AWS = require("aws-sdk");

const createAd = async (event) => {
  try {
    const dynamodb = new AWS.DynamoDB.DocumentClient();
    const { title, description } = JSON.parse(event.body);
    const createdAt = new Date();
    const id = v4();

    const newAd = {
      id,
      title,
      description,
      createdAt,
      visible: true,
    };
    await dynamodb
      .put({
        TableName: "AdsTable",
        Item: newAd,
      })
      .promise();

    return {
      status: 200,
      body: newAd,
    };
  } catch (error) {
    console.log(error);
  }
};

module.exports = {
  createAd,
};
