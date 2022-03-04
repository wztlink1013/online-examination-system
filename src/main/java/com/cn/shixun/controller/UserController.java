package com.cn.shixun.controller;

import com.cn.shixun.emtity.User;
import com.cn.shixun.service.UserService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.ResponseBody;

@Controller
@RequestMapping("user")  /*?*/
public class UserController {
    @Autowired
    UserService userService;

    //希望controller返回json字符串，需要指定返回格式，@RequestMapping默认返回一个url，所以不可以直接用默认格式
    @RequestMapping(value = "login",produces = "application/json; charset=utf-8")//返回一个json字符串，字符串编码是utf-8
    @ResponseBody
    public String login(User user){
        System.out.println(user.getUsername()+","+user.getPassword());
        String res = userService.login(user);
        System.out.println(res);
        return res;
    }
    @RequestMapping(value = "loadFacultyMajorClass",produces = "application/json; charset=utf-8")//返回一个json字符串，字符串编码是utf-8
    @ResponseBody
    public String loadFacultyMajorClass(){
        String res = userService.loadFacultyMajorClass();
        System.out.println("-------------------------------------------------------------------------------");
        System.out.println(res);
        return res;
    }
}
