angular.module('pApp')
.factory('blogFire', function(){

    //const auth = firebase.auth();
    //auth.signInWhitEmailAndPassword(email,password);




    //noticias
    
    function addNews(title, image, author, text){
        var news = firebase.database().ref('blog/' + title);
        news.update({
            image: image,
            title: title,
            author: author,
            text: text
        });
    }
    
    
})