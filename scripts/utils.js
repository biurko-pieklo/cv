class Utils {
    static handlePretty() {
        var $toprint = $('.prettyprint', document);
        var pp = new PrettyPrint();

        $toprint.each((ix, el) => {
            $(el).html(pp.printWord($(el).data('word')));
        });

        pp.prettyEffect($('.prettyletter', $toprint))
    }

    static init() {
        console.log('initializing scripts...');
        Utils.handlePretty();
        console.log('scripts loaded');
    }
}