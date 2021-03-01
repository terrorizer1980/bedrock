/* This Source Code Form is subject to the terms of the Mozilla Public
 * License, v. 2.0. If a copy of the MPL was not distributed with this
 * file, You can obtain one at http://mozilla.org/MPL/2.0/. */

(function (Mozilla) {
    'use strict';

    var href = window.location.href;

    var initTrafficCop = function () {
        if (href.indexOf('entrypoint_experiment=vpn-landing-page-heading&entrypoint_variation=') !== -1) {
            if (href.indexOf('entrypoint_variation=a') !== -1) {
                window.dataLayer.push({
                    'data-ex-variant': 'a',
                    'data-ex-name': 'vpn-landing-page-heading'
                });
            } else if (href.indexOf('entrypoint_variation=b') !== -1) {
                window.dataLayer.push({
                    'data-ex-variant': 'b',
                    'data-ex-name': 'vpn-landing-page-heading'
                });
            } else if (href.indexOf('entrypoint_variation=c') !== -1) {
                window.dataLayer.push({
                    'data-ex-variant': 'c',
                    'data-ex-name': 'vpn-landing-page-heading'
                });
            }
            else if (href.indexOf('entrypoint_variation=d') !== -1) {
                window.dataLayer.push({
                    'data-ex-variant': 'd',
                    'data-ex-name': 'vpn-landing-page-heading'
                });
            }
        } else {
            var cop = new Mozilla.TrafficCop({
                id: 'vpn-landing-page-heading-experiment',
                variations: {
                    'entrypoint_experiment=vpn-landing-page-heading&entrypoint_variation=a': 25,
                    'entrypoint_experiment=vpn-landing-page-heading&entrypoint_variation=b': 25,
                    'entrypoint_experiment=vpn-landing-page-heading&entrypoint_variation=c': 25,
                    'entrypoint_experiment=vpn-landing-page-heading&entrypoint_variation=d': 25,
                }
            });

            cop.init();
        }
    };

    // Avoid entering automated tests into random experiments.
    if (href.indexOf('automation=true') === -1) {
        initTrafficCop();
    }

})(window.Mozilla);
