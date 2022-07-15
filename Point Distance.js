class Point{
    constructor(x, y){
        this.x = x
        this.y = y
    }

    static distance(point1, point2){
        let a = point1.x - point2.x
        let b = point1.y - point2.y

        let distance = Math.sqrt(a ** 2 + b ** 2)

        return Number(distance)
    }
}
