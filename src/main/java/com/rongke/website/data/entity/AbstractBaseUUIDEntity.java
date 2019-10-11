package com.rongke.website.data.entity;

import java.util.Date;

import javax.persistence.Column;
import javax.persistence.GeneratedValue;
import javax.persistence.Id;
import javax.persistence.Inheritance;
import javax.persistence.InheritanceType;
import javax.persistence.MappedSuperclass;
import javax.persistence.Temporal;
import javax.persistence.TemporalType;

import org.hibernate.annotations.GenericGenerator;

/**  
 *  
 * @author tangyong
 * @date 2017年6月8日 下午4:20:13
 *
 * @类说明 
 */
@MappedSuperclass
@Inheritance(strategy = InheritanceType.TABLE_PER_CLASS)
public abstract class AbstractBaseUUIDEntity {

	@Id
	@GenericGenerator(name = "idGenerator", strategy = "org.hibernate.id.UUIDGenerator")
	@GeneratedValue(generator = "idGenerator")
	@Column(length = 36)
	protected String id;
	
	@Temporal(TemporalType.TIMESTAMP)
	@Column(columnDefinition = "DATETIME NOT NULL DEFAULT CURRENT_TIMESTAMP", updatable = false)
	@org.hibernate.annotations.CreationTimestamp
	protected Date createTime;
	
	@Column(columnDefinition = "DATETIME NOT NULL DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP")
	@org.hibernate.annotations.UpdateTimestamp
	@Temporal(TemporalType.TIMESTAMP)
	protected Date updateTime;

	public String getId() {
		return id;
	}

	public void setId(String id) {
		this.id = id;
	}

	public Date getCreateTime() {
		return createTime;
	}

	public void setCreateTime(Date createTime) {
		this.createTime = createTime;
	}

	public Date getUpdateTime() {
		return updateTime;
	}

	public void setUpdateTime(Date updateTime) {
		this.updateTime = updateTime;
	}
	
}

