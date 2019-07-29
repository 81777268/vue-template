import tk from '../../assets/js/token';
let token = null;

export default {
  async axios(param) {
    param = param || {};
    param.method = (
      param.method == null ?
      'GET' :
      param.method.toUpperCase());
    param.url = param.url || '';
    param.data = param.data || null;

    token = await tk.get();

    const res = await new Promise(function(resolve, reject) {

      let _xhr = null,
        _xhrArr = [],
        _paramData = null,
        random = Math.random();

      if (window.XMLHttpRequest) {
        _xhr = new XMLHttpRequest();
      } else {
        _xhr = new ActiveXObject('Microsoft.XMLHTTP')
      }

      for (var key in param.data) {
        _xhrArr.push(key + '=' + param.data[key])
      }

      _paramData = _xhrArr.join('&');

      if (param.method.toUpperCase() == 'POST') {
        _xhr.open(param.method, param.url);
        _xhr.setRequestHeader('Content-Type', 'application/json');
        _xhr.setRequestHeader('Accept', 'application/json');
        _xhr.setRequestHeader('u', token);
        _xhr.send(JSON.stringify(param.data));
      } else {
        if (_paramData) {
          _xhr.open('GET', param.url + '?' + _paramData);
        } else {
          _xhr.open('GET', param.url);
        }

        _xhr.setRequestHeader('u', token);
        _xhr.send(null);
      }

      _xhr.onreadystatechange = function() {

        if (_xhr.readyState != 4) {
          return;
        }
        if (_xhr.status === 200) {
          resolve(_xhr.response)
        } else {
          resolve(new Error(this.statusText));
        }
      }
    })

    return JSON.parse(res);
  }
}
