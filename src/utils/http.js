
import axios from 'axios'
// axios 配置
axios.defaults.timeout = 60000;
axios.defaults.withCredentials = true;

// http request 拦截器
axios.interceptors.request.use(
  config => {
    config.headers = {
      'Accept': 'application/json, text/javascript, */*',
      'Content-Type': 'application/json',
    };
    return config;
  },
  err => {
    return Promise.reject(err);
  }
);

// http response 拦截器
axios.interceptors.response.use(
  response => {
    if (response.data.status != 1) {

    }
    return response;
  },
  error => {
    return Promise.reject(error.response.data);
  });
export default axios;

/**
 * fetch 请求方法
 * @param url
 * @param params
 * @returns {Promise}
 */
export function fetch(url, params = {}) {
  return new Promise((resolve, reject) => {
    axios.get(url, {
        params: params
      })
      .then(response => {
        resolve(response.data);
      })
      .catch(err => {
        reject(err)
      })
  })
}

/**
 * post 请求方法
 * @param url
 * @param data
 * @returns {Promise}
 */
export function post(url, data = {}, responseType) {
  return new Promise((resolve, reject) => {
    axios.post(url, data, responseType)
      .then(response => {
        if (response.headers['content-disposition'] != undefined) {
          resolve(response);
        } else {
          resolve(response.data);
        }
      
        // resolve(response.data);
      }, err => {
        reject(err);
       
      })
  })
}


/**
 * get 请求方法
 * @param url
 * @param data
 * @returns {Promise}
 */
export function get(url, data = {}) {
  // debugger
  return new Promise((resolve, reject) => {
    axios.get(url, {
      params:data
    })
      .then(response => {
        resolve(response.data);
        
      }, err => {
        reject(err);
        
      })
  })
}





/**
 * patch 方法封装
 * @param url
 * @param data
 * @returns {Promise}
 */
export function patch(url, data = {}) {
  return new Promise((resolve, reject) => {
    axios.patch(url, data)
      .then(response => {
        resolve(response.data);
      }, err => {
        reject(err);
      })
  })
}

/**
 * put 方法封装
 * @param url
 * @param data
 * @returns {Promise}
 */
export function put(url, data = {}) {
  return new Promise((resolve, reject) => {
    axios.put(url, data)
      .then(response => {
        resolve(response.data);
      }, err => {
        reject(err);
      })
  })
}
