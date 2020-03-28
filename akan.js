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