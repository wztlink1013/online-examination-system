package com.cn.shixun.service.impl;

import com.alibaba.fastjson.JSONObject;
import com.cn.shixun.common.ClassRequireId;
import com.cn.shixun.emtity.Class;
import com.cn.shixun.mapper.ClassMapper;
import com.cn.shixun.service.ClassService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class ClassServiceImpl implements ClassService {

    @Autowired
    ClassMapper classMapper;
    @Override
    public String loadClass(ClassRequireId classRequireId) {
        List<Class> classList = classMapper.loadClass(classRequireId);
        System.out.println("========================================");
        System.out.println(JSONObject.toJSONString(classList));
        return JSONObject.toJSONString(classList);
    }
}
