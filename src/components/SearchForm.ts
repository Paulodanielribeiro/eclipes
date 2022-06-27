import axios from 'axios'
import { API_URL } from '../config'
import { getTvShow } from '../models/TVShow'
import renderTVShowCard from './TVShowCard'

const userPhoto = localStorage.getItem('userPhoto')
const userName = localStorage.getItem('userName')

const $ = document.querySelector.bind(document)

const http = axios.create({
  baseURL: API_URL,
})

const searchShows = async () => {
  const params = new URLSearchParams(document.location.search)
  const filter = params.get('filter')

  if (filter) {
    const response = await http.get('/', {
      params: {
        q: filter,
      },
    })

    if (response.status == 200) {
      const { data } = response
      const resultArea = <HTMLDivElement>$('#result-area')
      resultArea.innerHTML = ''
      data.forEach((jsonObj: any) => {
        const { show } = jsonObj
        const tvShow = getTvShow(show)
        renderTVShowCard(tvShow, resultArea)
      })
    }
  }
}

searchShows()

const renderSearchForm = (container: HTMLElement) => {
  const htmlContent = `
    <h1>TV Search</h1>
    <form id="search-form">
        <input type="text" id="filter" name="filter" placeholder="Digite o título da série">
        <button>Pesquisar</button>
    </form>
    
    <a href="Favourites.html">Favoritos</a>
    
    <img id="userPhoto"src="${userPhoto}" alt="Foto">
            <span>${userName}</span>
    <div id="sair">  
    <a href="logout.html">
    <img id="sairicon" src="img/logout.png" alt="Sair">        
    </div>`

  container.innerHTML = htmlContent
}

export default renderSearchForm
