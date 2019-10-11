package com.rongke.website.controller;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.transaction.annotation.Transactional;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.RestController;

import com.rongke.website.data.entity.News;
import com.rongke.website.data.repository.NewsRepository;

/**
 * @author anchao
 * @version 创建时间：2016年7月8日 下午1:26:08 类说明
 */

@RestController
@RequestMapping("/news")
public class NewsController {
	@Autowired
	NewsRepository newsRepository;
	
	@CrossOrigin
	@RequestMapping(value = "/list", method = RequestMethod.GET)
	public List<News> listNews() throws Exception {
		return newsRepository.findByOrderByCreateTimeDesc();
	}
	
	@CrossOrigin
	@RequestMapping(value = "/list1", method = RequestMethod.GET)
	public List<News> listNews1() throws Exception {
		return newsRepository.findTop5ByTypeOrderByCreateTimeDesc("业界动态");
	}
	
	@CrossOrigin
	@RequestMapping(value = "/list2", method = RequestMethod.GET)
	public List<News> listNews2() throws Exception {
		return newsRepository.findTop5ByTypeOrderByCreateTimeDesc("公司新闻");
	}
	
	@CrossOrigin
	@RequestMapping(value = "/list3", method = RequestMethod.GET)
	public List<News> listNews3() throws Exception {
		return newsRepository.findTop5ByTypeOrderByCreateTimeDesc("产品动向");
	}
	
	@CrossOrigin
	@RequestMapping(value = "/list4", method = RequestMethod.GET)
	public List<News> listNews4() throws Exception {
		return newsRepository.findTop5ByTypeOrderByCreateTimeDesc("发布公告");
	}
	
	@CrossOrigin
	@RequestMapping(value = "/save", method = RequestMethod.POST)
	@Transactional
	public Boolean saveNews(News news) {
		try {
			newsRepository.save(news);
			return true;
		} catch (Exception e) {
			e.printStackTrace();
			return false;
		}
	}
	
	@CrossOrigin
	@RequestMapping(value = "/delete", method = RequestMethod.DELETE)
	@Transactional
	public Boolean deleteNews(String id) {
		try {
			newsRepository.delete(id);;
			return true;
		} catch (Exception e) {
			e.printStackTrace();
			return false;
		}
	}
	
	
}
 