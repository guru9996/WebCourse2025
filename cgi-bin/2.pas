PROGRAM SarahRevere(INPUT, OUTPUT);
USES
  DOS;
VAR
  L: STRING;
BEGIN 
  WRITELN('Content-Type: text/plain');
  WRITELN;
  L := GetEnv('QUERY_STRING');
  IF (L <> 'lanterns=1') AND (L <> 'lanterns=2')
  THEN
    WRITE('Sarah didn''t say')
  ELSE
    BEGIN
      IF L = 'lanterns=1'
      THEN
        WRITE('BrIitish are coming by land');
      IF L = 'lanterns=2'
      THEN
        WRITE('BrIitish are coming by sea')
    END;
  WRITELN

END. 
