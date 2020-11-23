var model = document.getElementById("delete-modal");
var deleteButton = document.getElementsByClassName("delete");
var deleteModal = document.getElementById("delete-modal");

(function () {
    for (var i = 0; i < deleteButton.length; i++)
        deleteButton[i].addEventListener('click', showDeleteModal);
})();



var hideDeleteModal = document.getElementById("no-delete");

function showDeleteModal() {
    model.style.display = "block";
}

hideDeleteModal.addEventListener("click", hideModal);
function hideModal() {
    try {
        deleteModal.style.display = "none";
    }
    catch (e) {

    }
}