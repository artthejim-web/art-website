document.addEventListener('DOMContentLoaded', () => {
    // Preload images in the gallery
    const initialImages = [
        'assets/uploads/Bold.jpg',
        'assets/uploads/Bloom in Silence.jpg',
        'assets/uploads/Broken.jpg',
        'assets/uploads/Beauty.jpg',
        'assets/uploads/Momoa.jpg',
        'assets/uploads/Color Pencil Portrait.jpg',
        'assets/uploads/Charcoal portrait.jpg'
        // Replace with your actual image paths
    ];

    initialImages.forEach((src) => {
        const img = document.createElement('div');
        img.className = 'col-md-4 mb-4';
        img.innerHTML = `
            <div class="card">
                <img src="${src}" class="card-img-top" alt="Art">
            </div>
        `;
        document.getElementById('imageGallery').appendChild(img);
    });

    // Image Upload
    const imageUpload = document.getElementById('imageUpload');
    const imageGallery = document.getElementById('imageGallery');

    imageUpload.addEventListener('change', (event) => {
        const files = event.target.files;
        for (let file of files) {
            const reader = new FileReader();
            reader.onload = (e) => {
                const img = document.createElement('div');
                img.className = 'col-md-4 mb-4';
                img.innerHTML = `
                    <div class="card">
                        <img src="${e.target.result}" class="card-img-top" alt="Uploaded Art">
                    </div>
                `;
                imageGallery.appendChild(img);
            };
            reader.readAsDataURL(file);
        }
    });

    // Video Upload
    const videoUpload = document.getElementById('videoUpload');
    const videoGallery = document.getElementById('videoGallery');

    videoUpload.addEventListener('change', (event) => {
        const files = event.target.files;
        for (let file of files) {
            const reader = new FileReader();
            reader.onload = (e) => {
                const video = document.createElement('div');
                video.className = 'col-md-4 mb-4';
                video.innerHTML = `
                    <div class="card">
                        <video controls class="card-img-top">
                            <source src="${e.target.result}" type="${file.type}">
                        </video>
                    </div>
                `;
                videoGallery.appendChild(video);
            };
            reader.readAsDataURL(file);
        }
    });
});
