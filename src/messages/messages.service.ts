import { Injectable } from '@nestjs/common';
import { MessagesRepository } from './messages.repository';

@Injectable()
export class MessagesService {
	messagesRepo: MessagesRepository;

	constructor(msgRepo: MessagesRepository) {
		this.messagesRepo = msgRepo;
	}

	findOne(id: string) {
		return this.messagesRepo.findOne(id);
	}

	findAll() {
		return this.messagesRepo.findAll();
	}

	create(content: string) {
		this.messagesRepo.create(content);
	}
}
