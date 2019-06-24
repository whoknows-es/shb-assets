/**
 *
 * @param data
 * @param selector
 * @param scroll
 * @returns {string}
 */
let show_form_errors = function (data,  selector = '', scroll = true) {
    if (data === undefined) {
        console.log(`The 'data' property is undefined`);
        return;
    }
    if (data.hasOwnProperty('errors')) {
        let msg = `<ul>`;
        $.each(data.errors, function (i, v) {
            msg += `<li> ${v[0]} </li>`;
        });
        if (selector !== '') {
            $(selector).css('display', 'block');
            $(selector).html(msg + `</ul>`);

            if (scroll) {
                $('html, body').animate({
                    scrollTop: $(selector).offset().top
                }, 2000);
            }
        } else {
            return msg + '</ul>';
        }
    }
};

let cp_to_clipboard = (selector)  => {
    let text = $(selector).text();
    let $temp = $("<input>");
    $("body").append($temp);
    $temp.val($(selector).text()).trim().select();
    document.execCommand("copy");
    $temp.remove();
    $(selector).text('Copied');
    setTimeout( function () {
        $(selector).text(text);
    }, 500);
};

let loader = (with_text = true) => {
    if (with_text === false) {
        return  `<i class="fas fa-spinner spin"></i>`;
    }
    return  `<i class="fas fa-spinner spin spine-text"></i> &nbsp; <span class="spine-text">Please Wait </span> `;
}