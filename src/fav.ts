import { renderHeader } from './components/Header'
import renderFavorites, { renderFavCountAndClear } from './components/RenderFav'
import './style.css'

const token = localStorage.getItem('token')

if(token) {
    const $ = document.querySelector.bind(document)

    const app = <HTMLDivElement>$('#app')
    renderHeader(app)

    const resultArea = document.createElement('div')
    resultArea.id = 'result-area'
    app.insertAdjacentElement('beforeend', resultArea)


    const favCountAndClear = document.createElement('div')
    favCountAndClear.id = 'fav-count-and-clear'
    resultArea.insertAdjacentElement('beforebegin', favCountAndClear)

    renderFavorites()
    renderFavCountAndClear(favCountAndClear)

    const loadingContainer = document.createElement('div')
    loadingContainer.id = 'carregando'
    resultArea.insertAdjacentElement('afterbegin',loadingContainer)
} else {
    location.href = 'login.html'
}