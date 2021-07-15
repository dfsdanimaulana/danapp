exports.view = (req,res)=>{
    const params = {
        layout: 'layouts/html',
        title: "page not found",
        style: "page",
        script: "page"
    }
    res.render('signup',params)
    
}