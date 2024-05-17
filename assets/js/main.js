---
layout: none
permalink: assets/js/main.js
---

/**
 * Activate tooltips
 */

$(function () {
    var tooltipTriggerList = [].slice.call(document.querySelectorAll('[data-bs-toggle="tooltip"]'))
    var tooltipList = tooltipTriggerList.map(function (tooltipTriggerEl) {
        return new bootstrap.Tooltip(tooltipTriggerEl, {
            animation: false
        })
    })
})

/**
 * Making tables responsive
 */
$(document).ready(function () {
    $('table').each(function (i, obj) {
        if (!$(obj).parents('.table-responsive').length) {
            $(obj).wrap('<div class="table-responsive mt-4 mb-4"/>');
        }
    });
});

/**
 * Function to open external links in separate tab
 */
$(document).ready(function external_new_window() {
    for (var c = document.getElementsByTagName("a"), a = 0; a < c.length; a++) {
        var b = c[a];
        if (b.getAttribute("href") && b.hostname !== location.hostname && !b.classList.contains("local-link")) {
            b.target = "_blank";
            b.rel = "noopener";
        }
    }
});


