// Array of image paths
const images = [
    "./ethnography_pics/2.jpeg",
    "./ethnography_pics/3.jpeg",
    "./ethnography_pics/4.jpeg",
    "./ethnography_pics/5.jpeg",
    "./ethnography_pics/1.jpeg"
];
const subtitles = [
    "Relaxing at The Wreck in Byron Bay after a surf session.",
    "The interior of Burleigh Board Makers.",
    "A fitting piece of artwork from Burleigh Board Makers.",
    "Vibrant art from Burleigh Board Makers.",
    "My friend and I taking to the waves at Cabarita with our brand new Facebook Marketplace boards.",
]

// Select the image element
const slideshowImage = document.getElementById('slideshow');
const imageSubtitle = document.getElementById('subtitle')
const button1 = document.getElementById('button1');
const button2 = document.getElementById('button2');
const button3 = document.getElementById('button3');
const drop1 = document.getElementById('dropdown1');
const drop2 = document.getElementById('dropdown2');
const drop3 = document.getElementById('dropdown3');
const leftbutton = document.getElementById('left');
const rightbutton = document.getElementById('right');

// Initialize index
let currentIndex = 0;

// Function to change the image
function changeImage() {
    // Increment the index (loop back to the start if at the end)
    currentIndex = (currentIndex + 1) % images.length;

    // Update the image source
    slideshowImage.src = images[currentIndex];
    imageSubtitle.innerText = subtitles[currentIndex];
}
button1.addEventListener('click', function() {
    
    if (drop1.classList.contains('dropdown')) {
        drop1.classList.remove('dropdown')
        drop1.classList.add('visible')
        button1.innerText = 'The Surf Shop (click to hide)';
    } else {
        drop1.classList.remove('visible')
        drop1.classList.add('dropdown')
        button1.innerText = 'The Surf Shop (click to show)';
    }
})
button2.addEventListener('click', function() {
    if (drop2.classList.contains('dropdown')) {
        drop2.classList.remove('dropdown')
        drop2.classList.add('visible')
        button2.innerText = 'The Surf Shop (click to hide)';
    } else {
        drop2.classList.remove('visible')
        drop2.classList.add('dropdown')
        button2.innerText = 'The Surf Shop (click to show)';
    }
})
button3.addEventListener('click', function() {
    if (drop3.classList.contains('dropdown')) {
        drop3.classList.remove('dropdown')
        drop3.classList.add('visible')
        button3.innerText = 'The Lone Surfer (click to hide)';
    } else {
        drop3.classList.remove('visible')
        drop3.classList.add('dropdown')
        button3.innerText = 'The Barbecue (click to show)';
    }
})

// Set an interval to change the image every 10 seconds
setInterval(changeImage, 10000);

leftbutton.addEventListener('click', function(){
    if (currentIndex == 0){
        currentIndex = 4;
        slideshowImage.src = images[currentIndex];
    imageSubtitle.innerText = subtitles[currentIndex];
    }
    else {
        currentIndex -=1;
        slideshowImage.src = images[currentIndex];
    imageSubtitle.innerText = subtitles[currentIndex];
    }
})
rightbutton.addEventListener('click', function(){
    if (currentIndex == 4){
        currentIndex = 0;
        slideshowImage.src = images[currentIndex];
    imageSubtitle.innerText = subtitles[currentIndex];
    }
    else {
        currentIndex +=1;
        slideshowImage.src = images[currentIndex];
    imageSubtitle.innerText = subtitles[currentIndex];
    }
})
