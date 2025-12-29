export const retriveLocalStoradge =<T>  (key:string) =>{
    const parse =  localStorage.getItem(key) || ''
    if(!parse){
        return {} as T
    }
    const parseObject =  JSON.parse(parse)
    return parseObject as T
}