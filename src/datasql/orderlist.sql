/*
Navicat MySQL Data Transfer

Source Server         : localhost_3306
Source Server Version : 50714
Source Host           : localhost:3306
Source Database       : database

Target Server Type    : MYSQL
Target Server Version : 50714
File Encoding         : 65001

Date: 2018-11-30 21:31:09
*/

SET FOREIGN_KEY_CHECKS=0;

-- ----------------------------
-- Table structure for orderlist
-- ----------------------------
DROP TABLE IF EXISTS `orderlist`;
CREATE TABLE `orderlist` (
  `id` int(6) NOT NULL AUTO_INCREMENT,
  `price` varchar(255) DEFAULT NULL,
  `retailprice` varchar(255) DEFAULT NULL,
  `title` varchar(255) DEFAULT NULL,
  `number` varchar(255) CHARACTER SET utf8 COLLATE utf8_romanian_ci DEFAULT NULL,
  `salesvolume` varchar(255) CHARACTER SET utf8 COLLATE utf8_vietnamese_ci DEFAULT NULL,
  `Evaluation` varchar(255) CHARACTER SET utf8 COLLATE utf8_general_mysql500_ci DEFAULT NULL,
  `collection` varchar(255) DEFAULT NULL,
  `listimg` varchar(255) CHARACTER SET utf8 COLLATE utf8_vietnamese_ci DEFAULT NULL,
  `goodlistimg1` varchar(255) DEFAULT NULL,
  `goodlistimg2` varchar(255) DEFAULT NULL,
  `goodlistimg3` varchar(255) DEFAULT NULL,
  `goodlistimg4` varchar(255) CHARACTER SET utf8 COLLATE utf8_bin DEFAULT NULL,
  `goodlistimg5` varchar(255) DEFAULT NULL,
  `buycarimg` varchar(255) DEFAULT NULL,
  `checkbox` varchar(255) DEFAULT NULL,
  PRIMARY KEY (`id`)
) ENGINE=MyISAM AUTO_INCREMENT=2222224 DEFAULT CHARSET=utf8;

-- ----------------------------
-- Records of orderlist
-- ----------------------------
INSERT INTO `orderlist` VALUES ('18', '1189', '187', '德国喜宝Hipp有机奶粉 pre段（0-6个月）600g（海外版）', '41', '100', '15344', '3425', '37294', '../src/img/databaseimg/listimage/list003.jpg', '../src/img/databaseimg/goodlistimage/goodlist0001.jpg', '../src/img/databaseimg/goodlistimage/goodlist0002.jpg', '../src/img/databaseimg/goodlistimage/goodlist0003.jpg', '../src/img/databaseimg/goodlistimage/goodlist0004.jpg', '../src/img/databaseimg/goodlistimage/goodlist0005.jpg', '../src/img/databaseimg/goodlistimage/buycarimage01.jpg');
INSERT INTO `orderlist` VALUES ('19', '2105', '175', '德国喜宝Hipp有机奶粉 3段（10-12个月）800g（海外版） ', '1', '100', '37743', '9873', '900', '../src/img/databaseimg/listimage/list004.jpg', '../src/img/databaseimg/goodlistimage/goodlist5001.jpg', '../src/img/databaseimg/goodlistimage/goodlist5002.jpg', '../src/img/databaseimg/goodlistimage/goodlist5003.jpg', '../src/img/databaseimg/goodlistimage/goodlist5004.jpg', '../src/img/databaseimg/goodlistimage/goodlist5005.jpg', '../src/img/databaseimg/goodlistimage/buycarimage07.jpg');
INSERT INTO `orderlist` VALUES ('4', '2105', null, '德国喜宝Hipp有机奶粉 3段（10-12个月）800g（海外版） ', '2', null, null, null, null, null, null, null, null, null, '../src/img/databaseimg/goodlistimage/buycarimage07.jpg', null);
INSERT INTO `orderlist` VALUES ('24', '760', null, 'PediaSure雅培小安素儿童成长奶粉1-10岁850克（两罐装)（海外版）\n', '9', null, null, null, null, null, null, null, null, null, '../src/img/databaseimg/goodlistimage/buycarimage09.jpg', null);
INSERT INTO `orderlist` VALUES ('3', '1189', null, '德国喜宝Hipp有机奶粉 pre段（0-6个月）600g（海外版）', '1', null, null, null, null, null, null, null, null, null, '../src/img/databaseimg/goodlistimage/buycarimage01.jpg', null);
SET FOREIGN_KEY_CHECKS=1;
