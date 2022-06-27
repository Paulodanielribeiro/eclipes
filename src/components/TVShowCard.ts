import TVShow from '../models/TVShow'


const imageNotFound = '/img/image_not_found.png'

const renderTVShowCard = (show: TVShow, container: HTMLElement) => {
  
  

//function addfav(){localStorage.setItem('idShow',(getID) || '') }
  
  const htmlContent = `
    <div class="tv-card">
      <a class="modal-link" id="modal-${show.id}" href="tvshow.html?id=${
    show.id
  }">
        <div class="show-banner">
            <img src="${show.imageUrl || imageNotFound}" alt="${show.name}">
            
        </div>

        <h3>${show.name}</h3>
      </a>
      <div class="favshow" data-item="${show.id}"><img src="/img/favourite.png" alt="Favorito"></div> 
    </div>
    `

  container.innerHTML += htmlContent

  let favorites = JSON.parse(<string>localStorage.getItem('favShow')) || []

  const fav = document.querySelectorAll('.favshow')
  fav.forEach((item) => {
      item.addEventListener('click', getID)
      const favContainer = item
      const id = item.getAttribute('data-item')

      favorites.forEach((item: any) => {
          if (item == id) {
              favContainer.classList.add('fav')
          }
      })
  })  


  function getID(event: any) {
    const favContainer = event.target
    const favoritesLocal = JSON.parse(<string>localStorage.getItem('favShow')) || []

    let id = event.target.getAttribute('data-item')

    const index = favoritesLocal.indexOf(id)

    const existsInLocalStorage = index != -1

    if (existsInLocalStorage) {
        favoritesLocal.splice(index, 1)
        favContainer.classList.remove('fav')
    } else {
        favoritesLocal.push(id)
        favContainer.classList.add('fav')
    }

    localStorage.setItem('favShow', JSON.stringify(favoritesLocal))
}
}


export default renderTVShowCard
