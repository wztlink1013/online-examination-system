package com.cn.shixun.service.impl;

import com.alibaba.fastjson.JSONObject;
import com.cn.shixun.common.MajorId;
import com.cn.shixun.emtity.Major;
import com.cn.shixun.mapper.MajorMapper;
import com.cn.shixun.service.MajorService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class MajorServiceImpl implements MajorService {
    @Autowired
    MajorMapper majorMapper;
    @Override
    public String loadMajor(MajorId majorId) {
        List<Major> majorList = majorMapper.loadMajor(majorId);
        return JSONObject.toJSONString(majorList);
    }
}
