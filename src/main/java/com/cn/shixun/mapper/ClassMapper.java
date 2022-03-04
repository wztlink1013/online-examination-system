package com.cn.shixun.mapper;

import com.cn.shixun.common.ClassRequireId;
import com.cn.shixun.emtity.Class;
import org.apache.ibatis.annotations.Mapper;

import java.util.List;

@Mapper
public interface ClassMapper {
    int deleteByPrimaryKey(Integer id);

    int insert(Class record);

    int insertSelective(Class record);

    Class selectByPrimaryKey(Integer id);

    int updateByPrimaryKeySelective(Class record);

    int updateByPrimaryKey(Class record);
    List<Class> loadClass(ClassRequireId classRequireId);
}