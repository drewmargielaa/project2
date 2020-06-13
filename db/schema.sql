
drop database if exists passport_demo;
create database passport_demo;
use passport_demo;


create table user_data(
    user_id int auto_increment not null,
    first_name varchar(50) not null,
    last_name varchar(50) not null,
    emailAdress varchar(50) not null,
    password  varchar(100) not null,
    primary key(user_id)
);

create table login(
    loginUser_id int auto_increment not null,
    emailAdress varchar(50) not null,
    password  varchar(100) not null,
    loged_in boolean default false,
    user_id int,
    primary key(loginUser_id)
);