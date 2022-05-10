import request from '@utils/request'

// test

export const getCake = (params) => {
  return request('get', '/cakeChart', params)
}