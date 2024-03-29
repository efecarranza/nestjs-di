import { Controller, Get, Post, Body, Param, NotFoundException } from '@nestjs/common';
import { CreateMessageDto } from './dtos/create-message.dto';
import { MessagesService } from './messages.service';

@Controller('/messages')
export class MessagesController {
	messagesService: MessagesService;

	constructor(messagesService: MessagesService) {
		this.messagesService = messagesService;
	}

	@Get()
	list() {
		return this.messagesService.findAll();
	}

	@Post()
	create(@Body() body: CreateMessageDto) {
		return this.messagesService.create(body.content);
	}

	@Get('/:id')
	async get(@Param('id') id: string) {
		const message = await this.messagesService.findOne(id);

		if (!message) {
			throw new NotFoundException('Message not found.');
		}

		return message;
	}
}
