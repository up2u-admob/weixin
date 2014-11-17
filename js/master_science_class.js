var sub_1_big = false;
var sub_2_big = false;
var sub_3_big = false;

mainInAni = "flipInX";
mainOutAni = "flipOutX";
itemInAni = "flipInX";
itemOutAni = "flipOutX";


$(document).ready(function () {
	$("#waku1").click(function () {changeBlock1();});
	$("#waku2").click(function () {changeBlock2();});
	$("#waku3").click(function () {changeBlock3();});
});

function changeBlock1()
{
	if (!sub_1_big)
	{
		zoomSubBlock1();
	}
	else
	{
		restore();
	}
}

function changeBlock2()
{
	if (!sub_2_big)
	{
		zoomSubBlock2();
	}
	else
	{
		restore();
	}
}

function changeBlock3()
{
	if (!sub_3_big)
	{
		zoomSubBlock3();
	}
	else
	{
		restore();
	}
}

function zoomSubBlock1()
{
	$("#main_class").css({ 
		"-webkit-transform":"scale(1) translate(-10%, 0%)",
		"-moz-transform":"scale(1) translate(-10%, 0%)",
		"-webkit-transition":"-webkit-transform 1s linear 0s",
		"-moz-transition":"-moz-transform 1s linear 0s",});
 	sub_1_big = true;
	sub_2_big = false;
	sub_3_big = false;
}

function zoomSubBlock2()
{
	$("#main_class").css({ 
		"-webkit-transform":"scale(1) translate(-55%, -14%)",
		"-moz-transform":"scale(1) translate(-55%, -14%)",
		"-webkit-transition":"-webkit-transform 1s linear 0s",
		"-moz-transition":"-moz-transform 1s linear 0s",});
 	sub_1_big = false;
	sub_2_big = true;
	sub_3_big = false;
}

function zoomSubBlock3()
{
	$("#main_class").css({ 
		"-webkit-transform":"scale(1) translate(-10%, -26%)",
		"-moz-transform":"scale(1) translate(-10%, -26%)",
		"-webkit-transition":"-webkit-transform 1s linear 0s",
		"-moz-transition":"-moz-transform 1s linear 0s",});
 	sub_1_big = false;
	sub_2_big = false;
	sub_3_big = true;
}

function restore()
{
	$("#main_class").css({ 
		"-webkit-transform":"scale(0.4) translate(0%, 0%)",
		"-moz-transform":"scale(0.4) translate(0%, 0%)",
		"-webkit-transition":"-webkit-transform 1s linear 0s",
		"-moz-transition":"-moz-transform 1s linear 0s",});
	sub_1_big = false;
	sub_2_big = false;
	sub_3_big = false;
}
