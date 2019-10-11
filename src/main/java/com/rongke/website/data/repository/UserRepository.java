package com.rongke.website.data.repository;

import org.springframework.data.repository.PagingAndSortingRepository;

import com.rongke.website.data.entity.User;

/**
 * 
 * 
 *
 */
public interface UserRepository extends PagingAndSortingRepository<User, String> {

	User findByNameAndPassword(String name, String password);

	User findByName(String name);

	

}
