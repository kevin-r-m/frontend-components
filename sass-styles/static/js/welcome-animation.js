
const handleAnimation = () => {

    let startTime = Date.now()
    let timer = setInterval(function() {

      let timePassed = Date.now() - startTime;
    
      if (timePassed >= 2000) {
        clearInterval(timer);
        return;
      }
    
      animate(timePassed);
    
    }, 20);
    
    function animate(timePassed) {
        const circleHalfs = document.querySelectorAll('.half-circle');
        const circleText = document.querySelector('.circle-text');
        const circleTextSubhead = document.querySelector('.circle-text-subhead');
        const circleTextAlternate = document.querySelector('.circle-text-alternate');
        const animationContainer = document.querySelector('.container')


        if(circleText.style.opacity >= 0) {
            circleText.style.opacity = 1 - (timePassed / 959)
            circleTextSubhead.style.opacity = 1 - (timePassed / 959)
            if(timePassed > timePassed/2) {
                animationContainer.style.top = 210 - ((timePassed+100)/6) + 'px'
                circleTextAlternate.style.opacity = 0 + (timePassed / 959)
            }
            circleHalfs[1].style.transform="rotate(180deg)"
            circleHalfs[0].style.transform="rotate(-180deg)"
        }
    }
}

const sectionContainer = document.querySelector('.container');

sectionContainer.addEventListener('click', handleAnimation);