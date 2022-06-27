import axios from "axios"
import renderTVShowCard from "../components/TVShowCard"
import { API_URL } from "../config"
import { getTvShow } from "../models/TVShow"
import updateFavs from "./favUtils"

const searchTVShows = async () => {

    const $ = document.querySelector.bind(document)
    
    const http = axios.create({
    baseURL: API_URL,
    })
    
    const params = new URLSearchParams(document.location.search)
    const filter = params.get('filter')
        

    if (filter) {
        
        const response = await http.get('/search/shows', {
            params: { q: filter }
        })
            
        const resultArea = <HTMLDivElement>$('#result-area')
        resultArea.innerHTML = ''

        if (response.status == 200) {
            const { data } = response
            
            data.forEach((jsonObj: any) => {
                const { show } = jsonObj
                const tvShow = getTvShow(show)
                renderTVShowCard(tvShow, resultArea)
            })

        }
    } 

    updateFavs()
}

export default searchTVShows