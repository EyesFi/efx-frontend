import axios from 'axios';
import QS from 'qs';

// axios.defaults.baseURL = 'http://localhost:3002';
axios.defaults.baseURL = '/'; 


// set timeout 
axios.defaults.timeout = 10000;

// set post header
// axios.defaults.headers.post['Content-Type'] = 'application/x-www-form-urlencoded;charset=UTF-8';


// set response interception
axios.interceptors.response.use(    
    response => {   
        if (response.status === 200) {            
            return Promise.resolve(response);        
        } else {            
            return Promise.reject(response);        
        }    
    },    
    error => {            
        if (error.response.status) {            
            switch (error.response.status) {           
                case 401:    // user not login      
                    router.replace({                        
                        path: '/login',                        
                        query: { 
                            redirect: router.currentRoute.fullPath 
                        }
                    });
                    break;             
                case 403: // token expired
                     Toast({
                        message: 'Login expired, please login again',
                        duration: 1000,
                        forbidClick: true
                    });
                    localStorage.removeItem('token');
                    store.commit('loginSuccess', null);
                    setTimeout(() => {                        
                        router.replace({                            
                            path: '/login',                            
                            query: { 
                                redirect: router.currentRoute.fullPath 
                            }                        
                        });                    
                    }, 1000);                    
                    break; 
                case 404:   // request not found
                    Toast({
                        message: 'Not found',
                        duration: 1500,
                        forbidClick: true
                    });
                    break;
                default:  // other error
                    Toast({
                        message: error.response.data.message,
                        duration: 1500,
                        forbidClick: true
                    });
            }
            return Promise.reject(error.response);
        }
    }    
);

export function get(url, params) {
    return new Promise((resolve, reject) => {
        axios.get(url, {
            params: params
        }).then(res => {
            resolve(res)
        }).catch(err => {
            reject(err);
        })
    })
}

export function post(url, params) {
    return new Promise((resolve, reject) => {
        axios.post(url, QS.stringify(params))
        .then(res => {
            resolve(res.data);
        }).catch(err =>{
            reject(err.data)
        })
    });
}


export function post_raw(url, params) {
    return new Promise((resolve, reject) => {
        axios.post(url, params)
        .then(res => {
            resolve(res.data);
        }).catch(err =>{
            reject(err.data)
        })
    });
}
