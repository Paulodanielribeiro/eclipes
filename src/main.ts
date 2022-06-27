import renderSearchForm from './components/SearchForm'
import './style.css'

const token = localStorage.getItem('token')
const $ = document.querySelector.bind(document)
const menu = <HTMLDivElement>$('#menu')
const container= <HTMLDivElement>$('#container')
if(token) {
    
renderSearchForm(menu)
  }else{
    location.href = 'login.html'
  }  

const resultArea = document.createElement('div')
resultArea.id = 'result-area'
container.insertAdjacentElement('beforeend', resultArea)
