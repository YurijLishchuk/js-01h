var a, b, c;
a = parseInt(prompt('a =', a));
b = parseInt(prompt('b =', b));
c = parseInt(prompt('c =', c));

function equation () {
    var discr = (b*b) - 4*(a*c);
    alert(discr);
    var sqrDiscr = Math.sqrt(discr);
    alert(sqrDiscr);
    if (a == 0 && b == 0 && c == 0) {
        alert("Well, there would be 0 in result.");
    } else if (discr < 0) {
        alert("Well, there would be no result.");
    } else if (discr == 0) {
        alert("Well, there would be one result.");
        var x = ((-b) / (2*a));
        alert(x);
        alert("Equation look: " + a*x*x + " + " + b*x +" + " + c + " = 0");
    } else if (discr > 0) {
        alert("Well, there would be two results.");
        var x1 = ((-b) + sqrDiscr)/(2*a);
        var x2 = ((-b) - sqrDiscr)/(2*a);
        alert(x1);
        alert(x2);
        alert("Equation look #1: " + a*x1*x1 + " + " + b*x1 + " + " + c + " = 0");
        alert("Equation look #2: " + a*x2*x2 + " + " + b*x2 + " + " + c + " = 0");
    }
}

equation();