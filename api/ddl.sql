drop table users;

create table if not exists users (
    user_uuid uuid primary key default gen_random_uuid (),
    user_username varchar(50) not null unique,
    user_email varchar(100) not null unique,
    user_password varchar(255) not null,
    user_permission varchar(20) not null,
    created_at timestamp with time zone default current_timestamp,
    updated_at timestamp with time zone default current_timestamp
);