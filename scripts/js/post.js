var likeButton = document.getElementById("like-button");
var likeLine = document.getElementById("like-people");
var clickNumber = 0;
var textBox = document.getElementById("posttext");
var editSaveButton = document.querySelector(".edit-save button");
var commentButton = document.getElementById("comment-button");
const editText = editSaveButton.innerHTML;
var commentList = document.querySelector(".comment-list");
var edit = true;
var save = false;

var headingForm = document.getElementById("heading-input");
likeButton.addEventListener("click", () => {
    ++clickNumber;
    likeButton.innerHTML = "Liked!"
    if (clickNumber == 1) {
        likeLine.innerHTML = "1 person likes this!";
    }
    else {
        likeLine.innerHTML = `${clickNumber} people have liked this!`
    }
})


editSaveButton.addEventListener("click", () => {
    if (edit) {
        editSaveButton.innerHTML = ' Save <i class="fa fa-save"></i>';
        edit = false;
        save = true;
        textBox.focus();
    }
    else {
        edit = true;
        save = false;
        editSaveButton.innerHTML = editText;
    }
})

var allcomment = [];
var numOfComment = 0;
commentButton.addEventListener("click", () => {
    numOfComment++;
    comment = document.getElementById("comment-area");
    var p = document.createElement("p");
    p.setAttribute("id", `comment${numOfComment}`);
    p.setAttribute("class", "user-comment");
    p.innerHTML = comment.value;
    allcomment.push(p);
    comment.value = "";
    for (let c = allcomment.length - 1; c >= 0; c--) {
        commentList.appendChild(allcomment[c]);
    }
})