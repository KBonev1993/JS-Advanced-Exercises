function objectFactory(lib, orders){
    let result = [];
    

    for (let order of orders) {
        let object = {};
        let template = order.template
        
        for (let prop in template) {
            object[prop] = template[prop];            
        }

        const parts = order.parts;
        for (let part of parts) {
            object[part] = lib[part];
            
        }

        result.push(object);
    }
    return result;
}
