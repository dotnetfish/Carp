package com.superstudio.carp.command;

import java.util.List;

/**
 * Created by T440P on 2016-4-29.
 */
public abstract class Command {
    private String name;

    public String getName() {
        return name;
    }

    public void setName(String name) {
        this.name = name;
    }

    private  String code;


    public String getCode() {
        return code;
    }

    public void setCode(String code) {
        this.code = code;
    }

    private List<CommandArgument> args;

    public List<CommandArgument> getArgs() {
        return args;
    }

    public void setArgs(List<CommandArgument> args) {
        this.args = args;
    }
}
