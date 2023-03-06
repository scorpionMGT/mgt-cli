/**
 *接口文档：http://yapi.miguatech.com/project/505/interface/api/cat_22552
 *服务端：陈俭国
 */
 import { fetch } from '@/service/fetch/index'

 export const fetchList = (params) => {
   return fetch('/aomi-base-info-manager/manager/groupMealsEnterprise/page/list', {
     method: 'get',
     params,
   })
 }
 