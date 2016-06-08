var imgInimigo1 = new Image();
imgInimigo1.src = "img/enemy_1.png";

function Enemy(){
  this.x = 110;
  this.y = 115;
  this.raio = 16;
  this.vx = 0;
  this.ax = 0;
  this.vy = 0;
  this.ay = 0;
  this.cor = 'lightgrey';
}

Enemy.prototype.mover = function (){
  this.vx = this.vx + this.ax*dt;
  this.x = this.x + this.vx*dt;
  this.vy = this.vy + this.ay*dt;
  this.y = this.y + this.vy*dt;
}

Enemy.prototype.desenhar = function (){
  ctx.drawImage(imgInimigo1, this.x-this.raio, this.y-this.raio, 2*this.raio, 2*this.raio);
}

Enemy.prototype.restricoes = function(){
  if(this.y>tela.height+15){
    this.x = Math.floor((Math.random() * tela.width) + 1);
    this.y = -30 - Math.random()*200;
    this.vy = Math.floor((Math.random() * 30) + 20);
    this.vx = 0;
  }
  this.ax = 0.3*(pc.x-this.x);
}

Enemy.prototype.colidiuComCircular = function (alvo) {
  var distancia = Math.sqrt(
        Math.pow(alvo.x - this.x, 2)+
        Math.pow(alvo.y - this.y, 2)
  );
  return distancia<(alvo.raio+this.raio);
};
