

	// // Pasos para crear un nodo a nuestro documento
	// // 1. Crear el elemento
	// var elemento = document.createElement('h2');
	// // 2. Crear un nodo de texto
	// var contenido = document.createTextNode('Este es nuestro titular');
	// // 3. Añadir el nodo de texto al elemento
	// elemento.appendChild(contenido);
	// // 4. Agregar atributos al elemento
	// elemento.setAttribute('align','center');
	// // 5. Agregar el elemento al document
	// document.getElementById('subtitulo').appendChild(elemento);



	// <input type="text" name="userName" placeholder="your user name">

	// <input type ="password" name="psw" placeholder="your password">

	// <input type="submit" value="Submit">


	// //1. se identifica el nodo padre
 //    var padreLogin = document.getElementById('login');
 //    // .parentNode
 //    // var padreLogin = document.getElementsByTagName('form')[0].parentNode
 //    // 2. se crea el nodo input user name
 //    var inputUserName = document.createElement('input');
 //    // 3. añadir el nodo texto al nodo elemento
 //    padreLogin.appendChild(inputUserName);
 //    // 4. Agregar el elemento al document
 //    document.getElementById('login').appendChild(inputUserName);


    var padreLogin = document.getElementById('login');

// -+-+-+-++-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+

    var inputUserName = document.createElement('input');
    inputUserName.setAttribute("class", "input1");
    inputUserName.type = 'text';
    inputUserName.name = 'User';
    inputUserName.placeholder = 'Your user';
    var input1 = padreLogin.appendChild(inputUserName);
    // var input1 = inputJump1.appendChild('br')
    document.getElementById('login').appendChild(input1);


// -+-+-+-++-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+
    var inputPsw = document.createElement('input');
    inputPsw.setAttribute("class", "input2");
    inputPsw.type = 'text';
    inputPsw.name = 'Password';
    inputPsw.placeholder = 'Your password';
    var input2 = padreLogin.appendChild(inputPsw);
    // var input2 = inputJump2.appendChild('br')
    document.getElementById('login').appendChild(input2);

// -+-+-+-++-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+
    var inputSubmit = document.createElement('button');
    var labels = document.createTextNode("Submit")
    var inputLabels = inputSubmit.appendChild(labels)
    inputLabels.type = 'submit';
    inputLabels.value = 'Submit';
    //var buton1 = padreLogin.appendChild(inputLabels);
    document.getElementById('login').appendChild(inputLabels);






