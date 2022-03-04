package com.cn.shixun.service;

import com.cn.shixun.emtity.User;

public interface UserService {
    public String login(User user);

    String loadFacultyMajorClass();
}
