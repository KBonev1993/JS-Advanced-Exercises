    class Circle{
        constructor(radius){
            this.radius = radius
        }
    
        get diameter() {
            let diameter = this.radius * 2
            return diameter
        }
    
        set diameter(value){
            let radius = value / 2
            this.radius = radius
        }
    
        get area(){
            let area = Math.PI * this.radius ** 2
            return area
        }
    }
        
