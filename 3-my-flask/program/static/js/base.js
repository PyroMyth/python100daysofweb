var amgUtil = (function(j$) {

    var nameToSelector = {
        'home' : 'menu-home',
        'games' : 'menu-games',
        'search' : 'menu-search'
    };

    var setSelectedMenuItem = function(pageName) {
        if (pageName && nameToSelector[pageName.toLowerCase()]) {
            j$('#' + nameToSelector[pageName]).addClass('pure-menu-selected')
        }
    };

    var setCheckboxes = function(form) {
        if (form) {
            j$('input[type="checkbox"]').each(function() {
                var thisId = j$(this).attr('id');
                if (thisId && form[thisId] && form[thisId].isSelected) {
                    j$(this).attr('checked', 'checked');
                }
            });
        }
    };

    var listify = function() {
        var options = {
            valueNames: [ 'key', 'value' ]
        };
        var theList = new List('game-results', options);
    };

    var util = {
        'initPage' : function(pageName) {
            setSelectedMenuItem(pageName);
            j$('#current-year').html(new Date().getFullYear());
        },
        'setCheckboxes' : function(form) {
            setCheckboxes(form);
        },
        'listify' : listify()
    };

    return util;
})(jQuery);