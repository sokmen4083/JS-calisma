document.write("<table border ='3'><tr border = '1'>");
for(let x = 1; x <= 20; x++){
    document.write("<td border = '1'>");
for(let n = 1; n <= 10; n++){
    document.write(x+"x" + n + "=" + x * n + "<br/>");
}
if(x==10)
{document.write("</tr><tr>");
}
document.write("</td>");
}
document.write("</tr><table>");