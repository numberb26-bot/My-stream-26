const imagesAleatoires = [
    { 
        img: 'https://media.themoviedb.org/t/p/w600_and_h900_face/WV1PV0G0RmKWdRkxFnacthKP1w.jpg', 
        lien: 'https://player.abyssplayer.com/R2YEZnfFn?thumbnail=https://media.themoviedb.org/t/p/w600_and_h900_face/WV1PV0G0RmKWdRkxFnacthKP1w.jpg', 
        titre: 'Adam : la corde rompue (1992)',
        tmdbId: 629828,
        tmdbType: 'movie'
    },
    { 
        img: 'https://media.themoviedb.org/t/p/w600_and_h900_face/AoMM2CGN7JDMxoeXGAhypRd3Tqs.jpg', 
        lien: 'https://player.abyssplayer.com/1ySJwur62?thumbnail=https://media.themoviedb.org/t/p/w600_and_h900_face/AoMM2CGN7JDMxoeXGAhypRd3Tqs.jpg', 
        titre: 'Assassin (1986)',
        tmdbId: 112473,
        tmdbType: 'movie'
    },
{ 
        img: 'https://media.themoviedb.org/t/p/w600_and_h900_face/Ec9tItbkljpWYVMUyvktvhUjI0.jpg', 
        lien: 'https://player.abyssplayer.com/zCpyGJ8KT?thumbnail=https://media.themoviedb.org/t/p/w600_and_h900_face/Ec9tItbkljpWYVMUyvktvhUjI0.jpg', 
        titre: 'Appelez-moi Monsieur Tibbs (1970)',
        tmdbId: 34732,
        tmdbType: 'movie'
    },
    
];


function afficherImageAleatoire() {
    const index = Math.floor(Math.random() * imagesAleatoires.length);
    const selection = imagesAleatoires[index];
    document.getElementById('container').innerHTML =
        `<a href="#" onclick="openModal('${selection.lien}', '${selection.titre}'); return false;">
            <img class="anim" src="${selection.img}" width="190" height="260" alt="${selection.titre}">
         </a>
         <div class="legende">${selection.titre}</div>`;
}

function openModal(url, titre) {
    const modal = document.getElementById('videoModal');
    const iframe = document.getElementById('videoFrame');
    const filmTitre = document.getElementById('filmTitre');
    
    iframe.src = url;
    
    // ✅ Trouver le film sélectionné pour obtenir l'URL TMDB
    const selection = imagesAleatoires.find(item => item.titre === titre);
    if (selection && selection.tmdbId) {
        filmTitre.href = `https://www.themoviedb.org/${selection.tmdbType}/${selection.tmdbId}?language=fr`;
        filmTitre.textContent = selection.titre;
        filmTitre.setAttribute('data-tooltip', `TMDB`);
    } else {
        filmTitre.href = '#';
        filmTitre.textContent = titre;
        filmTitre.setAttribute('data-tooltip', 'TMDB');
    }

    void modal.offsetWidth;
    modal.classList.add('active');
}

function closeModl(e) {
    if (e.target.closest('.closeBtn') || e.target.tagName === 'IFRAME' || e.target.id === 'filmTitre') return;
    if (e.target.id === 'videoModal') closeModalDirect();
}

function closeModalDirect() {
    const modal = document.getElementById('videoModal');
    document.getElementById('videoFrame').src = '';
    document.getElementById('filmTitre').href = '#';
    document.getElementById('filmTitre').textContent = '';
    document.getElementById('filmTitre').setAttribute('data-tooltip', 'TMDB');
    modal.classList.remove('active');
    setTimeout(afficherImageAleatoire, 500);
}

window.addEventListener('load', afficherImageAleatoire);