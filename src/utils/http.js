import axios from 'axios';

axios.defaults.timeout = 15000;
axios.defaults.baseURL = 'http://ppds.zbering.com:8080/zber-mgr/';
// axios.defaults.baseURL = window.location.host + '/';

// 封装get方法
export function get (url, params={}) {
  return new Promise((resolve, reject) => {
    axios.get(url, {params: params}).then(response => {
      resolve(response.data);
    }).catch(err => {
      reject(err);
    })
  })
}
