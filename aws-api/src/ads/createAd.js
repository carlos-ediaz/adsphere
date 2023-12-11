const { v4 } = require("uuid");
const AWS = require("aws-sdk");
// const middy = require("@middy/core");
// const jsonBodyParser = require('@middy/http-json-body-parser')
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
      createdAt: createdAt.toISOString(),
      visible: true,
    };
    await dynamodb
      .put({
        TableName: "AdsTab",
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
