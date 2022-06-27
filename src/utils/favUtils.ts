const updateFavs = () => {
    const favorites = JSON.parse(<string>localStorage.getItem('favShow')) || []

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

        
        const favorites = JSON.parse(<string>localStorage.getItem('favShow')) || []

        const favContainer = event.target

        let id = event.target.getAttribute('data-item')

        const index = favorites.indexOf(id)

        const existsInLocalStorage = index != -1

        if (existsInLocalStorage) {
            favorites.splice(index, 1)
            favContainer.classList.remove('fav')
        } else {
            favorites.push(id)
            favContainer.classList.add('fav')
        }

        localStorage.setItem('favShow', JSON.stringify(favorites))

        if(location.pathname == '/favorites.html'){
            attCountFav()
        }
    }
}

export default updateFavs


export const attCountFav = () => {
    
        const containerCountFav = <HTMLDivElement>document.querySelector('#numFav')

        const attLocalStorage = JSON.parse(<string>localStorage.getItem('favShow')) || []

        containerCountFav.innerText = attLocalStorage.length

    
}

export function ClearFavsFunction() {

    const qntFav = JSON.parse(<string>localStorage.getItem('favShow')) || [] 

    qntFav.splice(0, qntFav.length)

    localStorage.setItem('favShow', JSON.stringify(qntFav))

    const allFavs = document.querySelectorAll('.fav')

    allFavs.forEach(item => {
        item.classList.remove('fav')
    })

    attCountFav()

}

export const renderNoFavs = (container: HTMLDivElement) => {
    
    const htmlContent = `
        <span id="noFav">
            Você ainda não possui favoritos
        </span>
    `

    container.innerHTML = htmlContent
}