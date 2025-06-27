import { pool } from "./db-config";

///USUARIOS

///todos usuarios
export async function getUsers(){
    try {
        const result = await pool.query("SELECT * FROM users");
       if(result.rowCount>0){
            return result.rows
        }else{
            return null
        }

    } catch (error) {
        console.log(error,"Erro ao obter usuarios")
        return null

    }
}
///usuario especifico por email
export async function getUser(email){
    try {
        const result = await pool.query("SELECT * FROM users WHERE email = $1",[email]);
       if(result.rowCount>0){
            return result.rows
        }else{
            return null
        }

    } catch (error) {
        console.log(error,"Erro ao obter usuarios")
        return null

    }
}
/// perfil de usuario especifico por id
export async function getUserProfile(user_id){
    try {
        const result = await pool.query("SELECT * FROM user_profiles WHERE user_id = $1",[user_id]);
       if(result.rowCount>0){
            return result.rows
        }else{
            return null
        }

    } catch (error) {
        console.log(error,"Erro ao obter usuarios")
        return null

    }
}

///OUTRAS FUNÇÕES.

export async function getEstimativaCustos(){
    try {
        const result = await pool.query("SELECT * FROM estimativa_custos_execucao");
       if(result.rowCount>0){
            return result.rows
        }else{
            return null
        }

    } catch (error) {
        console.log(error,"Erro ao obter usuarios")
        return null

    }
}

