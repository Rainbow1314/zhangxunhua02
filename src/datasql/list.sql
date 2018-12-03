/*
Navicat MySQL Data Transfer

Source Server         : localhost_3306
Source Server Version : 50714
Source Host           : localhost:3306
Source Database       : database

Target Server Type    : MYSQL
Target Server Version : 50714
File Encoding         : 65001

Date: 2018-11-30 21:31:20
*/

SET FOREIGN_KEY_CHECKS=0;

-- ----------------------------
-- Table structure for list
-- ----------------------------
DROP TABLE IF EXISTS `list`;
CREATE TABLE `list` (
  `id` int(6) NOT NULL AUTO_INCREMENT,
  `price` int(6) DEFAULT NULL,
  `retailprice` varchar(255) DEFAULT NULL,
  `title` varchar(255) DEFAULT NULL,
  `number` varchar(255) DEFAULT NULL,
  `quantity` varchar(255) CHARACTER SET utf8 COLLATE utf8_vietnamese_ci DEFAULT NULL,
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
-- Records of list
-- ----------------------------
INSERT INTO `list` VALUES ('1', '1608', '201', '荷兰牛栏奶粉Nutrilon 1段（0-6个月）800g（海外版） ', '1', '100', '23284', '19742', '619', '../src/img/databaseimg/listimage/list001.jpg', '../src/img/databaseimg/goodlistimage/goodlist7001.jpg', '../src/img/databaseimg/goodlistimage/goodlist7002.jpg', '../src/img/databaseimg/goodlistimage/goodlist7003.jpg', '../src/img/databaseimg/goodlistimage/goodlist7004.jpg', '../src/img/databaseimg/goodlistimage/goodlist7005.jpg', '../src/img/databaseimg/goodlistimage/buycarimage12.jpg', 'checkbox_1');
INSERT INTO `list` VALUES ('2', '760', '149', 'PediaSure雅培小安素儿童成长奶粉1-10岁850克（两罐装)（海外版）\n', '1', '100', '6457', '32423', '592', '../src/img/databaseimg/listimage/list002.jpg', '../src/img/databaseimg/goodlistimage/goodlist2001.jpg', '../src/img/databaseimg/goodlistimage/goodlist2002.jpg', '../src/img/databaseimg/goodlistimage/goodlist2003.jpg', '../src/img/databaseimg/goodlistimage/goodlist2004.jpg', '../src/img/databaseimg/goodlistimage/goodlist2005.jpg  ', '../src/img/databaseimg/goodlistimage/buycarimage09.jpg', 'checkbox_2');
INSERT INTO `list` VALUES ('3', '1189', '187', '德国喜宝Hipp有机奶粉 pre段（0-6个月）600g（海外版）', '1', '100', '15344', '3425', '37294', '../src/img/databaseimg/listimage/list003.jpg', '../src/img/databaseimg/goodlistimage/goodlist0001.jpg', '../src/img/databaseimg/goodlistimage/goodlist0002.jpg', '../src/img/databaseimg/goodlistimage/goodlist0003.jpg', '../src/img/databaseimg/goodlistimage/goodlist0004.jpg', '../src/img/databaseimg/goodlistimage/goodlist0005.jpg', '../src/img/databaseimg/goodlistimage/buycarimage01.jpg', 'checkbox_3');
INSERT INTO `list` VALUES ('4', '2105', '175', '德国喜宝Hipp有机奶粉 3段（10-12个月）800g（海外版） ', '1', '100', '37743', '9873', '900', '../src/img/databaseimg/listimage/list004.jpg', '../src/img/databaseimg/goodlistimage/goodlist5001.jpg', '../src/img/databaseimg/goodlistimage/goodlist5002.jpg', '../src/img/databaseimg/goodlistimage/goodlist5003.jpg', '../src/img/databaseimg/goodlistimage/goodlist5004.jpg', '../src/img/databaseimg/goodlistimage/goodlist5005.jpg', '../src/img/databaseimg/goodlistimage/buycarimage07.jpg', 'checkbox_4');
INSERT INTO `list` VALUES ('5', '1894', '196', '德国喜宝Hipp添加益生菌奶粉 1+段（1岁以上）600g（海外版）', '1', '100', '38245', '3245', '3858', '../src/img/databaseimg/listimage/list005.jpg', '../src/img/databaseimg/goodlistimage/goodlist8001.jpg', '../src/img/databaseimg/goodlistimage/goodlist8002.jpg', '../src/img/databaseimg/goodlistimage/goodlist8003.jpg', '../src/img/databaseimg/goodlistimage/goodlist8004.jpg', '../src/img/databaseimg/goodlistimage/goodlist8005.jpg', '../src/img/databaseimg/goodlistimage/buycarimage03.jpg', 'checkbox_5');
INSERT INTO `list` VALUES ('6', '1725', '251', '英国牛栏恩贝儿奶粉Cow＆Gate 2段（6-12个月）900g（海外版）\n', '1', '100', '7948', '7541', '836', '../src/img/databaseimg/listimage/list006.jpg', '../src/img/databaseimg/goodlistimage/goodlist4001.jpg', '../src/img/databaseimg/goodlistimage/goodlist4002.jpg', '../src/img/databaseimg/goodlistimage/goodlist4003.jpg', '../src/img/databaseimg/goodlistimage/goodlist4004.jpg', '../src/img/databaseimg/goodlistimage/goodlist4005.jpg', '../src/img/databaseimg/goodlistimage/buycarimage05.jpg', 'checkbox_6');
INSERT INTO `list` VALUES ('7', '1499', '282', '两罐套装新西兰Karicare奶粉 金装加强4段（2岁以上）', '1', '100', '19176', '6310', '346', '../src/img/databaseimg/listimage/list007.jpg', '../src/img/databaseimg/goodlistimage/goodlist6001.jpg', '../src/img/databaseimg/goodlistimage/goodlist6002.jpg', '../src/img/databaseimg/goodlistimage/goodlist6003.jpg', '../src/img/databaseimg/goodlistimage/goodlist6004.jpg', '../src/img/databaseimg/goodlistimage/goodlist6005.jpg', '../src/img/databaseimg/goodlistimage/buycarimage10.jpg', 'checkbox_7');
INSERT INTO `list` VALUES ('8', '1324', '216', '德国喜宝Hipp有机添加益生菌奶粉 pre段（0-6个月）', '1', '100', '8888', '15485', '5598', '../src/img/databaseimg/listimage/list008.jpg', '../src/img/databaseimg/goodlistimage/goodlist1001.jpg', '../src/img/databaseimg/goodlistimage/goodlist1002.jpg', '../src/img/databaseimg/goodlistimage/goodlist1003.jpg', '../src/img/databaseimg/goodlistimage/goodlist1004.jpg', '../src/img/databaseimg/goodlistimage/goodlist1005.jpg', '../src/img/databaseimg/goodlistimage/buycarimage11.jpg', 'checkbox_8');
INSERT INTO `list` VALUES ('9', '1324', '216', '德国喜宝Hipp有机添加益生菌奶粉 pre段（0-6个月）', '1', '100', '8888', '15485', '5598', '../src/img/databaseimg/listimage/list008.jpg', '../src/img/databaseimg/goodlistimage/goodlist1001.jpg', '../src/img/databaseimg/goodlistimage/goodlist1002.jpg', '../src/img/databaseimg/goodlistimage/goodlist1003.jpg', '../src/img/databaseimg/goodlistimage/goodlist1004.jpg', '../src/img/databaseimg/goodlistimage/goodlist1005.jpg', '../src/img/databaseimg/goodlistimage/buycarimage11.jpg', 'checkbox_9');
INSERT INTO `list` VALUES ('10', '1608', '201', '荷兰牛栏奶粉Nutrilon 1段（0-6个月）800g（海外版） ', '1', '100', '23284', '19742', '619', '../src/img/databaseimg/listimage/list001.jpg', '../src/img/databaseimg/goodlistimage/goodlist7001.jpg', '../src/img/databaseimg/goodlistimage/goodlist7002.jpg', '../src/img/databaseimg/goodlistimage/goodlist7003.jpg', '../src/img/databaseimg/goodlistimage/goodlist7004.jpg', '../src/img/databaseimg/goodlistimage/goodlist7005.jpg', '../src/img/databaseimg/goodlistimage/buycarimage12.jpg', 'checkbox_10');
INSERT INTO `list` VALUES ('11', '760', '149', 'PediaSure雅培小安素儿童成长奶粉1-10岁850克（两罐装)（海外版）\n', '1', '100', '6457', '32423', '592', '../src/img/databaseimg/listimage/list002.jpg', '../src/img/databaseimg/goodlistimage/goodlist2001.jpg', '../src/img/databaseimg/goodlistimage/goodlist2002.jpg', '../src/img/databaseimg/goodlistimage/goodlist2003.jpg', '../src/img/databaseimg/goodlistimage/goodlist2004.jpg', '../src/img/databaseimg/goodlistimage/goodlist2005.jpg  ', '../src/img/databaseimg/goodlistimage/buycarimage09.jpg', 'checkbox_11');
INSERT INTO `list` VALUES ('12', '1189', '187', '德国喜宝Hipp有机奶粉 pre段（0-6个月）600g（海外版）', '1', '100', '15344', '3425', '37294', '../src/img/databaseimg/listimage/list003.jpg', '../src/img/databaseimg/goodlistimage/goodlist0001.jpg', '../src/img/databaseimg/goodlistimage/goodlist0002.jpg', '../src/img/databaseimg/goodlistimage/goodlist0003.jpg', '../src/img/databaseimg/goodlistimage/goodlist0004.jpg', '../src/img/databaseimg/goodlistimage/goodlist0005.jpg', '../src/img/databaseimg/goodlistimage/buycarimage01.jpg', 'checkbox_12');
INSERT INTO `list` VALUES ('13', '2105', '175', '德国喜宝Hipp有机奶粉 3段（10-12个月）800g（海外版） ', '1', '100', '37743', '9873', '900', '../src/img/databaseimg/listimage/list004.jpg', '../src/img/databaseimg/goodlistimage/goodlist5001.jpg', '../src/img/databaseimg/goodlistimage/goodlist5002.jpg', '../src/img/databaseimg/goodlistimage/goodlist5003.jpg', '../src/img/databaseimg/goodlistimage/goodlist5004.jpg', '../src/img/databaseimg/goodlistimage/goodlist5005.jpg', '../src/img/databaseimg/goodlistimage/buycarimage07.jpg', 'checkbox_13');
INSERT INTO `list` VALUES ('14', '1894', '196', '德国喜宝Hipp添加益生菌奶粉 1+段（1岁以上）600g（海外版）', '1', '100', '38245', '3245', '3858', '../src/img/databaseimg/listimage/list005.jpg', '../src/img/databaseimg/goodlistimage/goodlist8001.jpg', '../src/img/databaseimg/goodlistimage/goodlist8002.jpg', '../src/img/databaseimg/goodlistimage/goodlist8003.jpg', '../src/img/databaseimg/goodlistimage/goodlist8004.jpg', '../src/img/databaseimg/goodlistimage/goodlist8005.jpg', '../src/img/databaseimg/goodlistimage/buycarimage03.jpg', 'checkbox_14');
INSERT INTO `list` VALUES ('15', '1725', '251', '英国牛栏恩贝儿奶粉Cow＆Gate 2段（6-12个月）900g（海外版）\n', '1', '100', '7948', '7541', '836', '../src/img/databaseimg/listimage/list006.jpg', '../src/img/databaseimg/goodlistimage/goodlist4001.jpg', '../src/img/databaseimg/goodlistimage/goodlist4002.jpg', '../src/img/databaseimg/goodlistimage/goodlist4003.jpg', '../src/img/databaseimg/goodlistimage/goodlist4004.jpg', '../src/img/databaseimg/goodlistimage/goodlist4005.jpg', '../src/img/databaseimg/goodlistimage/buycarimage05.jpg', 'checkbox_15');
INSERT INTO `list` VALUES ('16', '1608', '201', '荷兰牛栏奶粉Nutrilon 1段（0-6个月）800g（海外版） ', '1', '100', '23284', '19742', '619', '../src/img/databaseimg/listimage/list001.jpg', '../src/img/databaseimg/goodlistimage/goodlist7001.jpg', '../src/img/databaseimg/goodlistimage/goodlist7002.jpg', '../src/img/databaseimg/goodlistimage/goodlist7003.jpg', '../src/img/databaseimg/goodlistimage/goodlist7004.jpg', '../src/img/databaseimg/goodlistimage/goodlist7005.jpg', '../src/img/databaseimg/goodlistimage/buycarimage12.jpg', 'checkbox_16');
INSERT INTO `list` VALUES ('17', '760', '149', 'PediaSure雅培小安素儿童成长奶粉1-10岁850克（两罐装)（海外版）\n', '1', '100', '6457', '32423', '592', '../src/img/databaseimg/listimage/list002.jpg', '../src/img/databaseimg/goodlistimage/goodlist2001.jpg', '../src/img/databaseimg/goodlistimage/goodlist2002.jpg', '../src/img/databaseimg/goodlistimage/goodlist2003.jpg', '../src/img/databaseimg/goodlistimage/goodlist2004.jpg', '../src/img/databaseimg/goodlistimage/goodlist2005.jpg  ', '../src/img/databaseimg/goodlistimage/buycarimage09.jpg', 'checkbox_17');
INSERT INTO `list` VALUES ('18', '1189', '187', '德国喜宝Hipp有机奶粉 pre段（0-6个月）600g（海外版）', '1', '100', '15344', '3425', '37294', '../src/img/databaseimg/listimage/list003.jpg', '../src/img/databaseimg/goodlistimage/goodlist0001.jpg', '../src/img/databaseimg/goodlistimage/goodlist0002.jpg', '../src/img/databaseimg/goodlistimage/goodlist0003.jpg', '../src/img/databaseimg/goodlistimage/goodlist0004.jpg', '../src/img/databaseimg/goodlistimage/goodlist0005.jpg', '../src/img/databaseimg/goodlistimage/buycarimage01.jpg', 'checkbox_18');
INSERT INTO `list` VALUES ('19', '2105', '175', '德国喜宝Hipp有机奶粉 3段（10-12个月）800g（海外版） ', '1', '100', '37743', '9873', '900', '../src/img/databaseimg/listimage/list004.jpg', '../src/img/databaseimg/goodlistimage/goodlist5001.jpg', '../src/img/databaseimg/goodlistimage/goodlist5002.jpg', '../src/img/databaseimg/goodlistimage/goodlist5003.jpg', '../src/img/databaseimg/goodlistimage/goodlist5004.jpg', '../src/img/databaseimg/goodlistimage/goodlist5005.jpg', '../src/img/databaseimg/goodlistimage/buycarimage07.jpg', 'checkbox_19');
INSERT INTO `list` VALUES ('20', '1894', '196', '德国喜宝Hipp添加益生菌奶粉 1+段（1岁以上）600g（海外版）', '1', '100', '38245', '3245', '3858', '../src/img/databaseimg/listimage/list005.jpg', '../src/img/databaseimg/goodlistimage/goodlist8001.jpg', '../src/img/databaseimg/goodlistimage/goodlist8002.jpg', '../src/img/databaseimg/goodlistimage/goodlist8003.jpg', '../src/img/databaseimg/goodlistimage/goodlist8004.jpg', '../src/img/databaseimg/goodlistimage/goodlist8005.jpg', '../src/img/databaseimg/goodlistimage/buycarimage03.jpg', 'checkbox_20');
INSERT INTO `list` VALUES ('21', '1725', '251', '英国牛栏恩贝儿奶粉Cow＆Gate 2段（6-12个月）900g（海外版）\n', '1', '100', '7948', '7541', '836', '../src/img/databaseimg/listimage/list006.jpg', '../src/img/databaseimg/goodlistimage/goodlist4001.jpg', '../src/img/databaseimg/goodlistimage/goodlist4002.jpg', '../src/img/databaseimg/goodlistimage/goodlist4003.jpg', '../src/img/databaseimg/goodlistimage/goodlist4004.jpg', '../src/img/databaseimg/goodlistimage/goodlist4005.jpg', '../src/img/databaseimg/goodlistimage/buycarimage05.jpg', 'checkbox_21');
INSERT INTO `list` VALUES ('22', '1499', '282', '两罐套装新西兰Karicare奶粉 金装加强4段（2岁以上）', '1', '100', '19176', '6310', '346', '../src/img/databaseimg/listimage/list007.jpg', '../src/img/databaseimg/goodlistimage/goodlist6001.jpg', '../src/img/databaseimg/goodlistimage/goodlist6002.jpg', '../src/img/databaseimg/goodlistimage/goodlist6003.jpg', '../src/img/databaseimg/goodlistimage/goodlist6004.jpg', '../src/img/databaseimg/goodlistimage/goodlist6005.jpg', '../src/img/databaseimg/goodlistimage/buycarimage10.jpg', 'checkbox_22');
INSERT INTO `list` VALUES ('23', '1608', '201', '荷兰牛栏奶粉Nutrilon 1段（0-6个月）800g（海外版） ', '1', '100', '23284', '19742', '619', '../src/img/databaseimg/listimage/list001.jpg', '../src/img/databaseimg/goodlistimage/goodlist7001.jpg', '../src/img/databaseimg/goodlistimage/goodlist7002.jpg', '../src/img/databaseimg/goodlistimage/goodlist7003.jpg', '../src/img/databaseimg/goodlistimage/goodlist7004.jpg', '../src/img/databaseimg/goodlistimage/goodlist7005.jpg', '../src/img/databaseimg/goodlistimage/buycarimage12.jpg', 'checkbox_23');
INSERT INTO `list` VALUES ('24', '760', '149', 'PediaSure雅培小安素儿童成长奶粉1-10岁850克（两罐装)（海外版）\n', '1', '100', '6457', '32423', '592', '../src/img/databaseimg/listimage/list002.jpg', '../src/img/databaseimg/goodlistimage/goodlist2001.jpg', '../src/img/databaseimg/goodlistimage/goodlist2002.jpg', '../src/img/databaseimg/goodlistimage/goodlist2003.jpg', '../src/img/databaseimg/goodlistimage/goodlist2004.jpg', '../src/img/databaseimg/goodlistimage/goodlist2005.jpg  ', '../src/img/databaseimg/goodlistimage/buycarimage09.jpg', 'checkbox_24');
INSERT INTO `list` VALUES ('25', '1189', '187', '德国喜宝Hipp有机奶粉 pre段（0-6个月）600g（海外版）', '1', '100', '15344', '3425', '37294', '../src/img/databaseimg/listimage/list003.jpg', '../src/img/databaseimg/goodlistimage/goodlist0001.jpg', '../src/img/databaseimg/goodlistimage/goodlist0002.jpg', '../src/img/databaseimg/goodlistimage/goodlist0003.jpg', '../src/img/databaseimg/goodlistimage/goodlist0004.jpg', '../src/img/databaseimg/goodlistimage/goodlist0005.jpg', '../src/img/databaseimg/goodlistimage/buycarimage01.jpg', 'checkbox_25');
INSERT INTO `list` VALUES ('26', '2105', '175', '德国喜宝Hipp有机奶粉 3段（10-12个月）800g（海外版） ', '1', '100', '37743', '9873', '900', '../src/img/databaseimg/listimage/list004.jpg', '../src/img/databaseimg/goodlistimage/goodlist5001.jpg', '../src/img/databaseimg/goodlistimage/goodlist5002.jpg', '../src/img/databaseimg/goodlistimage/goodlist5003.jpg', '../src/img/databaseimg/goodlistimage/goodlist5004.jpg', '../src/img/databaseimg/goodlistimage/goodlist5005.jpg', '../src/img/databaseimg/goodlistimage/buycarimage07.jpg', 'checkbox_26');
INSERT INTO `list` VALUES ('27', '1894', '196', '德国喜宝Hipp添加益生菌奶粉 1+段（1岁以上）600g（海外版）', '1', '100', '38245', '3245', '3858', '../src/img/databaseimg/listimage/list005.jpg', '../src/img/databaseimg/goodlistimage/goodlist8001.jpg', '../src/img/databaseimg/goodlistimage/goodlist8002.jpg', '../src/img/databaseimg/goodlistimage/goodlist8003.jpg', '../src/img/databaseimg/goodlistimage/goodlist8004.jpg', '../src/img/databaseimg/goodlistimage/goodlist8005.jpg', '../src/img/databaseimg/goodlistimage/buycarimage03.jpg', 'checkbox_27');
INSERT INTO `list` VALUES ('28', '1725', '251', '英国牛栏恩贝儿奶粉Cow＆Gate 2段（6-12个月）900g（海外版）\n', '1', '100', '7948', '7541', '836', '../src/img/databaseimg/listimage/list006.jpg', '../src/img/databaseimg/goodlistimage/goodlist4001.jpg', '../src/img/databaseimg/goodlistimage/goodlist4002.jpg', '../src/img/databaseimg/goodlistimage/goodlist4003.jpg', '../src/img/databaseimg/goodlistimage/goodlist4004.jpg', '../src/img/databaseimg/goodlistimage/goodlist4005.jpg', '../src/img/databaseimg/goodlistimage/buycarimage05.jpg', 'checkbox_28');
INSERT INTO `list` VALUES ('29', '2105', '175', '德国喜宝Hipp有机奶粉 3段（10-12个月）800g（海外版） ', '1', '100', '37743', '9873', '900', '../src/img/databaseimg/listimage/list004.jpg', '../src/img/databaseimg/goodlistimage/goodlist5001.jpg', '../src/img/databaseimg/goodlistimage/goodlist5002.jpg', '../src/img/databaseimg/goodlistimage/goodlist5003.jpg', '../src/img/databaseimg/goodlistimage/goodlist5004.jpg', '../src/img/databaseimg/goodlistimage/goodlist5005.jpg', '../src/img/databaseimg/goodlistimage/buycarimage07.jpg', 'checkbox_29');
INSERT INTO `list` VALUES ('30', '1894', '196', '德国喜宝Hipp添加益生菌奶粉 1+段（1岁以上）600g（海外版）', '1', '100', '38245', '3245', '3858', '../src/img/databaseimg/listimage/list005.jpg', '../src/img/databaseimg/goodlistimage/goodlist8001.jpg', '../src/img/databaseimg/goodlistimage/goodlist8002.jpg', '../src/img/databaseimg/goodlistimage/goodlist8003.jpg', '../src/img/databaseimg/goodlistimage/goodlist8004.jpg', '../src/img/databaseimg/goodlistimage/goodlist8005.jpg', '../src/img/databaseimg/goodlistimage/buycarimage03.jpg', 'checkbox_30');
INSERT INTO `list` VALUES ('31', '1725', '251', '英国牛栏恩贝儿奶粉Cow＆Gate 2段（6-12个月）900g（海外版）\n', '1', '100', '7948', '7541', '836', '../src/img/databaseimg/listimage/list006.jpg', '../src/img/databaseimg/goodlistimage/goodlist4001.jpg', '../src/img/databaseimg/goodlistimage/goodlist4002.jpg', '../src/img/databaseimg/goodlistimage/goodlist4003.jpg', '../src/img/databaseimg/goodlistimage/goodlist4004.jpg', '../src/img/databaseimg/goodlistimage/goodlist4005.jpg', '../src/img/databaseimg/goodlistimage/buycarimage05.jpg', 'checkbox_31');
INSERT INTO `list` VALUES ('32', '1499', '282', '两罐套装新西兰Karicare奶粉 金装加强4段（2岁以上）', '1', '100', '19176', '6310', '346', '../src/img/databaseimg/listimage/list007.jpg', '../src/img/databaseimg/goodlistimage/goodlist6001.jpg', '../src/img/databaseimg/goodlistimage/goodlist6002.jpg', '../src/img/databaseimg/goodlistimage/goodlist6003.jpg', '../src/img/databaseimg/goodlistimage/goodlist6004.jpg', '../src/img/databaseimg/goodlistimage/goodlist6005.jpg', '../src/img/databaseimg/goodlistimage/buycarimage10.jpg', 'checkbox_32');
SET FOREIGN_KEY_CHECKS=1;