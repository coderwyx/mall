import { request } from "./request";

export function getHomeMulitidata() {
  return request({
    url:'/home/multidata'
  })
}