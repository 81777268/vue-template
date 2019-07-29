export default(function() {

  if (process.env.NODE_ENV === 'development') {
    // proxy
    return '/apis/za-papa/nms/papa';
    //  Bate
    // return 'http://papa-daily.zhongan.com/za-papa/nms/papa';
    // node
    // return 'http://localhost:3200/admin';
  } else {
    // production
    const href = document.location.origin;
    const appurl = `${href}/za-papa/nms/papa`
    return appurl;
  }
})()
