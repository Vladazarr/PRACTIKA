//464
// let parent = document.querySelector('#parent');

// let arr = [1, 2, 3, 4, 5];

// for (let elem of arr) {
// 	let p = document.createElement('p');
// 	p.textContent = elem;
	
// 	p.addEventListener('click', function() {
// 		p.textContent = parseInt(p.textContent) + 1;
// 	});
	
// 	parent.appendChild(p);
// }

//465
// let arr = ["apple", "banana", "orange"];
// let elem = document.getElementById("elem");
// arr.forEach(item => {
//   let li = document.createElement("li");
//   li.textContent = item;
//   elem.appendChild(li);
// })


// let arr = ["apple", "banana", "orange"];
// let elem = document.getElementById("elem");
// arr.forEach(item => {
//   let li = document.createElement("li");
//   li.textContent = item;
//   li.addEventListener("click", () => {
//     alert(item);
//   });
//   elem.appendChild(li);
// });


// let arr = ["apple", "banana", "orange"];
// let elem = document.getElementById("elem");
// arr.forEach(item => {
//   let li = document.createElement("li");
//   li.textContent = item;
//   li.addEventListener("click", function() {
//     let newText = item + "!";
//     li.textContent = newText;
//   });
//   elem.appendChild(li);
// });



//466
// let table = document.getElementById("myTable");
// let rows = table.getElementsByTagName("tr");
// let cols = table.getElementsByTagName("td");
// 		for (let i = 0; i < 5; i++) {
// 			for (let j = 0; j < 5; j++) {
// 				rows[i].getElementsByTagName("td")[j].innerHTML = i * 5 + j + 1;
// 			}
// 		}

// (2)
// let table = document.getElementById("myTable");
// 		let rows = table.getElementsByTagName("tr");
// 		let cols = table.getElementsByTagName("td");
// 		for (let i = 0; i < 10; i++) {
// 			for (let j = 0; j < 5; j++) {
// 				rows[i].getElementsByTagName("td")[j].innerHTML = i * 5 + j + 1;
// 			}
// 		}

//(3)
// let table = document.getElementById("myTable");
// let rows = table.getElementsByTagName("tr");
// let cols = table.getElementsByTagName("td");
// for (let i = 0; i < 10; i++) {
//     for (let j = 0; j < 5; j++) {
//         cols[i * 5 + j].innerHTML = "x";
//     }
// }

//(4)
// function generateTable() {
//     let rows = document.getElementById("rows").value;
//     let cols = document.getElementById("cols").value;
//     let table = document.getElementById("myTable");
//     while (table.rows.length > 0) {
//         table.deleteRow(0);
//     }
//     for (let i = 0; i < rows; i++) {
//         let row = table.insertRow();
//         for (let j = 0; j < cols; j++) {
//             let cell = row.insertCell();
//             cell.innerHTML = i * cols + j + 1;
//         }
//     }
// }

//467
// let table = document.getElementById("myTable");
// 		let rows = table.getElementsByTagName("tr");
// 		let cols = table.getElementsByTagName("td");
// 		for (let i = 0; i < 5; i++) {
// 			for (let j = 0; j < 5; j++) {
// 				cols[i * 5 + j].innerHTML = i * 5 + j + 1;
// 			}
// 		}

// let table = document.getElementById("myTable");
// let rows = table.getElementsByTagName("tr");
// let cols = table.getElementsByTagName("td");
// for (let i = 0; i < 5; i++) {
//     for (let j = 0; j < 5; j++) {
//         cols[i * 5 + j].innerHTML = (i * 5 + j + 1) * 2;
//     }
// }

//468
// let arr = [[1, 2, 3], [4, 5, 6], [7, 8, 9], [10, 11, 12]];
// let table = document.createElement("table");
// for (let i = 0; i < arr.length; i++) {
//   let row = document.createElement("tr");
//   for (let j = 0; j < arr[i].length; j++) {
//     let cell = document.createElement("td");
//     let cellText = document.createTextNode(arr[i][j]);
//     cell.appendChild(cellText);
//     row.appendChild(cell);
//   }
//   table.appendChild(row);
// }
// document.body.appendChild(table);


// let arr = [[1, 2, 3], [4, 5, 6], [7, 8, 9], [10, 11, 12]];
// let table = document.createElement("table");
// for (let i = 0; i < arr.length; i++) {
//   let row = document.createElement("tr");
//   for (let j = 0; j < arr[i].length; j++) {
//     let cell = document.createElement("td");
//     let cellText = document.createTextNode(arr[i][j] * arr[i][j]);
//     cell.appendChild(cellText);
//     row.appendChild(cell);
//   }
//   table.appendChild(row);
// }
// document.body.appendChild(table);


//469
// let employees = [
//     {name: 'employee1', age: 30, salary: 400},
//     {name: 'employee2', age: 31, salary: 500},
//     {name: 'employee3', age: 32, salary: 600},
//   ];
  
//   let table = document.createElement("table");
//   let headerRow = document.createElement("tr");
//   let nameHeader = document.createElement("th");
//   nameHeader.textContent = "Name";
//   let ageHeader = document.createElement("th");
//   ageHeader.textContent = "Age";
//   let salaryHeader = document.createElement("th");
//   salaryHeader.textContent = "Salary";
//   headerRow.appendChild(nameHeader);
//   headerRow.appendChild(ageHeader);
//   headerRow.appendChild(salaryHeader);
//   table.appendChild(headerRow);
//   for (let i = 0; i < employees.length; i++) {
//     let row = document.createElement("tr");
//     let nameCell = document.createElement("td");
//     nameCell.textContent = employees[i].name;
//     let ageCell = document.createElement("td");
//     ageCell.textContent = employees[i].age;
//     let salaryCell = document.createElement("td");
//     salaryCell.textContent = employees[i].salary;
  
//     row.appendChild(nameCell);
//     row.appendChild(ageCell);
//     row.appendChild(salaryCell);
//     table.appendChild(row);
//   }
//   document.body.appendChild(table);
  
//(2)
// let employees = [
//     {name: 'employee1', age: 30, salary: 400},
//     {name: 'employee2', age: 31, salary: 500},
//     {name: 'employee3', age: 32, salary: 600},
//   ];

//   let table = document.createElement("table");
//   let headerRow = document.createElement("tr");
//   let nameHeader = document.createElement("th");
//   nameHeader.textContent = "Name";
//   let ageHeader = document.createElement("th");
//   ageHeader.textContent = "Age";
//   let salaryHeader = document.createElement("th");
//   salaryHeader.textContent = "Salary";
//   headerRow.appendChild(nameHeader);
//   headerRow.appendChild(ageHeader);
//   headerRow.appendChild(salaryHeader);
//   table.appendChild(headerRow);
  
//   for (let i = 0; i < employees.length; i++) {
//     let row = document.createElement("tr");
//     let nameCell = document.createElement("td");
//     nameCell.textContent = employees[i].name;
//     let ageCell = document.createElement("td");
//     ageCell.textContent = employees[i].age;
//     let salaryCell = document.createElement("td");
//     salaryCell.textContent = employees[i].salary;

//     row.appendChild(nameCell);
//     row.appendChild(ageCell);
//     row.appendChild(salaryCell);
//     table.appendChild(row);
//     ageCell.addEventListener("click", function() {
//       ageCell.textContent = parseInt(ageCell.textContent) + 1;
//     });
//   }
  
//   document.body.appendChild(table);
  


//(3)
// let employees = [
//     {name: 'employee1', age: 30, salary: 400},
//     {name: 'employee2', age: 31, salary: 500},
//     {name: 'employee3', age: 32, salary: 600},
//   ];
  
//   let table = document.createElement("table");
  
//   let headerRow = document.createElement("tr");
//   let nameHeader = document.createElement("th");
//   nameHeader.textContent = "Name";
//   let ageHeader = document.createElement("th");
//   ageHeader.textContent = "Age";
//   let salaryHeader = document.createElement("th");
//   salaryHeader.textContent = "Salary";
//   headerRow.appendChild(nameHeader);
//   headerRow.appendChild(ageHeader);
//   headerRow.appendChild(salaryHeader);
//   table.appendChild(headerRow);
  
//   for (let i = 0; i < employees.length; i++) {
//     let row = document.createElement("tr");
  
//     let nameCell = document.createElement("td");
//     nameCell.textContent = employees[i].name;
//     let ageCell = document.createElement("td");
//     ageCell.textContent = employees[i].age;
//     let salaryCell = document.createElement("td");
//     salaryCell.textContent = employees[i].salary;
  
//     row.appendChild(nameCell);
//     row.appendChild(ageCell);
//     row.appendChild(salaryCell);
  
//     table.appendChild(row);
  
//     salaryCell.addEventListener("click", function() {
//       salaryCell.textContent = (parseFloat(salaryCell.textContent) * 1.1).toFixed(2);
//     });
//   }
  
//   document.body.appendChild(table);
  


//470
// function addRow() {
//     let table = document.getElementById("myTable");
//     let row = table.insertRow();
//     let cell1 = row.insertCell(0);
//     let cell2 = row.insertCell(1);
//     cell1.innerHTML = "New Row, Column 1";
//     cell2.innerHTML = "New Row, Column 2";
// }

//(2)
// function addRow() {
//     let table = document.getElementById("table");
//     let row = table.insertRow();
//     let cell1 = row.insertCell(0);
//     let cell2 = row.insertCell(1);
//     cell1.innerHTML = "";
//     cell2.innerHTML = "";
//   }

//471
// function doubleNumbers() {
//     let table = document.getElementsByTagName("table")[0];
//     let rows = table.getElementsByTagName("tr");
//     for (let i = 0; i < rows.length; i++) {
//         let cells = rows[i].getElementsByTagName("td");
//       for (let j = 0; j < cells.length; j++) {
//         let value = parseInt(cells[j].innerHTML);
//         cells[j].innerHTML = value * 2;
//       }
//     }
//   }

//472
// function addNewElement() {
//     let parent = document.getElementById("parent");
//     let newElement = document.createElement("li");
//     let textNode = document.createTextNode("New Element");
//     newElement.appendChild(textNode);
//     parent.appendChild(newElement);
//   }
//   let listItems = document.querySelectorAll("#parent li");
//   for (let i = 0; i < listItems.length; i++) {
//     listItems[i].addEventListener("click", function() {
//       this.remove();
//     });
//   }

//474
// let listItems = document.querySelectorAll("#myList li");
// for (let i = 0; i < listItems.length; i++) {
//   let deleteLink = document.createElement("a");
//   deleteLink.href = "#";
//   deleteLink.innerHTML = "Delete";
//   deleteLink.onclick = function() {
//     this.parentNode.remove();
//   };
//   listItems[i].appendChild(deleteLink);
// }

//474(2)
// let rows = document.querySelectorAll("#myTable tr");
// for (let i = 1; i < rows.length; i++) {
//   let deleteLink = document.createElement("a");
//   deleteLink.href = "#";
//   deleteLink.innerHTML = "Delete";
//   deleteLink.onclick = function() {
//     this.parentNode.parentNode.remove();
//   };
//   rows[i].appendChild(deleteLink);
// }

//475
// let elem = document.querySelector('#elem');
// let input = document.querySelector('#input');
// input.addEventListener('input', function() {
//   elem.textContent = this.value;
// });
// input.addEventListener('blur', function() {
//   elem.textContent = this.value;
// });


//477
// let listItems = document.querySelectorAll("#myList li");
// for (let i = 0; i < listItems.length; i++) {
//   listItems[i].addEventListener("click", function() {
//     let input = document.createElement("input");
//     input.type = "text";
//     input.value = this.textContent;
//     this.innerHTML = "";
//     this.appendChild(input);
//     input.focus();
//     input.addEventListener("blur", function() {
//       this.parentNode.innerHTML = this.value;
//     });
//   });
// }

//477(2)
// let cells = document.querySelectorAll("#myTable td");
// for (let i = 0; i < cells.length; i++) {
//   cells[i].addEventListener("click", function() {
//     let input = document.createElement("input");
//     input.type = "text";
//     input.value = this.textContent;
//     this.innerHTML = "";
//     this.appendChild(input);
//     input.focus();
//     input.addEventListener("blur", function() {
//       this.parentNode.innerHTML = this.value;
//     });
//   });
// }

//478
// let spans = document.querySelectorAll('#parent span');
// spans.forEach(span => {
//   span.addEventListener('click', function() {
//     let input = document.createElement('input');
//     input.type = 'text';
//     input.value = span.textContent;
//     span.parentNode.replaceChild(input, span);
//     input.focus();
//   });
// });

//478(2)
// let deleteLinks = document.querySelectorAll('.delete-link');
// deleteLinks.forEach(link => {
//   link.addEventListener('click', function() {
//     let paragraph = link.parentNode;
//     paragraph.parentNode.removeChild(paragraph);
//   });
// });

//479
// let highlightLinks = document.querySelectorAll('.highlight-link');
// highlightLinks.forEach(link => {
//   link.addEventListener('click', function() {
//     let paragraph = link.parentNode;
//     paragraph.style.backgroundColor = 'yellow';
//     setTimeout(function() {
//       paragraph.style.backgroundColor = '';
//     }, 1000);
//   });
// });

//479(2)
// let highlightLinks = document.querySelectorAll('.highlight-link');
// highlightLinks.forEach(link => {
//   link.addEventListener('click', function() {
//     let paragraph = link.parentNode;
//     paragraph.style.backgroundColor = 'yellow';
//     setTimeout(function() {
//       paragraph.style.backgroundColor = '';
//       link.parentNode.removeChild(link);
//     }, 1000);
//   });
// });

//479(3)
// let highlightLinks = document.querySelectorAll('.highlight-link');
// highlightLinks.forEach(link => {
//   link.addEventListener('click', function() {
//     let row = link.parentNode.parentNode;
//     row.style.backgroundColor = 'green';
//     setTimeout( function() {
//       row.style.backgroundColor = '';
//     }, 1000);
//   });
// });

//479(4)
// let highlightLinks = document.querySelectorAll('.highlight-link');
// highlightLinks.forEach(link => {
//   let isHighlighted = false;
//   link.addEventListener('click', () => {
//     const row = link.parentNode.parentNode;
//     if (isHighlighted) {
//       row.style.backgroundColor = '';
//       isHighlighted = false;
//     } else {
//       row.style.backgroundColor = 'green';
//       isHighlighted = true;
//     }
//   });
// });
 
//480
// let toggleButton = document.getElementById('toggle-button');
// let elem = document.getElementById('elem');
// toggleButton.addEventListener('click', function() {
//   if (elem.classList.contains('hidden')) {
//     elem.classList.remove('hidden');
//     toggleButton.textContent = 'Скрыть';
//   } else {
//     elem.classList.add('hidden');
//     toggleButton.textContent = 'Показать';
//   }
// });

//482
// let listItems = document.querySelectorAll('li');
// for (let i = 0; i < listItems.length; i++) {
//     listItems[i].addEventListener('click', function() {
//         this.classList.toggle('active');
//     });
// }

//482(2)
// let listItems = document.querySelectorAll('li');
// 		for (let i = 0; i < listItems.length; i++) {
// 			listItems[i].addEventListener('click', function() {
// 				if (this.classList.contains('active')) {
// 					this.classList.remove('active');
// 				} else {
// 					for (let j = 0; j < listItems.length; j++) {
// 						listItems[j].classList.remove('active');
// 					}
// 					this.classList.add('active');
// 				}
// 			});
// 		}


//484
// let myArray = ["Элемент 1", "Элемент 2", "Элемент 3"];
// let list = document.createElement("ul");
// for (let i = 0; i < myArray.length; i++) {
//   let listItem = document.createElement("li");
//   listItem.appendChild(document.createTextNode(myArray[i]));
//   list.appendChild(listItem);
// }
// document.body.appendChild(list);

//484(2)
// let myArray = ["Элемент 1", "Элемент 2", "Элемент 3"];
// let list = document.createElement("ul");
// for (let i = 0; i < myArray.length; i++) {
//     let listItem = document.createElement("li");
//   listItem.appendChild(document.createTextNode(myArray[i]));
//   listItem.addEventListener("click", function() {
//     let input = document.createElement("input");
//     input.type = "text";
//     input.value = this.innerHTML;
//     this.innerHTML = "";
//     this.appendChild(input);
//     input.focus();
//     input.addEventListener("blur", function() {
//       this.parentNode.innerHTML = this.value;
//     });
//     input.addEventListener("keydown", function(event) {
//       if (event.keyCode === 13) {
//         this.blur();
//       }
//     });
//   });
//   list.appendChild(listItem);
// }
// document.body.appendChild(list);

//484(3)
// let myArray = ["Элемент 1", "Элемент 2", "Элемент 3"];
// let myList = document.getElementById("my-list");
// 		function addNewItem() {
// 			let newItemValue = document.getElementById("new-item-input").value;
// 			myArray.push(newItemValue);
// 			let newItem = document.createElement("li");
// 			newItem.innerHTML = newItemValue;
// 			myList.appendChild(newItem);
// 			document.getElementById("new-item-input").value = "";
// 		}
// 		for (let i = 0; i < myArray.length; i++) {
// 			let newItem = document.createElement("li");
// 			newItem.innerHTML = myArray[i];
// 			myList.appendChild(newItem);
// 		}

//484(4)
// let myArray = ["Элемент 1", "Элемент 2", "Элемент 3"];
// let myList = document.getElementById("myList");
// for (let i = 0; i < myArray.length; i++) {
//     let myListItem = document.createElement("li");
//     myListItem.appendChild(document.createTextNode(myArray[i]))
//     let deleteLink = document.createElement("a");
//     deleteLink.href = "#";
//     deleteLink.appendChild(document.createTextNode("Удалить"));
//     deleteLink.onclick = function() {
//         myList.removeChild(this.parentNode);
//     };
//     myListItem.appendChild(deleteLink);
//     myList.appendChild(myListItem);
// }

//484(5)
// let myArray = ["Элемент 1", "Элемент 2", "Элемент 3"];
// 		let myList = document.getElementById("myList");
// 		for (let i = 0; i < myArray.length; i++) {
// 			let myListItem = document.createElement("li");
// 			myListItem.appendChild(document.createTextNode(myArray[i]));
// 			let deleteLink = document.createElement("a");
// 			deleteLink.href = "#";
// 			deleteLink.appendChild(document.createTextNode("Удалить"));
// 			deleteLink.onclick = function() {
// 				myList.removeChild(this.parentNode);
// 			};
// 			myListItem.appendChild(deleteLink);
// 			let highlightLink = document.createElement("a");
// 			highlightLink.href = "#";
// 			highlightLink.appendChild(document.createTextNode("Перечеркнуть"));
// 			highlightLink.onclick = function() {
// 				this.parentNode.style.textDecoration = "line-through";
// 			};
// 			myListItem.appendChild(highlightLink);
// 			myList.appendChild(myListItem);
// 		}

//484(6)
// let employees = [
//     {name: 'employee1', age: 30, salary: 400},
//     {name: 'employee2', age: 31, salary: 500},
//     {name: 'employee3', age: 32, salary: 600},
//     ];
// let employeesTable = document.getElementById("employeesTable");
// 		let employeesTableBody = employeesTable.getElementsByTagName("tbody")[0];
// 		for (let i = 0; i < employees.length; i++) {
// 			let newRow = employeesTableBody.insertRow();
// 			newRow.insertCell().appendChild(document.createTextNode(employees[i].name));
// 			newRow.insertCell().appendChild(document.createTextNode(employees[i].age));
// 			newRow.insertCell().appendChild(document.createTextNode(employees[i].salary));
// 		}

//484(7)
// let employees = [
// 	{name: 'employee1', age: 30, salary: 400},
// 	{name: 'employee2', age: 31, salary: 500},
// 	{name: 'employee3', age: 32, salary: 600},
// ];
// let employeesTable = document.getElementById("employeesTable");
// let employeesTableBody = employeesTable.getElementsByTagName("tbody")[0];
// for (let i = 0; i < employees.length; i++) {
//     let newRow = employeesTableBody.insertRow();
//     let nameCell = newRow.insertCell();
//     nameCell.appendChild(document.createTextNode(employees[i].name));
//     let ageCell = newRow.insertCell();
//     ageCell.appendChild(document.createTextNode(employees[i].age));
//     let salaryCell = newRow.insertCell();
//     salaryCell.appendChild(document.createTextNode(employees[i].salary));
//     nameCell.contentEditable = true;
//     ageCell.contentEditable = true;
//     salaryCell.contentEditable = true;
// }


//484(8)
// let employees = [
// 	{name: 'employee1', age: 30, salary: 400},
// 	{name: 'employee2', age: 31, salary: 500},
// 	{name: 'employee3', age: 32, salary: 600},
// ];
//     let employeesTable = document.getElementById("employeesTable");
//     let employeesTableBody = employeesTable.getElementsByTagName("tbody")[0];
//     for (let i = 0; i < employees.length; i++) {
//         let newRow = employeesTableBody.insertRow();
//         let nameCell = newRow.insertCell();
//         nameCell.appendChild(document.createTextNode(employees[i].name));
//         let ageCell = newRow.insertCell();
//         ageCell.appendChild(document.createTextNode(employees[i].age));
//         let salaryCell = newRow.insertCell();
//         salaryCell.appendChild(document.createTextNode(employees[i].salary));
//         let deleteLink = document.createElement("a");
//         deleteLink.href = "#";
//         deleteLink.appendChild(document.createTextNode("Удалить"));
//         deleteLink.onclick = function() {
//             employeesTableBody.removeChild(this.parentNode.parentNode);
//         };
//         let deleteCell = newRow.insertCell();
//         deleteCell.appendChild(deleteLink);
//     }


//484(9)
// let employees = [
// 	{name: 'employee1', age: 30, salary: 400},
// 	{name: 'employee2', age: 31, salary: 500},
// 	{name: 'employee3', age: 32, salary: 600},
// ];
// let employeesTable = document.getElementById("employeesTable");
// 		let employeesTableBody = employeesTable.getElementsByTagName("tbody")[0];
// 		function addNewEmployee() {
// 			let newName = document.getElementById("newNameInput").value;
// 			let newAge = document.getElementById("newAgeInput").value;
// 			let newSalary = document.getElementById("newSalaryInput").value;
// 			let newRow = employeesTableBody.insertRow();
// 			let nameCell = newRow.insertCell();
// 			nameCell.appendChild(document.createTextNode(newName));
// 			let ageCell = newRow.insertCell();
// 			ageCell.appendChild(document.createTextNode(newAge));
// 			let salaryCell = newRow.insertCell();
// 			salaryCell.appendChild(document.createTextNode(newSalary));
// 			let deleteLink = document.createElement("a");
// 			deleteLink.href = "#";
// 			deleteLink.appendChild(document.createTextNode("Удалить"));
// 			deleteLink.onclick = function() {
// 				employeesTableBody.removeChild(this.parentNode.parentNode);
// 			};
// 			let deleteCell = newRow.insertCell();
// 			deleteCell.appendChild(deleteLink);
// 			document.getElementById("newNameInput").value = "";
// 			document.getElementById("newAgeInput").value = "";
// 			document.getElementById("newSalaryInput").value = "";
// 		}
// 		document.getElementById("addNewEmployeeButton").onclick = addNewEmployee;
// 		let cells = employeesTable.getElementsByTagName("td");
// 		for (let i = 0; i < cells.length; i++) {
// 			cells[i].contentEditable = true;
// 			cells[i].onblur = function() {
// 				this.style.backgroundColor = "#ffffff";
// 			};
// 			cells[i].onfocus = function() {
// 				this.style.backgroundColor = "#f2f2f2";
// 			};
// 		}


//484(10)
// let employees = [
//     {name: 'employee1', age: 30, salary: 400},
//     {name: 'employee2', age: 31, salary: 500},
//     {name: 'employee3', age: 32, salary: 600},
// ];
// let employeesList = document.getElementById('employees');
// for (let i = 0; i < employees.length; i++) {
//     let employee = employees[i];
//     let employeeItem = document.createElement('li');
//     employeeItem.textContent = `Имя: ${employee.name}, Возраст: ${employee.age}, Зарплата: ${employee.salary}`;
//     employeesList.appendChild(employeeItem);
// }

//484(11)
// let employees = [
//     {name: 'employee1', age: 30, salary: 400},
//     {name: 'employee2', age: 31, salary: 500},
//     {name: 'employee3', age: 32, salary: 600},
// ];
// let employeesList = document.getElementById('employees');
// function editName(span) {
//     let input = document.createElement('input');
//     input.type = 'text';
//     input.value = span.textContent.split(': ')[1];
//     span.parentNode.replaceChild(input, span);
//     input.focus();
//     input.onblur = function() {
//         let value = input.value;
//         span.textContent = `Имя: ${value}`;
//         span.onclick = function() {editName(span)};
//     };
// }
// function editAge(span) {
//     let input = document.createElement('input');
//     input.type = 'text';
//     input.value = span.textContent.split(': ')[1];
//     span.parentNode.replaceChild(input, span);
//     input.focus();
//     input.onblur = function() {
//         let value = input.value;
//         span.textContent = `Возраст: ${value}`;
//         span.onclick = function() {editAge(span)};
//     };
// }
// function editSalary(span) {
//     let input = document.createElement('input');
//     input.type = 'text';
//     input.value = span.textContent.split(': ')[1];
//     span.parentNode.replaceChild(input, span);
//     input.focus();
//     input.onblur = function() {
//         let value = input.value;
//         span.textContent = `Зарплата: ${value}`;
//         span.onclick = function() {editSalary(span)};
//     };
// }

//484(12)
// let employees = [
//     {name: 'employee1', age: 30, salary: 400},
//     {name: 'employee2', age: 31, salary: 500},
//     {name: 'employee3', age: 32, salary: 600},
// ];
// let employeesList = document.getElementById('employees');
// function editName(span) {
//     let input = document.createElement('input');
//     input.type = 'text';
//     input.value = span.textContent.split(': ')[1];
//     span.parentNode.replaceChild(input, span);
//     input.focus();
//     input.onblur = function() {
//         let value = input.value;
//         span.textContent = `Имя: ${value}`;
//         span.onclick = function() {editName(span)};
//     };
// }
// function editAge(span) {
//     let input = document.createElement('input');
//     input.type = 'text';
//     input.value = span.textContent.split(': ')[1];
//     span.parentNode.replaceChild(input, span);
//     input.focus();
//     input.onblur = function() {
//         let value = input.value;
//         span.textContent = `Возраст: ${value}`;
//         span.onclick = function() {editAge(span)};
//     };
// }
// function editSalary(span) {
//     let input = document.createElement('input');
//     input.type = 'text';
//     input.value = span.textContent.split(': ')[1];
//     span.parentNode.replaceChild(input, span);
//     input.focus();
//     input.onblur = function() {
//         let value = input.value;
//         span.textContent = `Зарплата: ${value}`;
//         span.onclick = function() {editSalary(span)};
//     };
// }
// function deleteEmployee(link) {
//     let li = link.parentNode;
//     employeesList.removeChild(li);
// }

//484(13)
// let employees = [
//     {name: 'employee1', age: 30, salary: 400},
//     {name: 'employee2', age: 31, salary: 500},
//     {name: 'employee3', age: 32, salary: 600},
// ];
// let employeesList = document.getElementById('employees');
// let addEmployeeForm = document.getElementById('add-employee-form');
// function editName(span) {
//     let input = document.createElement('input');
//     input.type = 'text';
//     input.value = span.textContent.split(': ')[1];
//     span.parentNode.replaceChild(input, span);
//     input.focus();
//     input.onblur = function() {
//         let value = input.value;
//         span.textContent = `Имя: ${value}`;
//         span.onclick = function() {editName(span)};
//     };
// }
// function editAge(span) {
//     let input = document.createElement('input');
//     input.type = 'text';
//     input.value = span.textContent.split(': ')[1];
//     span.parentNode.replaceChild(input, span);
//     input.focus();
//     input.onblur = function() {
//         let value = input.value;
//         span.textContent = `Возраст: ${value}`;
//         span.onclick = function() {editAge(span)};
//     };
// }
// function editSalary(span) {
//     let input = document.createElement('input');
//     input.type = 'text';
//     input.value = span.textContent.split(': ')[1];
//     span.parentNode.replaceChild(input, span);
//     input.focus();
//     input.onblur = function() {
//         let value = input.value;
//         span.textContent = `Зарплата: ${value}`;
//         span.onclick = function() {editSalary(span)};
//     };
// }