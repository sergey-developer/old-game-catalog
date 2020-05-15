import HttpService from '../../../shared/services/HttpService/HttpService'

let Singleton = null
class PlatformService {
  constructor() {
    if (Singleton) {
      return Singleton
    } else {
      this.api = HttpService
      Singleton = this
    }
  }

  getAll = async () => {
    let url = '/platforms'
    return this.api.get(url)
  }
}

export default new PlatformService()