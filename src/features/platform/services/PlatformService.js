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
    return this.api.get('/platforms')
  }
}

export default new PlatformService()