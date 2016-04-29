package com.superstudio.carp.ioc;

/**
 * Created by T440P on 2016-4-29.
 */
public class IOCContainer {

    public    IOCContainer config(){
        return  this;
    }

    public    IOCContainer config(String filePath){
        return  this;
    }

    public  ClassResolver build(){
        return  new ClassResolver(this);
    }

    public  IOCContainer use(){
        return  this;
    }


}
