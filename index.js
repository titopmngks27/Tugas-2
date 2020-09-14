var name = "tito";
var money = 4000;
var age = 16;


if (name === "" ){
  console.log("Anda Tidak Boleh Memesan");
  throw new Error('Program Berhenti');
  }else{
  //KURANG DARI 17
    if (age < 17){
      console.log("Anda hanya bisa pesan juice");
      if (money >= 50000 ){
        console.log("Anda bisa pesan minum. Sisa uang anda:", money - 50000);
      }else{console.log("Uang Tidak Cukup Anda Harus Pulang");}
    }else{
        console.log("Anda hanya bisa pesan anggur");
      if (money >= 300000 ){
        console.log("Anda bisa pesan minum. Sisa uang anda:", money - 300000);
      }else{
        console.log("Uang tidak cukup anda harus pulang");
      }
    }
  }