package com.rongke.website.controller;

import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.RestController;

/**
 * @author anchao
 * @version 创建时间：2016年7月8日 下午1:26:08 类说明
 */

@RestController
public class TestController {
	
	@RequestMapping(value = "/hello", method = RequestMethod.GET)
	public String test() throws Exception {
		return "hello wechat";
	}
	
	
}
 