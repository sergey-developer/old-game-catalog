import HttpService from '../../../shared/services/HttpService/HttpService'

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
    const response = await this.api.get(`/games/${slug}/screenshots`)
    
    return {
      count: response.count,
      result: response.results
    }
  }
}

export default new GameScreenshotService()