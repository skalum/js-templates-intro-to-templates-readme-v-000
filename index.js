function addComment() {
  event.preventDefault();
  const bodyText = document.getElementById("commentText").value;
  const commenter = document.getElementById("commenterName").value;

  const commentBody = createCommentBody(bodyText);
  const commenterLabel = createCommenterLabel(commenter);
  postNewComment(commentBody, commenterLabel);
}

function createCommentBody(comment) {
  const bodyDiv = document.createElement("div");
  const bodyPara = document.createElement("p");

  bodyPara.innerHTML = comment;
  bodyDiv.appendChild(bodyPara);

  return bodyDiv;
}

function createCommenterLabel(commenter) {
  const commenterDiv = document.createElement("div");
  const commenterLabel = document.createElement("p");
  const commenterName = document.createElement("span");

  commenterLabel.innerHTML = "posted by:&nbsp;";
  commenterName.innerHTML = commenter;
  commenterLabel.appendChild(commenterName);
  commenterDiv.appendChild(commenterLabel);

  return commenterDiv;
}

function postNewComment(comment, commenter) {
  const commentsDiv = document.getElementById("comments");
  const newCommentDiv = document.createElement("div");

  newCommentDiv.appendChild(comment);
  newCommentDiv.appendChild(commenter);

  commentsDiv.appendChild(newCommentDiv);
}
