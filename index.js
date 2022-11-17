var rect = require('./rectangle');

function solveRect(l,w)
{
    console.log("Solving for Rectangle with l = "+l + " and w = "+w);

    rect(l,w,(err,rectangle) => 
    {
        if(err)
        {
            console.log("ERROR: ",err.message);
        }
        else{
            console.log("The Area of The Rectangle Of Dimension l = "+l + "and w = "+w+" is " + rectangle.area());
            console.log("The Parameter of The Rectangle Of Dimension l = "+l + "and w = "+w+" is " + rectangle.parameter());

        }
    })
    console.log("This Statement is Display Before Rect");
}

solveRect(1,2);
solveRect(-1,2);