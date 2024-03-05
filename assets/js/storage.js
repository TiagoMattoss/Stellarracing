export default function save(name, item){
    localStorage.setItem(name, item);
}

export function getItem(name){
    return localStorage.getItem(name);  
}


