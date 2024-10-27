let users: object[];

users = [];

let user: {
  firstName: string;
  LastName: string;
  Id: number;
};
user = {
  firstName: "Sabbir",
  LastName: "Hossain",
  Id: 1,
};
let user1: {
  firstName: string;
  LastName: string;
  Id: number;
};
user1 = {
  firstName: "Sabbir2",
  LastName: "Hossain",
  Id: 2,
};

users.push(user);
users.push(user1);
for (const key in users) {
  console.log(users[key]);
}
console.log(users);
