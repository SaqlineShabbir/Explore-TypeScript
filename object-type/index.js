var users;
users = [];
var user;
user = {
    firstName: "Sabbir",
    LastName: "Hossain",
    Id: 1,
};
var user1;
user1 = {
    firstName: "Sabbir2",
    LastName: "Hossain",
    Id: 2,
};
users.push(user);
users.push(user1);
for (var key in users) {
    console.log(users[key]);
}
console.log(users);
