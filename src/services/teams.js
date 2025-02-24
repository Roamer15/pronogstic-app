const FOOTBALL_JSON_URL = 'https://github.com/gilons/prognostiker/blob/master/src/meta/football.json'

export const getTeams = async () => {
    try {
        const response = await fetch(FOOTBALL_JSON_URL)

        if(!response.ok) {
            throw new Error('Failed to fetch teams')
        }
        const data = await response.json()
        return data.clubs
    }
    catch(err) {
        console.error(err)
    }
}