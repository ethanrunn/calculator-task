var num1 = parseInt (prompt ("Enter first value: "))
var opr = prompt ("Enter aritmetic action (+,-,*,/): ")
var num2 = parseInt (prompt ("Enter second value: "))

if(opr =="+")
{
    alert (num1 + num2)
} else if(opr == "-")
{
    alert (num1 - num2)
} else if(opr == "*")
{
    alert (num1 * num2)
} else if(opr == "/")
{
    alert (num1 / num2)
}