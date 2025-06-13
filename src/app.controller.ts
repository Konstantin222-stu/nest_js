import { Controller, Get } from "@nestjs/common";

@Controller('/api')
export class AppController {

    @Get('/users')
    getUsers(){
        return [
            { id: 1, name: 'John Doe' },
            { id: 2, name: 'Jane Doe' }
        ];
    }
}