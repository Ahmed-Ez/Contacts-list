import axious from 'axios'

const setAuthToken = token =>{
if(token){
    axious.defaults.headers.common['x-auth-token'] = token
}else{
   delete axious.defaults.headers.common['x-auth-token']
}
};

export default setAuthToken
