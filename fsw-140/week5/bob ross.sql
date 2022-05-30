  SELECT * FROM elements;
  USE bob_ross;
CREATE TABLE IF NOT EXISTS dup_elements
SELECT * FROM elements;
-- ALTER TABLE elements
-- ADD Episode_id  INT auto_increment primary key;
 ALTER TABLE dup_elements
ADD Episode_id  INT; 
 ALTER TABLE dup_elements
 ADD FOREIGN KEY (Episode_id) REFERENCES elements(Episode_id);
 SELECT  Winter FROM elements 
 WHERE winter IN (SELECT Distinct waves FROM elements);
 SELECT Elements.Episode_id FROM elements
INNER JOIN dup_elements
 ON elements.Episode_id = dup_elements.Episode_id;
 SELECT Clouds FROM Elements
 UNION
SELECT Windmill FROM Elements;
 SELECT * FROM dup_elements;
 ALTER TABLE dup_elements
 add Episode_id INT AUTO_INCREMENT;
SELECT  Winter FROM elements 
 WHERE winter IN (SELECT Distinct waves FROM elements);
