class Utils {
    static handlePretty() {
        var $toprint = $('.prettyprint', document);
        var pp = new PrettyPrint();

        $toprint.each((ix, el) => {
            $(el).html(pp.printWord($(el).data('word')));
        });

        pp.prettyEffect($('.prettyletter', $toprint))
    }

    static handleNav() {
        var $togglers = $('nav a', document);
        var $sections = $('div.section', document);
        var nav = new Nav();

        nav.showSection($('div.section[data-section="main"]', document), $sections);
        nav.makeNav($togglers, $sections);
    }

    static init() {
        console.log('initializing scripts...');
        Utils.handlePretty();
        Utils.handleNav();
        console.log('scripts loaded');
    }
}