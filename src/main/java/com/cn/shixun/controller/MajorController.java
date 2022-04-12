package com.cn.shixun.controller;

import com.cn.shixun.common.MajorId;
import com.cn.shixun.emtity.Faculty;
import com.cn.shixun.service.MajorService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.ResponseBody;

@Controller
@RequestMapping("major")
public class MajorController {
    @Autowired
    MajorService majorService;

    @RequestMapping(value = "loadMajor",produces = "application/json; charset=utf-8")//返回一个json字符串，字符串编码是utf-8
    @ResponseBody
    public String loadMajor(MajorId majorId) {
        System.out.println("-----------------------------------");
        System.out.println(majorId.getId());
        String res = majorService.loadMajor(majorId);
        return res;
    }
}
