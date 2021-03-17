// import request from '@/utils/request'
import { get, post } from "../utils/http";

// 首页
export  const  getHomeData = formData => get(`/api/data/index`,formData)


