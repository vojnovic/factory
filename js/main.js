
  function moveToRight() {
    var firstRow = document.querySelector('#first-row');
    var secondRow = document.querySelector('#second-row');
    function addAnimationOpen() {lastImage.classList.add('animation-open')}
    function removeAnimationClose() {lastImage.classList.remove('animation-close')}
    function removeAnimationOpen() {lastImage.classList.remove('animation-open')}

    if (firstRow.offsetWidth > secondRow.offsetWidth) {
        var lastImage = firstRow.lastElementChild;
        var BlankImg = document.querySelector('#second-row').querySelector('.spacer-img')
        function moveImage() {BlankImg.after(lastImage);}
        lastImage.classList.add('active')
        lastImage.classList.add('animation-close')
        setTimeout(moveImage, 700)
        setTimeout(addAnimationOpen, 700)     
        setTimeout(removeAnimationClose, 700)
        setTimeout(removeAnimationOpen, 1400) 
        setTimeout(lastImage.classList.remove('active'), 1400) 
    } else {
        var lastImage = secondRow.lastElementChild;
        var BlankImg = document.querySelector('#first-row').querySelector('.spacer-img')
        function moveImage() {BlankImg.after(lastImage);}
        lastImage.classList.add('active')
        lastImage.classList.add('animation-close')
        setTimeout(moveImage, 700)
        setTimeout(addAnimationOpen, 700)     
        setTimeout(removeAnimationClose, 700)
        setTimeout(removeAnimationOpen, 1400)
        setTimeout(lastImage.classList.remove('active'), 1400) 
    }
  }

  function moveToLeft() {
    var firstRow = document.querySelector('#first-row');
    var secondRow = document.querySelector('#second-row');
    function addAnimationOpen() {firstImage.classList.add('animation-open')}
    function removeAnimationClose() {firstImage.classList.remove('animation-close')}
    function removeAnimationOpen() {firstImage.classList.remove('animation-open')}

    if (firstRow.offsetWidth > secondRow.offsetWidth) {
        var firstImage = firstRow.children[1];
        var lastImage = secondRow.lastElementChild;
        function moveImage() {lastImage.after(firstImage);}
        firstImage.classList.add('active')
        firstImage.classList.add('animation-close')
        setTimeout(moveImage, 700)
        setTimeout(addAnimationOpen, 700)     
        setTimeout(removeAnimationClose, 700)
        setTimeout(removeAnimationOpen, 1400) 
        setTimeout(firstImage.classList.remove('active'), 1400) 
    } else {
        var firstImage = secondRow.children[1];
        var lastImage = firstRow.lastElementChild;
        function moveImage() {lastImage.after(firstImage);}
        firstImage.classList.add('active')
        firstImage.classList.add('animation-close')
        setTimeout(moveImage, 700)
        setTimeout(addAnimationOpen, 700)     
        setTimeout(removeAnimationClose, 700)
        setTimeout(removeAnimationOpen, 1400)
        setTimeout(firstImage.classList.remove('active'), 1400) 
    }
  }