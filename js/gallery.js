// Gallery Carousel JavaScript
class GalleryCarousel {
    constructor() {
        this.currentSlide = 0;
        this.totalImages = 74; // Número total de imágenes disponibles en el directorio
        this.autoSlideInterval = null;
        this.autoSlideDelay = 4000; // 4 segundos
        this.isTransitioning = false;
        this.modal = null;
        this.modalImage = null;
        this.modalCounter = null;
        this.currentModalImage = 0;
        
        this.init();
    }
    
    init() {
        this.createCarouselStructure();
        this.loadImages();
        this.createIndicators();
        this.bindEvents();
        this.initModal();
        this.startAutoSlide();
    }
    
    createCarouselStructure() {
        const track = document.querySelector('.carousel-track');
        if (!track) return;
        
        // Limpiar contenido existente
        track.innerHTML = '';
    }
    
    loadImages() {
        const track = document.querySelector('.carousel-track');
        if (!track) return;
        
        for (let i = 1; i <= this.totalImages; i++) {
            const slide = document.createElement('div');
            slide.className = 'carousel-slide';
            
            const img = document.createElement('img');
            img.src = `img/${i}.jpg`;
            img.alt = `Galería imagen ${i}`;
            img.loading = 'lazy';
            
            // Manejar errores de carga de imagen
            img.onerror = () => {
                console.warn(`Imagen ${i}.jpg no encontrada`);
                slide.style.display = 'none';
            };
            
            // Agregar evento click para abrir modal
            img.addEventListener('click', () => {
                this.openModal(i - 1); // i-1 porque el índice empieza en 0
            });
            
            img.style.cursor = 'pointer';
            
            slide.appendChild(img);
            track.appendChild(slide);
        }
    }
    
    createIndicators() {
        const indicatorsContainer = document.querySelector('.carousel-indicators');
        if (!indicatorsContainer) return;
        
        indicatorsContainer.innerHTML = '';
        
        for (let i = 0; i < this.totalImages; i++) {
            const indicator = document.createElement('div');
            indicator.className = 'indicator';
            if (i === 0) indicator.classList.add('active');
            
            indicator.addEventListener('click', () => {
                this.goToSlide(i);
            });
            
            indicatorsContainer.appendChild(indicator);
        }
    }
    
    bindEvents() {
        const prevBtn = document.querySelector('.carousel-btn-prev');
        const nextBtn = document.querySelector('.carousel-btn-next');
        const carousel = document.querySelector('.gallery-carousel');
        
        if (prevBtn) {
            prevBtn.addEventListener('click', () => {
                this.prevSlide();
            });
        }
        
        if (nextBtn) {
            nextBtn.addEventListener('click', () => {
                this.nextSlide();
            });
        }
        
        // Pausar auto-slide al hacer hover
        if (carousel) {
            carousel.addEventListener('mouseenter', () => {
                this.stopAutoSlide();
            });
            
            carousel.addEventListener('mouseleave', () => {
                this.startAutoSlide();
            });
        }
        
        // Soporte para navegación con teclado
        document.addEventListener('keydown', (e) => {
            if (e.key === 'ArrowLeft') {
                this.prevSlide();
            } else if (e.key === 'ArrowRight') {
                this.nextSlide();
            }
        });
        
        // Soporte para gestos táctiles
        this.addTouchSupport();
    }
    
    addTouchSupport() {
        const track = document.querySelector('.carousel-track');
        if (!track) return;
        
        let startX = 0;
        let endX = 0;
        
        track.addEventListener('touchstart', (e) => {
            startX = e.touches[0].clientX;
        });
        
        track.addEventListener('touchend', (e) => {
            endX = e.changedTouches[0].clientX;
            this.handleSwipe(startX, endX);
        });
    }
    
    handleSwipe(startX, endX) {
        const threshold = 50;
        const diff = startX - endX;
        
        if (Math.abs(diff) > threshold) {
            if (diff > 0) {
                this.nextSlide();
            } else {
                this.prevSlide();
            }
        }
    }
    
    goToSlide(slideIndex) {
        if (this.isTransitioning) return;
        
        this.isTransitioning = true;
        this.currentSlide = slideIndex;
        
        const track = document.querySelector('.carousel-track');
        const indicators = document.querySelectorAll('.indicator');
        
        if (track) {
            const translateX = -slideIndex * 100;
            track.style.transform = `translateX(${translateX}%)`;
        }
        
        // Actualizar indicadores
        indicators.forEach((indicator, index) => {
            indicator.classList.toggle('active', index === slideIndex);
        });
        
        // Reset transition flag
        setTimeout(() => {
            this.isTransitioning = false;
        }, 500);
    }
    
    nextSlide() {
        const nextIndex = (this.currentSlide + 1) % this.totalImages;
        this.goToSlide(nextIndex);
    }
    
    prevSlide() {
        const prevIndex = (this.currentSlide - 1 + this.totalImages) % this.totalImages;
        this.goToSlide(prevIndex);
    }
    
    startAutoSlide() {
        this.stopAutoSlide();
        this.autoSlideInterval = setInterval(() => {
            this.nextSlide();
        }, this.autoSlideDelay);
    }
    
    stopAutoSlide() {
        if (this.autoSlideInterval) {
            clearInterval(this.autoSlideInterval);
            this.autoSlideInterval = null;
        }
    }
    
    // Método público para actualizar el número total de imágenes
    updateTotalImages(newTotal) {
        this.totalImages = newTotal;
        this.currentSlide = 0;
        this.loadImages();
        this.createIndicators();
        this.goToSlide(0);
    }
    
    // Inicializar modal
    initModal() {
        this.modal = document.getElementById('imageModal');
        this.modalImage = document.getElementById('modalImage');
        this.modalCounter = document.getElementById('modalCounter');
        
        if (!this.modal || !this.modalImage || !this.modalCounter) {
            console.warn('Elementos del modal no encontrados');
            return;
        }
        
        // Eventos del modal
        const modalClose = document.getElementById('modalClose');
        const modalPrev = document.getElementById('modalPrev');
        const modalNext = document.getElementById('modalNext');
        
        if (modalClose) {
            modalClose.addEventListener('click', () => {
                this.closeModal();
            });
        }
        
        if (modalPrev) {
            modalPrev.addEventListener('click', () => {
                this.prevModalImage();
            });
        }
        
        if (modalNext) {
            modalNext.addEventListener('click', () => {
                this.nextModalImage();
            });
        }
        
        // Cerrar modal al hacer click en el fondo
        this.modal.addEventListener('click', (e) => {
            if (e.target === this.modal) {
                this.closeModal();
            }
        });
        
        // Cerrar modal con tecla Escape
        document.addEventListener('keydown', (e) => {
            if (e.key === 'Escape' && this.modal.classList.contains('show')) {
                this.closeModal();
            }
            if (this.modal.classList.contains('show')) {
                if (e.key === 'ArrowLeft') {
                    e.preventDefault();
                    this.prevModalImage();
                } else if (e.key === 'ArrowRight') {
                    e.preventDefault();
                    this.nextModalImage();
                }
            }
        });
    }
    
    // Abrir modal con imagen específica
    openModal(imageIndex) {
        if (!this.modal || !this.modalImage) return;
        
        this.currentModalImage = imageIndex;
        this.updateModalImage();
        this.modal.classList.add('show');
        
        // Pausar carrusel automático
        this.stopAutoSlide();
        
        // Prevenir scroll del body
        document.body.style.overflow = 'hidden';
    }
    
    // Cerrar modal
    closeModal() {
        if (!this.modal) return;
        
        this.modal.classList.remove('show');
        
        // Restaurar scroll del body
        document.body.style.overflow = '';
        
        // Reanudar carrusel automático
        this.startAutoSlide();
    }
    
    // Actualizar imagen del modal
    updateModalImage() {
        if (!this.modalImage || !this.modalCounter) return;
        
        const imageNumber = this.currentModalImage + 1;
        this.modalImage.src = `img/${imageNumber}.jpg`;
        this.modalImage.alt = `Imagen de galería ${imageNumber}`;
        this.modalCounter.textContent = `${imageNumber} / ${this.totalImages}`;
    }
    
    // Imagen anterior en modal
    prevModalImage() {
        this.currentModalImage = (this.currentModalImage - 1 + this.totalImages) % this.totalImages;
        this.updateModalImage();
    }
    
    // Imagen siguiente en modal
    nextModalImage() {
        this.currentModalImage = (this.currentModalImage + 1) % this.totalImages;
        this.updateModalImage();
    }
}

// Inicializar el carrusel cuando el DOM esté listo
document.addEventListener('DOMContentLoaded', () => {
    // Verificar si estamos en la página que tiene la galería
    const gallerySection = document.querySelector('.gallery-section');
    if (gallerySection) {
        new GalleryCarousel();
    }
});

// Exportar la clase para uso externo si es necesario
if (typeof module !== 'undefined' && module.exports) {
    module.exports = GalleryCarousel;
}