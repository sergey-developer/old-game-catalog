let Singleton = null
class ConfigService {
    constructor() {
        if (Singleton) {
            return Singleton
        } else {
            this.baseUrl = 'https://api.rawg.io/api'
            Singleton = this
        }
    }
}

export default new ConfigService()