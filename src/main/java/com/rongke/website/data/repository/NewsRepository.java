package com.rongke.website.data.repository;

import java.util.List;

import org.springframework.data.jpa.repository.JpaRepository;

import com.rongke.website.data.entity.News;

/**
 * 
 * 
 *
 */
public interface NewsRepository extends JpaRepository<News, String> {

	List<News> findTop5ByTypeOrderByCreateTimeDesc(String string);

	List<News> findByOrderByCreateTimeDesc();

	

}
