package com.rongke.website.controller;

import javax.servlet.http.HttpServletRequest;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.PageRequest;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.transaction.annotation.Transactional;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.RestController;

import com.rongke.website.data.entity.User;
import com.rongke.website.data.repository.UserRepository;

/**
 * @author anchao
 * @version 创建时间：2016年7月8日 下午1:26:08 类说明
 */

@RestController
public class LoginController {
	@Autowired
	UserRepository userRepository;
	
	@RequestMapping(value = "/login", method = RequestMethod.POST)
	@CrossOrigin
	public ResponseEntity<String> login(@RequestBody User user, HttpServletRequest request) throws Exception {
		User currentUser = userRepository.findByNameAndPassword(user.getName(), user.getPassword());
		if(currentUser != null) {
			request.getSession().setAttribute("name", user.getName());
			return new ResponseEntity<String>("200", HttpStatus.OK);
		}else {
			currentUser = userRepository.findByName(user.getName());
			if(currentUser != null) {
				return new ResponseEntity<String>("501", HttpStatus.OK);
			}
		}
		return new ResponseEntity<String>("404", HttpStatus.OK);
	}
	
	@RequestMapping(value = "/user/list", method = RequestMethod.GET)
	@CrossOrigin
	public Page<User> list(int page, int limit) throws Exception {
		return userRepository.findAll(new PageRequest(page-1, limit));
	}
	
	@RequestMapping(value = "/user/save", method = RequestMethod.POST)
	@Transactional
	@CrossOrigin
	public Boolean save(User user) {
		try {
			userRepository.save(user);
			return true;
		} catch (Exception e) {
			e.printStackTrace();
			return false;
		}
	}
	
	@RequestMapping(value = "/user/delete", method = RequestMethod.DELETE)
	@Transactional
	@CrossOrigin
	public Boolean delete(String id) {
		try {
			userRepository.delete(id);
			return true;
		} catch (Exception e) {
			e.printStackTrace();
			return false;
		}
	}
	
}
 