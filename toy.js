// Toy.js by Andrej Pancik
// This is free and unencumbered software released into the public domain.

var toy = (function () {
    "use strict";

    function escapeHtml(input) {
        var div = document.createElement("div");
        div.appendChild(document.createTextNode(input));
        return div.innerHTML;
    }

    return {
        render: function (template, data) {
            return new Function("e", "_", "return '" + template.replace(/\n/g, "").replace(/{{([^}]+)}}/g, "'+e(_.$1)+'") + "'")(escapeHtml, data);
        },
        model: function (model) {
            var callbacks = {};

            model.on = function (events, fn) {
                events.split(" ").forEach(function (name) {
                    (callbacks[name] = callbacks[name] || []).push(fn);
                });
                return model;
            };

            model.off = function (events) {
                events.split(" ").forEach(function (name) {
                    callbacks[name] = [];
                });
                return model;
            };

            model.trigger = function (name) {
                var args = [].slice.call(arguments, 1);

                (callbacks[name] || []).forEach(function (callback) {
                    if (!callback.lock && (callback.lock = true)) {
                        callback.apply(model, args);
                        callback.lock = false;
                    }
                });

                return model;
            };
        }
    };
})();