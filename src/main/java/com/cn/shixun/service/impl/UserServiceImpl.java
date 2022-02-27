package com.cn.shixun.service.impl;

import com.alibaba.fastjson.JSONObject;
import com.cn.shixun.common.Message;
import com.cn.shixun.emtity.User;
import com.cn.shixun.mapper.UserMapper;
import com.cn.shixun.service.UserService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

@Service
public class UserServiceImpl implements UserService {
    @Autowired
    UserMapper userMapper;
    @Override
    public String login(User user) {

        /*
        根据用户名和密码查询全体用户，返回一个user对象
        判断返回user对象是不是null，如果是null则是登录失败反之登录成功
         */
        User u = userMapper.login(user);
        Message msg = new Message("999", "登录失败，请重新登录！");
        if (u != null) {
            msg = new Message("200", "登录成功");
        }

        // 将响应消息转成json
        return JSONObject.toJSONString(msg);
    }
}
