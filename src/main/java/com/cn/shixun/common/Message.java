package com.cn.shixun.common;

public class Message {

    public  Message(String code, String msg){
        this.code = code;
        this.msg = msg;
    }
    private String code;  /*返回的编码*/
    private String msg;  /*返回的消息*/

    public  void setInfo(String code,String msg){
        this.code = code;
        this.msg = msg;
    }

    public String getCode() {
        return code;
    }

    public void setCode(String code) {
        this.code = code;
    }

    public String getMsg() {
        return msg;
    }

    public void setMsg(String msg) {
        this.msg = msg;
    }
}
