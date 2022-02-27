package com.cn.shixun.mapper;

import com.cn.shixun.emtity.UserRole;

public interface UserRoleMapper {
    int insert(UserRole record);

    int insertSelective(UserRole record);
}