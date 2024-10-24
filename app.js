function main() {
  let hasilDadu = [1, 5, 2, 6, 2, 3];
  let kemuculanGanjil = 0;
  let kemuculanGenap = 0;

  for(let i=0; i<hasilDadu.length; i++) {
    // console.log(hasilDadu[i])
    // if(hasilDadu[i]/2 == 0) {
    //     kemuculanGenap+=1
    // }
    if(hasilDadu[i]%2 == 0) {
        kemuculanGenap+=1
    }
    else {
        kemuculanGanjil+=1
    }
  }
  console.log(`Raka mendapatkan angka ganjil sebanyak ${kemuculanGanjil} kali dan angka genap sebanyak ${kemuculanGenap} kali`)
  

}
main()

module.exports = main