function insertJson(employeeList) {
  // Remove ol element
  document.getElementById("phonebook").remove();

  // Create new ol element
  var oLelement = document.createElement('ol');
  oLelement.setAttribute('id', 'phonebook');
  document.body.appendChild(oLelement);

  var el, elSpan, elLink;
  for (var i = 0; i < employeeList.length; i++) {
    el = document.createElement('li');

    elSpan = createSpan("name", employeeList[i].name);
    el.appendChild(elSpan);

    elLink = createLink("email", employeeList[i].email);
    elSpan = createSpan("email");
    elSpan.appendChild(elLink);
    el.appendChild(elSpan);

    elLink = createLink("phone", employeeList[i].phone);
    elSpan = createSpan("phone");
    elSpan.appendChild(elLink);
    el.appendChild(elSpan);

    // Add employee list to ol
    document.getElementById('phonebook').appendChild(el);
  }
}

function createSpan(className, info, link) {
  var element = document.createElement('span');
  var attribute = document.createAttribute("class");
  attribute.value = className;
  element.setAttributeNode(attribute);
  if (info !== undefined) {
    element.innerHTML = info;
  }
  return element;
}

function createLink(link, info) {
  var element = document.createElement('a');
  var attribute = document.createAttribute("href");
  attribute.value = link + ":" + info;
  element.setAttributeNode(attribute);
  element.innerHTML = info;
  return element;
}
//module.exports = insertJson;
