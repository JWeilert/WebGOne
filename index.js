function newImage(imgSrc, imgLeft, imgRight) {
  let object = document.createElement("img");
  object.src = imgSrc;
  object.style.position = "fixed";
  object.style.left = imgLeft + "px";
  object.style.bottom = imgRight + "px";
  document.body.append(object);
  return object;
}

function newItem(imgSrc, imgLeft, imgRight) {
  let object = newImage(imgSrc, imgLeft, imgRight);

  object.addEventListener("dblclick", function () {
    object.remove();
  });
}

newImage("assets/green-character.gif", 100, 100);
newImage("assets/pine-tree.png", 450, 200);
newImage("assets/tree.png", 200, 300);
newImage("assets/pillar.png", 350, 100);
newImage("assets/crate.png", 150, 200);
newImage("assets/well.png", 500, 425);

newItem("assets/sheild.png", 165, 185);
newItem("assets/staff.png", 600, 100);
newItem("assets/sword.png", 500, 405);
