class Nav {
    makeNav($togglers, $sections) {
        $sections.each((ix, el) => {
            var thisTogglers = $togglers.filter((index, toggler) => $(toggler).data('nav') == $(el).data('section'));

            $(thisTogglers).on('click', (e) => {
                this.showSection($(el), $sections);
            });
        });
    }

    showSection($toShow, $sections) {
        var $toHide = $sections.filter((index, section) => $(section).data('section') != $toShow.data('section'));
        $toHide.addClass('section--hidden');

        setTimeout(() => {
            $toHide.hide();
            $toShow.show();
            $toShow.removeClass('section--hidden');
        }, 300);
    }
}