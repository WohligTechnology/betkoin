myApp.service('TemplateService', function () {
    this.title = "Home";
    this.meta = "";
    this.metadesc = "";

    var d = new Date();
    this.year = d.getFullYear();

    this.init = function () {
        this.header = "views/template/header.html";
        this.header1 = "views/template/header1.html";
        this.menu = "views/template/menu.html";
        this.content = "views/content/content.html";
        this.footer = "views/template/footer.html";
        this.socialmedia = "views/template/socialmedia.html";
    };

    this.getHTML = function (page) {
        this.init();
        var data = this;
        data.content = "views/" + page;
        return data;
    };

    this.init();

});