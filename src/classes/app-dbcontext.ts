import { DbContext, DbSet } from "dbcontext";
import Conversation from "../models/conversation.js";
import Options from "dbcontext/dist/models/options.js";

class AppDbContext extends DbContext {
	constructor(path?: string, options?: Options) {
		super(path, options);
	}

	conversations = new DbSet<Conversation>("conversations");
}

export default AppDbContext;
