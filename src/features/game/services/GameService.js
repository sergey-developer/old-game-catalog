import HttpService from '../../../shared/services/HttpService/HttpService'
import {getQueryStringFromUrl, makeQueryString} from '../../../shared/helpers/url'

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
    const response = await this.api.get(`/games${qs}`)

    const queryString = getQueryStringFromUrl(response.next)
    const nextPage = new URLSearchParams(queryString).get('page')

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