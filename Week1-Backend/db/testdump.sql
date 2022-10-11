create table bills (
    id int not null auto_increment,
    net int not null,
    bill varchar(1000),
    total int,
    primary key (id)
);

alter user 'root' identified with mysql_native_password by 'root';

flush privileges;