export class Router {

    routes = {}

    add(routeName, page) {
        this.routes[routeName] = page
    }

    route(event) {
        event = event || window.event

        event.preventDefault()

        window.history.pushState({},"",event.target.href)
        this.handle()
    
    }

    handle() {
        const {pathname} = window.location

        const route = this.routes[pathname] || this.routes["/error"]
    
        this.resetImage()
    
        fetch(route)
        .then((data)=> data.text())
        .then((html)=>{
            document.querySelector('#id').innerHTML = html
            if (route !== "pages/home.html") {
                this.changeClass()
    
                if (route === "pages/universo.html") {
                    this.changeImage('imageUniverse')
                } else if (route === "pages/exploracao.html") {
                    this.changeImage('imageExploration')
                } 
                
            }
        })
    }

    changeClass() {
        const div = document.querySelector('.title')
        if (div) {
            div.classList.remove('title')
            div.classList.add('subtitle')
        }
    }

    changeImage(className) {
        const body = document.querySelector('body')
        body.classList.add(className)
    }
    
    resetImage() {
        const body = document.querySelector('body')
        body.classList.remove('imageUniverse', 'imageExploration')
    }
    
}