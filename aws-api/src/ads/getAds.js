const AWS = require("aws-sdk");

const getAds = async (event) => {
  try {
    const dynamodb = new AWS.DynamoDB.DocumentClient();
    const result = await dynamodb
      .scan({
        TableName: "AdsTab",
      })
      .promise();
    const ads = result.Items;
    return {
      status: 200,
      body: { ads },
    };
  } catch (error) {
    console.log(error);
  }
};

module.exports = {
  getAds,
};
