exports.view = (req, res) => {
  const params = {
    layout: 'layouts/html',
    title: 'Profile Page',
    style: 'profile',
    script: 'page',
  }
  res.render('profile', params)
}

