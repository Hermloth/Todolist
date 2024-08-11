export function ToDo(title, description, status){
    this.title = title;
    this.description = description;
    this.status = status ? status : "No Status";

    this.setTitle = function(newTitle){
        title = newTitle;
    }
    this.setStatus = function(newStatus){
        status = newStatus;
    }
    this.setDescription = function(newDescription){
        description = newDescription;
    }

    this.getTitle = function(){return this.title;}
    this.getDescription = function(){return this.description;}
    this.getStatus = function(){return this.status;}
}