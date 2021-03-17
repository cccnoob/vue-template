

// //获取随机数
// export function getRandom(min,max){
//     return Math.floor(Math.random() * (max - min + 1) + min)
// }

export let mixinFunc = {
    install(Vue, options) {
        Vue.mixin({
            data() {
              return {
              };
            },
            methods: {
                // 格式化 千分位 数字
                thousandFormat(num) {
                    return (num+ '').replace(/(\d{1,3})(?=(\d{3})+(?:$|\.))/g,'$1,');
                },
                //获取随机数
                getRandom(min,max){
                    return Math.floor(Math.random() * (max - min + 1) + min)
                },
                //大数字添加单位
                numberUnitFormat(value) {
                  var param = {};
                  var k = 10000,
                      sizes = ['', '万', '亿', '万亿'],
                      i;
                      if(value < k){
                          param.value = value
                          param.unit=''
                      }else{
                          i = Math.floor(Math.log(value) / Math.log(k)); 
                          var numStr = String(value / Math.pow(k, i));
                          var index = numStr.indexOf('.');
                          if(index !== -1){
                            numStr = numStr.substring(0, 2 + index + 1)
                          }
                          param.value = Number(numStr);
                          param.unit = sizes[i];
                      }
                  return param;
                }
            }
        })
    }
}
