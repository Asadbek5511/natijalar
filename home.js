// 1-masala
function task1(callback) {
  setTimeout(() => {
    callback("Salom, dunyo!");
  }, 2000);
}
task1(res => console.log(res));


// 2-masala
function task2(callback) {
  setTimeout(() => {
    callback("Xato yuz berdi!");
  }, 1000);
}
task2(res => console.log(res));


// 3-masala
function task3(callback) {
  setTimeout(() => {
    callback(5);
  }, 1000);
}
task3(num => {
  const result = num * 2;
  console.log(result);
});


// 4-masala
function task4(callback) {
  let results = [];
  setTimeout(() => {
    results.push("1s");
  }, 1000);
  setTimeout(() => {
    results.push("2s");
  }, 2000);
  setTimeout(() => {
    results.push("3s");
    callback(results);
  }, 3000);
}
task4(res => console.log(res));


// 5-masala
function task5(callback) {
  let finished = false;
  setTimeout(() => {
    if (!finished) {
      finished = true;
      callback("1s g'olib");
    }
  }, 1000);
  setTimeout(() => {
    if (!finished) {
      finished = true;
      callback("2s g'olib");
    }
  }, 2000);
}
task5(res => console.log(res));


// 6-masala
function loadUserData(userId, callback) {
  setTimeout(() => {
    if (userId % 2 === 0) callback("Success");
    else callback("Error");
  }, 1000);
}
loadUserData(2, res => console.log(res));
loadUserData(3, res => console.log(res));


// 7-masala
function retryTask(fn, retries, callback) {
  fn(result => {
    if (result === "Success") callback(result);
    else if (retries > 1) retryTask(fn, retries - 1, callback);
    else callback("Urinishlar tugadi");
  });
}


// 8-masala
function timeoutTask(callback) {
  let done = false;
  setTimeout(() => {
    if (!done) {
      done = true;
      callback("Timeout error");
    }
  }, 2000);
  setTimeout(() => {
    if (!done) {
      done = true;
      callback("Success");
    }
  }, 1000);
}
timeoutTask(res => console.log(res));


// 9-masala
function sequentialTasks(callback) {
  setTimeout(() => {
    console.log("1-qadam");
    setTimeout(() => {
      console.log("2-qadam");
      setTimeout(() => {
        console.log("3-qadam");
        callback();
      }, 1000);
    }, 1000);
  }, 1000);
}
sequentialTasks(() => console.log("Tugadi"));


// 10-masala
function getUserDataFlow(userId, callback) {
  setTimeout(() => {
    const user = { id: userId };
    setTimeout(() => {
      const posts = ["post1"];
      setTimeout(() => {
        const comments = ["comment1"];
        callback({ user, posts, comments });
      }, 1000);
    }, 1000);
  }, 1000);
}
getUserDataFlow(1, res => console.log(res));


// 11-masala
function RateLimiter(max, interval) {
  let queue = [];
  setInterval(() => {
    if (queue.length) queue.shift()();
  }, interval / max);

  this.execute = function (task) {
    queue.push(task);
  };
}


// 12-masala
function divide(a, b, callback) {
  if (b === 0) callback("Bolib bolmaydi");
  else callback(a / b);
}
divide(10, 2, res => console.log(res));
divide(10, 0, res => console.log(res));


// 13-masala
function waitAndReturn(value, seconds, callback) {
  setTimeout(() => {
    callback(value);
  }, seconds * 1000);
}
waitAndReturn("OK", 2, res => console.log(res));


// 14-masala
function processNumber(num, callback) {
  let a = num * 10;
  console.log(a);
  let b = a - 5;
  console.log(b);
  let c = b / 2;
  console.log(c);
  callback(c);
}
processNumber(5, res => console.log(res));


// 15-masala
function checkAge(age, callback) {
  if (age >= 18) callback("Ruxsat berildi");
  else callback("Yosh yetarli emas");
}
checkAge(20, res => console.log(res));
checkAge(15, res => console.log(res));


// 16-masala
function fetchData(url, callback) {
  if (!url) callback("Xatolik: URL bo'sh");
  else callback("Ma'lumot olindi");
}
fetchData("", res => console.log(res));
fetchData("api", res => console.log(res));


// 17-masala
function getAllData(callback) {
  let data = {};
  setTimeout(() => {
    data.users = "Users";
    setTimeout(() => {
      data.posts = "Posts";
      setTimeout(() => {
        data.comments = "Comments";
        callback(data);
      }, 1000);
    }, 1000);
  }, 1000);
}
getAllData(res => console.log(res));
