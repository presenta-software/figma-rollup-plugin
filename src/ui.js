import './style.css'

onmessage = (event) => {
  if (event.data.pluginMessage.payload) {
    const payload = event.data.pluginMessage.payload
    console.log(payload)
  }
}
