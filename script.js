const penulis = document.querySelector('.foot');
const bio = {
    nama : 'Rio Aldi Erwanto',
    npm : '2013020017',
    univ : 'Universitas PGRI Kediri',
    fakultas : 'Teknik Informatika'
}
penulis.innerHTML=`<p> Halo, Nama saya ${bio.nama} dari ${bio.univ}
fakultas ${bio.fakultas} dengan Nomor Mahasiswa ${bio.npm}
Web ini Saya buat hanya sebagai referensi Belajar front-end Developer
semoga teman-teman semua menikmati terima kasih sudah berkenan Hadir terima kasih </p>`
const gambar = document.createElement('div');
gambar.setAttribute('id','gambar')
penulis.appendChild(gambar);
penulis.style.backgroundColor ="black";