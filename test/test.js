module.exports.page =(req,res)=>{
    let id = req.param('id')
    let name = req.param('name')
    console.log(id,name)
    res.send('아이디:'+id+'<br>이름:'+name)
}