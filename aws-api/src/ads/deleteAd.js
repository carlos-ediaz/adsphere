const { v4 } = require("uuid");
const AWS = require("aws-sdk");

const deleteAd = async (event) => {
  try {
    const dynamodb = new AWS.DynamoDB.DocumentClient();
    const { id } = event.pathParameters;

    await dynamodb
      .delete({
        TableName: "AdsTab",
        Key: { id },
      })
      .promise();

    return {
      status: 200,
      body: {
        message: "Ad deleted"
      },
    };
  } catch (error) {
    console.log(error);
  }
};

module.exports = {
  deleteAd,
};
