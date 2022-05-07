class EventCenter{
    constructor(){
        this.handlers = {};
    }

    addEventListener(type,handler){
        if(!this.handlers[type]){
            this.handlers[type] = []
        }
        this.handlers[type].push(handler);
    }

    dispacthEvent(type,params){
        if(this.handlers[type]){
            return new Error('事件未注册')
        }else{
            this.handlers[type].forEach(handler =>{handler(...params)})
        }
    }

    removeEventlistener(type,handler){
        if(!this.handlers[type]){
            return new Error('事件未注册')
        }else if(!handler){
            delete this.handlers[type];
        }else{
            const index = this.handlers[type].findIndex(el => el ===handler)
            if(index === -1){
                return new Error('handler不存在');
            }else{
                this.handlers[type].splice(index,1);
            }
            
            if(this.handlers[type].length === 0){
                delete this.handlers[type];
            }
        }
    }
}