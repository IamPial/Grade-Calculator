
/* Chapter - Operators & Control Flow
   Learning: Arithmetic, comparison, logical operators
-  Project: Build a grade calculator with if-else statements*/ 

    let mark = prompt("Enter your mark: ");
    mark = parseInt(mark,10); // Converts the input string to an integer using base 10;
    
    let grade;
    
    if(mark > 100 || mark < 0){
        grade = "Invalid Marks";
    }
    else if(mark >= 80 && mark <= 100){
        grade = "You have got Grade = A+";
    }
    else if(mark >= 70 && mark <= 79){
        grade = "You have got Grade = A";
    }
    else if(mark >= 60 && mark <= 69){
        grade = "You have got Grade = A-";
    }
    else if(mark >= 50 && mark <= 59){
        grade = "You have got Grade = B";
    }
    else if(mark >= 40 && mark <= 49){
        grade = "You have got Grade = C";
    }
    else if(mark >= 33 && mark <= 39){
        grade = "You have got Grade = D";
    }
    else{
        grade = "You are failed";
    }
    console.log(grade);

