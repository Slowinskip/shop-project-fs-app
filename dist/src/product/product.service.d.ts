import { PrismaService } from 'src/prisma/prisma.service';
import { Product } from './product.interfece';
export declare class ProductService {
    private prismaService;
    constructor(prismaService: PrismaService);
    getAll(): Promise<Product[]>;
    getById(id: Product['id']): Promise<Product | null>;
}
