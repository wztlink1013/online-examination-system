package com.cn.shixun.mapper;

import com.cn.shixun.emtity.Faculty;

public interface FacultyMapper {
    int deleteByPrimaryKey(Integer id);

    int insert(Faculty record);

    int insertSelective(Faculty record);

    Faculty selectByPrimaryKey(Integer id);

    int updateByPrimaryKeySelective(Faculty record);

    int updateByPrimaryKey(Faculty record);
}