var result;

function parseNode(startNode) { 
 

  for (var i = 0; i < startNode.childNodes.length; i++) {
      var nd = startNode.childNodes[i]; 
      
      result += "<tr>"; 
      result += "<td>" + nd.nodeType + "</td>";
      result += "<td>" + nd.nodeName + "</td>";
      result += "<td>" + (nd.nodeValue || "") + "</td>";
      result += "<td>" + (nd.textContent || "") + "</td>";
      result += "</tr>"; 


      parseNode(nd);
  }

  return "<table><tr><th>nodeType</th><th>nodeName</th><th>nodeValue</th><th>textContent</th></tr>" + result + "</table>";
}

