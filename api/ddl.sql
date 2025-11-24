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

create table if not exists tasks (
    task_uuid uuid primary key default gen_random_uuid (),
    task_title varchar(100) not null,
    task_description text not null,
    task_priority varchar(20) not null,
    task_status varchar(20) not null default 'Pending',
    task_from date not null,
    task_to date not null,
    created_at timestamp with time zone default current_timestamp,
    updated_at timestamp with time zone default current_timestamp,
    CHECK (
        task_priority IN ('Low', 'Medium', 'High')
    ),
    CHECK (
        task_status IN (
            'Pending',
            'In Progress',
            'Completed'
        )
    )
)