var sub_1_big = false;
var sub_2_big = false;
var sub_3_big = false;
var sub_4_big = false;
var sub_5_big = false;

mainInAni = "flipInX";
mainOutAni = "flipOutX";
itemInAni = "fadeInUp";
itemOutAni = "fadeOutDown";

$(document).ready(function () {
	$("#waku1").click(function () {changeBlock1();});
	$("#waku2").click(function () {changeBlock2();});
	$("#waku3").click(function () {changeBlock3();});
	$("#waku4").click(function () {changeBlock4();});
	$("#waku5").click(function () {changeBlock5();});
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

function changeBlock4()
{
	if (!sub_4_big)
	{
		zoomSubBlock4();
	}
	else
	{
		restore();
	}
}

function changeBlock5()
{
	if (!sub_5_big)
	{
		zoomSubBlock5();
	}
	else
	{
		restore();
	}
}

function zoomSubBlock1()
{
	$("#main_class").css({ 
		"-webkit-transform":"scale(0.9) translate(-4%, 3%)",
		"-moz-transform":"scale(0.9) translate(-4%, 3%)",
		"-webkit-transition":"-webkit-transform 1s linear 0s",
		"-moz-transition":"-moz-transform 1s linear 0s",});
 	sub_1_big = true;
	sub_2_big = false;
	sub_3_big = false;
	sub_4_big = false;
	sub_5_big = false;
}

function zoomSubBlock2()
{
	$("#main_class").css({ 
		"-webkit-transform":"scale(0.9) translate(-4%, 3%)",
		"-moz-transform":"scale(0.9) translate(-4%, 3%)",
		"-webkit-transition":"-webkit-transform 1s linear 0s",
		"-moz-transition":"-moz-transform 1s linear 0s",});
 	sub_1_big = false;
	sub_2_big = true;
	sub_3_big = false;
	sub_4_big = false;
	sub_5_big = false;
}

function zoomSubBlock3()
{
	$("#main_class").css({ 
		"-webkit-transform":"scale(0.9) translate(-4%, 3%)",
		"-moz-transform":"scale(0.9) translate(-4%, 3%)",
		"-webkit-transition":"-webkit-transform 1s linear 0s",
		"-moz-transition":"-moz-transform 1s linear 0s",});
 	sub_1_big = false;
	sub_2_big = false;
	sub_3_big = false;
	sub_4_big = true;
	sub_5_big = false;
}

function zoomSubBlock4()
{
	$("#main_class").css({ 
		"-webkit-transform":"scale(0.9) translate(-4%, 3%)",
		"-moz-transform":"scale(0.9) translate(-4%, 3%)",
		"-webkit-transition":"-webkit-transform 1s linear 0s",
		"-moz-transition":"-moz-transform 1s linear 0s",});
 	sub_1_big = false;
	sub_2_big = false;
	sub_3_big = false;
	sub_4_big = true;
	sub_5_big = false;
}

function zoomSubBlock5()
{
	$("#main_class").css({ 
		"-webkit-transform":"scale(0.9) translate(-4%, 3%)",
		"-moz-transform":"scale(0.9) translate(-4%, 3%)",
		"-webkit-transition":"-webkit-transform 1s linear 0s",
		"-moz-transition":"-moz-transform 1s linear 0s",});
 	sub_1_big = false;
	sub_2_big = false;
	sub_3_big = false;
	sub_4_big = false;
	sub_5_big = true;
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
	sub_4_big = false;
	sub_5_big = false;
}