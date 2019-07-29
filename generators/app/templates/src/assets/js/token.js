const key = 'mytoken';

const setToken = function(token) {
  return new Promise(function(resolve, reject) {
    localStorage.setItem(key, token);
    resolve(true);
  })
};

const getToken = function() {
  return new Promise(function(resolve, reject) {
    let data = localStorage.getItem(key);
    resolve(data)
  });
};

export default {
  get: function() {
    return getToken();
  },
  set: function(token) {
    return setToken(token);
  }
};