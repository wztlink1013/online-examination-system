package com.cn.shixun.service.impl;

import com.alibaba.fastjson.JSONObject;
import com.cn.shixun.common.Message;
import com.cn.shixun.emtity.User;
import com.cn.shixun.mapper.UserMapper;
import com.cn.shixun.service.UserService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class UserServiceImpl implements UserService {
    @Autowired
    UserMapper userMapper;

    @Override
    public String login(User user) {
        /*
        根据用户名和密码查询，可以查询全体数据，返回一个user对象
        判断返回的user对象是不是null，如果是则失败；如果不是null则登陆成功
        * */

       User u = userMapper.login(user);
       Message msg = new Message("999","登陆失败，请重新登录！");
       if(u!=null){
           msg = new Message("200","登陆成功");
       }

        return JSONObject.toJSONString(msg);//把返回对象转换成一个json
    }

    @Override
    public String loadFacultyMajorClass() {
        List<User> users = userMapper.loadFacultyMajorClass();
        return JSONObject.toJSONString(users);//返回json数组的字符串
    }
}
