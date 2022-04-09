// show the UI
figma.showUI(__html__)

// send the info to UI
figma.ui.postMessage({
  payload: {
    hello: true
  }
})
