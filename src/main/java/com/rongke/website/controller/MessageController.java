package com.rongke.website.controller;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.PageRequest;
import org.springframework.data.domain.Sort;
import org.springframework.transaction.annotation.Transactional;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.RestController;

import com.rongke.website.data.entity.Message;
import com.rongke.website.data.repository.MessageRepository;

/**
 * @author anchao
 * @version 创建时间：2016年7月8日 下午1:26:08 类说明
 */

@RestController
@RequestMapping("/message")
public class MessageController {
	@Autowired
	MessageRepository messageRepository;
	
	@CrossOrigin
	@RequestMapping(value = "/list", method = RequestMethod.GET)
	public Page<Message> listAllMessages(int page, int limit) throws Exception {
		Sort sort = new Sort(Sort.Direction.DESC,"createTime"); //创建时间降序排序
		return messageRepository.findAll(new PageRequest(page-1, limit, sort));
	}
	
	@RequestMapping(value = "/save", method = RequestMethod.POST)
	@Transactional
	@CrossOrigin
	public Boolean saveMessages(@RequestBody Message message) {
		try {
			messageRepository.save(message);
			return true;
		} catch (Exception e) {
			return false;
		}
	}
	
	@RequestMapping(value = "/delete", method = RequestMethod.DELETE)
	@Transactional
	@CrossOrigin
	public Boolean delete(String id) {
		try {
			messageRepository.delete(id);
			return true;
		} catch (Exception e) {
			e.printStackTrace();
			return false;
		}
	}
	
	
}
 