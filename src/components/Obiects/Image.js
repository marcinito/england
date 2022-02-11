export default class Image{
    constructor(x,y,size,drzewo,contextRef){
        this.x=x
        this.y=y
        this.size=size
        this.img=drzewo
    }

    draw(contextRef){
        contextRef.current.drawImage(this.img,this.x,this.y,this.size,this.size)
    }
}