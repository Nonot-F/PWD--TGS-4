// Tugas 4 - JS dan console.log
// Menghitung luas, keliling, dan volume (untuk bangun 3 dimensi)

// ===== a. Segitiga (siku-siku / umum dengan alas & tinggi) =====
function segitiga(alas, tinggi, sisiA, sisiB, sisiC) {
  const luas = 0.5 * alas * tinggi;
  const keliling = sisiA + sisiB + sisiC;
  console.log("=== a. Segitiga ===");
  console.log(`Alas = ${alas}, Tinggi = ${tinggi}`);
  console.log(`Luas     = 1/2 x alas x tinggi = ${luas}`);
  console.log(`Keliling = ${sisiA} + ${sisiB} + ${sisiC} = ${keliling}`);
  console.log("");
}

// ===== b. Persegi Panjang =====
function persegiPanjang(panjang, lebar) {
  const luas = panjang * lebar;
  const keliling = 2 * (panjang + lebar);
  console.log("=== b. Persegi Panjang ===");
  console.log(`Panjang = ${panjang}, Lebar = ${lebar}`);
  console.log(`Luas     = p x l = ${luas}`);
  console.log(`Keliling = 2 x (p + l) = ${keliling}`);
  console.log("");
}

// ===== c. Prisma (alas segitiga) =====
function prisma(alasSegitiga, tinggiSegitiga, sisiA, sisiB, sisiC, tinggiPrisma) {
  const luasAlas = 0.5 * alasSegitiga * tinggiSegitiga;
  const kelilingAlas = sisiA + sisiB + sisiC;
  const luasPermukaan = 2 * luasAlas + kelilingAlas * tinggiPrisma;
  const volume = luasAlas * tinggiPrisma;
  console.log("=== c. Prisma Segitiga ===");
  console.log(`Alas segitiga = ${alasSegitiga}, Tinggi segitiga = ${tinggiSegitiga}, Tinggi prisma = ${tinggiPrisma}`);
  console.log(`Luas alas        = ${luasAlas}`);
  console.log(`Keliling alas    = ${kelilingAlas}`);
  console.log(`Luas permukaan   = 2 x luas alas + keliling alas x tinggi = ${luasPermukaan}`);
  console.log(`Volume           = luas alas x tinggi = ${volume}`);
  console.log("");
}

// ===== d. Limas (alas persegi) =====
function limas(sisiAlas, tinggiLimas) {
  const luasAlas = sisiAlas * sisiAlas;
  const kelilingAlas = 4 * sisiAlas;
  const tinggiSisiTegak = Math.sqrt(tinggiLimas ** 2 + (sisiAlas / 2) ** 2);
  const luasSisiTegak = 4 * (0.5 * sisiAlas * tinggiSisiTegak);
  const luasPermukaan = luasAlas + luasSisiTegak;
  const volume = (1 / 3) * luasAlas * tinggiLimas;
  console.log("=== d. Limas Segi Empat ===");
  console.log(`Sisi alas = ${sisiAlas}, Tinggi limas = ${tinggiLimas}`);
  console.log(`Luas alas        = ${luasAlas}`);
  console.log(`Keliling alas    = ${kelilingAlas}`);
  console.log(`Tinggi sisi tegak = ${tinggiSisiTegak.toFixed(2)}`);
  console.log(`Luas permukaan   = luas alas + 4 x luas sisi tegak = ${luasPermukaan.toFixed(2)}`);
  console.log(`Volume           = 1/3 x luas alas x tinggi = ${volume.toFixed(2)}`);
  console.log("");
}

// ===== e. Segitiga Sembarang (rumus Heron) =====
function segitigaSembarang(a, b, c) {
  const keliling = a + b + c;
  const s = keliling / 2;
  const luas = Math.sqrt(s * (s - a) * (s - b) * (s - c));
  console.log("=== e. Segitiga Sembarang ===");
  console.log(`Sisi a = ${a}, b = ${b}, c = ${c}`);
  console.log(`Keliling = a + b + c = ${keliling}`);
  console.log(`Setengah keliling (s) = ${s}`);
  console.log(`Luas (rumus Heron) = akar(s(s-a)(s-b)(s-c)) = ${luas.toFixed(2)}`);
  console.log("");
}

// ===== Jalankan semua =====
segitiga(6, 4, 5, 5, 6);
persegiPanjang(10, 5);
prisma(6, 4, 5, 5, 6, 10);
limas(6, 8);
segitigaSembarang(7, 8, 9);