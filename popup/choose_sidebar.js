const defaults = {
  checkBox: {
    name: 'checkBox',
    show: false
  },
  checkBox2: {
    name: 'checkBox2',
    show: false
  },
  checkBox3: {
    name: 'checkBox3',
    show: false
  },
  checkBox4: {
    name: 'checkBox4',
    show: false
  },
  checkBox5: {
    name: 'checkBox5',
    show: false
  },
  checkBox6: {
    name: 'checkBox6',
    show: false
  },
  checkBox7: {
    name: 'checkBox7',
    show: false
  }
}

function onError (error) {
  console.log(`Error: ${error}`)
}

function saveOptions (e) {
  e.preventDefault()
  const settings = {}
  for (const setting in defaults) {
    settings[setting] = Object.assign({}, defaults[setting])
    settings[setting].show = document.getElementById(defaults[setting].name).checked
  }
  browser.storage.sync.set(settings).then(null, onError)
}

function restoreOptions () {
  browser.storage.sync.get(defaults).then(
    (data) => {
      for (const setting in defaults) {
        document.getElementById(defaults[setting].name).checked = data[defaults[setting].name].show
      }
    }
  )
}

function reloadPage () {
  browser.tabs.reload()
  window.close()
}

document.addEventListener('DOMContentLoaded', restoreOptions)
document.querySelector('form').addEventListener('change', saveOptions)
document.querySelector('form').addEventListener('submit', reloadPage)
