import { Controller, Get, Post, Body, Param } from '@nestjs/common';
import { CreateMessageDto } from './dtos/create-message.dto';

@Controller('/messages')
export class MessagesController {
	@Get()
	list() {
		return 'hi';
	}

	@Post()
	create(@Body() body: CreateMessageDto) {
		console.log(body);
	}

	@Get('/:id')
	get(@Param('id') id: string) {
		console.log(id);
	}
}
