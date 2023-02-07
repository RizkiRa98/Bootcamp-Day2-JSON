const fs  = require('fs');
const { json } = require('stream/consumers');
const readline = require('readline').createInterface({
  input: process.stdin,
  output: process.stdout,
});
  readline.question('Masukkan Nama : ', (name) => {
  readline.question('Masukkan Nomor : ', (number) =>{
  readline.question('Masukkan Email : ', (email) =>{
      console.log(`Nama ${name}, nomor ${number}, Email ${email}`);
  readline.close();
    

    fs.readFile('./contacts.json', 'utf-8', function readFileCallBack(err, data){
      if(err){
        console.log(err);
      }else{
        var arr = JSON.parse(data);
        arr.push({name: name, number: number, email: email});
        const json = JSON.stringify(arr);
        fs.writeFile('contacts.json', json, function callback(err){
          if(err){
            console.log(err);
          }
        });
      }
    });
    console.log('Data Tersimpan')
    readline.close();
  });
  });
});
