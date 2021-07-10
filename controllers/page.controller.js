exports.view = (req, res) => {
    const params = {
        title: "page not found",
        style: "page",
        script: "page"
    }
    res.render('page', params)
}