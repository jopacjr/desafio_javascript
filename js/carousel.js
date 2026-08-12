var carouselArr = [];

class Carousel {
    constructor(image, title, url) {
        this.image = image;
        this.title = title;
        this.url = url;
    }

    static count = 0;
    static intervalId = null;

    static Start(arr) {
        if (arr.length === 0) return;
        Carousel.Show(arr);
        Carousel.ResetTimer(arr);
    }

    static ResetTimer(arr) {
        if (Carousel.intervalId) {
            clearInterval(Carousel.intervalId);
        }
        // Tempo ajustado para 5 segundos (5000ms)
        Carousel.intervalId = setInterval(() => {
            Carousel.Next(arr);
        }, 5000);
    }

    static Show(arr) {
        const item = arr[Carousel.count];
        
        const carouselDiv = document.getElementById("carousel");
        const titleDiv = document.getElementById("carousel-title");

        if (carouselDiv) {
            carouselDiv.style.backgroundImage = `url('img/${item.image}')`;
            carouselDiv.style.backgroundSize = "cover";
            carouselDiv.style.backgroundPosition = "center";
            carouselDiv.style.height = "400px";
            carouselDiv.style.position = "relative";
            carouselDiv.style.display = "flex";
            carouselDiv.style.justifyContent = "space-between";
            carouselDiv.style.alignItems = "center";

            // Injeta as setas de navegação caso ainda não estejam na tela
            if (!document.getElementById("btn-prev")) {
                carouselDiv.innerHTML = `
                    <button id="btn-prev" onclick="Carousel.Prev(carouselArr)" style="background: rgba(0,0,0,0.5); color: white; border: none; font-size: 24px; padding: 10px 15px; cursor: pointer; border-radius: 0 5px 5px 0;">&#10094;</button>
                    <button id="btn-next" onclick="Carousel.Next(carouselArr)" style="background: rgba(0,0,0,0.5); color: white; border: none; font-size: 24px; padding: 10px 15px; cursor: pointer; border-radius: 5px 0 0 5px;">&#10095;</button>
                `;
            }
        }

        if (titleDiv) {
            titleDiv.innerHTML = `<a href="${item.url}">${item.title}</a>`;
        }
    }

    static Next(arr) {
        Carousel.count = (Carousel.count + 1) % arr.length;
        Carousel.Show(arr);
        Carousel.ResetTimer(arr); // Reinicia o timer de 5s ao navegar manualmente
    }

    static Prev(arr) {
        Carousel.count = (Carousel.count - 1 + arr.length) % arr.length;
        Carousel.Show(arr);
        Carousel.ResetTimer(arr); // Reinicia o timer de 5s ao navegar manualmente
    }
}