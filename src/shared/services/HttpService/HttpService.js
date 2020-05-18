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
}

export default new HttpService()