import { Router } from "./router.js"

const routes = new Router()
routes.add("/","pages/home.html")
routes.add("/universo","pages/universo.html")
routes.add("/exploracao","pages/exploracao.html")
routes.add( "/error","pages/error.html")


routes.handle()
window.onpopstate = () => routes.handle()
window.route = () => routes.route()
