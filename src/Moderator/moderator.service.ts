import { Injectable } from "@nestjs/common";
import { InjectRepository } from "@nestjs/typeorm";
import { Repository } from "typeorm";
import { ModeratorDTO } from "./DTOs/moderator.dto";
import { SecureModeratorDTO } from "../Moderator/DTOs/moderator.secure.dto"
import { ModeratorEntity } from "./moderator.entity";
import { EditModeratorDTO } from "./DTOs/editModerator.dto";


@Injectable()
export class ModeratorService {

    constructor(
        @InjectRepository(ModeratorEntity)
        private moderatorRepo: Repository<ModeratorEntity>
    ){}


    getIndex(): any{
        return "This path will be the Moderator panel";
    }

    async getAllSecureData(): Promise<SecureModeratorDTO[]> {
        const moderators: ModeratorEntity[] = await this.moderatorRepo.find();
        const secureModerators: SecureModeratorDTO[] = moderators.map(
            ({ Username, Firstname, Lastname, DOB, Phone, Email }) => ({
              Username,
              Firstname,
              Lastname,
              DOB,
              Phone,
              Email,
            }),
          );
        return secureModerators;
    }

    getAll(): any{
        return this.moderatorRepo.find();
    }

    searchById(id):any{
        var ext = this.moderatorRepo.findOneBy({ Id:id });
        if(ext){
            return ext;
        }
        else
            return "No matches found for this ID in database!"; // Need to implement
    }

    readTurmsAndConditions(read):any{
        if(read == true){
            return "Read turms and conditions! Can allow register procedure!";
        }
        else
            return "Please read turms and conditions to continue!";
    }

    searchByUsername(username): any{
        var ext = this.moderatorRepo.findOneBy({ Username:username});
        if(ext){
            return ext;
        }
        else
            return "No matches found for this username in database!";

    }

    async login(username, password): Promise<string>{
        const moderator = await this.moderatorRepo.findOne({ where: { Username: username, Password: password } });
        if (!moderator) {
            return "Unsuccessfull login attempt";
        }
          return 'Login successful';
    }


    async register(moderatorDTO: ModeratorDTO): Promise<any> {
        const moderatorObject = new ModeratorEntity();
        moderatorObject.Firstname = moderatorDTO.Firstname;
        moderatorObject.Lastname = moderatorDTO.Lastname;
        moderatorObject.Email = moderatorDTO.Email;
        moderatorObject.DOB = moderatorDTO.DOB;
        moderatorObject.Phone = moderatorDTO.Phone;
        moderatorObject.Username = moderatorDTO.Username;
        moderatorObject.Password = moderatorDTO.Password;
        moderatorObject.Blocked = moderatorDTO.Blocked;
    
        const existingModerator = await this.moderatorRepo.findOneBy({ Username: moderatorObject.Username });
    
        if (existingModerator) {
            return "Username already exists, please choose a different username";
        } else {
            return this.moderatorRepo.save(moderatorObject);
        }
    }

    editModerator(editModerator: EditModeratorDTO, id): any{
        return this.moderatorRepo.update(id, editModerator);
    }

    deleteModeratorById(id): any{
        return this.moderatorRepo.delete(id);
    }

    // getIndex():any { 
    //     return "Hello World";
    // }

    // getByName(name:object):any {
    //     return "Moderator name is " + name + " get by URL input!";
    // }

    // getByAll(obj):any {
    //     return "Moderator name is " + obj.name + " and ID: "+ obj.id + " get by URL input!";
    // }

    // registerUrl(obj):any{
    //     return "Moderator name is " + obj.name + " and ID: "+ obj.id + " and username: "+ obj.username + " and password: "+ obj.password + " register!";
    // }

    // loginUrl(obj): any{
    //     return "Moderator username is " + obj.username + " and password: "+ obj.password + " login!";
    // }

    // regesterByBody(obj): any{
    //     return "Moderator name is " + obj.name + " and ID: "+ obj.id + " and username: "+ obj.username + " and password: "+ obj.password + " added!";
    // }

    // searchModeratorByNameBody(obj): any{
    //     return "Search by Moderator by name: "+ obj.name;
    // }

    // searchById(id):any{
    //     // return "Search by Moderator by Id: "+ id;
    //     return this.moderatorRepo.findOneBy({ Id:id });
        
    // }

    // readTurmsAndConditions(read):any{
    //     if(read == true){
    //         return "Read turms and conditions! Can allow register procedure!";
    //     }
    //     else
    //         return "Please read turms and conditions to continue!";
    // }

    // register(moderatorDTO: ModeratorDTO):any{
    //     const moderatorObject = new ModeratorEntity()
    //     moderatorObject.Firstname = moderatorDTO.Firstname;
    //     moderatorObject.Lastname = moderatorDTO.Lastname;
    //     moderatorObject.Email = moderatorDTO.Email;
    //     moderatorObject.DOB = moderatorDTO.DOB;
    //     moderatorObject.Phone = moderatorDTO.Phone;
    //     moderatorObject.Username = moderatorDTO.Username;
    //     moderatorObject.Password = moderatorDTO.Password
    //     moderatorObject.Blocked = moderatorDTO.Blocked;

    //     var ext =  this.moderatorRepo.findOneBy({ Username: moderatorObject.Username});
    //     if(ext){
    //         return "Username already exists, Change username!";
    //     }
    //     else
    //         return this.moderatorRepo.save(moderatorObject);
    // }

    //Work on natural api

    //Index: Return simple path to control panel
    



    


}


