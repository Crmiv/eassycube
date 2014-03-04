//let getelementbyclassname be compatible with browser
function getElementByClassName(node,classname)
{
	if(node.getElementByClassName())
	{
		return node.getElementByClassName();
	}else{
		var results = new Array();
		var eles = node.getElementByByTagName("*");
		for(var i=0;i<eles.length;i++)
			{
				if(eles[i].className.indexOf(classname) != -1){
					results[results.length]=eles[i];
				}
			}
		return results;
	}
}
