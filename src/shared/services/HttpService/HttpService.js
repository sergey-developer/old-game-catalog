import ConfigService from '../ConfigService'
import HttpRequest from './HttpRequest'

let Singleton = null
class HttpService extends HttpRequest {
  constructor() {
    if (Singleton) {
      return Singleton
    } else {
      super({baseUrl: ConfigService.baseUrl})
      Singleton = this
    }
  }

  get = async (url, options = {}) => {
    return this.request(url, {...options, method: 'GET'})
  }

  post = async (url, payload, options = {}) => {
    return this.request(url, {...options, method: 'POST', body: payload})
  }

  put = async (url, payload, options = {}) => {
    return this.request(url, {...options, method: 'PUT', body: payload})
  }

  patch = async (url, payload, options = {}) => {
    return this.request(url, {...options, method: 'PATCH', body: payload})
  }

  delete = async (url, payload, options = {}) => {
    return this.request(url, {...options, method: 'DELETE', body: payload})
  }
}

export default new HttpService()