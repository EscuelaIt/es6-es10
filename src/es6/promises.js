const getUser = (userId, callback) => {
  setTimeout(() => {
    console.log('userId', userId);
    callback();
  }, 5000);
}

getUser(1, () => {
  getUser(2, () => {
    getUser(3, () => {
      console.log('termine');
    });
  });
});

const getPet = (petId) => {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      console.log('petId', petId);
      resolve();
    }, 5000);
  });
}

getPet(1)
.then(() => getPet(2))
.then(() => getPet(3))
.then(() => getPet(4))
.then(() => {
  console.log('termine');
})

