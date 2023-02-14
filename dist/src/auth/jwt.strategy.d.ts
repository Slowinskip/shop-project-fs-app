import { ConfigService } from '@nestjs/config';
import { UsersModule } from 'src/users/users.module';
declare const JwtStrategy_base: new (...args: any[]) => any;
export declare class JwtStrategy extends JwtStrategy_base {
    private configService;
    private userService;
    constructor(configService: ConfigService, userService: UsersModule);
    validate(payload: any): Promise<any>;
}
export {};
