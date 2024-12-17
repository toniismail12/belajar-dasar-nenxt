import axios from 'axios';

export default axios.create({

    baseURL: "https://gwkong.pusri.co.id/service-iam-dev",
    headers: {
        'Authorization': process.env.NEXT_PUBLIC_KEY_SVC_IAM,
    },

});  
