const nombre=document.getElementById("name")
const edad=document.getElementById("edad")
const telefono=document.getElementById("telefono")
const email=document.getElementById("email")
const pass=document.getElementById("usuario")
const parrafo=document.getElementById("warnings")

form.addEventListener("submit",e=>{
    e.preventDefault()
    let warnings=""
    let regexEmail=/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,4})+$/
    parrafo.innerHTML=""
    let entrar=false;
    if(nombre.value.length<6 && nombre.value.length>0 ){
        warnings+='El nombre es muy corto <br>'
        entrar=true
    }


    if(nombre.value.length>70){
        warnings+='El nombre es muy largo <br>'
        entrar=true
    }

    if(nombre.value.length==0){
        warnings+='Debes digitar un nombre <br>'
        entrar=true
    }

    if(edad.value<1){
        warnings+='Es necesario tener más de cero años para poder ingresar <br>'
        entrar=true
    }
    if(edad.value>124){
        warnings+='La personas más longeva solo ha vivido 122 años y 5 meses <br>'
        entrar=true
    }


  
     
    if(telefono.value<999999999){
        warnings+='El número telefonico digitado es muy pequeño <br>'
        entrar=true
    }
    if(telefono.value>=100000000000000){
        warnings+='¡Más despacio Velocista! Has digitado un número telefonico muy grande<br>'
        entrar=true
    }
 
    console.log(regexEmail.test(email.value))
    if(!regexEmail.test(email.value)){
        warnings+='El correo no es valido <br>'
        entrar=true;
    }
    if(pass.value.length<8){
    warnings+='La contraseña es muy pequeña <br>'
    entrar=true;
}
    if(pass.value.length>30){
        warnings+='La contraseña es muy grande <br>'
        entrar=true;
    }
 
if(entrar){
    parrafo.innerHTML=warnings
}else{
    parrafo.innerHTML="Enviado"

    if(nombre.value=="Miku Nakano" && edad.value=="18" && telefono.value=="0906914373641" && email.value=="n.miku0505@socomo.ne.jp" && usuario.value=="Miku_05_Sengoku"){
 
    location.href="pagina.html"
    }
   
   
   
 
   
}
 
}
)

