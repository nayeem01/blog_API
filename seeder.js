const fs = require("fs");
const dotenv = require("dotenv");
const mongoos = require("mongoose");
const Users = require("./model/user");
const Posts = require("./model/post");
dotenv.config({ path: "./config/conf.env" });

mongoos.connect(process.env.URL_DB, {
    useCreateIndex: true,
    useFindAndModify: false,
    useNewUrlParser: true,
    useUnifiedTopology: true,
});

//reading data from json file
const users = JSON.parse(
    fs.readFileSync(`${__dirname}/_data/user.json`, `utf-8`)
);
const posts = JSON.parse(
    fs.readFileSync(`${__dirname}/_data/post.json`, `utf-8`)
);

//import
const importData = async () => {
    try {
        await Users.create(users);
        await Posts.create(posts);

        console.log("data imported ! !");
        process.exit();
    } catch (err) {
        console.error(err);
    }
};

//delete
const deleteData = async () => {
    try {
        await Users.deleteMany();
        await Posts.deleteMany();
        console.log("data deleted ! !");
        process.exit();
    } catch (err) {
        console.error(err);
    }
};

if (process.argv[2] === "-i") {
    importData();
} else if (process.argv[2] === "-d") {
    deleteData();
}
