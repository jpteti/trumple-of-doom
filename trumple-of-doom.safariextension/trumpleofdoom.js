// I stole all this stuff from here: https://github.com/panicsteve/cloud-to-butt/blob/master/Source/content_script.js

walk(document.body);

function walk(node) {
	// I stole this function from here:
	// http://is.gd/mwZp7E
	var child, next;
	
	switch (node.nodeType) {
		case 1:  // Element
		case 9:  // Document
		case 11: // Document fragment
			child = node.firstChild;
			while (child) {
				next = child.nextSibling;
				walk(child);
				child = next;
			}
			break;
		case 3: // Text node
			handleText(node);
			break;
	}
}

function handleText(textNode)  {
	var v = textNode.nodeValue;
	
	v = v.replace(/\bTrump’s campaign\b/g, "Trump’s Temple of Doom");
	v = v.replace(/\bTrump’s campaign\b/g, "Trump’s Temple of Doom");
	v = v.replace(/\bTrump's campaign\b/g, "Trump's Temple of Doom");
	v = v.replace(/\bTrump's Campaign\b/g, "Trump's Temple of Doom");
    v = v.replace(/\bTrump Campaign\b/g, "Temple of Doom");
	v = v.replace(/\bTrump campaign\b/g, "Temple of Doom");
    v = v.replace(/\btrump campaign\b/g, "temple of doom");
	v = v.replace(/\bTRUMP CAMPAIGN\b/g, "TEMPLE OF DOOM");
	v = v.replace(/\bTrump's (\w*) campaign\b/g, "Trump's $1 Temple of Doom");
	
	textNode.nodeValue = v;
}
