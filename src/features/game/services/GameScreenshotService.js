import HttpService from '../../../shared/services/HttpService/HttpService'
import {GET_ALL_GAME_SCREENSHOTS_PATH} from '../../../shared/constants/api'

let Singleton = null
class GameScreenshotService {
  constructor() {
    if (Singleton) {
      return Singleton
    } else {
      this.api = HttpService
      Singleton = this
    }
  }

  getAllByGameSlug = async (slug) => {
    const url = GET_ALL_GAME_SCREENSHOTS_PATH.replace(':slug', slug)
    const response = await this.api.get(url)
    
    return {
      result: response.results
    }
  }
}

export default new GameScreenshotService()