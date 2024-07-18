-- this is a heading comment

SELECT * 
	FROM information_schema.columns 
	WHERE table_name = 'first_table'
	ORDER by ordinal_position

