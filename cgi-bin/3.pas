PROGRAM Greetings(INPUT, OUTPUT);
USES
  DOS;
VAR
  QueryString, Name: STRING;
  PosName: INTEGER;
BEGIN 
  WRITELN('Content-Type: text/plain');
  WRITELN;
  QueryString := GetEnv('QUERY_STRING');
  PosName := Pos('name=', QueryString) + 5;
  Name := Copy(QueryString, PosName, Length(QueryString));

  WRITELN('Hello dear, ', Name, '!')

END. 
