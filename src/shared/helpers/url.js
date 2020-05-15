import {excludeFalsy} from './common'

const makeQueryString = (obj = {}) => {
  const cleanObj = excludeFalsy(obj)
  const pairs = Object.keys(cleanObj)
    .map(k => k + '=' + obj[k])
    .join('&');
  if (!!pairs) {
    return `?${pairs}`
  }
  return ''
}

const getQueryStringFromUrl = (url) => {
  if (url) {
    let qs = url.split('?')[1]
    if (qs) {
      qs = qs.split('#')[0]
      return `?${qs}`
    }
  }
  return ''
}

export {
  makeQueryString,
  getQueryStringFromUrl
}