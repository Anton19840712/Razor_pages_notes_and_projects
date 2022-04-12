$(document).ready(function () {
    loadData();
});
function loadData() {
    $.ajax({
        url: "/Home/List",
        type: "GET",
        contentType: "application/json;charset=utf-8",
        dataType: "json",
        success: function (result) {
            var html = '';
            $.each(result, function (key, item) {
                html += '<tr>';
                html += '<td>' + item.Id + '</td>';
                html += '<td>' + item.Login + '</td>';
                html += '<td>' + item.Password + '</td>';
                html += '<td>' + item.Email + '</td>';
                html += '<td>' + item.LastVisitDate + '</td>';
                html += '<td>' + item.IsActive + '</td>';
                html += '<td>' + item.IsDeleted + '</td>';
                html += '<td>' + item.RegistrationDate + '</td>';
                html += '<td><a href="#" onclick="return getbyID(' + item.Id + ')">Edit</a> | <a href="#" onclick="Delele(' + item.Id + ')">Delete</a></td>';
                html += '</tr>';
            });
            $('.tbody').html(html);
        },
        error: function (errormessage) {
            alert(errormessage.responseText);
        }
    });
}
function Add() {
    var res = validate();
    if (res == false) {
        return false;
    }
    var empObj = {
        Id: $('#Id').val(),
        Login: $('#Login').val(),
        Password: $('#Password').val(),
        Email: $('#Email').val(),
        LastVisitDate: $('#LastVisitDate').val(),
        IsActive: $('#IsActive').val(),
        IsDeleted: $('#IsDeleted').val(),
        RegistrationDate: $('#RegistrationDate').val()
    };
    $.ajax({
        url: "/Home/Add",
        data: JSON.stringify(empObj),
        type: "POST",
        contentType: "application/json;charset=utf-8",
        dataType: "json",
        success: function (result) {
            loadData();
            $('#myModal').modal('hide');
        },
        error: function (errormessage) {
            alert(errormessage.responseText);
        }
    });
}
function getbyID(Id) {
    $('#Login').css('border-color', 'lightgrey');
    $('#Password').css('border-color', 'lightgrey');
    $('#Email').css('border-color', 'lightgrey');
    $('#LastVisitDate').css('border-color', 'lightgrey');
    $('#IsActive').css('border-color', 'lightgrey');
    $('#IsDeleted').css('border-color', 'lightgrey');
    $('#RegistrationDate').css('border-color', 'lightgrey');
    $.ajax({
        url: "/Home/getbyId/" + Id,
        typr: "GET",
        contentType: "application/json;charset=UTF-8",
        dataType: "json",
        success: function (result) {
            $('#Id').val(result.Id);
            $('#Login').val(result.Login);
            $('#Password').val(result.Password);
            $('#Email').val(result.Email);
            $('#LastVisitDate').val(result.LastVisitDate);
            $('#IsActive').val(result.IsActive);
            $('#IsDeleted').val(result.IsDeleted);
            $('#RegistrationDate').val(result.RegistrationDate);

            $('#myModal').modal('show');
            $('#btnUpdate').show();
            $('#btnAdd').hide();
        },
        error: function (errormessage) {
            alert(errormessage.responseText);
        }
    });
    return false;
}
function Update() {
    var res = validate();
    if (res == false) {
        return false;
    }
    var empObj = {
        Id: $('#Id').val(),
        Login: $('#Login').val(),
        Password: $('#Password').val(),
        Email: $('#Email').val(),
        LastVisitDate: $('#LastVisitDate').val(),
        IsActive: $('#IsActive').val(),
        IsDeleted: $('#IsDeleted').val(),
        RegistrationDate: $('#RegistrationDate').val(),

    };
    $.ajax({
        url: "/Home/Update",
        data: JSON.stringify(empObj),
        type: "POST",
        contentType: "application/json;charset=utf-8",
        dataType: "json",
        success: function (result) {
            loadData();
            $('#myModal').modal('hide');
            $('#Id').val("");
            $('#Login').val("");
            $('#Password').val("");
            $('#Email').val("");
            $('#LastVisitDate').val("");
            $('#IsActive').val("");
            $('#IsDeleted').val("");
        },
        error: function (errormessage) {
            alert(errormessage.responseText);
        }
    });
}
function Delele(ID) {
    var ans = confirm("Are you sure you want to delete this Record?");
    if (ans) {
        $.ajax({
            url: "/Home/Delete/" + ID,
            type: "POST",
            contentType: "application/json;charset=UTF-8",
            dataType: "json",
            success: function (result) {
                loadData();
            },
            error: function (errormessage) {
                alert(errormessage.responseText);
            }
        });
    }
}
function clearTextBox() {
    $('#Id').val("");
    $('#Login').val("");
    $('#Password').val("");
    $('#Email').val("");
    $('#LastVisitDate').val("");
    $('#IsActive').val("");
    $('#IsDeleted').val("");
    $('#btnUpdate').hide();
    $('#btnAdd').show();
    $('#Login').val("");
    $('#Password').val("");
    $('#Email').val("");
    $('#LastVisitDate').val("");
    $('#IsActive').val("");
    $('#IsDeleted').val("");
}
function validate() {
    var isValid = true;
    if ($('#Login').val().trim() == "") {
        $('#Login').css('border-color', 'Red');
        isValid = false;
    }
    else {
        $('#Login').css('border-color', 'lightgrey');
    }

    if ($('#Age').val().trim() == "") {
        $('#Age').css('border-color', 'Red');
        isValid = false;
    }
    else {
        $('#Age').css('border-color', 'lightgrey');
    }

    if ($('#Email').val().trim() == "") {
        $('#Email').css('border-color', 'Red');
        isValid = false;
    }
    else {
        $('#Email').css('border-color', 'lightgrey');
    }


    if ($('#LastVisitDate').val().trim() == "") {
        $('#LastVisitDate').css('border-color', 'Red');
        isValid = false;
    }
    else {
        $('#LastVisitDate').css('border-color', 'lightgrey');
    }

    if ($('#IsActive').val().trim() == "") {
        $('#IsActive').css('border-color', 'Red');
        isValid = false;
    }
    else {
        $('#IsActive').css('border-color', 'lightgrey');
    }

    if ($('#IsDeleted').val().trim() == "") {
        $('#IsDeleted').css('border-color', 'Red');
        isValid = false;
    }
    else {
        $('#IsDeleted').css('border-color', 'lightgrey');
    }
    return isValid;
}