interface Conversation {
	id: string;
	c: string; // conversationId
	r: string; // requestId
	rc: string; // responseId
	lastActive?: number;
}

export default Conversation;
