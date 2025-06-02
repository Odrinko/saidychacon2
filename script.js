document.addEventListener('DOMContentLoaded', () => {
    // Generar galería dinámica
    const galleryGrid = document.getElementById('gallery-grid');
    const totalPhotos = 11;
    
    for (let i = 1; i <= totalPhotos; i++) {
        const galleryItem = document.createElement('div');
        galleryItem.className = 'gallery-item';
        galleryItem.style.animationDelay = `${i * 0.1}s`;
        
        const img = document.createElement('img');
        img.src = `images/photo${i}.jpeg`;
        img.alt = `Fotografía submarina ${i}`;
        img.loading = "lazy";
        
        galleryItem.appendChild(img);
        galleryGrid.appendChild(galleryItem);
        
        // Evento para lightbox
        galleryItem.addEventListener('click', () => {
            openLightbox(img.src);
        });
    }
    
    // Lightbox
    const lightbox = document.getElementById('lightbox');
    const lightboxImg = document.getElementById('lightbox-img');
    const closeBtn = document.getElementById('close-btn');
    
    function openLightbox(src) {
        lightboxImg.src = src;
        lightbox.classList.add('active');
        document.body.style.overflow = 'hidden';
    }
    
    closeBtn.addEventListener('click', () => {
        lightbox.classList.remove('active');
        document.body.style.overflow = 'auto';
    });
    
    // Cerrar lightbox al hacer clic fuera de la imagen
    lightbox.addEventListener('click', (e) => {
        if (e.target === lightbox) {
            lightbox.classList.remove('active');
            document.body.style.overflow = 'auto';
        }
    });
    
    // Efecto de paralaje suave en el encabezado
    window.addEventListener('scroll', () => {
        const scrollY = window.scrollY;
        document.querySelector('header').style.backgroundPositionY = `${scrollY * 0.5}px`;
    });
});