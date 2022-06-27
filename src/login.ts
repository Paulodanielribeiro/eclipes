import renderLoginButtonGoogle from './components/LoginButtonGoogle'
import renderLoginButtonGithub from './components/LoginButtonGithub'
import renderLoginButtonMicrosoft from './components/LoginButtonMicrosoft'
import './style.css'
const token = localStorage.getItem('token')
if (token) {
    location.href = 'index.html'
} else {
  const app1 = <HTMLDivElement>document.getElementById('appGoogle')
renderLoginButtonGoogle(app1)

const app2 = <HTMLDivElement>document.getElementById('appGithub')
renderLoginButtonGithub(app2)

const app3 = <HTMLDivElement>document.getElementById('appMicrosoft')
renderLoginButtonMicrosoft(app3) 
}
