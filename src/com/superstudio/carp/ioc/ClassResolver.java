package com.superstudio.carp.ioc;

/**
 * Created by T440P on 2016-4-29.
 */
public class ClassResolver {
    private  IOCContainer container=null;
    public  ClassResolver(IOCContainer container){
        this.container=container;
    }

    public  <T> T Resolve(){
        return  (T)new Object();
    }
}
