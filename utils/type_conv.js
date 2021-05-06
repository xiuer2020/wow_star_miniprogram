class TypeConv{
    string(valu){
        if(valu.toString() === '[object Object]'){
           return JSON.stringify(valu);
        }else{
            return valu;
        }
    }
    json(valu){
        if(valu.toString() === '[object Object]'){
            return valu;
         }else{
             return JSON.parse(valu);
         }
    }
}
export default new TypeConv();