function addMinHeightForSocialMedia() {
    const socialMedia = document.querySelector('.socialMedia');
    let heightDisplay = window.innerHeight - 180;

    socialMedia.style.minHeight = heightDisplay + 'px';
}

addMinHeightForSocialMedia();