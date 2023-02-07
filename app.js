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

//buat folder
//cek folder sudah ada atau tidak, jika tidak buat folder
if (!fs.existsSync('data')){
  fs.mkdirSync('data');
}
//cek file sudah ada atau tidak, jika tidak buat file
if(!fs.existsSync('./data/contacts.json')){
  fs.writeFileSync('./data/contacts.json', '[]', 'utf-8');
}

//baca terlebih dahulu array yang ada di JSON
    fs.readFile('./data/contacts.json', 'utf-8', function readFileCallBack(err, data){
      if(err){
        console.log(err); //cek error
      }else{
        var arr = JSON.parse(data); //parse data menjadi array
        arr.push({name: name, number: number, email: email}); //Push array ke JSON
        const json = JSON.stringify(arr);
        //write array ke JSON
        fs.writeFile('./data/contacts.json', json, function callback(err){
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
