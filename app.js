function convertor() {
    var rupees = Number(document.getElementById('rupees').value)
    var dollar = Number(document.getElementById('dollar').value)


    // var dollar = Number(document.getElementById('dollar').value)
    if (rupees) {
    dollar=10
    }
    console.log(rupees, dollar)

}

function Grade() {
    var grade;
    var percentage = Number(document.getElementById('grade').value)
    var result = document.getElementById('result')

    if (percentage >= 80 && percentage <= 100) {
        grade = "A-One"
    }
    else if (percentage >= 70 && percentage < 80) {
        grade = "A"
    }
    else if (percentage >= 60 && percentage < 70) {
        grade = "B"
    }
    else if (percentage >= 50 && percentage < 60) {
        grade = "C"
    }
    else if (percentage >= 40 && percentage < 50) {
        grade = "D"
    }
    else if (percentage < 40 && percentage >= 0) {
        grade = "Fail"
    }
    else {
        alert("Invalid Input")
    }
    result.innerHTML = `Your Grade is ${grade}`
}

function generate() {
    var temperature = Number(document.getElementById('temperature').value)
    var final = document.getElementById('decision')

    var result;
    if( temperature>=25){
result=" You need to carry nothing"
    }
    else if(temperature<25 && temperature >=15){
        result=" You need to carry Jacket"
    }
    else if(temperature<15 && temperature >0){
        result=" You need to carry coat"
    }else{
        result="You don't need to go out"
    }
    final.innerHTML=result


}