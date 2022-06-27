import { getAuth, signInWithPopup , GithubAuthProvider } from 'firebase/auth'
import firebaseApp from '../../config/firebase'
import './styles.css'

const onClick = () => {
    const auth = getAuth(firebaseApp)
    const provider = new GithubAuthProvider()
    signInWithPopup(auth, provider)
        .then((result) =>{
            const credential = GithubAuthProvider.credentialFromResult(result) 
            const token = credential?.accessToken
            const { user } = result
            const {displayName , photoURL} = user
            localStorage.setItem('token' , token || '')
            localStorage.setItem('userName' , displayName || '')
            localStorage.setItem('userPhoto' , photoURL || '')
            if (token) {
                location.href = 'index.html'
            }
        })
        .catch((error)=>{
            const {errorCode , errorMessage} = error
            console.log (errorCode, errorMessage)
        })
}

const renderLoginButtonGithub = (container: HTMLElement) => {
        const htmlcontent = `
            <button class="login-button">
                <img src="/img/github.png" alt="Github">
                <span>Entrar com Github</span>
            </button>
        `
        container.innerHTML = htmlcontent
        const LoginButton = <HTMLButtonElement>document.querySelector('.login-button')
        LoginButton.onclick = onClick
}

export default renderLoginButtonGithub