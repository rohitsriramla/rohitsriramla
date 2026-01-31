/*let a = 10;
const b=120;
a=350;
//console.log(a,b);
console.log("the value of this number is " + a)*/

class varible{

a="rohit";
b=120;


Great(){

  console.log(this.a,"has "+ this.b,"$", "Money");
}
}

class varible2{
  
static c=350;
static d="sri"

static Great2(){

  console.log(this.c,"has "+ this.d,"$", "Money");
}

}

const v =new varible();
v.Great();


varible2.Great2();

