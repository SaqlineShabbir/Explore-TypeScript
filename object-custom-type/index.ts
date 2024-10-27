type User = {
  firstName: string;
  LastName: string;
  Id: number;
};

let users: User[];

users = [];

let user: User;

user = {
  firstName: "Sabbir",
  LastName: "Hossain",
  Id: 1,
};

let user1: User;
user1 = {
  firstName: "Ahmed",
  LastName: "Sab",
  Id: 2,
};

users.push(user);
users.push(user1);

for (const key in users) {
  console.log(users[key]);
}
console.log(users);
