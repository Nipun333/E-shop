import { Injectable } from "@nestjs/common";
import { InjectRepository } from "@nestjs/typeorm";
import { Repository } from "typeorm";
import { ModeratorDTO } from "./moderator.dto";
import { ModeratorEntity } from "./moderator.entity";


@Injectable()
export class ModeratorService {

    constructor(
        @InjectRepository(ModeratorEntity)
        private moderatorRepo: Repository<ModeratorEntity>
    ){}

    defaultPath(): any{
        return "This is the default path for ./moderation module";
    }

    getIndex():any { 
        return "Hello World";
    }

    getByName(name:object):any {
        return "Moderator name is " + name + " get by URL input!";
    }

    getByAll(obj):any {
        return "Moderator name is " + obj.name + " and ID: "+ obj.id + " get by URL input!";
    }

    registerUrl(obj):any{
        return "Moderator name is " + obj.name + " and ID: "+ obj.id + " and username: "+ obj.username + " and password: "+ obj.password + " register!";
    }

    loginUrl(obj): any{
        return "Moderator username is " + obj.username + " and password: "+ obj.password + " login!";
    }

    regesterByBody(obj): any{
        return "Moderator name is " + obj.name + " and ID: "+ obj.id + " and username: "+ obj.username + " and password: "+ obj.password + " added!";
    }

    // searchModeratorByNameBody(obj): any{
    //     return "Search by Moderator by name: "+ obj.name;
    // }

    searchById(id):any{
        // return "Search by Moderator by Id: "+ id;
        return this.moderatorRepo.findOneBy({ Id:id });
        
    }

    readTurmsAndConditions(read):any{
        if(read == true){
            return "Read turms and conditions! Can allow register procedure!";
        }
        else
            return "Please read turms and conditions to continue!";
    }

    register(moderatorDTO: ModeratorDTO):any{
        const moderatorObject = new ModeratorEntity()
        moderatorObject.Firstname = moderatorDTO.Firstname;
        moderatorObject.Lastname = moderatorDTO.Lastname;
        moderatorObject.Email = moderatorDTO.Email;
        moderatorObject.DOB = moderatorDTO.DOB;
        moderatorObject.Phone = moderatorDTO.Phone;
        moderatorObject.Username = moderatorDTO.Username;
        moderatorObject.Password = moderatorDTO.Password
        moderatorObject.Blocked = moderatorDTO.Blocked;

        var ext =  this.moderatorRepo.findOneBy({ Username: moderatorObject.Username});
        if(ext){
            return "Username already exists";
        }
        else
            return this.moderatorRepo.save(moderatorObject);
    }

    //Work on natural api


}