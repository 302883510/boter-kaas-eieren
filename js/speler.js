class speler
{
 constructor(naam, aanBeurt, symbool){
     this.aanBeurt=aanBeurt;
     this.score=0;
     this.symbool=symbool
     this.naam=naam
 }

 resetScore(){
     this.score=0;
 }

 getName()
 {
     return this.naam
 }
  getSymbool()
  {
      return this.symbool
  }
  benIkAanBeurt()
    {
        return this.aanBeurt;
    }

  wisselBeurt()
  {
      if(this.aanBeurt===true){
          this.aanBeurt=false;
      } else {
          this.aanBeurt=true;
      }
  }
  show () {
    return ` ${this.naam} ${this.symbool} ${this.score} <br>`;
}




}