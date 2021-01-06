
var images = ["family.jpg","dad.jpg","mom.jpg","uv.webp","av.jpg"]
var names = ["Family Book", "Shammy Salaria", "Richa Salaria", "Yuvraaj Salaria", "Atharv Salaria",];
var i = 0;

function update() {
    i++;
    var numbers_of_family_member_in_array = 5
    if (i > numbers_of_family_member_in_array) {
        i = 0;
    }
    var updatedImage = images[i];
    var updatedName = names[i];
    document.getElementById("family_member_image").src = updatedImage;
    document.getElementById("family_member_name").innerHTML = updatedName;
}