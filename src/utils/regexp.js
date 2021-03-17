//身份证号码验证
function checkIdCard (val) {
  var p = /^[1-9]\d{5}(18|19|20)\d{2}((0[1-9])|(1[0-2]))(([0-2][1-9])|10|20|30|31)\d{3}[0-9Xx]$/;
  var factor = [7, 9, 10, 5, 8, 4, 2, 1, 6, 3, 7, 9, 10, 5, 8, 4, 2];
  var parity = [1, 0, 'X', 9, 8, 7, 6, 5, 4, 3, 2];
  val = String(val);
  var code = val.substring(17);
  if (p.test(val)) {
    var sum = 0;
    for (var i = 0; i < 17; i++) {
      sum += val[i] * factor[i];
    }
    if (parity[sum % 11] == code.toUpperCase()) {
      return true;
    }
  }
  return false;
}


export const regExp = {
  phone(value){
    return  /^\d{7,11}$/g.test(value);
    // return /^(13[0-9]|14[0-9]|15[0-9]|17[0-9]|18[0-9])\d{7}$/.test(value);
  },
  email(value){
    return /^[a-zA-Z0-9_.-]+@[a-zA-Z0-9-]+(\.[a-zA-Z0-9-]+)*\.[a-zA-Z0-9]{2,6}$/g.test(value)
  },
  password(value){
  // return /^(?![a-zA-Z]+$)(?![A-Z0-9]+$)(?![A-Z\W_!@#$%^&*`~()-+=]+$)(?![a-z0-9]+$)(?![a-z\W_!@#$%^&*`~()-+=]+$)(?![0-9\W_!@#$%^&*`~()-+=]+$)[a-zA-Z0-9\W_!@#$%^&*`~()-+=]{8,10}$/.test(value);
   return /^[a-zA-Z0-9]{8,20}$/.test(value)
  },
  idCard(value){
    return /^[0-9Xx]{18}$/.test(value);
  },
  passPortCard(value){
    return /^[0-9a-zA-Z]{5,30}$/.test(value);
  },
  isCN(){
    return /^[\u4E00-\u9FA5]/.test(value)
  },
}