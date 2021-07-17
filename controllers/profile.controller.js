/* eslint-disable no-undef */
exports.view = (req, res) => {
  const data = {
    img: 'images/Dani.jpg',
    username: 'Dani maulana',
    email:'danimaulana9f@gmail.com',
    info: 'aink bogoh ka sia'
  }
  const params = {
    layout: 'layouts/html',
    title: 'Profile Page',
    style: 'profile',
    script: 'page',
    data
  }
  res.render('profile', params)
}

