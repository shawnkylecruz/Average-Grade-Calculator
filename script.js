
var totalGrade = 0
var average = 0 
var counter = 0

function onFormSubmit() {
    var averageLabel = document.getElementById("viewAverageGrade");

    console.log(averageLabel)

    if (validate()) {
        var formData = readFormData();
        insertNewRecord(formData);
        resetForm();
    }
}

function onShowFinalAverage() {
    if (document.getElementById("viewAverageGrade").classList.contains("hide"))
        document.getElementById("viewAverageGrade").classList.remove("hide");
}

function onClearTable() {
    location.reload();
}

function readFormData() {
    var formData = {};
    formData["fullName"] = document.getElementById("fullName").value;
    formData["grade"] = document.getElementById("grade").value;
    return formData;
}

function insertNewRecord(data) {
    var table = document.getElementById("studentsList").getElementsByTagName('tbody')[0];
    var averageLabel = document.getElementById("viewAverageGrade");
    var newRow = table.insertRow(table.length);
    cell1 = newRow.insertCell(0);
    cell1.innerHTML = data.fullName;
    cell2 = newRow.insertCell(1);
    cell2.innerHTML = data.grade;
    
    console.log(totalGrade, average, counter)

    counter = counter + 1;
    totalGrade = totalGrade + (data.grade/1)
    average = totalGrade / counter; 
    averageLabel.innerHTML = average.toFixed(1) + "%";

    if (!document.getElementById("viewAverageGrade").classList.contains("hide"))
        document.getElementById("viewAverageGrade").classList.add("hide");

}

function resetForm() {
    document.getElementById("fullName").value = "";
    document.getElementById("grade").value = "";
}

function validate() {
    isValid = true;
    fullName = document.getElementById("fullName").value;
    grade = document.getElementById("grade").value;
    fullNameErrorLabel = document.getElementById("nameValidationError").classList;
    gradeErrorLabel = document.getElementById("gradeValidationError").classList;

    if ((fullName == "")||(fullName.length > 256)||(containsNumber(fullName))||(containsSpecialChars(fullName)))
    {
        isValid = false;
        document.getElementById("nameValidationError").classList.remove("hide");
    } else if((grade == "")||(grade > 100)||(grade < 0)){ 
        isValid = false;
        document.getElementById("gradeValidationError").classList.remove("hide");
    }
    else {
        isValid = true;
        if (!fullNameErrorLabel.contains("hide"))
        fullNameErrorLabel.add("hide");
        if (!gradeErrorLabel.contains("hide"))
        gradeErrorLabel.add("hide");
    }
    return isValid;
}

function containsNumber(str) {
    return /[0-9]/.test(str);
}

function containsSpecialChars(str) {
    const specialChars = /[`!@#$%^&*()_+\-=\[\]{};':"\\|,.<>\/?~]/;
    return specialChars.test(str);
}



