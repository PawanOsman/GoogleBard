import { DbContext, DbSet } from "dbcontext";
import Conversation from "../models/conversation.js";

class AppDbContext extends DbContext {
	constructor(path?: string) {
		super(path);
	}

	conversations = new DbSet<Conversation>("conversations");
}

export default AppDbContext;
