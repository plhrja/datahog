CREATE TABLE dbo.Monitor (
	id					SERIAL  PRIMARY KEY
,	"endpoint"	VARCHAR NOT NULL
,	schedule  	VARCHAR NOT NULL
)