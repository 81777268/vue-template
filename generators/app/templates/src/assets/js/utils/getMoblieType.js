 /**
  * [getMoblieType 根据设备跳转商城]
  * @param  {[type]} moblieType [navigator.userAgent--设备信息]
  */
 export default function(moblieType) {
   let msg = moblieType;
   let msg_start = msg.indexOf('(');
   let msg_end = msg.indexOf(';');
   let type = msg.substring(msg_start + 1, msg_end);

   if (type == 'iPhone' || type == 'iPad' || type == 'iPod') {
     return 'ios';
   } else {
     return 'false';
   }
 }