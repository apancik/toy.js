//global var todo so that todo.add("My task"); is possible in browser console
todo = new Todo();

var template = $("#item-template").html();

// ===================
// USER EVENT BINDINGS
// ===================
$("#new-todo").keydown(function (e) {
    if (e.keyCode == 13) {
        var $todoTextBox = $("#new-todo");
        todo.add($todoTextBox.val().trim());
        $todoTextBox.val("");
    }
});

$("#clear-completed").click(function () {
    todo.remove("completed");
})

// ====================
// MODEL EVENT BINDINGS
// ====================
todo.on("add", add).on("remove", function (id) {
    $("#" + id).remove();
}).on("toggle", function (item) {
    toggle($("#" + item.id), !! item.done)
}).on("add remove toggle", counts);


// ==============
// VIEW FUNCTIONS
// ==============
function toggle(el, flag) {
    el.toggleClass("completed", flag);
    $(":checkbox", el).prop("checked", flag);
}

function add(item) {
    var $todoList = $("#todo-list");
    var $todoItem = $(toy.render(template, item)).appendTo($todoList)

    $(".toggle", $todoItem).click(function () {
        todo.toggle(item.id);
    });

    $(".destroy", $todoItem).click(function () {
        todo.remove(item.id);
    });
}

function counts() {
    $("#todo-count").html("Count " + todo.count());
}