package com.rongke.website.controller;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.transaction.annotation.Transactional;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.RestController;

import com.rongke.website.data.entity.Video;
import com.rongke.website.data.repository.VideoRepository;

/**
 * @author anchao
 * @version 创建时间：2016年7月8日 下午1:26:08 类说明
 */

@RestController
@RequestMapping("/video")
public class ViedoController {
	@Autowired
	VideoRepository repository;
	
	@CrossOrigin
	@RequestMapping(value = "/list", method = RequestMethod.GET)
	public List<Video> listAllVideo() throws Exception {
		return repository.findAll();
	}
	
	@CrossOrigin
	@RequestMapping(value = "/save", method = RequestMethod.POST)
	@Transactional
	public Boolean saveVideo(Video video) {
		try {
			repository.save(video);
			return true;
		} catch (Exception e) {
			e.printStackTrace();
			return false;
		}
	}
	
	@CrossOrigin
	@RequestMapping(value = "/delete", method = RequestMethod.DELETE)
	@Transactional
	public Boolean deleteVideo(String id) {
		try {
			repository.delete(id);;
			return true;
		} catch (Exception e) {
			e.printStackTrace();
			return false;
		}
	}
	
	
}
 