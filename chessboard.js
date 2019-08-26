
document.write("Hello <br/>");
alert("Welcome to Javascript");

function show()
{
document.write("<table border='4' cellpadding='25' >");
	for (i=0; i<10; i++)
	{
	document.write("<tr>");
		if(i%2==0)
		{
		for (j=0; j<10; j++)
		{ if(j%2==0)
			{ document.write("<td style='background:black' > </td>");}
			else
			{ document.write("<td style='background:white'> </td>");
			}
		}
		}
		else
		{
		for( j=0;j<10;j++)
		{ if(j%2==0)
			{document.write("<td style='background:white'> </td>");
			}
			else
			{document.write("<td style='background:black'> </td>");
			}
		}
		}
	document.write("</tr>");
	}
document.write("</table>");
}

