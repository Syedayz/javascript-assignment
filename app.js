/*document.write("<h2>Chapter 1</h2>")

//task1
alert("Thanks for visiting")

//task2
alert("Error! Please enter a valid password")

//task3
alert("Welcome to JS Land.. \n Happy coding!")

//task4
alert("Welcome to JS Land!")
alert("Happy coding!\nPrevent this page from creating additional dialogs")

//task5
alert("Hello.. I can run JS through my web browser's console")

document.write("<h2>Chapter 2</h2>")

//task1
var username="yusra"

//task2
var MyName = "Yusra"

//task3
var message = "Hello World"
alert(message)

//task4
var name="John Doe"
var age="15 years old"
var certification="Mobile Application Development"
alert(name)
alert(age)
alert(certification)

//task5
var pizza="PIZZA\nPIZZ\nPIZ\nPI\nP"
alert(pizza)

//task6
var Email="yz@gmail.com"
alert("my email is "+Email)

//task7
var book="A smarter way to learn JavaScript"
alert(book)

//task8
document.write("Yeh!I can write HTML content through javascript <br>")

//task9
var design=" ▬▬▬▬▬▬▬▬▬ஜ۩۞۩ஜ▬▬▬▬▬▬▬▬▬"
document.write(design)
alert(design)

document.write("<h2>Chapter 3</h2>")

//task 1
var age=15
alert("i am "+age+" years old")

//task2
var time=14
alert("You have visited the site "+time+" times")

//task3
var birthyear=2000
document.write("My birth year is "+birthyear+"<br>")

//task4
var visitorname="Sadia"
var Product="soap"
var quantity=2
document.write(visitorname+" ordered "+quantity+" "+Product+" on xyz clothing store <br>")

document.write("<h2>Chapter 4</h2>")

//task1
var name="yusra",name2="sadia",_name="maham"

//task2
var Legalvariables =" name   <br>  name2  <br>   _name  <br>   my_name  <br>  useralert"
var illegalvariable=" 5name  <br> my name <br>   alert <br>   5 <br>   ^name"
document.write("legal variable :"+ Legalvariables+"<br>") 
document.write(" illegal variable :"+illegalvariable+"<br>")

//task3
var heading="Rules for naming JS variable<br>"
document.write("<h1>"+heading+"</h1><br>")
document.write("Variable names can only contain numbers, $, __ and letter <br>")
document.write("Variables must begin with a letter,underscore or $ <br>")
document.write("Variable names are case sensitive <br>")
document.write("Variable names should not be JS keywords <br>")

document.write("<h2>Chapter 5</h2>")

//task1
var a=5
var b=5
var c=a+b
document.write("The sum of 5 and 5 is "+c+"<br>")

//task2
var a=5
var b=6
var f=a-b
document.write("The answer is "+f+"<br>")

var d=a*b
document.write("The multiplication of  5 into 6 is "+d+"<br>")

var e=a%b
document.write("The modulus of 5 and 6 is "+e+"<br>")

//task3
var value
document.write("Value after variable declaration is : "+value+"<br>")
var number=5
document.write("Initial value : "+number+"<br>")
document.write("Value after increment is : ",++number+"<br>")
number=7+number
document.write("after addition is "+number+"<br>")
document.write("Value after decrement is : ",--number+"<br>")
number=number%3
document.write("The remainder is :"+number+"<br>")

//task4
var cost=600
var buy=5
document.write("The cost to buy "+buy+" tickets to a movie is "+ (buy*cost)+"PKR <br>")

//task5
document.write("Table of 3<br>")
var num=3
for(i=1; i<=10; ++i){
    v=num*i
    document.write(num+"*"+i+"="+v+"<br>")
}

//task6
var cel=25
var ferh=77
var c=(ferh-32)*5/9
var f=(cel*9/5)+32
document.write(cel+"C is "+ferh+"C<br>")
document.write(ferh+"C is "+cel+"C<br>")

//task7
var item1=650
var item2=100
var quantity1=3
var quantity2=7
var shippingcharges=100
document.write("Price of item 1 is "+item1+"<br>"+"Quantity: "+quantity1+"<br>")
document.write("Price of item 2 is "+item2+"<br>"+"Quantity: "+quantity2+"<br>")
var f=item1*quantity1
var g=item2*quantity2
document.write("The total cost is ",f+g+shippingcharges,"<br>")

//task8
var totalmarks=980
var marksobt=804
document.write("Total marks: "+totalmarks+"<br>marks obtained : "+marksobt+"<br>Percentage : "+((marksobt/totalmarks)*100+"%<br>"))

//task9
var us=10
var saudi=25
document.write("Total currency in PKR is "+((us*104.8)+(saudi*28)))

//task10
var numb=2
document.write("<br>The result is : "+((numb+5)*10)/2)

//task11
var currentyear=2016
var birthyear=1992
document.write("<br>Your age is: "+(currentyear-birthyear))

//task12
var radius=20
var circum=2*3.142*radius
var area=3.142*(radius*radius)
document.write("<br>Radius of a circle is :"+radius+"<br>The circumferense is : "+circum+"<br>The area is : "+area+"<br>")

//task13
var snack="lays"
var currentage=15
var maxage=65
var amount=3
var totalNeeded =(amount*365)*(maxage-currentage)
document.write("You will need "+totalNeeded+" "+snack+" to last you until the ripe old age of "+maxage+"<br>")

document.write("<h2>Chapter 6-9</h2>")
//task1
var arithemetic=10
document.write("The value of a is : "+arithemetic+"<br>"+"The value of ++a is : "+(++arithemetic)+"<br>Now the value of a is "+arithemetic+"<br> The value of a++ is: "+(arithemetic++)+"<br>Now the value of a is :"+arithemetic+"<br>The value of --a is : "+(--arithemetic)+"<br>Now the value of a is: "+arithemetic+"<br> The value of a-- is: "+(arithemetic--)+"<br>Now the value of a is :"+arithemetic,"<br>")

//task2
var a=2, b=1
document.write("--a : 1 <br> --a - --b : 1 <br> --a - --b + ++b : 1 - 0 + 1 <br> --a - --b + ++b + b-- : 1 - 0 + 1 + 1 <br>")
document.write(" The result is :",--a - --b + ++b + b--,"<br>")

//task3
var inputname=prompt("Enter your name ")
alert("Thanks for visiting "+inputname)

//task5
var table=prompt("Enter the number")
if(table==""){
    var defa=5
    for(i=1; i<=10; ++i){
        v=defa*i
        document.write(defa+"*"+i+"="+v+"<br>")
    }
}
else{
    for(i=1; i<=10; ++i){
        v=table*i
        document.write(table+"*"+i+"="+v+"<br>")
    }
}


//task6
document.write("<h4> Subjects &nbsp;&nbsp;&nbsp;&nbsp;Total marks &nbsp;&nbsp;&nbsp;&nbsp;Obtained marks</h4>")
var sub1=prompt("Enter subject 1")
var sub2=prompt("Enter subject 2")
var sub3=prompt("Enter subject 3" )
var score=100
totalscore=score+score+score
var sub1marks=prompt("Enter marks of subject 1")
var sub2marks=prompt("Enter marks of subject 2")
var sub3marks=prompt("Enter marks of subject 3")
var submarks=(+sub1marks)+(+sub2marks)+(+sub3marks)
var percent=submarks/totalscore
document.write(sub1+"&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;"+score+"&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;"+sub1marks+"&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<br>")
document.write(sub2+"&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;"+score+"&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;"+sub2marks+"&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<br>")
document.write(sub3+"&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;"+score+"&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;"+sub3marks+"&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<br>")
document.write("&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;"+totalscore+" &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;"+submarks+"<br>Percentage "+(percent*100)+" %")

document.write("<h2>Chapter 9-11</h2>")
//task1
var city=prompt("Enter your city")
if(city=="karachi"){
    alert("Welcome to the city of lights")
}

//task2
var gender=prompt("Enter your gender")
if(gender=="male"){
    alert("Good Morning Sir.")
}
else if(gender=="female"){
    alert("Good Morning Ma'am.")
}

//task3
var traffic=prompt("Enter the color of road traffic signal")
if(traffic=="red"){
    alert("Must stop")
}
else if(traffic=="yellow"){
    alert("Ready to move")
}
else if(traffic=="green"){
    alert("move now")
}

//task4
var fuel=prompt("Enter the remaining fuel in car (in litres)")
if(fuel<0.25){
    alert("Please refill the fuel in your car")

}

//task5
var a = 4;
if (++a === 5){
    alert("given condition for variable a is true");
}


var b = 82;
if (b++ === 83){
alert("given condition for variable b is true");
}



var c = 12;
if (c++ === 13){
alert("condition 1 is true");
}
if (c === 13){
alert("condition 2 is true");
}
if (++c < 14){
alert("condition 3 is true");
}
if(c === 14){
alert("condition 4 is true");
}


var materialCost = 20000;
var laborCost = 2000;
var totalCost = materialCost + laborCost;
if (totalCost === laborCost + materialCost){
    alert("The cost equals");
}

if(true){
    alert("True");
}
if(false){
    alert("False");
}

if("car" < "cat"){
    alert("car is smaller than cat");
}

//task 6
var mark1=+prompt("Enter your subject 1 marks")
var mark2=+prompt("Enter your subject 2 marks")
var mark3=+prompt("Enter your subject 3 marks")
var totalmarks1=300
var mark=mark1+mark2+mark3
var per=(mark/totalmarks1)*100
alert("Total marks :"+mark)
alert("Percentage is :"+per)
if(per>=80){
    alert("Grade : A-one \n Remarks : Excellent")
}
else if(per>=70){
    alert("Grade : A \n Remarks : Good")
}
else if(per >=60){
    alert("Grade : B \n Remarks : You need to improve")
}
else if(per<60){
    alert("Grade : Fail \n Remarks : Sorry")
}

//task7
var secret=6
var guess=+prompt("Guess the number")
if(guess==secret){
    alert("Bingo!")

}
else if(guess+1==secret){
    alert("You are close enough to guess the correct answer")
}

//task8
var number3=+prompt("Enter the number")
if(number3%3==0){
    document.write("Yes it is divisible by 3<br>")
}

//task9
var number2=+prompt("Enter the number")
if(number2%2==0){
    document.write("<br>It is even")
}
else{
    document.write("<br>It is odd")
}

//task10
var temp=+prompt("Enter the temperature")
if(temp>40){
    alert("It is too hot outside")
}
else if(temp>30){
    alert("The weather is normal")
}
else if(temp>20){
    alert("Today's weather is cool")
}
else if(temp>10){
    alert("OMG!Today's Weather is so cool")
}

//task11
var firstnum=+prompt("Enter the number")
var secondnum=+prompt("Enter the number")
var operation=prompt("Enter the operation")
if(operation=="+"){
    alert(firstnum+secondnum)
}
else if(operation=="-"){
    alert(firstnum-secondnum)
}
else if(operation=="%"){
    alert(firstnum%secondnum)
}
else if(operation=="*"){
    alert(firstnum*secondnum)
}
else if(operation=="/"){
    alert(firstnum/secondnum)
}

document.write("<h2>Chapter 12-13</h2>")
//task1

var char=prompt("Enter a number or string")
if (char>=65 && char<=90){
    alert("Character is a capital letter")
}
else if (char>=97 && char<=122){
    alert("Character is a small letter")
}
else if (char>=48 && char<=57){
    alert("Character is a digit")
}

//task2
var int=prompt("Enter the integer")
var int2=prompt("Enter the integer")
if(int>int2){
    alert("The larger one is "+int)
}
else if (int2>int){
    alert("The larger one is "+int2)
}
else{
    alert("They are euqal")
}

//task3
var integer1=prompt("Enter the integer")
if(integer1>0){
    alert("The number is positive")
}
else if (integer1<0){
    alert("The number is negative")
}
else{
    alert("It is 0")
}

//task4
var vowel=prompt("Enter the string of length 1")
if(vowel=="a"|| vowel=="e" || vowel=="i" ||vowel=="o" ||vowel=="u"){
    alert("It is vowel")
}
else{
    alert(false)
}

//task5
var pass="yz35"
var enterpass=prompt("Enter Your Password")
if(enterpass==""){
    alert("Please Enter your password")
}

else if(enterpass==pass){
    alert("Correct! The password you entered matches the original password")
}
else{
    alert("Incorrect Password")
}

//task6
var greeting;
var hour = 13;
if (hour < 18) {
    alert("Good day")
}
else{
    alert("Good evening")
}
document.write("<h2>Chapter 14-16</h2>")

//task1
var empty=[]

//task2

//task3
var stringarray=["yusra","shiza","asma"]

//task4
var numarray=[2,3,2,4]

//task5
var booleanarray=[true,false]

//task6
var mixearray=["yusra",5,"+",true]

//task7
var edu=["SSC", "HSC", "BCS","BS", "BCOM", "MS", "M. Phil"]
document.write("<h4>Qualifications</h4>",edu[0],"<br>",edu[1],"<br>",edu[2],"<br>",edu[3],"<br>",edu[4],"<br>",edu[5],"<br>",edu[6])

//task8
var studentarray=["yusra","shiza","asma"]
var scorestudent=["497","498","499"]
var totalmarks1=500
document.write("<br>Score of ",studentarray[0]," is ",scorestudent[0]," and Percentage is ",(scorestudent[0]/totalmarks1)*100,"%<br>")
document.write("Score of ",studentarray[1]," is ", "and Percentage is ",(scorestudent[1]/totalmarks1)*100,"%<br>")
document.write("Score of ",studentarray[2]," is ", "and Percentage is ",(scorestudent[2]/totalmarks1)*100,"%<br>")

//task9
var colorarray=["blue","red","yellow"]
document.write(colorarray[0],"<br>",colorarray[1],"<br>",colorarray[2],"<br>")
var askuser=prompt("What color do you want to add in the beginning?")
colorarray.unshift(askuser)
document.write(colorarray,"<br>")
var inend=prompt("What color do you want to add in the end?")
colorarray.push(inend)
document.write(colorarray,"<br>")
var askuser1=prompt("What  more colors do you want to add in the beginning?")
var askuser2=prompt("What  more colors do you want to add in the beginning?")
colorarray.unshift(askuser1,askuser2)
document.write(colorarray,"<br>")
colorarray.shift()
document.write(colorarray,"<br>")
colorarray.pop()
document.write(colorarray,"<br>")
var askcolor=prompt("On which index do you want to add a color?")
var askcolorname=prompt("Write a color name")
colorarray.splice(askcolor,0,askcolorname)
document.write(colorarray,"<br>")
var delcolor=prompt("Which index you want to delete the color")
colorarray.splice(delcolor,1)
document.write(colorarray)


//task10
var sortscore=[32,23,54]
document.write("Score of students ",sortscore)
sortscore.sort()
document.write("<br>Ordered score of students ",sortscore,"<br>")

//task11
var cityname=["Karachi","Lahore","Islamabad","Quetta"]
var selected=[cityname[0],cityname[2]]
document.write("City names :",cityname,"<br> Selected city names: ",selected,"<br>")

//task12
var arr=["This","is","my","cat"]
document.write(arr.join(" "))

//task13
var newarr=[]
newarr.push(3)
newarr.push(5)
newarr.push(6)
document.write("<br> The array is :",newarr)
document.write("<br> Values :",newarr.shift())
document.write("<br> Values :",newarr.shift())
document.write("<br> Values :",newarr.shift())

//task14
var newarr2=[]
newarr2.push(3)
newarr2.push(5)
newarr2.push(6)
document.write("<br> The array is :",newarr2)
document.write("<br> Values: ",newarr2.pop())
document.write("<br> Values: ",newarr2.pop())
document.write("<br> Values: ",newarr2.pop())

//task15
var mobilemanuf=["<br>Apple","Samsung", "Motorola", "Nokia", "Sony"]
document.write(mobilemanuf)

document.write("<h2>Chapter 17-20</h2>")
//task1
var multiarr=[[],[]]

//task2
var matrix=[[0,1,2,3],[1,0,1,2],[2,1,0,1]]
document.write(matrix[0][0]," ",matrix[0][1]," ",matrix[0][2]," ",matrix[0][3],"<br>",matrix[1][0]," ",matrix[1][1]," ",matrix[1][2]," ",matrix[1][3],"<br>",matrix[2][0]," ",matrix[2][1]," ",matrix[2][2]," ",matrix[2][3],"<br>")

//task3
for(i=1;i<=10;++i){
    document.write(i,"<br>")
}

//task4
var table2=prompt("Enter the number")
var table3=prompt("Enter the length")
for(i=1; i<=table3; ++i){
    v=table2*i
    document.write(table2+"*"+i+"="+v+"<br>")
}

//task5
var fruits = ["apple", "banana", "mango", "orange","strawberry"]
j=fruits.length-1
for(i=0;i<=j;++i){
    document.write("Element at index ",i," is ",fruits[i],"<br>")
}

//task6
document.write("Counting: ")
for (i=0;i<=10;++i){
    document.write(i,",")
}

document.write("<br>Reverse Counting: ")
for(i=10;i>=0;--i){
    document.write(i,",")
}
document.write("<br>Even :")
for(i=0;i<=10;++i){
    if(i%2==0){
        document.write(i,",")
    }
}
document.write("<br>Odd :")
for(i=0;i<=10;++i){
    if(i%2!=0){
        document.write(i,",")
    }
}
document.write("<br> Series :")
var series=2
for(i=1; i<=10 ;++i){
    v=series*i
    document.write(v,"k,")
}

//task7

var bakery=["cake","paties","pastry","cookies"]
var search=prompt("Which item do you want?")

function hey(search){
var p=bakery.length-1
for(i=0;i<=p;++i){
    if(bakery[i]==search){
        return(bakery[i]+" is available at index "+i+" in our bakery")   
        
    }
  
}return(search+" is not found, SORRY!")
}document.write("<br>",hey(search))

//task8
var A = [24, 53, 78, 91, 12]
var largest=0
for(i=0;i<A.length;++i){
    if(A[i]>largest){
        largest=A[i]
        
    }
}
document.write("<br>Array :",A)
document.write("<br>The largest number is :",largest)

//task9
var A = [24, 53, 78, 91, 12]
var smallest=100
for(i=0;i<A.length;++i){
    if(A[i]<smallest){
        smallest=A[i]
        
    }
}
document.write("<br>Array :",A)
document.write("<br>The largest number is :",smallest,"<br>")

//task10
var series1=5
for(i=1; i<=20 ;++i){
    v=series1*i
    document.write(v,",")
}*/








