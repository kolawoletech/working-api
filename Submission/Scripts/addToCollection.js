

//Show The Popup Modal For Add New Student



$("#addToMovieCollectionRecord").click(function () {
    var data = {};
    console.log(data)
    $.ajax({
        type: "Post",
        url: "/Movies/CreateAjax",
        data: data,
        success: function (result) {
            console.log(data)
            alert("Successly Added To Collection!..");
            //window.location.href = "/Home/index";
            //$("#MyModal").modal("hide");

        }
    })
})

//Show The Popup Modal For DeleteComfirmation
var DeleteStudentRecord = function (StudentId) {
    $("#StuId").val(StudentId);
    $("#DeleteConfirmation").modal("show");
}
var ConfirmDelete = function () {
    var StuId = $("#StuId").val();
    $.ajax({
        type: "POST",
        url: "/Home/DeleteStudentRecord?StudentId=" + StuId,
        success: function (result) {
            $("#DeleteConfirmation").modal("hide");
            $(".row_" + StuId).remove();
        }
    })
}
