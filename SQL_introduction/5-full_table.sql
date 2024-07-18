-- this is a heading comment

select * 
	from information_schema.columns 
	where table_name = 'first_table'
	order by ordinal_position

