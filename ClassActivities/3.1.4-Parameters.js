// Named Parameters
// write a function that takes two named parameters:
// print each named parameter,
// then return the parameters added together
function funcw2Params(x=0, y=1, ...z){
    console.log(x, y);
    console.log(`This is the rest operator`, z,`\n);
    return(x+y);
}

// invoke the function and pass in two numbers
funcw2Params(5,8);
// invoke the function and pass in more than two numbers
funcw2Params(2,4,6,8,10);
// invoke the function and pass in only one number
funcw2Params(13);
// change the function to set default values for the parameters
    //done
// again, invoke the function and pass in only one number
    //done
// Rest Operator
// add a rest operator to the function's parameters
// add a line to the function's body to print the value of the rest operator
    //done
// again, invoke the function and pass in more than two numbers
funcw2Params(3,1,4,1,`parameter`,0.2)