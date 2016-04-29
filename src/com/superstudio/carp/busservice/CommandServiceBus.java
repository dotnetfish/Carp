package com.superstudio.carp.busservice;

import com.superstudio.carp.command.Command;

/**
 * Created by T440P on 2016-4-29.
 */
public abstract class CommandServiceBus {
    public abstract void send(Command command);
}
