import { 
    // approveExportCart, 
    test 
} from "./db";

export const resolvers = {
    Query: {
        // approveExportCart: (_, id: number, exportApproved: boolean) => approveExportCart(id, exportApproved),
        approveExportCart: (_, id: string) => true,        
        hello: (_, hello: string) => test(),
    },
};