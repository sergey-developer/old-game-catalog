let Singleton = null
class ResponseHandler {
  constructor() {
    if (Singleton) {
      return Singleton
    } else {
      Singleton = this
    }
  }

  #parseJson = async (response) => {
    try {
      return response.json()
    } catch (e) {
      throw new Error('Something went wrong')
    }
  }

  #handleByCode = (response) => {
    if (response.status === 404) {
      throw new Error('Not found')
    }
    if (response.status >= 500) {
      throw new Error('Something went wrong')
    }

    return response
  }

  handle = async (response) => {
    const rawResponse = this.#handleByCode(response)
    return this.#parseJson(rawResponse)
  }
}

export default new ResponseHandler()