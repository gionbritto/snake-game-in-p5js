class Snake{
  constructor(){
    this.len = 1; //snake's length
    this.body = [];
    this.body[0] = createVector(floor(w/2,0),floor(h/2,0));
    this.xdir = 0;
    this.ydir = 0;    
  }
  
  setDir(x,y){
    this.xdir = x;
    this.ydir = y;
  }
  
  update(){
    let head = this.body[this.body.length-1].copy();
    this.body.shift();
    head.x += this.xdir;
    head.y += this.ydir;
    this.body.push(head);
    
    //this.body[0].x += this.xdir;
    //this.body[0].y += this.ydir;
  }
  
  endGame(){
    let x = this.body[this.body.length-1].x;
    let y = this.body[this.body.length-1].y;
    if(x > w-1 || x < 0 || y > h-1 || y < 0){
      return true;
    }
    for(let i = 0; i < this.body.length-1; i++){
      let part = this.body[i];
      if(part.x == x && part.y == y){
        return true;
      }
    }
    return false;
    
  }
  
  eat(pos){
    let x = this.body[this.body.length-1].x;
    let y = this.body[this.body.length-1].y;
    if(x == pos.x && y == pos.y){
      this.grow(); //after eat my snake grows
      return true;
    }
    return false;
    
  }
  
  grow(){
    let head = this.body[this.body.length-1].copy();
    this.len++;
    this.body.push(head);
  }
  
  show(){
    for(let i = 0; i < this.body.length; i++){              fill(0);
       noStroke();
       rect(this.body[i].x, this.body[i].y, 1, 1);
    }
  }
}