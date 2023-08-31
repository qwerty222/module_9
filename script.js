const btn = document.querySelector(".main__load-btn");
const gallery = document.querySelector(".main__gallery");

const getNewPicture = async () => {
    try {
        showLoader();

        const response = await fetch("https://api.thecatapi.com/v1/images/search");
        
        if (!response.ok) {
            throw new Error(`Что-то пошло не так! :( status: ${response.status}`);
        }

        const data = await response.json();

        const newDiv = document.createElement("div");
        newDiv.classList.add("main__gallery-item");
        const newImg = document.createElement("img");
        newImg.src = data[0].url;
        newImg.alt = "фото кота";
        newDiv.appendChild(newImg);
        gallery.appendChild(newDiv);
    } catch (error) {
        console.error("Error: ", error);
    } finally {
        hideLoader();
    }
};

btn.addEventListener("click", getNewPicture);

function showLoader() {
    document.getElementById("loader").style.display = "block";
}
  
function hideLoader() {
    document.getElementById("loader").style.display = "none";
}