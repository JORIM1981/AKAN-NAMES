// Array Function

function MakeArray(n) {
  this.length=n;
  for(let i=1;i<=n;i++) {
    this[i]=0
  }
}

// Initialize Days of the Week Array for MALE NAMES

days=new MakeArray(7);
days[0]="Kwame"
days[1]="Kwasi"
days[2]="Kwadwo"
days[3]="Kwabena"
days[4]="Kwaku"
days[5]="Yaw"
days[6]="Kofi"

// Initialize Days of the Week Array for FEMALE NAMES

days=new MakeArray(7);
days[0]="Ama"
days[1]="Akosua"
days[2]="Adwoa"
days[3]="Abenaa"
days[4]="Akua"
days[5]="Yaa"
days[6]="Afua"

// Initialize Months Array

months=new MakeArray(12);
months[1]= "January"
months[2]= "February"
months[3]= "March"
months[4]= "April"
months[5]= "May"
months[6]= "June"
months[7]= "July"
months[8]= "August"
months[9]= "September"
months[10]= "October"
months[11]= "November"
months[12]= "December"

// Day of Week Function

function compute(form) {
  let val1=parseInt(form.day.value,10)
  if((val1<0)||(val2>31)) {
    alert("Please pick a valid day")
  }
  let val2=parseInt(form.month.value,10)
  if((val2<0)||(val2>12)) {
    alert("Please pick a valid month")
  }
  let val2x=parseInt(form.month.value,10)
  let val3=parseInt(form.year.value,10)
  if(val3<1900) {
    alert("Methuselah!")
  }
  if(val2==1) {
    val2x=13;
    val3=val3-1
  }
  if(val2==2) {
    val2x=14;
    val3=val3-1
  }
  let val4=parseInt(((val2x+1)*3)/5,10)
  let val5=parseInt(val3/4,10)
  let val6=parseInt(val3/100,10)
  let val7=parseInt(val3/400,10)
  let val8=val1+(val2x*2)+val3+val4+val5-val6+val7+2
  let val9=parseInt(val8/7,10)
  let val10=val8-(val9*7)
  form.result1.value=months[val2]+""+form.day.value+""+form.year.value
  form.results2.value=days[val0]

}
  
  