const PostMessage = async (client) => {
  try {
    await client.connect();
    const db = client.db("commson");
    const messages = db.collection("messages");
    const doc = {
      text: "text goes here",
      author: "author",
      destination: "destination",
      group: false,
    };
    const result = await messages.insertOne(doc);
    console.log(`A message was inserted\n\t_id: ${result.insertId}`);
  } finally {
    await client.close();
  }
};

const PostUser = async (client) => {
  try {
    await client.connect();
    const db = client.db("commson");
    const users = db.collection("users");
    const doc = {
      username: "username",
      contacts: ["one", "Two", "three"],
    };
    const result = await users.insertOne(doc);
    console.log(`A message was inserted\n\t_id: ${result.insertId}`);
  } finally {
    await client.close();
  }
};

const PostGroup = async (client) => {
  var resultStatus = "";
  try {
    await client.connect();
    const db = client.db("commson");
    const groups = db.collection("groups");
    const doc = {
      gname: "gname",
      members: ["one", "Two", "three"],
    };
    const result = await groups.insertOne(doc);
    console.log(`A message was inserted\n\t_id: ${result.insertId}`);
  } finally {
    await client.close();
  }
};

export default { PostGroup, PostUser, PostMessage };
