import HttpService from '../../../shared/services/HttpService/HttpService'
import {getQueryStringFromUrl, makeQueryString} from '../../../shared/helpers/url'
import {GET_ALL_GAMES_PATH} from '../../../shared/constants/api'

let Singleton = null
class GameService {
  constructor() {
    if (Singleton) {
      return Singleton
    } else {
      this.api = HttpService
      Singleton = this
    }
  }

  getAll = async (filter) => {
    const qs = makeQueryString(filter)
    const url = GET_ALL_GAMES_PATH + qs
    const response = await this.api.get(url)

    const qsFromUrl = getQueryStringFromUrl(response.next)
    const nextPage = new URLSearchParams(qsFromUrl).get('page')

    return {
      result: response.results,
      nextPage
    }
  }

  getOneBySlug = async (slug) => {
    return this.api.get(`/games/${slug}`)
  }
}

export default new GameService()