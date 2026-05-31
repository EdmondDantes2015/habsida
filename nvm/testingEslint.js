function greet(user) {
  if (user) {
    return 'Hello, ' + user + '!';
  } else {
    return 'Hello, Guest!';
  }
}

var users = [
  { name: 'Stan', age: 30 },
  { name: 'Anna', age: 25 },
  { name: 'Mike', age: 35 },
];

users.forEach(function (user) {
  console.log(greet(user.name));
  console.log('Age: ' + user.age);
});
