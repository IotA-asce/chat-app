const GetMessages = (client) => {};

const GetUsers = (client) => {};

const GetGroups = async (client, clientUsername) => {
  try {
    await client.connect();
    const database = client.db("commson");
    const groups = database.collection("groups");
    const query = { members: { $contains: clientUsername } };
    // const options = {
    //   sort: { title: 1 },
    //   projection: { _id: 0, title: 1, imdb: 1 },
    // };
    // const cursor = movies.find(query, options);
    // if ((await cursor.count()) === 0) {
    //   console.log("No documents found!");
    // }
    // await cursor.forEach(console.dir);
    // const groupList = groups.find(query);
    const groupList = groups.find();
    if (await groupList.count() === 0){
      console.log("No documents found");
    }
    return await groupList;
  } finally {
    await client.close();
  }
};

module.exports = { GetMessages, GetGroups, GetUsers };
