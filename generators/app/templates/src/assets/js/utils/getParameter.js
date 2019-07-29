export default function() {
  let url = null;
  if (process.env.NODE_ENV === 'development') {
    url = '?id=2312312321';
  } else {
    url = window.location.search;
  }

  let theRequest = new Object();

  if (url.indexOf("?") != -1) {
    var str = url.substr(1);
    let strs = str.split("&");
    for (let i = 0; i < strs.length; i++) {
      theRequest[strs[i].split("=")[0]] = unescape(strs[i].split("=")[1]);
    }
  }
  return theRequest;
}