-- MySQL dump 10.13  Distrib 8.0.31, for Win64 (x86_64)
--
-- Host: 127.0.0.1    Database: customer
-- ------------------------------------------------------
-- Server version	5.7.37-log

/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!50503 SET NAMES utf8 */;
/*!40103 SET @OLD_TIME_ZONE=@@TIME_ZONE */;
/*!40103 SET TIME_ZONE='+00:00' */;
/*!40014 SET @OLD_UNIQUE_CHECKS=@@UNIQUE_CHECKS, UNIQUE_CHECKS=0 */;
/*!40014 SET @OLD_FOREIGN_KEY_CHECKS=@@FOREIGN_KEY_CHECKS, FOREIGN_KEY_CHECKS=0 */;
/*!40101 SET @OLD_SQL_MODE=@@SQL_MODE, SQL_MODE='NO_AUTO_VALUE_ON_ZERO' */;
/*!40111 SET @OLD_SQL_NOTES=@@SQL_NOTES, SQL_NOTES=0 */;

--
-- Table structure for table `user`
--


/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `user` (
  `userName` varchar(45) NOT NULL,
  `firstName` varchar(45) DEFAULT NULL,
  `lastName` varchar(45) DEFAULT NULL,
  `email` varchar(45) NOT NULL,
  `phone` varchar(10) DEFAULT NULL,
  `role` varchar(45) NOT NULL,
  `password` varchar(45) NOT NULL,
  PRIMARY KEY (`userName`)
) ENGINE=InnoDB DEFAULT CHARSET=latin1;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `user`
--

LOCK TABLES `user` WRITE;
/*!40000 ALTER TABLE `user` DISABLE KEYS */;
INSERT INTO `user` VALUES ('','','','','','user',''),('admin','admin','admin','admin@gmail.com','1234567890','admin','admin'),('anand@gmail.com','anand','kumar','anand@gmail.com','8738932920','user','admin'),('bharath','bharath','kjfksdjf','sdjdfsk@gmail.com','9832134567','user','admin'),('bhuvanesh','bhuvanesh k','waran','bhua@gmail.com','9867675646','user','admin'),('gayatri','gayatri 43','jessi','jessi@gmail.com','983245890','user','admin'),('kannan','kanan123','maran','kannan@gmail.com','3434356654','user','admin'),('karthikeyan','karthi up','keyan','kk@gmail.com','909876543','user','admin'),('karun','karun','kumar','kkkumar@gmail.com','983214890','user','admin'),('kathir','kathir','vel testing','kvel@gmail.com','7878788788','user','newad'),('kesfsd','jkfdskf','kdjdkfsf','skdks@gmail.com','9893843893','user','admin'),('lokesh','Lokesh','Kanagaraj','lk@gmail.com','982345689','user','admin'),('madan','madan raj11t','kumar','mk@gmail.com','983721092','user','12345'),('mahesh','mahesh','prabhakaran','magesh@gmail.com','9878938938','user','admin'),('martin','martin','disosa','disosa@gmail.com','123456789','user','admin'),('murugan','murugan','siva k','sivamurugan@gmail.com','123456789','user','admin'),('nagasai','naga sai','kumar chede','nagasaikumar@gmail.com','7890876532','user','admin'),('nazeer','nazeer','kamal','nazeer@gmil.com','1943975344','user','admin'),('Paramesh','paramesh','waran','pwaran@gamil.com','3435346646','user','admin'),('rajesh','rajesh','kanna','rajesh@gmil.com','1232344344','user','admin'),('rkannan','rajesh','kannan','rajeshkannan@gmail.com','9831092134','user','admin'),('sai','sai','krishna','saikrishna@gmail.com','489892909','user','admin'),('sathish','sathish bada','kumaran','kumaran@gmail.com','989032145','user','user'),('si','siddhi','vik','si@gmail.com','1534534533','user','admin'),('siva','siva','rajan','siv@gmail.com','9087653520','user','12345'),('srinivas','srinivas','kesariveni','srinivas@gmail.com','9878389971','user','admin'),('subash','subash','chandra','subash','9877987678','user','admin'),('sunith','sunith','raj','sunith@gmil.com','1432443543','user','admin'),('tfdh','tfdh','kli','tfdh@gmail.com','1878675757','user','admin'),('thala','thala','pathi','thala@gmil.com','1355435345','user','admin'),('user','user','user','user@gmail.com','987543210','user','user'),('varun','varun','dhavan','varun@gmail.com','1834734943','user','admin'),('vijay','vijay','anand','vanand@gmail.com','1234567799','user','admin'),('vijayanand','vijay','anand kkkkk','vijayanand@gmail.com','9876543290','user','admin'),('vijaykanth','vijay','kanth','vijaykanth@gmail.com','8930213456','user','admin'),('vikram','vikram','sukumar','vikram@gmail.com','433424243','user','aadmin'),('vikrm','vikrm','kui','vikrm@gmil.com','1535335345','user','admin'),('vinod','vinodh','kumar','vk@gmail.com','453464654','user','vinod');
/*!40000 ALTER TABLE `user` ENABLE KEYS */;
UNLOCK TABLES;
/*!40103 SET TIME_ZONE=@OLD_TIME_ZONE */;

/*!40101 SET SQL_MODE=@OLD_SQL_MODE */;
/*!40014 SET FOREIGN_KEY_CHECKS=@OLD_FOREIGN_KEY_CHECKS */;
/*!40014 SET UNIQUE_CHECKS=@OLD_UNIQUE_CHECKS */;
/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
/*!40111 SET SQL_NOTES=@OLD_SQL_NOTES */;

-- Dump completed on 2023-01-11 10:41:08
