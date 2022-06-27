import { getAuth, signInWithPopup , OAuthProvider } from "firebase/auth";
import firebaseApp from "../../config/firebase";
import './styles.css'


const onClick3 = () =>{
    const auth = getAuth(firebaseApp)
    auth.languageCode = 'pt-br'
    const provider = new OAuthProvider('microsoft.com');
    signInWithPopup(auth,provider)
        .then((result)=>{
            const credential = OAuthProvider.credentialFromResult(result)
            const token = credential?.accessToken
            const { user } = result
            const {displayName,photoURL} = user
            localStorage.setItem('token', token || '')
            localStorage.setItem('userName', displayName || '')
            localStorage.setItem('userPhoto' , photoURL || '')
            if(token) {
                location.href = 'index.html'
            }
        })
        .catch((error)=>{
            const { errorCode , errorMessage} = error
            console.log(errorCode, errorMessage)

        })
        
}

const renderLoginButtonMicrosoft = (container: HTMLElement) => {
    const htmlContent=`
        <button id="login-button3">
            <img src="/img/microsoft.png" alt="Microsoft">
            <span>Entrar com Microsoft</span>
        </button>
        `
    container.innerHTML = htmlContent

    const loginButton = <HTMLButtonElement>document.getElementById('login-button3')
    loginButton.onclick = onClick3
}

export default renderLoginButtonMicrosoft