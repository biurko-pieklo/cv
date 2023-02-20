class PrettyPrint {
    printLetter(letter, i) {
        return `<span class="prettyletter" data-letterindex="${i}">${letter}</span>`;
    }

    printWord(word) {
        var arr = word.split('');
        var i = 0;
        var res = '';

        arr.forEach(letter => {
            res = res.concat(this.printLetter(letter, i++));
        });

        return res;
    }

    prettyEffect($letters) {
        $letters.each((ix, letter) => {
            $(letter).on('mouseover mouseleave', () => {
                $(letter).toggleClass('prettyletter--hover');
                $(letter).prev().toggleClass('prettyletter--siblinghover');
                $(letter).prev().prev().toggleClass('prettyletter--nextsiblinghover');
                $(letter).next().toggleClass('prettyletter--siblinghover');
                $(letter).next().next().toggleClass('prettyletter--nextsiblinghover');
            });
        });
    }
}