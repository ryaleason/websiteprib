document.addEventListener("DOMContentLoaded", function(){
    const teks1 = document.getElementById("teks1");
    const teks2 = document.getElementById("teks2");
    const teks3 = document.getElementById("teks3");
    const teks4 = document.getElementById("teks4");
    const teks5 = document.getElementById("teks5");

    teks1.addEventListener("click" , function(){
        teks1.classList.add('hilang');
        teks2.classList.remove('hilang');
    });
    teks2.addEventListener("click" , function(){
        teks2.classList.add('hilang');
        teks3.classList.remove('hilang');
    });
    teks3.addEventListener("click" , function(){
        teks3.classList.add('hilang');
        teks4.classList.remove('hilang');
    });
    teks4.addEventListener("click" , function(){
        teks4.classList.add('hilang');
        teks5.classList.remove('hilang');
    });
});







const scriptURL = 'https://script.google.com/macros/s/AKfycbwesFRnXT7DX0SUpMPN0Zs285OynyMzynpeJvWYmXUKB97nSWFMSpTSCG15Ahy9AxBo0w/exec'
        const form = document.forms['pesan-rahasia']
        form.addEventListener('submit', e => {
            e.preventDefault();
            const nama = document.getElementById('nama').value.trim();
            const pesan = document.getElementById('pesan').value.trim();
            const kosong = document.getElementById('kosong');

            if (nama === '' || pesan === '') {
                kosong.style.display = 'block';
                document.getElementById('berhasil').style.display = 'none'
            } else {
                kosong.style.display = 'none';
                fetch(scriptURL, { method: 'POST', body: new FormData(form) })
                    .then(response => {
                        document.getElementById('berhasil').style.display = 'block'; // Tampilkan pesan berhasil
                        form.reset();
                    })
                    .catch(error => console.error('Error!', error.message))
            }
        });