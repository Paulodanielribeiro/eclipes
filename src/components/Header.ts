import searchTVShows from '../utils/SearchShow'



export const renderHeader = (container: HTMLElement) => {

    searchTVShows()

    const photouser = localStorage.getItem('userPhoto')
    const nameUser = localStorage.getItem('userName')

    let favOrHome
    if (location.pathname == '/favourites.html') {
        favOrHome = `
            <div id="home">
                <a href="index.html">
                    <span>Home</span>
                </a>
            </div>
        `
    } else {
        favOrHome = `
            <div id="favorites">
                <a href="favourites.html">
                    <span>Favoritos</span>
                </a>
            </div>
        `
    }

    const htmlContent =   ` <div id="menu"> <h1>TV Search</h1>
    <form id="search-form">
        <input type="text" id="filter" name="filter" placeholder="Digite o título da série">
        <button>Pesquisar</button>
    </form>
    
    <a href="index.html">Home</a>
    
    <img id="userPhoto"src="${photouser}" alt="Foto">
            <span>${nameUser}</span>
            <div id="sair">  
            <a href="logout.html">
            <img id="sairicon" src="img/logout.png" alt="Sair">        
            </div>
    </div>
    `

    container.innerHTML = htmlContent
}