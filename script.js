document.addEventListener('DOMContentLoaded', function() {
    // 轮播图数据
    const carouselData = [
        { src: 'imgs/3da835c137fbd7b84fde2f8a8f57319d.jpg', caption: '照片1描述' },
        { src: 'imgs/5c78567e554318c2d145a15593a267f4.jpg', caption: '照片2描述' },
        { src: 'imgs/e2647e8f8162fc6ac50aa538acbc2360.jpg', caption: '照片3描述' }
    ];

    // 动态添加轮播图内容
    const swiperWrapper = document.querySelector('.swiper-wrapper');
    carouselData.forEach(item => {
        const slide = document.createElement('div');
        slide.classList.add('swiper-slide');
        slide.innerHTML = `
            <img src="${item.src}" alt="${item.caption}">
            <p class="swiper-caption">${item.caption}</p>
        `;
        swiperWrapper.appendChild(slide);
    });

    // 初始化Swiper
    new Swiper('.swiper-container', {
        loop: true,
        autoplay: {
            delay: 5000,
            disableOnInteraction: false,
        },
        pagination: {
            el: '.swiper-pagination',
            clickable: true,
        },
        navigation: {
            nextEl: '.swiper-button-next',
            prevEl: '.swiper-button-prev',
        },
    });

    // 作品集数据
    const portfolioData = [
        { title: '作品1', description: '作品1描述', image: 'imgs/3da835c137fbd7b84fde2f8a8f57319d.jpg' },
        { title: '作品2', description: '作品2描述', image: 'imgs/5c78567e554318c2d145a15593a267f4.jpg' },
        { title: '作品3', description: '作品3描述', image: 'imgs/e2647e8f8162fc6ac50aa538acbc2360.jpg' }
    ];

    // 动态添加作品集内容
    const portfolioGrid = document.querySelector('.portfolio-grid');
    portfolioData.forEach(item => {
        const project = document.createElement('div');
        project.classList.add('portfolio-item');
        project.innerHTML = `
            <img src="${item.image}" alt="${item.title}">
            <h3>${item.title}</h3>
            <p>${item.description}</p>
        `;
        portfolioGrid.appendChild(project);
    });
});