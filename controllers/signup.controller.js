exports.view = (req, res) => {
  const params = {
    layout: 'layouts/html',
    title: 'Signup Page',
    style: 'signup',
    script: 'page',
  }
  res.render('signup', params)
}
