//Importa JSON de datos conocidos (Funcionan como Diccionario)
import userJSON from './Usuarios.json';
import denunciasJSON from './Denuncias.json';

//Retorna una lista que asocia denuncia a usuario
export function ListDenunciaUsuario() {
    //console.log("Generating list of User<->Denuncia");
    //console.log("Dataset del usuario es: ",userJSON);
    //console.log("Dataset de las denuncias es: ",denunciasJSON);
    let KeysU= Object.keys(userJSON);
    let KeysD= Object.keys(denunciasJSON);
    //console.log("Generando arreglo de objetos tipo obj={id,nombre,tipo,clase,direccion}");
    let arrDU= [];
    KeysD.forEach((key)=>{
        let dataD= denunciasJSON[key];
        //console.log("%s: %s",key,JSON.stringify(dataD));
        let userID= dataD.UserID;
        //console.log("Denuncia %s fue realizada por User %d",key,userID);
        KeysU.forEach((id)=>{
            //console.log("Comparing user ID %s with the ID %s of denuncia %d",id,userID,key);
            if(parseInt(id)===parseInt(userID)){
                //console.log("Iguales");
                let dataU= userJSON[id];
                let obj={
                    "id": id,
                    "nombre": dataU.FullName,
                    "tipo": dataD.tipo,
                    "clase": dataD.clase,
                    "direccion": dataD.direccion
                }
                arrDU.push(obj);
            }
        });
    });
    //console.log("Listado de Denuncias por Usuario es",arrDU);
    return arrDU;
}

export function EstadisticasUsuariosTipo() {
    //console.log("Obteniendo estadisticas de los usuarios por Tipo");
    let KeysU= Object.keys(userJSON);
    let KeysD= Object.keys(denunciasJSON);
    let DenunciasUsuarioPorTipo= {};
    KeysU.forEach((id)=>{
        let denunciasPorTipo= {};
        //console.log("Generando listado de denuncias por tipo para usuario %s",id);
        KeysD.forEach((key)=>{
            let dataD= denunciasJSON[key];
            let denunciaUserID= dataD.UserID;
            if(parseInt(id)===parseInt(denunciaUserID)){
                let tipoDenuncia= dataD.tipo;
                if(!(tipoDenuncia in Object.keys(denunciasPorTipo))){
                    denunciasPorTipo[tipoDenuncia]= [key];
                }else{
                    denunciasPorTipo[tipoDenuncia].push(key);
                }
            }
        });
        DenunciasUsuarioPorTipo[id]= denunciasPorTipo;
        //console.log("Listado tiene valor: ",denunciasPorTipo);
    });
    //console.log("Finalmente el listado toma la forma: ",DenunciasUsuarioPorTipo);
    return DenunciasUsuarioPorTipo;
}

export function EstadisticasUsuariosClase() {
    //console.log("Obteniendo estadisticas de los usuarios por Clase");
    let KeysD= Object.keys(userJSON);
    let KeysU= Object.keys(denunciasJSON);
    let DenunciasUsuarioPorClase= {};
    KeysU.forEach((id)=>{
        let denunciasPorClase= {};
        //console.log("Generando listado de denuncias por tipo para usuario %s",id);
        KeysD.forEach((key)=>{
            let dataD= denunciasJSON[key];
            let denunciaUserID= dataD.UserID;
            if(parseInt(id)===parseInt(denunciaUserID)){
                let claseDenuncia= dataD.clase;
                if(!(claseDenuncia in Object.keys(denunciasPorClase))){
                    denunciasPorClase[claseDenuncia]= [key];
                }else{
                    denunciasPorClase[claseDenuncia].push(key);
                }
            }
        });
        DenunciasUsuarioPorClase[id]= denunciasPorClase;
        //console.log("Listado tiene valor: ",denunciasPorClase);
    });
    //console.log("Finalmente el listado toma la forma: ",DenunciasUsuarioPorClase);
    return DenunciasUsuarioPorClase;
}

//Genera Estadisticas de Datos para cada usuario
export function EstadisticasDelUsuario(){
    let Denuncias= ListDenunciaUsuario();
    let DporTipo= EstadisticasUsuariosTipo();
    let DporClase= EstadisticasUsuariosClase();
    let KeysU= Object.keys(userJSON);
    let Estadisticas= {};
    KeysU.forEach((id)=>{
        //console.log("ID Usuario es %s",id);
        let name= userJSON[id].FullName;
        //Cuenta las cantidad de denuncias del usuario
        let cantidadDenuncias= 0;
        Object.keys(Denuncias).forEach((k)=>{
            let data= Denuncias[k];
            //console.log("key: ",k);
            //console.log("data: ",data);
            //console.log("Cantidad actual es ",cantidadDenuncias);
            if(parseInt(id)===parseInt(data.id)){
                
                cantidadDenuncias++;
            }
            //console.log("Cantidad cambia a ",cantidadDenuncias);
        });
        //console.log("Finalmente cantidad es ",cantidadDenuncias);
        //Ve cuantos tipos de Denuncias hay por tipo y cual es la más repetida de ellos
        let userTipos= DporTipo[id];
        let T= [];
        let tipos= Object.keys(userTipos);
        tipos.forEach((t)=>{
            let lenT= userTipos[t].length;
            T.push([t,lenT]);
        });
        let MaxT;
        if (T.length>0){
            MaxT= T.reduce((max,current)=>{
                return current[1]> max[1] ? current:max;
            },T[0]);
        }else{
            MaxT= ["None",0];
        }
        //Ve cuantos tipos de Denuncias hay por clase y cual es la más repetida de ellos
        let userClase= DporClase[id];
        let C= [];
        let clases= Object.keys(userClase);
        clases.forEach((c)=>{
            let lenC= userClase[c].length;
            C.push([c,lenC]);
        });
        let MaxC;
        if (C.length>0){
            MaxC= C.reduce((max,current)=>{
                return current[1]> max[1] ? current:max;
            },C[0]);
        }else{
            MaxC= ["None",0];
        }
        //Objeto que almacena sus estadisticas
        let obj={
            "Nombre": name,
            "cantidadDenuncias": cantidadDenuncias,
            "DenunciasPorTipo": T,
            "MayorTipoDeDenuncia": MaxT,
            "DenunciasPorClase": C,
            "MayorClaseDeDenuncia": MaxC
          }
        //Guarda las estadisticas del usuario en especifico en el diccionario
        //console.log("Las estadisticas de este usuario son: ",obj)
        Estadisticas[id]= obj;
        //console.log("Estadistica se ven como: ",Estadisticas);
        //console.log("");
    });
    return Estadisticas;
}

export function EstadisticasPorDenuncia(){
    let KeysD= Object.keys(denunciasJSON);
    let EstadisticasDenuncia= {};
    KeysD.forEach((key)=>{
        let data= denunciasJSON[key];
        let name= userJSON[data.UserID].FullName;
        let obj={
            "Publicador": name,
            "Tipo": data.tipo,
            "Clase": data.clase,
            "Direccion": data.direccion,
            "Estado": data.Estado
        }
        EstadisticasDenuncia[key]= obj;
    });
    return EstadisticasDenuncia;
}