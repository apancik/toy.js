function Todo() {
    toy.model(this);

    var items = {};

    this.add = function (name) {
        var item = {
            id: "js-item-" + Math.random().toString().slice(2),
            name: name
        };
        items[item.id] = item;
        this.trigger("add", item);
    };

    this.remove = function (id) {
        delete items[id];
        this.trigger("remove", id);
    };

    this.toggle = function (id) {
        var item = items[id];
        item.done = !item.done;
        this.trigger("toggle", item);
    };

    this.count = function () {
        return Object.keys(items).length;
    };
}
