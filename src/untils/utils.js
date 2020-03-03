import React from 'react';
import {Context} from 'react';
import qs from 'querystring';
import { ReactReduxContext } from 'react-redux';
//处理fetch请求
export function fetchPost(url,data){
    return fetch(url,{
        method:'post',
        headers:{
            'content-type':'application/x-www-from-urlencoded'
        },
        body:qs.stringify(data)
    })
}

export function fetchGet(url,data){
    let strData = qs.stringify(data);
    if(url.indexOf('?')==-1){//如果地址栏没有？加上？拼接参数
        url=url+'?'+strData
    }else{//如果有？ 地址后拼接参数
        url=url+'&'+strData
    }
    // console.log(url);
    return fetch(url)
}
export const PLcontext = React.createContext();