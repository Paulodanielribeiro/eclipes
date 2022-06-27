import axios from 'axios'
import { API_URL } from '../config'
import { getTvShow } from '../models/TVShow'
import updateFavs, { ClearFavsFunction, renderNoFavs } from '../utils/favUtils'
import { renderLoadingDiv } from '../utils/loadingUtil'
import renderTVShowCard from '../components/TVShowCard'


const $ = document.querySelector.bind(document)

export const renderFavCountAndClear = (container: HTMLDivElement) => {
    const qntFav = JSON.parse(<string>localStorage.getItem('favShow')) || []

    const htmlContent = `
        <div id="container-favCountAndClear">
            <div id="favCount">
                <img src="/img/favourite.png">
                <span id="numFav">${qntFav?.length}</span>
            </div>
            <div id="favClear">
                <span>Limpar Favoritos</span>
            </div>
        </div>
    `
    container.innerHTML = htmlContent

    const clearFavs = <HTMLDivElement>document.querySelector('#favClear')

    clearFavs.onclick = ClearFavsFunction

}

const renderFavorites = async () => {

    const favorites = JSON.parse(<string>localStorage.getItem('favShow')) || []

    const http = axios.create({
        baseURL: API_URL,
    })

    const resultArea = <HTMLDivElement>$('#result-area')
    resultArea.innerHTML = ''

    if (favorites.length === 0) {
        resultArea.style.alignItems = 'center'
        resultArea.style.justifyContent = 'center'
        renderNoFavs(resultArea)
    } else {

        const loadingGif = renderLoadingDiv('carregando')
        resultArea.appendChild(loadingGif)

        let array: any[] = []

        for (const favorite of favorites) {

            const response = await http.get(`/${favorite}`)

            if (response.status == 200) {
                const { data } = response
                array.push(data)
            }
        }

        resultArea.removeChild(loadingGif)

        array.forEach((item: any) => {
            const tvShow = getTvShow(item)
            renderTVShowCard(tvShow, resultArea)
        })

        updateFavs()
    }



}

export default renderFavorites