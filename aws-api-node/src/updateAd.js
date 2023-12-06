const AWS = require("aws-sdk");

const updateAd = async (event) => {
  try {
    const dynamodb = new AWS.DynamoDB.DocumentClient();
    const { id } = event.pathParameters;
    const body = JSON.parse(event.body);

    let updateExpression = "SET";
    let expressionAttributeValues = {};
    for (key in body) {
      updateExpression += ` ${key} = :${key},`;
      expressionAttributeValues[`:${key}`] = body[key];
    }
    updateExpression = updateExpression.slice(0, -1);
    await dynamodb
      .update({
        TableName: "AdsTable",
        Key: { id },
        UpdateExpression: updateExpression,
        ExpressionAttributeValues: expressionAttributeValues,
        ReturnValues: "ALL_NEW",
      })
      .promise();
    return {
      status: 200,
      body: JSON.stringify({
        message: "Ad updated ",
      }),
    };
  } catch (error) {
    console.log(error);
  }
};

module.exports = {
  updateAd,
};
