import axios from '@/libs/api.request'

export const Add = ({ Host, Port }) => {
  const data = {
    Host,
    Port
  }
  return axios.request({
    url: 'Transmit/Add',
    data,
    method: 'post'
  })
}

export const Remove = ({ Host, Port }) => {
  const data = {
    Host,
    Port
  }
  return axios.request({
    url: 'Transmit/Remove',
    data,
    method: 'post'
  })
}

export const GetAll = () => {
  return axios.request({
    url: 'Transmit/GetAll',
    method: 'get'
  })
}
