// let zimgs = []

// for(let i = 1; i < 891; i++) {
//     zimgs.push(Object.assign(new Image(), { 'src': `zFrame - ${i}.png` }));
// }
// for(let t = 890; t>0; t--){
//     zimgs.push(zimgs[t])
// }

// let fraccont = 0

const keysPressed = {}

document.addEventListener('keydown', (event) => {

    keysPressed[event.key.toLocaleLowerCase()] = true;

 });
 
 document.addEventListener('keyup', (event) => {
            delete keysPressed[event.key.toLocaleLowerCase()];
 })

const tutorial_canvas = document.getElementById("tutorial");
const tutorial_canvas_context = tutorial_canvas.getContext('2d');

// tutorial_canvas_context.scale(.07,.07)
// tutorial_canvas_context.translate(-4050,8750)
// tutorial_canvas_context.translate(2500,6000)

tutorial_canvas.style.background = "black"
class Circle{
    constructor(x, y, radius, color, xmom = 0, ymom = 0){

        this.height = 0
        this.width = 0
        this.x = x
        this.y = y
        this.radius = radius
        this.color = color
        this.xmom = xmom
        this.ymom = ymom
        this.xrepel = 0
        this.yrepel = 0
        this.lens = 0
    }       
     draw(){

    
            tutorial_canvas_context.fillStyle = this.color

        tutorial_canvas_context.lineWidth = 4
        tutorial_canvas_context.strokeStyle = this.color
        tutorial_canvas_context.beginPath();
        tutorial_canvas_context.arc(this.x, this.y, this.radius-1, 0, (Math.PI*2), true)
   
       tutorial_canvas_context.fill()
        tutorial_canvas_context.stroke(); 
    }
    move(){
        this.x += this.xmom
        this.y += this.ymom
        // if(this == pomao.body){
        //     tutorial_canvas_context.translate(-this.xmom, -this.ymom)
        // }
    }
    isPointInside(point){
        this.areaY = point.y - this.y 
        this.areaX = point.x - this.x
        if(((this.areaX*this.areaX)+(this.areaY*this.areaY)) <= (this.radius*this.radius)){
            return true
        }
        return false
    }

    repelCheck(point){
        this.areaY = point.y - this.y 
        this.areaX = point.x - this.x
        if(((this.areaX*this.areaX)+(this.areaY*this.areaY)) <= (this.radius+point.radius)*(point.radius+this.radius)){
            return true
        }
        return false
    }
}
class Shape{
    constructor(shapes){
        this.shapes = shapes
    }
    isPointInside(point){
        for(let t = 0; t<this.shapes.length;t++){
            if(this.shapes[t].repelCheck(point)){
                return true
            }
        }
    
        return false
    }

}
class Bossbeam {
    constructor(){
        this.body1 = new Circle(640,360, 10,"transparent")
        this.body2 = new Circle(640,360, 10,"transparent")
        this.body3 = new Circle(640,360, 10,"transparent")
        this.body1anchor = new Circle(this.body1.x+((Math.random()-.5)*200), this.body1.y+((Math.random()-.5)*200), 10,"transparent")
        this.body2anchor = new Circle(this.body2.x+((Math.random()-.5)*200), this.body2.y+((Math.random()-.5)*200), 10,"transparent")
        this.body3anchor = new Circle(this.body3.x+((Math.random()-.5)*200), this.body3.y+((Math.random()-.5)*200), 10,"transparent")
        this.health = 0
        this.beams = []
        this.beambox = new Shape(this.beams)
    }
    draw(){
        this.move()
        for(let t=0;t<this.beams.length;t++){
            this.beams[t].draw()
        }
    }
    move(){
        this.beam()
        this.body1.x+= (this.body1anchor.x-this.body1.x)/200
        this.body1.y+= (this.body1anchor.y-this.body1.y)/200
        this.body2.x+= (this.body2anchor.x-this.body2.x)/200
        this.body2.y+= (this.body2anchor.y-this.body2.y)/200
        this.body3.x+= (this.body3anchor.x-this.body3.x)/200
        this.body3.y+= (this.body3anchor.y-this.body3.y)/200

        if(Math.random()<.001){
            this.body3anchor = new Circle(this.body3.x+((Math.random()-.5)*500), this.body3.y+((Math.random()-.5)*500), 100,"transparent")
            }

            if(Math.random()<.001){
                this.body1anchor = new Circle(this.body1.x+((Math.random()-.5)*500), this.body1.y+((Math.random()-.5)*500), 100,"transparent")
                }

                if(Math.random()<.001){
                    this.body2anchor = new Circle(this.body2.x+((Math.random()-.5)*500), this.body2.y+((Math.random()-.5)*500), 100,"transparent")
                    }
    }
    beam(){
            
        this.beams = []
            for(let t=0;t<this.health;t++){
                    
                let batte = (this.body1.x-this.body2.x)
                let battle = batte/this.health
                battle*=t
                let battey = (this.body1.y-this.body2.y)
                let battley = battey/this.health
                battley*=t
                    
                    const ray = new Circlec(this.body1.x+battle, this.body1.y+battley, 1.5, "red"  )
                    this.beams.push(ray)
                    
                let battez = (this.body3.x-this.body2.x)
                let battlez = battez/this.health
                battlez*=t
                let batteyz = (this.body3.y-this.body2.y)
                let battleyz = batteyz/this.health
                battleyz*=t
                    
                    const rayx = new Circlec(this.body1.x+battlez, this.body1.y+battleyz, 1.5, "red"  )
                    this.beams.push(rayx)
            }

    
        
        this.beambox  = new Shape(this.beams)
        
        this.beams = []
    }
}





































class CircleA{
    constructor(x, y, radius, color, xmom = 0, ymom = 0){
        this.b = 0
        this.height = 0
        this.width = 0
        this.x = x
        this.y = y
        this.radius = radius
        this.color = color
        this.xmom = xmom
        this.ymom = ymom
        this.xrepel = 0
        this.yrepel = 0
        this.lens = 0
    }       
     draw(){   
         
 
        tutorial_canvas_context.fillStyle = this.color
        
        tutorial_canvas_context.lineWidth = 4
        tutorial_canvas_context.strokeStyle = this.color
        tutorial_canvas_context.beginPath();
        tutorial_canvas_context.arc(this.x, this.y, this.radius, 0, (Math.PI*2), true)
 
       tutorial_canvas_context.fill()
        tutorial_canvas_context.stroke(); 
    }
    move(){
        this.x += this.xmom
        this.y += this.ymom
    }
    isPointInside(point){
        this.areaY = point.y - this.y 
        this.areaX = point.x - this.x
        if(((this.areaX*this.areaX)+(this.areaY*this.areaY)) <= (this.radius*this.radius)){
            return true
        }
        return false
    }

    repelCheck(point){
        this.areaY = point.y - this.y 
        this.areaX = point.x - this.x
        if(((this.areaX*this.areaX)+(this.areaY*this.areaY)) <= (this.radius+point.radius)*(point.radius+this.radius)){
            return true
        }
        return false
    }
}
class CircleB{
    constructor(x, y, radius, color, xmom = 0, ymom = 0){
        this.b = 1
        this.height = 0
        this.width = 0
        this.x = x
        this.y = y
        this.radius = radius
        this.color = color
        this.xmom = xmom
        this.ymom = ymom
        this.xrepel = 0
        this.yrepel = 0
        this.lens = 0
    }       
     draw(){   
         
 
        tutorial_canvas_context.fillStyle = this.color
        
        tutorial_canvas_context.lineWidth = 4
        tutorial_canvas_context.strokeStyle = this.color
        tutorial_canvas_context.beginPath();
        tutorial_canvas_context.arc(this.x, this.y, this.radius, 0, (Math.PI*2), true)
 
       tutorial_canvas_context.fill()
        tutorial_canvas_context.stroke(); 
    }
    move(){
        this.x += this.xmom
        this.y += this.ymom
    }
    isPointInside(point){
        this.areaY = point.y - this.y 
        this.areaX = point.x - this.x
        if(((this.areaX*this.areaX)+(this.areaY*this.areaY)) <= (this.radius*this.radius)){
            return true
        }
        return false
    }

    repelCheck(point){
        this.areaY = point.y - this.y 
        this.areaX = point.x - this.x
        if(((this.areaX*this.areaX)+(this.areaY*this.areaY)) <= (this.radius+point.radius)*(point.radius+this.radius)){
            return true
        }
        return false
    }
}
class CircleD{
    constructor(x, y, radius, color, xmom = 0, ymom = 0){
        this.height = 0
        this.width = 0
        this.x = x
        this.y = y
        this.radius = radius
        this.color = color
        this.xmom = xmom
        this.ymom = ymom
        this.xrepel = 0
        this.yrepel = 0
        this.lens = 0
    }       
     draw(){   
         
 
        tutorial_canvas_context.fillStyle = this.color
        
        tutorial_canvas_context.lineWidth = 4
        tutorial_canvas_context.strokeStyle = this.color
        tutorial_canvas_context.beginPath();
        tutorial_canvas_context.arc(this.x, this.y, this.radius, 0, (Math.PI*2), true)
 
       tutorial_canvas_context.fill()
        tutorial_canvas_context.stroke(); 
    }
    move(){
        this.x += this.xmom
        this.y += this.ymom
    }
    isPointInside(point){
        this.areaY = point.y - this.y 
        this.areaX = point.x - this.x
        if(((this.areaX*this.areaX)+(this.areaY*this.areaY)) <= (this.radius*this.radius)){
            return true
        }
        return false
    }

    repelCheck(point){
        this.areaY = point.y - this.y 
        this.areaX = point.x - this.x
        if(((this.areaX*this.areaX)+(this.areaY*this.areaY)) <= (this.radius+point.radius)*(point.radius+this.radius)){
            return true
        }
        return false
    }
}


// let circles = []

// let circlesxa = []

// let circlesxb = []

// let circlesx = []

// for(let t = 0; t<1; t++){
//     if(t%2 == 0){
//         let circ = new CircleB(100,100,100,"red")
//         circles.push(circ)
//     }else{
//         let circ = new CircleA(100,100,100,"red")
//         circles.push(circ)
//     }

    
// }

// for(let t = 0; t<10; t++){
//     if(t%2 == 0){
//         let circ = new CircleD(100,100,100,"red")
//         circlesxa.push(circ)
//         circlesx.push(circ)
//     }else{
//         let circ = new CircleD(100,100,100,"red")
//         circlesxb.push(circ)
//         circlesx.push(circ)
//     }

// }



// console.time("way 1")
// for(let k = 0; k<10000;k++){
//     for(let t = 0;t<circlesx.length;t++){
//         if(circlesx.includes(circlesxb[t])){
//             dummy()
//         }
//     }

// }
// console.timeEnd("way 1")


// console.time("way 2")
// for(let k = 0; k<10000;k++){
// for(let t = 0;t<circles.length;t++){
//     if(circles[t].b == 1){
//         dummy()
//     }
// }
// }
// console.timeEnd("way 2")

// // let boss = new Bossbeam()
// // window.setInterval(function(){ 
// //     // tutorial_canvas_context.clearRect(0,0,12800,7200)
// //     // circle.draw()
// //     // circle2.draw()
// // },  1) 

// function dummy(){
//     return 1
// }

// const centerX = tutorial_canvas.width*.5
// const centerY = tutorial_canvas.height*.5
// const radius = 10

// const circle = new Circle(centerX, centerY, radius, "red")
// circle.displacement = 1
// circle.angle = 0



// const circle2 = new Circle(centerX, centerY, radius, "blue")
// circle2.displacement = 700
// circle2.angle = 0

    // circle.angle += (Math.PI*2*(.016777*.16777))
    // circle.displacement *= 1.001

    // circle.x = centerX+(Math.cos(circle.angle)*circle.displacement)
    // circle.y = centerY+(Math.sin(circle.angle)*circle.displacement)

    // circle.draw()

    // circle2.angle += (Math.PI*2*(.016777*.19777))
    // circle2.displacement *= .999

    // circle2.x = centerX+(Math.cos(circle2.angle)*circle2.displacement)
    // circle2.y = centerY+(Math.sin(circle2.angle)*circle2.displacement)

    // circle2.draw()

    class Line{
        constructor(x,y, x2, y2, color, width){
            this.x1 = x
            this.y1 = y
            this.x2 = x2
            this.y2 = y2
            this.color = color
            this.width = width
        }
        hypotenuse(){
            const xdif = this.x1-this.x2
            const ydif = this.y1-this.y2
            const hypotenuse = (xdif*xdif)+(ydif*ydif)
            return Math.sqrt(hypotenuse)
        }
        draw(){
            tutorial_canvas_context.strokeStyle = this.color
            tutorial_canvas_context.lineWidth = this.width
            tutorial_canvas_context.beginPath()
            tutorial_canvas_context.moveTo(this.x1, this.y1)         
            tutorial_canvas_context.lineTo(this.x2, this.y2)
            tutorial_canvas_context.stroke()
            tutorial_canvas_context.lineWidth = 1
        }
    }
    
    class Bosscircle{
        constructor(x, y, radius, color, xmom = 0, ymom = 0){
            this.height = 0
            this.width = 0
            this.x = x
            this.y = y
            this.radius = radius
            this.color = color
            this.xmom = xmom
            this.ymom = ymom
            this.sxmom = 0
            this.symom = 0
            this.cxmom = 0
            this.cymom = 0
            this.xrepel = 0
            this.yrepel = 0
            this.lens = 0
            this.angle = Math.PI*.5
            this.anglex = 0
            this.rootedx = 0
            this.rootedy = 0
            this.rooted = 0
        }       
         draw(){   
             
     
            tutorial_canvas_context.fillStyle = this.color
            
            tutorial_canvas_context.lineWidth = 0
            tutorial_canvas_context.strokeStyle = this.color
            tutorial_canvas_context.beginPath();
            tutorial_canvas_context.arc(this.x, this.y, this.radius, 0, (Math.PI*2), true)
     
           tutorial_canvas_context.fill()
            tutorial_canvas_context.stroke(); 
        }
        repel(){
            if(this.x+this.radius < tutorial_canvas.width && !(squarecircleface(flap,this))){
            this.x+=this.xrepel
            }
            this.xrepel = 0
            if(this.y+this.radius < tutorial_canvas.height){
            this.y+=this.yrepel
            }
            this.yrepel = 0
        }
        move(){
            this.x += this.xmom
            if(this.y+this.radius < tutorial_canvas.height){
                 this.y += this.ymom
            }
           
            this.ymom*=.98
            this.xmom*=.98
        }
        smove(){
            this.x += this.sxmom
            this.y += this.symom
        }
        cmove(){
            this.x += this.cxmom
            this.y += this.cymom
        }
        isPointInside(point){
            this.areaY = point.y - this.y 
            this.areaX = point.x - this.x
            if(((this.areaX*this.areaX)+(this.areaY*this.areaY)) <= (this.radius*this.radius)){
                return true
            }
            return false
        }
    
        repelCheck(point){
            this.areaY = point.y - this.y 
            this.areaX = point.x - this.x
            if(((this.areaX*this.areaX)+(this.areaY*this.areaY)) <= (this.radius+point.radius)*(point.radius+this.radius)){
                return true
            }
            return false
        }
    }
    

    class Bossspring{
        constructor(x,y, body = 0, anchor = 0){
            if(body == 0){
                this.body = new Bosscircle(x,y,2,"red")
            }else{
                this.body = body
            }
            if(anchor == 0){
                this.anchor = new Bosscircle(x+1,y+1,2,"red")
            }else{
                this.anchor = anchor
            }
            this.length = 30
    
        }
        balance(){
    
            let xmomavg = (this.body.sxmom+this.anchor.sxmom)*.5
            let ymomavg = (this.body.symom+this.anchor.symom)*.5
    
            this.body.sxmom = (this.body.sxmom + xmomavg)*.5
            this.body.symom = (this.body.symom + ymomavg)*.5
    
            this.anchor.sxmom = (this.anchor.sxmom + xmomavg)*.5
            this.anchor.symom = (this.anchor.symom + ymomavg)*.5
    
            let link = new Line(this.body.x, this.body.y, this.anchor.x, this.anchor.y, "white", 4)
    
            
            let xvec = this.body.x-this.anchor.x
            let yvec = this.body.y-this.anchor.y
    
            for(let t = 0; (Math.abs(xvec)+Math.abs(yvec)) > .5; t++){
                xvec*=.99
                yvec*=.99
                if(t>1000){
                    break
                }
            }
    
            for(let t = 0; (Math.abs(xvec)+Math.abs(yvec)) < .5; t++){
                xvec*= 1.01
                yvec*= 1.01
                if(t>1000){
                    break
                }
            }
    
            if(link.hypotenuse() < this.length-5 ){
                this.body.sxmom += xvec
                this.body.symom += yvec
                this.anchor.sxmom -= xvec
                this.anchor.symom -= yvec
    
    
            }else  if(link.hypotenuse() > this.length+5 ){
    
                this.body.sxmom -= xvec
                this.body.symom -= yvec
                this.anchor.sxmom += xvec
                this.anchor.symom += yvec
    
            }else{
                this.body.sxmom*=.99
                this.body.symom*=.99
                this.anchor.sxmom*=.99
                this.anchor.symom*=.99
            }
    
            this.body.smove()
            this.anchor.smove()
        }
        draw(){
            
            this.balance()
            let link = new Line(this.body.x, this.body.y, this.anchor.x, this.anchor.y, "white", 1)
    
            link.draw()
            this.body.draw()
            this.anchor.draw()
        }
    }

class Bossspringhand{
    constructor(x,y, body = 0, anchor = 0){
        if(body == 0){
            this.body = new Bosscircle(x,y,2,"red")
        }else{
            this.body = body
        }
        if(anchor == 0){
            this.anchor = new Bosscircle(x+1,y+1,2,"red")
        }else{
            this.anchor = anchor
        }
        this.length = 10

    }
    balance(){

        let xmomavg = (this.body.sxmom+this.anchor.sxmom)*.5
        let ymomavg = (this.body.symom+this.anchor.symom)*.5

        this.body.sxmom = (this.body.sxmom + xmomavg)*.5
        this.body.symom = (this.body.symom + ymomavg)*.5

        this.anchor.sxmom = (this.anchor.sxmom + xmomavg)*.5
        this.anchor.symom = (this.anchor.symom + ymomavg)*.5

        let link = new Line(this.body.x, this.body.y, this.anchor.x, this.anchor.y, "white", 4)

        
        let xvec = (this.body.x-this.anchor.x)/this.length
        let yvec = (this.body.y-this.anchor.y)/this.length

        for(let t = 0; (Math.abs(xvec)+Math.abs(yvec)) > .5; t++){
            xvec*=.99
            yvec*=.99
            if(t>1000){
                break
            }
        }

        for(let t = 0; (Math.abs(xvec)+Math.abs(yvec)) < .1; t++){
            xvec*= 1.01
            yvec*= 1.01
            if(t>1000){
                break
            }
        }

        if(link.hypotenuse() < this.length-1 ){
            this.body.sxmom += xvec
            this.body.symom += yvec
            this.anchor.sxmom -= xvec
            this.anchor.symom -= yvec


        }else  if(link.hypotenuse() > this.length+1 ){

            this.body.sxmom -= xvec
            this.body.symom -= yvec
            this.anchor.sxmom += xvec
            this.anchor.symom += yvec

        }else{
            this.body.sxmom*=.99
            this.body.symom*=.99
            this.anchor.sxmom*=.99
            this.anchor.symom*=.99
        }

        if(this.body != starboss.start){
            this.body.smove()
            }
            if(this.anchor != starboss.start){
                this.anchor.smove()
            }
    }
    draw(){
        
        this.balance()
        let link = new Line(this.body.x, this.body.y, this.anchor.x, this.anchor.y, "white", 1)

        link.draw()
        this.body.draw()
        if(this.body != starboss.start){
            this.body.move()

        }
        this.anchor.draw()
    }
}

class Claw{
    constructor(){
        this.center = new Bosscircle(350,350,1, "red")

        this.dis = 19
        this.length = 10

        this.joints = [this.center]

        for(let t = 1;t<this.length; t++){
            this.joints[t] = new Bosscircle(0,0,4, "yellow")
        }
        this.index = Math.floor(Math.random()*(this.length))

    }
    draw(){
        for(let t = 1;t<this.joints.length;t++){
            this.joints[t].x = this.joints[t-1].x+(Math.cos(this.joints[t-1].angle)*this.dis)
            this.joints[t].y = this.joints[t-1].y+(Math.sin(this.joints[t-1].angle)*this.dis)
        }
        for(let t=1;t<this.joints.length;t++){
            for(let k=t-1;k<t+1;k++){
                if(k!=t){
                    if(this.joints[t].repelCheck(this.joints[k])){
                     if(t>k){
                         this.joints[t].angle +=.001
                     }else{
                         this.joints[t].angle -=.001
                     }
 
                    }
                    if(this.joints[t].repelCheck(this.joints[k])){
                     if(t>k){
                         this.joints[t].angle +=.001
                     }else{
                         this.joints[t].angle -=.001
                     }
 
                    }
                   if(this.joints[t].repelCheck(this.joints[k])){
                    if(t>k){
                        this.joints[t].angle +=.001
                    }else{
                        this.joints[t].angle -=.001
                    }

                   }
                   if(this.joints[t].repelCheck(this.joints[k])){
                    if(t>k){
                        this.joints[t].angle +=.001
                    }else{
                        this.joints[t].angle -=.001
                    }

                   }
                   if(this.joints[t].repelCheck(this.joints[k])){
                    if(t>k){
                        this.joints[t].angle +=.001
                    }else{
                        this.joints[t].angle -=.001
                    }

                   }
                        // if(this.joints[t].angle < this.joints[k].angle){
                        //     this.joints[t].angle +=.001
                        // }else{
                        //   this.joints[k].angle +=.001
                        // }

                        // if(t>k){
                        //     // this.joints[t].angle +=.001
                        // }else{
                        //     this.joints[t].angle -=.001
                        // }
                    

                }
            }
        }


        for(let t = 0;t<this.joints.length-1;t++){
            this.joints[t].draw()
            let link = new Line(this.joints[t].x, this.joints[t].y, this.joints[t+1].x, this.joints[t+1].y, "white", 2)
            link.draw()
        }
        for(let t = 0;t<this.joints.length-1;t++){
            // this.joints[t].draw()
            let link = new Line(this.joints[t].x, this.joints[t].y, this.joints[t+1].x, this.joints[t+1].y, "red", 2)
            link.draw()
        }

        if(Math.random()<.07){

            this.index = Math.floor(Math.random()*(this.length))
            // this.index++
            // this.index%=this.length
        }

        const angleRadians = Math.atan2( targets[t].y - this.joints[this.index].y, targets[t].x - this.joints[this.index].x);

        if(this.Rax(this.joints[this.index].angle) < this.Rax(angleRadians)){
            this.joints[this.index].angle += .02  
            this.joints[this.index].angle%=(Math.PI*2)
        }else{
            this.joints[this.index].angle -= .02
            this.joints[this.index].angle%=(Math.PI*2)

        }

        let avgangle = 0
        for(let t = 0;t<this.joints.length;t++){
            avgangle+=this.joints[t].angle
        }
            avgangle/=this.joints.length
        for(let t = 0;t<this.joints.length;t++){
            this.joints[t].anglex = avgangle
        }

        // this.joints[this.joints.length-1].anglex = angleRadians
        this.joints[this.joints.length-1].anglex = this.joints[this.joints.length-1].angle
        this.joints[this.joints.length-1].draw()



    }
    Rax(isn){
    let out = isn*(180 / Math.PI)
    for(let i = 0;out<0;i++){
        out+=360
    }
    // out = out%720
    // ////console.log(out)
    return out
    }
    


}
    
class Clawtop{
    constructor(){
        this.beam = new Line(0,0,700,0, "gray", 70)
        this.center = new Bosscircle(50,30,1, "red")

        this.dis = 15
        this.length = 41

        this.joints = [this.center]

        for(let t = 1;t<this.length; t++){
            this.joints[t] = new Bosscircle(0,0,4, "yellow")
        }
        this.index = Math.floor(Math.random()*(this.length))

    }
    extend(){
        for(let t = 0;t<this.joints.length;t++){
            if(t%2 ==0){
                this.joints[t].angle +=.003

            }else{
                this.joints[t].angle -=.003
                
            }
        }
    }
    contract(){
        if(this.joints[this.joints.length-1].y > 100){
        for(let t = 0;t<this.joints.length;t++){
            if(t%2 ==0){
                this.joints[t].angle -=.003

            }else{
                this.joints[t].angle +=.003
                
            }
        }
    }
    }
    claw(){
        if(keysPressed['w']){
            if(this.joints[this.joints.length-1].y > 100){

                this.contract()
            }
        }
        if(keysPressed['a']){
            if(this.center.x > 20){
                // if( this.joints[this.joints.length-1].x <= flap.x+flap.width &&  this.joints[this.joints.length-1].y > flap.y){
                  
                // }else{  
                if(!squarecircleface(flap, starboss.hand1.tip1)) {
                    if(!squarecircleface(flap, starboss.hand1.tip2)) {
                        if(!squarecircleface(flap, starboss.hand1.tip12)) {
                            if(!squarecircleface(flap, starboss.hand1.tip22)) {
                    this.center.x -=1
                            }
                        }
                    }
                }   

                // }
                
            }
        }
        if(keysPressed['s']){
            if(this.joints[this.joints.length-1].y < 610){
            this.extend()
            }
        }
        if(keysPressed['d']){
            if(this.center.x < 680){
            this.center.x +=1
            }
        }
    }
    draw(){
        this.claw()
        this.beam.draw()
        for(let t = 1;t<this.joints.length;t++){
            this.joints[t].x = this.joints[t-1].x+(Math.cos(this.joints[t-1].angle)*this.dis)
            this.joints[t].y = this.joints[t-1].y+(Math.sin(this.joints[t-1].angle)*this.dis)
        }
        // for(let t=1;t<this.joints.length;t++){
        //     for(let k=t-1;k<t+1;k++){
        //         if(k!=t){
        //             if(this.joints[t].repelCheck(this.joints[k])){
        //              if(t>k){
        //                  this.joints[t].angle +=.001
        //              }else{
        //                  this.joints[t].angle -=.001
        //              }
 
        //             }
        //             if(this.joints[t].repelCheck(this.joints[k])){
        //              if(t>k){
        //                  this.joints[t].angle +=.001
        //              }else{
        //                  this.joints[t].angle -=.001
        //              }
 
        //             }
        //            if(this.joints[t].repelCheck(this.joints[k])){
        //             if(t>k){
        //                 this.joints[t].angle +=.001
        //             }else{
        //                 this.joints[t].angle -=.001
        //             }

        //            }
        //            if(this.joints[t].repelCheck(this.joints[k])){
        //             if(t>k){
        //                 this.joints[t].angle +=.001
        //             }else{
        //                 this.joints[t].angle -=.001
        //             }

        //            }
        //            if(this.joints[t].repelCheck(this.joints[k])){
        //             if(t>k){
        //                 this.joints[t].angle +=.001
        //             }else{
        //                 this.joints[t].angle -=.001
        //             }

        //            }
        //                 // if(this.joints[t].angle < this.joints[k].angle){
        //                 //     this.joints[t].angle +=.001
        //                 // }else{
        //                 //   this.joints[k].angle +=.001
        //                 // }

        //                 // if(t>k){
        //                 //     // this.joints[t].angle +=.001
        //                 // }else{
        //                 //     this.joints[t].angle -=.001
        //                 // }
                    

        //         }
        //     }
        // }


        for(let t = 0;t<this.joints.length-1;t++){
            this.joints[t].draw()
            let link = new Line(this.joints[t].x, this.joints[t].y, this.joints[t+1].x, this.joints[t+1].y, "white", 2)
            link.draw()
        }
        for(let t = 0;t<this.joints.length-1;t++){
            // this.joints[t].draw()
            let link = new Line(this.joints[t].x, this.joints[t].y, this.joints[t+1].x, this.joints[t+1].y, "red", 2)
            link.draw()
        }

        // if(Math.random()<.07){

        //     this.index = Math.floor(Math.random()*(this.length))
        //     // this.index++
        //     // this.index%=this.length
        // }

        // const angleRadians = Math.atan2( targets[t].y - this.joints[this.index].y, targets[t].x - this.joints[this.index].x);

        // if(this.Rax(this.joints[this.index].angle) < this.Rax(angleRadians)){
        //     this.joints[this.index].angle += .02  
        //     this.joints[this.index].angle%=(Math.PI*2)
        // }else{
        //     this.joints[this.index].angle -= .02
        //     this.joints[this.index].angle%=(Math.PI*2)

        // }

        let avgangle = 0
        for(let t = 0;t<this.joints.length;t++){
            avgangle+=this.joints[t].angle
        }
            avgangle/=this.joints.length
        for(let t = 0;t<this.joints.length;t++){
            this.joints[t].anglex = avgangle
        }

        // this.joints[this.joints.length-1].anglex = angleRadians
        this.joints[this.joints.length-1].anglex = Math.PI*.5//this.joints[this.joints.length-1].angle
        this.joints[this.joints.length-1].draw()



    }
    Rax(isn){
    let out = isn*(180 / Math.PI)
    for(let i = 0;out<0;i++){
        out+=360
    }
    // out = out%720
    // ////console.log(out)
    return out
    }
    


}
    
class Starboss{
    constructor(x = 0, y = 0){
        this.beads = []
        this.linksl = []
        this.linksr = []
        this.links = []
        this.centroid =  new Bosscircle(350,350, 5, "green")
        this.size = 10
        let start = new Bosscircle(350,350, 2, "yellow")
        let end = new Bosscircle(350,350, 2, "purple")
        
        let spring = new Bossspring(350,350, start, end)
        this.links.push(spring)
        this.beads.push(spring.body)
        this.beads.push(spring.anchor)
        let sproing
        let spraing
        for(let t = 0;t<this.size; t++){
            if(t == 0){

                spraing = new Bossspring(350,350,0, spring.body)
                spraing.body.color = "teal"
                this.linksl.push(spraing)
                this.links.push(spraing)
                this.beads.push(spraing.body)
            }else{
                spraing = new Bossspring(350,350,0, spraing.body)
                 spraing.body.color = "gray"
            this.linksl.push(spraing)
            this.links.push(spraing)
            this.beads.push(spraing.body)
            }
        }
        for(let t = 0;t<this.size; t++){
            if(t == 0){

                 sproing = new Bossspring(350,350, spring.anchor, 0)
                 sproing.body.color = "white"
                this.linksr.push(sproing)
                this.links.push(sproing)
                this.beads.push(sproing.anchor)
            }else{
             sproing = new Bossspring(350,355,sproing.anchor, 0)
             sproing.body.color = "orange"
            this.linksr.push(sproing)
            this.links.push(sproing)
            this.beads.push(sproing.anchor)
            }
        }

        let cap = new Bossspring(350,350,  spraing.body, sproing.anchor )
        cap.draw()
        console.log(cap, this.links)
        this.links.push(cap)
        console.log(cap, this.links)
        this.linksl = []
        this.linksr = []

        this.dis = 150
        this.angle = 0
        this.increment = (Math.PI*2)/this.beads.length

        // for(let t = 0; t<this.beads.length; t++){


        //     this.beads[t].x = this.centroid.x + (Math.sin(this.angle)*this.dis)
        //     this.beads[t].y = this.centroid.y + (Math.cos(this.angle)*this.dis)
        //     this.angle += this.increment
        // }

    }
    draw(){

        for(let t = 0;t<this.beads.length;t++){
            let xvec = (this.beads[t].x-this.centroid.x)
            let yvec =  (this.beads[t].y-this.centroid.y)
            for(let t = 0; (Math.abs(xvec)+Math.abs(yvec)) > .3; t++){
                xvec*=.98
                yvec*=.98
                if(t>1000){
                    break
                }
            }
    
            for(let t = 0; (Math.abs(xvec)+Math.abs(yvec)) < .3; t++){
                xvec*= 1.01
                yvec*= 1.01
                if(t>1000){
                    break
                }
            }
            this.beads[t].sxmom += xvec
            this.beads[t].symom += yvec

        }


        for(let t = 0;t<this.beads.length;t++){
            this.beads[t].cmove()
        }

        // for(let t = 0;t<this.beads.length;t++){
        //     this.beads[t].cxmom *= .9
        //     this.beads[t].cymom *= .9
        // }

        for(let t = 0;t<this.links.length;t++){
            this.links[t].balance()
        }
        for(let t = 0;t<this.links.length;t++){
            this.links[t].draw()
        }

        let xposavg = 0
        let yposavg = 0

        for(let t = 0;t<this.beads.length;t++){
            xposavg+=this.beads[t].x
            yposavg+=this.beads[t].y
        }
        xposavg/= this.beads.length
        yposavg/= this.beads.length

        this.centroid.x = xposavg
        this.centroid.y = yposavg

        this.centroid.draw()



    }
}

class Finger{
    constructor(center){
        this.center = center

        this.dis = 50
        this.dis2 = 50
        this.angle = Math.PI/4
        this.angle2 = Math.PI/6


        this.timer = 0
        this.tip1 = new Bosscircle(0,0,10,"yellow")

        this.tip2 = new Bosscircle(0,0,10,"orange")
        this.tip12 = new Bosscircle(0,0,10,"yellow")

        this.tip22 = new Bosscircle(0,0,10,"orange")

        this.link1 = new Line(this.tip1.x, this.tip1.y, this.center.x, this.center.y, "red", 3)
        this.link2 = new Line(this.tip2.x, this.tip2.y, this.center.x, this.center.y, "red", 3)
        this.link12 = new Line(this.tip1.x, this.tip1.y, this.tip12.x, this.tip12.y, "red", 3)
        this.link22 = new Line(this.tip2.x, this.tip2.y, this.tip22.x, this.tip22.y, "red", 3)
        this.tip12 =  new Bosscircle(this.tip1.x+(Math.sin(0+this.angle2)*this.dis2),this.tip1.y+(Math.cos(0+this.angle2)*this.dis2),10,"purple")
        this.tip22 =  new Bosscircle(this.tip2.x+(Math.sin(0-this.angle2)*this.dis2),this.tip2.y+(Math.cos(0-this.angle2)*this.dis2),10,"pink")
    }

    draw(){

        this.timer++



        this.tip1 =  new Bosscircle(this.center.x+(Math.cos(this.center.anglex+this.angle)*this.dis),this.center.y+(Math.sin(this.center.anglex+this.angle)*this.dis),10,"yellow")
        this.tip2 =  new Bosscircle(this.center.x+(Math.cos(this.center.anglex-this.angle)*this.dis),this.center.y+(Math.sin(this.center.anglex-this.angle)*this.dis),10,"orange")

        this.tip12 =  new Bosscircle(this.tip1.x+(Math.cos(this.center.anglex-this.angle2)*this.dis2),this.tip1.y+(Math.sin(this.center.anglex-this.angle2)*this.dis2),10,"purple")
        this.tip22 =  new Bosscircle(this.tip2.x+(Math.cos(this.center.anglex+this.angle2)*this.dis2),this.tip2.y+(Math.sin(this.center.anglex+this.angle2)*this.dis2),10,"pink")


        this.link1 = new Line(this.tip1.x, this.tip1.y, this.center.x, this.center.y, "red", 3)
        this.link2 = new Line(this.tip2.x, this.tip2.y, this.center.x, this.center.y, "red", 3)
        this.link12 = new Line(this.tip1.x, this.tip1.y, this.tip12.x, this.tip12.y, "red", 3)
        this.link22 = new Line(this.tip2.x, this.tip2.y, this.tip22.x, this.tip22.y, "red", 3)
        this.link1.draw()
        this.link2.draw()
        this.link12.draw()
        this.link22.draw()
        this.tip1.draw()
        this.tip2.draw()
        this.tip12.draw()
        this.tip22.draw()


    }
}

class Arm{
    // constructor(x, y){
        constructor(center){

        this.start = center//new Bosscircle(350,0, 2, "yellow")
        this.end = new Bosscircle(350,350, 2, "purple")
        this.segments = []
        this.timer = 0
        this.size = 0
        
        let spring = new Bossspringhand(350,350, this.start, this.end)
        this.segments.push(spring)
        let spraing
        for(let t = 0;t<this.size; t++){
            if(t == 0){
                spraing = new Bossspringhand(350,350,0, spring.body)
                spraing.body.color = "teal"
                this.segments.push(spraing)
            }else{
                spraing = new Bossspringhand(350,350,0, spraing.body)
                 spraing.body.color = "gray"
                this.segments.push(spraing)
            }
        }

        
        this.joint = this.segments[this.segments.length-1].body


        // this.grip = []

        this.hand1 = new Finger(this.joint)

        

    }
    draw(){
        // for(let t = 0;t<this.segments.length;t++){
        //     this.segments[t].body.ymom+=.01
        //     this.start.sxmom = 0
        //     this.start.symom = 0
        //     this.segments[t].draw()
        //     this.start.sxmom = 0
        //     this.start.symom = 0
        // }
        this.hand1.draw()
        this.joint.draw()
        this.timer++
        // if(this.timer%200 < 100){
        //     this.hand1.angle += .005
        //     this.hand1.angle2 -= .005
        // }else{
        //     this.hand1.angle -= .005
        //     this.hand1.angle2 += .005
        // }
        if(keysPressed['q']){
            if(this.hand1.angle < 1.8){
                this.hand1.angle += .005
                this.hand1.angle2 -= .005

            }
        }

        let rooted = 0

        
    for(let t = 0;t<targets.length;t++){
        if(targets[t].rooted == 1){
            rooted = 1
        }
    }
    
        if(keysPressed['e']){
            if(rooted == 0){
                if(this.hand1.angle > .8){
                this.hand1.angle -= .005
                this.hand1.angle2 += .005
                }

            }
        }

        // if(keysPressed['w']){
        //     this.hand1.center.y -=5
        // }
        // if(keysPressed['a']){
        //     this.hand1.center.x -=5
        // }
        // if(keysPressed['s']){
        //     this.hand1.center.y +=5
        // }
        // if(keysPressed['d']){
        //     this.hand1.center.x +=5
        // }
    }
}

class Rectangle {
    constructor(x, y, height, width, color) {
        this.wall = 0
        this.x = x
        this.y = y
        this.height = height
        this.width = width
        this.color = color
        this.xmom = 0
        this.ymom = 0
    }
    draw(){
        tutorial_canvas_context.fillStyle = this.color
        tutorial_canvas_context.fillRect(this.x, this.y, this.width, this.height)
    }
    move(){
        this.x+=this.xmom
        this.xmom *= .97
        this.y+=this.ymom
    }
    ymove(){
        if(this.ymom > 0){
            this.y+=this.ymom
        }
    }
    isPointInside(point){
        if(point.x >= this.x){
            if(point.y >= this.y){
                if(point.x <= this.x+this.width){
                    if(point.y <= this.y+this.height){
                    return true
                    }
                }
            }
        }
        return false
    }
}
let targets = []
let clawer = new Clawtop()

// let starboss = new Arm(350, 0)
let starboss = new Arm(clawer.joints[clawer.joints.length-1])

for(let t = 0;t< 120;t++){
    let target = new Bosscircle(200+(Math.random()*(tutorial_canvas.width-220)),Math.random()*tutorial_canvas.height,10+(Math.random()*10), getRandomLightColor())

    targets.push(target)
}

clawer.draw()

for(let t = 0;t<1000;t++){
    clawer.contract()
    clawer.draw()
}
let flap = new Rectangle(170, 550, 150, 10, "white")

// let rooted = 0

window.addEventListener('mousedown', e => {
    // for(let t = 0;t<starboss.beads.length;t++){
    //     starboss.beads[t].sxmom = 0
    //     starboss.beads[t].symom = 0
    // }   
})
window.setInterval(function(){ 
     tutorial_canvas_context.clearRect(0,0,12800,7200)
 

     for(let t = 0;t<targets.length;t++){
    if(starboss.hand1.tip12.repelCheck(targets[t])){
        if(starboss.hand1.tip22.repelCheck(targets[t])){
            if(keysPressed['e']){

                if( targets[t].rooted == 0){
                    targets[t].rootedx = targets[t].x-starboss.hand1.tip22.x
                    targets[t].rootedy = targets[t].y-starboss.hand1.tip22.y
    
                }
                targets[t].rooted = 1
            }
        }else{
            targets[t].rooted = 0
        }
    }else{
        targets[t].rooted = 0
    }
     }
     for(let t = 0;t<targets.length;t++){
         targets[t].move()
         }
    starboss.draw()

    clawer.draw()
    for(let t = 0;t<targets.length;t++){
        if(targets[t].rooted == 0){
            targets[t].ymom +=.1
        }
    }
     
    for(let t = 0;t<targets.length;t++){
        targets[t].draw()
    }
   


    for(let t = 0;t<targets.length;t++){
    if(targets[t].rooted == 1){
        targets[t].x = starboss.hand1.tip22.x + targets[t].rootedx
        targets[t].y = starboss.hand1.tip22.y + targets[t].rootedy

        // targets[t].x = (starboss.hand1.tip12.x+starboss.hand1.tip22.x)/2
        // targets[t].y = (starboss.hand1.tip12.y+starboss.hand1.tip22.y)/2
    }else{
        
        if(starboss.hand1.tip12.repelCheck(targets[t])){
            const distance = ((new Line(starboss.hand1.tip12.x, starboss.hand1.tip12.y, targets[t].x, targets[t].y, 1, "red")).hypotenuse())-(starboss.hand1.tip12.radius+targets[t].radius)
            const angleRadians = Math.atan2(starboss.hand1.tip12.y - targets[t].y, starboss.hand1.tip12.x - targets[t].x);
            targets[t].xrepel += (Math.cos(angleRadians)*distance)/1
            targets[t].yrepel += (Math.sin(angleRadians)*distance)/1
            targets[t].repel()
        }
        if(starboss.hand1.tip22.repelCheck(targets[t])){
            const distance = ((new Line(starboss.hand1.tip22.x, starboss.hand1.tip22.y, targets[t].x, targets[t].y, 1, "red")).hypotenuse())-(starboss.hand1.tip22.radius+targets[t].radius)
            const angleRadians = Math.atan2(starboss.hand1.tip22.y - targets[t].y, starboss.hand1.tip22.x - targets[t].x);
            targets[t].xrepel += (Math.cos(angleRadians)*distance)/1
            targets[t].yrepel += (Math.sin(angleRadians)*distance)/1
            targets[t].repel()
        }   
        if(starboss.hand1.tip1.repelCheck(targets[t])){
            const distance = ((new Line(starboss.hand1.tip1.x, starboss.hand1.tip1.y, targets[t].x, targets[t].y, 1, "red")).hypotenuse())-(starboss.hand1.tip1.radius+targets[t].radius)
            const angleRadians = Math.atan2(starboss.hand1.tip1.y - targets[t].y, starboss.hand1.tip1.x - targets[t].x);
            targets[t].xrepel += (Math.cos(angleRadians)*distance)/1
            targets[t].yrepel += (Math.sin(angleRadians)*distance)/1
            targets[t].repel()
        }
        if(starboss.hand1.tip2.repelCheck(targets[t])){
            const distance = ((new Line(starboss.hand1.tip2.x, starboss.hand1.tip2.y, targets[t].x, targets[t].y, 1, "red")).hypotenuse())-(starboss.hand1.tip2.radius+targets[t].radius)
            const angleRadians = Math.atan2(starboss.hand1.tip2.y - targets[t].y, starboss.hand1.tip2.x - targets[t].x);
            targets[t].xrepel += (Math.cos(angleRadians)*distance)/1
            targets[t].yrepel += (Math.sin(angleRadians)*distance)/1
            targets[t].repel()
        }
    }
    }
    
    for(let t = 0;t<targets.length;t++){
        for(let k = 0;k<targets.length;k++){
            if(k!== t){
                if(targets[k].repelCheck(targets[t])){
                const distance = ((new Line( targets[k].x, targets[k].y, targets[t].x, targets[t].y, 1, "red")).hypotenuse())-(targets[k].radius+targets[t].radius)
                const angleRadians = Math.atan2(targets[k].y - targets[t].y,targets[k].x - targets[t].x);
                targets[t].xrepel += (Math.cos(angleRadians)*distance)/4
                targets[t].yrepel += (Math.sin(angleRadians)*distance)/4
                // targets[t].repel()
                }
            }
        }
    }
    
    for(let t = 0;t<targets.length;t++){

                targets[t].repel()
       
    }
    
    for(let t = 0;t<targets.length;t++){
        for(let k = 0;k<targets.length;k++){
            if(k!== t){
                if(targets[k].repelCheck(targets[t])){
                const distance = ((new Line( targets[k].x, targets[k].y, targets[t].x, targets[t].y, 1, "red")).hypotenuse())-(targets[k].radius+targets[t].radius)
                const angleRadians = Math.atan2(targets[k].y - targets[t].y,targets[k].x - targets[t].x);
                targets[t].xrepel += (Math.cos(angleRadians)*distance)/4
                targets[t].yrepel += (Math.sin(angleRadians)*distance)/4
                // targets[t].repel()
                }
            }
        }
    }
    
    for(let t = 0;t<targets.length;t++){

                targets[t].repel()
       
    }
    
    for(let t = 0;t<targets.length;t++){
        for(let k = 0;k<targets.length;k++){
            if(k!== t){
                if(targets[k].repelCheck(targets[t])){
                const distance = ((new Line( targets[k].x, targets[k].y, targets[t].x, targets[t].y, 1, "red")).hypotenuse())-(targets[k].radius+targets[t].radius)
                const angleRadians = Math.atan2(targets[k].y - targets[t].y,targets[k].x - targets[t].x);
                targets[t].xrepel += (Math.cos(angleRadians)*distance)/4
                targets[t].yrepel += (Math.sin(angleRadians)*distance)/4
                // targets[t].repel()
                }
            }
        }
    }
    
    for(let t = 0;t<targets.length;t++){

                targets[t].repel()
       
    }
    
    for(let t = 0;t<targets.length;t++){
        for(let k = 0;k<targets.length;k++){
            if(k!== t){
                if(targets[k].repelCheck(targets[t])){
                const distance = ((new Line( targets[k].x, targets[k].y, targets[t].x, targets[t].y, 1, "red")).hypotenuse())-(targets[k].radius+targets[t].radius)
                const angleRadians = Math.atan2(targets[k].y - targets[t].y,targets[k].x - targets[t].x);
                targets[t].xrepel += (Math.cos(angleRadians)*distance)/4
                targets[t].yrepel += (Math.sin(angleRadians)*distance)/4
                // targets[t].repel()
                }
            }
        }
    }
    
    for(let t = 0;t<targets.length;t++){

                targets[t].repel()
       
    }
    
    for(let t = 0;t<targets.length;t++){
        for(let k = 0;k<targets.length;k++){
            if(k!== t){
                if(targets[k].repelCheck(targets[t])){
                const distance = ((new Line( targets[k].x, targets[k].y, targets[t].x, targets[t].y, 1, "red")).hypotenuse())-(targets[k].radius+targets[t].radius)
                const angleRadians = Math.atan2(targets[k].y - targets[t].y,targets[k].x - targets[t].x);
                targets[t].xrepel += (Math.cos(angleRadians)*distance)/4
                targets[t].yrepel += (Math.sin(angleRadians)*distance)/4
                // targets[t].repel()
                }
            }
        }
    }
    
    for(let t = 0;t<targets.length;t++){

                targets[t].repel()
       
    }
    // clawer.draw()
    // clawer.draw()
    // clawer.draw()
    // if(keysPressed['w']){
    //     targets[t].y -=.5
    // }
    // if(keysPressed['a']){
    //     targets[t].x -=.5
    // }
    // if(keysPressed['s']){
    //     targets[t].y +=.5
    // }
    // if(keysPressed['d']){
    //     targets[t].x +=.5
    // }
    flap.draw()
},  10) 


function squarecircleface(square, circle){
    const squareendh = square.y + square.height
    const squareendw = square.x + square.width
    if(square.x <= circle.x+circle.radius){
        if(square.y <= circle.y){
            if(squareendw+circle.radius >= circle.x){
                if(squareendh >= circle.y){
                    return true
                }
            }
        }
    }
    return false
    }

function getRandomLightColor() {
    var letters = '0123456789ABCDEF';
    var color = '#';
    for (var i = 0; i < 6; i++) {
      color += letters[(Math.floor(Math.random() * 12)+3)];
    }
    // color+="11"
    return color;
    }