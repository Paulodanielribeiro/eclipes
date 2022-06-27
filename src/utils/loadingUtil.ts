const renderLoading = (container: HTMLDivElement, message: string) => {
    const htmlContent = `
        <h1>${message}</h1>
        <span></span>
        <span></span>
        <span></span>
    `
    container.innerHTML = htmlContent
}

export default renderLoading

export const renderLoadingDiv = (message: string) => {
    
    const htmlContent = `
        <h1>${message}</h1>
        <span></span>
        <span></span>
        <span></span>
    `

    const loadingGif = <HTMLDivElement>document.createElement('div')
    
    loadingGif.classList.add('carregando')
    loadingGif.innerHTML = htmlContent

    return loadingGif
}