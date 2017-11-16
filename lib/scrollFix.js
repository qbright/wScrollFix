let clearTimeoutHandler = 0;

function bindContainerListLoadEvent (elem) {
  let observer = new MutationObserver(function (mutations) {
    mutations.forEach(function () {
      clearTimeout(clearTimeoutHandler);
      clearTimeoutHandler = setTimeout(() => {
        if (elem.scrollTop == 0) {
          elem.scrollTop = 1;
        }
      }, 100);
    });
  });
  observer.observe(elem, {attributes: true, childList: true, characterData: true, subtree: true});
}


function bindScrollFixEvent (elem) {

  elem.scrollTop = 1;

  elem.addEventListener('touchstart', function (event) {
    let startTopScroll = elem.scrollTop;
    if (startTopScroll <= 0) {
      elem.scrollTop = 1;
    }
    if (startTopScroll + elem.offsetHeight >= elem.scrollHeight) {
      elem.scrollTop = elem.scrollHeight - elem.offsetHeight - 1;
    }
  }, false);

  elem.addEventListener("scroll", e => {
      let target = e.target;
      if (target.scrollTop == 0) {
        target.scrollTop = 1;
      } else if (target.scrollTop + target.offsetHeight == target.scrollHeight) {
        target.scrollTop = target.scrollTop - 1;
      }
    }
  );

  elem.addEventListener("touchmove", e => {
    if (e.currentTarget.offsetHeight < e.currentTarget.scrollHeight) {
      e.stopPropagation();
    }
  });

}

function errorHandler (msg) {
  throw new Error(msg);
}

function checkEl (elem) {
  if (elem) {
    if (typeof elem === "string") {
      elem = document.querySelector(elem);
      if (!elem) {
        errorHandler("the element selector is empty result");
        return void 0;
      }
    } else {
      return elem;
    }
  } else {
    errorHandler("please pass the element");
    return void 0;
  }
}

export default function (elem, hasAsyncLoad = false) {
  elem = checkEl(elem);
  hasAsyncLoad && bindContainerListLoadEvent(elem);
  bindScrollFixEvent(elem);
};