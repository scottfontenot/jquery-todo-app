$(document).ready(function () {

    $("#list-items").html(localStorage.getItem("listItems"));

    $(".add-items").submit(function (event) {
        event.preventDefault();
        //console.log($("#todo-list-item").val())
        var item = $("#todo-list-item").val(); //take input value, save ref to it.
        if (item) {
            $("#list-items").append("<li><input class='checkbox' type='checkbox'/>" + item + "<a class='remove'>x</a><hr></li>");
            localStorage.setItem("listItems", $("#list-items").html());
            $("#todo-list-item").val(""); //code won't run if empty string 
        }

    });

    $(document).on("change", ".checkbox", function () {
        //console.log("Checkbox checked!");
        if ($(this).attr("checked")) {
            $(this).removeAttr("checked");
        } else {
            $(this).attr("checked", "checked");
        }


        $(this).parent().toggleClass("completed");
        localStorage.setItem("listItems", $("#list-items").html());
    });
    $(document).on("click", ".remove", function () {
        $(this).parent().remove();
        localStorage.setItem("listItems", $("#list-items").html());
    });
});