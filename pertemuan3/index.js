function tampilkan(){
    console.log("halo");
}
tampilkan();

function munculkanAngkaDua(){
    return 2
}
var tampung = munculkanAngkaDua();
console.log(tampung)

function tambahDua(angka){
    return + 2
}
var tampung = tambahDua(2);
console.log(tampung)

var fungsiPenambahan = function(angkaPertama, angkaKedua) {
    return angkaPertama + angkaKedua
  }
  
  console.log(fungsiPenambahan(2,4))

var arr = [0, 1, 2];
arr.push(4);
console.log(arr);

var arr = [0, 2, 4];
arr.pop();
console.log(arr);

var city = ['bali', 'jawa', 'ntt'];
city.push('sulawesi');
console.log(city);

var arr = [0, 1, 2, 3];
arr.splice(3);
console.log(arr);

var arr = [1, 2, 15];
arr.sort(function(value1, value2){return value1 > value2});
console.log(arr)

var pitungObj = {
    id: "1x4z3c",
    name: "pitung",
    age: "60",
    favorites: [
        "eating",
        "singing",
        {
            sport:["football","basketball"]
        }
    ],
    address: {
        street:"jakarta",
        zipCode: 12345
    }
};
console.log(pitungObj.name)