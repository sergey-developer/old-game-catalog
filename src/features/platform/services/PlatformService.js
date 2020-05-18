import HttpService from '../../../shared/services/HttpService/HttpService'
import {GET_ALL_GAMES_PLATFORMS_PATH} from '../../../shared/constants/api'

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
    return this.api.get(GET_ALL_GAMES_PLATFORMS_PATH)
  }
}

export default new PlatformService()