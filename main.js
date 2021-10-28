const menu = document.querySelector('.fa-bars');
const navbar = document.querySelector('nav');





menu.addEventListener('click', function() {
        
        if(this.className.includes('fas fa-bars')) {
        
                               this.className = 'fas fa-times'
                       }
                        else if(this.className.includes('fas fa-times')) {
                                this.className = 'fas fa-bars'
                               
                     }
        navbar.classList.toggle('active');
})