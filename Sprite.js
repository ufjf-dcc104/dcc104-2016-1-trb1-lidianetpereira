var nave = new Image();
nave.src = "img/player_ship.png";

function Sprite(){
  this.x = tela.width/2;
  this.y = tela.height;
  this.raio = 16;
  this.vx = 0;
  this.ax = 0;
  this.vy = 0;
  this.ay = 0;
  this.cor = 'lightgrey';
  this.vidas = 3;
  this.energy = 100;
  this.score = 0;
}

Sprite.prototype.mover = function (){
  if(this.vidas > 0) {
    this.score += 2 * dt;
  }

  this.vx = this.vx + this.ax*dt;
  this.x = this.x + this.vx*dt;
  this.vy = this.vy + this.ay*dt;
  this.y = this.y + this.vy*dt;
}

Sprite.prototype.desenhar = function (){
  ctx.drawImage(nave, this.x-this.raio, this.y-this.raio, 2*this.raio, 2*this.raio);
}

Sprite.prototype.restricoes = function(){
  if(this.x<15){
    this.x = 15;
    this.vx = 0;
    this.ax = 0;
  }
  if(this.x>tela.width-15) {
    this.x=tela.width-15;
    this.vx = 0;
    this.ax = 0;
  }
  if(this.y<35){
    this.y = 35;
    this.vy = 0;
    this.ay = 0;
  }
  if(this.y>tela.height-15) {
    this.y=tela.height-15;
    this.vy = 0;
    this.ay = 0;
  }
}

Sprite.prototype.colidiuComCircular = function (alvo) {
  var distancia = Math.sqrt(
        Math.pow(alvo.x - this.x, 2)+
        Math.pow(alvo.y - this.y, 2)
  );
  return distancia<(alvo.raio+this.raio);
};
