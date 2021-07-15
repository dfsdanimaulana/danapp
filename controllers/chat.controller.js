exports.view = (req, res) => {
    
    const data = [
        {
            img:'images/Dani.jpg',
            username: 'Dani Maulana',
            message: 'Hello How are you?',
            timeSend: '11:23 am'
        },
        {
            img:'images/Mina.jpg',
            username: 'Mina Myoui',
            message: 'Aink bogoh ka sia?',
            timeSend: '08:10 am'
        },
        {
            img:'images/Mina2.jpg',
            username: 'Mina Sharoon',
            message: 'Hai apa kabar?',
            timeSend: '09:01 am'
        },
    ]
    const params = {
            title: 'page not found',
            style: 'chat',
            script: 'chat',
            data
        }
    res.render('chat', params)
    
}