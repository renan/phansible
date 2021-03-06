
function Main() {
}

Main.prototype.form = function() {

    var that = this;

    var checkbox    = $('.ui.checkbox'),
        toggle      = $('.ui.toggle.button'),
        buttons     = $('.ui.buttons .button');

    checkbox.checkbox();

    toggle.filter('.composer').state({
        text: {
            active: 'Enabled',
            inactive: 'Disabled'
        },
        onActivate: function() {
            $('input#composer').val(1);
        },
        onDeactivate: function() {
            $('input#composer').val(0);
        }
    });

    toggle.filter('.database').state({
        text: {
            active: 'Enabled',
            inactive: 'Disabled'
        },
        onActivate: function() {
            $('input#database-status').val(1);
        },
        onDeactivate: function() {
            $('input#database-status').val(0);
        }
    });

    toggle.filter('.xdebug').state({
        text: {
            active: 'Enabled',
            inactive: 'Disabled'
        },
        onActivate: function() {
            $('input#xdebug').val(1);
        },
        onDeactivate: function() {
            $('input#xdebug').val(0);
        }
    });

    buttons.filter('.phpversion').on('click', function(){
        $(this)
            .addClass('active')
            .addClass('green')
            .siblings()
            .removeClass('active')
            .removeClass('green')
            .addClass('black');

        $('input[name=phpppa]').val($(this)
            .data('value'));
    });

    buttons.filter('.webserver').on('click', function(){
        $(this)
            .addClass('active')
            .addClass('green')
            .siblings()
            .removeClass('active')
            .removeClass('green')
            .addClass('black');

        $('input[name=webserver]').val($(this)
            .data('value'));
    });

    $('select.selectized').selectize({
        plugins: ['remove_button'],
        delimiter: ',',
        persist: false,
        maxItems: null,
        valueField: 'value',
        labelField: 'text',
        searchField: 'value'
    });

    $('select.select-one').selectize({
        maxItems: 1,
        persist: false,
        labelField: "item",
        valueField: "value",
        sortField: 'item',
        searchField: 'item'
    });
}

$(document).ready(function(){
    var main = new Main();

    main.form();
});
