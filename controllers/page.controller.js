exports.view = (req, res) => {
  const params = {
    layout: 'layouts/main',
    title: 'page not found',
    style: 'page',
    script: 'page',
  }
  res.render('page', params)
}
