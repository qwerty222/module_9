const btn = document.querySelector(".main__load-btn");
const gallery = document.querySelector(".main__gallery");

const getNewPicture = async () => {
    try {
        //showLoader();
        
        const num = Math.floor(Math.random() * 29);
        const response = await fetch("https://dog.ceo/api/breeds/image/random/29");
        const data = await response.json();
        const url = data.message[num];
        const pic = `
            <div class="main__gallery-item">
                <img src="${url}">
            </div>
        `;
        gallery.insertAdjacentHTML("beforeend", pic);
    } catch (err) {
        console.log(err);
    } finally {
        //hideLoader();
    }
};

btn.addEventListener("click", getNewPicture);

function showLoader() {
    document.getElementById("loader").style.display = "flex";
}
  
function hideLoader() {
    document.getElementById("loader").style.display = "none";
}