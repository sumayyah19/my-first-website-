function nextImage(){
    let currentImage = document.getElementsByClassName('oneImage')
    if(currentImage.src.match('website_code/images/cantorBuilding.jpg')){
        currentImage.src = 'website_code/images/atrium.jpg'
    }else{
            currentImage.src = 'website_code/images/cantorBuilding.jpg'
        }
    }
function gotoLocation(link){
    console.log(link.value)
    location.href = link.value;
};