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
  },
  checkBox8: {
    name: 'checkBox8',
    show: false
  }
}

function onError (error) {
  console.log(`Error: ${error}`)
}

function onGot (data) {
  var sidebar = document.getElementsByClassName('container')[0].children[1].children[0].children[1].children[3]
  var blog
  var jobPost
  var hireMe
  var advertisement
  var linked
  var related
  var hotQuestions
  var feedLink
  var chat

  for (var i = 0; i < sidebar.children.length; i++) {
    // Get elements
    console.log(sidebar.children[i].className)
    if (sidebar.children[i].className === 's-sidebarwidget s-sidebarwidget__yellow s-anchors s-anchors__grayscale mb16') {
      blog = sidebar.children[i]
    }
    if (sidebar.children[i].className === 'js-sidebar-zone') {
      jobPost = sidebar.children[i]
    }
    if (sidebar.children[i].id === 'hireme') {
      hireMe = sidebar.children[i]
    }
    if (sidebar.children[i].className === 'js-zone-container zone-container-sidebar') {
      advertisement = sidebar.children[i]
    }
    if (sidebar.children[i].className === 'module sidebar-linked') {
      linked = sidebar.children[i]
    }
    if (sidebar.children[i].className === 'module sidebar-related') {
      related = sidebar.children[i]
    }
    if (sidebar.children[i].id === 'hot-network-questions') {
      hotQuestions = sidebar.children[i]
    }
    if (sidebar.children[i].id === 'feed-link') {
      feedLink = sidebar.children[i]
    }
    if (sidebar.children[i].className === 's-sidebarwidget mb16 module') {
      chat = sidebar.children[i]
    }
  }

  // Hide elements
  if (blog && data.checkBox.show) {
    blog.style.display = 'none'
  }
  if (jobPost && data.checkBox2.show) {
    jobPost.style.display = 'none'
  }
  if (hireMe && data.checkBox2.show) {
    hireMe.style.display = 'none'
  }
  if (advertisement && data.checkBox3.show) {
    advertisement.style.display = 'none'
  }
  if (linked && data.checkBox4.show) {
    linked.style.display = 'none'
  }
  if (related && data.checkBox5.show) {
    related.style.display = 'none'
  }
  if (hotQuestions && data.checkBox6.show) {
    hotQuestions.style.display = 'none'
  }
  if (feedLink && data.checkBox7.show) {
    feedLink.style.display = 'none'
  }
  if (chat && data.checkBox8.show) {
    chat.style.display = 'none'
  }
}

const getting = browser.storage.sync.get(defaults)
getting.then(onGot, onError)
