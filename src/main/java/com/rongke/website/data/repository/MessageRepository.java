package com.rongke.website.data.repository;

import java.util.List;

import org.springframework.data.domain.PageRequest;
import org.springframework.data.repository.PagingAndSortingRepository;

import com.rongke.website.data.entity.Message;

/**
 * 
 * 
 *
 */
public interface MessageRepository extends PagingAndSortingRepository<Message, String> {

	List<Message> findByOrderByCreateTimeDesc(PageRequest pageRequest);

	

}
