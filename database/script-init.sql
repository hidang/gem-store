-- MySQL Script generated by MySQL Workbench
-- Fri Jun 23 14:22:21 2023
-- Model: New Model    Version: 1.0
-- MySQL Workbench Forward Engineering

SET @OLD_UNIQUE_CHECKS=@@UNIQUE_CHECKS, UNIQUE_CHECKS=0;
SET @OLD_FOREIGN_KEY_CHECKS=@@FOREIGN_KEY_CHECKS, FOREIGN_KEY_CHECKS=0;
SET @OLD_SQL_MODE=@@SQL_MODE, SQL_MODE='ONLY_FULL_GROUP_BY,STRICT_TRANS_TABLES,NO_ZERO_IN_DATE,NO_ZERO_DATE,ERROR_FOR_DIVISION_BY_ZERO,NO_ENGINE_SUBSTITUTION';

-- -----------------------------------------------------
-- Schema mydb
-- -----------------------------------------------------
-- -----------------------------------------------------
-- Schema sql12626833
-- -----------------------------------------------------

-- -----------------------------------------------------
-- Schema sql12626833
-- -----------------------------------------------------
CREATE SCHEMA IF NOT EXISTS `sql12626833` DEFAULT CHARACTER SET latin1 ;
USE `sql12626833` ;

-- -----------------------------------------------------
-- Table `sql12626833`.`customers`
-- -----------------------------------------------------
CREATE TABLE IF NOT EXISTS `sql12626833`.`customers` (
  `id` INT(11) NOT NULL AUTO_INCREMENT,
  `name` VARCHAR(255) NOT NULL,
  `dob` DATETIME NULL DEFAULT NULL,
  `address` VARCHAR(255) NULL DEFAULT NULL,
  `phone` VARCHAR(255) NOT NULL,
  `createdAt` DATETIME NOT NULL,
  `updatedAt` DATETIME NOT NULL,
  PRIMARY KEY (`id`),
  UNIQUE INDEX `id` (`id` ASC) VISIBLE,
  UNIQUE INDEX `phone` (`phone` ASC) VISIBLE)
ENGINE = InnoDB
AUTO_INCREMENT = 4
DEFAULT CHARACTER SET = utf8;


-- -----------------------------------------------------
-- Table `sql12626833`.`sales_invoices`
-- -----------------------------------------------------
CREATE TABLE IF NOT EXISTS `sql12626833`.`sales_invoices` (
  `id` INT(11) NOT NULL AUTO_INCREMENT,
  `createdAt` DATETIME NOT NULL,
  `updatedAt` DATETIME NOT NULL,
  `customer_id` INT(11) NULL DEFAULT NULL,
  PRIMARY KEY (`id`),
  UNIQUE INDEX `id` (`id` ASC) VISIBLE,
  INDEX `customer_id` (`customer_id` ASC) VISIBLE,
  CONSTRAINT `sales_invoices_ibfk_1`
    FOREIGN KEY (`customer_id`)
    REFERENCES `sql12626833`.`customers` (`id`)
    ON UPDATE CASCADE)
ENGINE = InnoDB
AUTO_INCREMENT = 3
DEFAULT CHARACTER SET = utf8;


-- -----------------------------------------------------
-- Table `sql12626833`.`product_on_sales`
-- -----------------------------------------------------
CREATE TABLE IF NOT EXISTS `sql12626833`.`product_on_sales` (
  `id` VARCHAR(255) NOT NULL,
  `count` INT(11) NOT NULL,
  `name` VARCHAR(255) NULL DEFAULT NULL,
  `pricePerProduct` DECIMAL(10,0) NULL DEFAULT NULL,
  `massPerProduct` DOUBLE NULL DEFAULT NULL,
  `purchaseInvoice_id` INT(11) NULL DEFAULT NULL,
  `supplier_id` INT(11) NULL DEFAULT NULL,
  `productTypeName` VARCHAR(255) NULL DEFAULT NULL,
  `profitPercent` DOUBLE NULL DEFAULT NULL,
  `unitName` VARCHAR(255) NULL DEFAULT NULL,
  `createdAt` DATETIME NOT NULL,
  `updatedAt` DATETIME NOT NULL,
  `salesInvoice_id` INT(11) NULL DEFAULT NULL,
  PRIMARY KEY (`id`),
  UNIQUE INDEX `id` (`id` ASC) VISIBLE,
  INDEX `salesInvoice_id` (`salesInvoice_id` ASC) VISIBLE,
  CONSTRAINT `product_on_sales_ibfk_1`
    FOREIGN KEY (`salesInvoice_id`)
    REFERENCES `sql12626833`.`sales_invoices` (`id`)
    ON DELETE CASCADE
    ON UPDATE CASCADE)
ENGINE = InnoDB
DEFAULT CHARACTER SET = utf8;


-- -----------------------------------------------------
-- Table `sql12626833`.`units`
-- -----------------------------------------------------
CREATE TABLE IF NOT EXISTS `sql12626833`.`units` (
  `id` INT(11) NOT NULL AUTO_INCREMENT,
  `name` VARCHAR(255) NOT NULL,
  `createdAt` DATETIME NOT NULL,
  `updatedAt` DATETIME NOT NULL,
  PRIMARY KEY (`id`),
  UNIQUE INDEX `id` (`id` ASC) VISIBLE,
  UNIQUE INDEX `name` (`name` ASC) VISIBLE)
ENGINE = InnoDB
AUTO_INCREMENT = 7
DEFAULT CHARACTER SET = utf8;


-- -----------------------------------------------------
-- Table `sql12626833`.`product_types`
-- -----------------------------------------------------
CREATE TABLE IF NOT EXISTS `sql12626833`.`product_types` (
  `id` INT(11) NOT NULL AUTO_INCREMENT,
  `name` VARCHAR(255) NOT NULL,
  `profitPercent` DOUBLE NULL DEFAULT NULL,
  `createdAt` DATETIME NOT NULL,
  `updatedAt` DATETIME NOT NULL,
  `unit_id` INT(11) NULL DEFAULT NULL,
  PRIMARY KEY (`id`),
  UNIQUE INDEX `id` (`id` ASC) VISIBLE,
  UNIQUE INDEX `name` (`name` ASC) VISIBLE,
  INDEX `unit_id` (`unit_id` ASC) VISIBLE,
  CONSTRAINT `product_types_ibfk_1`
    FOREIGN KEY (`unit_id`)
    REFERENCES `sql12626833`.`units` (`id`)
    ON UPDATE CASCADE)
ENGINE = InnoDB
AUTO_INCREMENT = 7
DEFAULT CHARACTER SET = utf8;


-- -----------------------------------------------------
-- Table `sql12626833`.`purchase_invoices`
-- -----------------------------------------------------
CREATE TABLE IF NOT EXISTS `sql12626833`.`purchase_invoices` (
  `id` INT(11) NOT NULL AUTO_INCREMENT,
  `supplier_id` INT(11) NULL DEFAULT NULL,
  `createdAt` DATETIME NOT NULL,
  `updatedAt` DATETIME NOT NULL,
  PRIMARY KEY (`id`),
  UNIQUE INDEX `id` (`id` ASC) VISIBLE)
ENGINE = InnoDB
AUTO_INCREMENT = 4
DEFAULT CHARACTER SET = utf8;


-- -----------------------------------------------------
-- Table `sql12626833`.`suppliers`
-- -----------------------------------------------------
CREATE TABLE IF NOT EXISTS `sql12626833`.`suppliers` (
  `id` INT(11) NOT NULL AUTO_INCREMENT,
  `name` VARCHAR(255) NOT NULL,
  `address` VARCHAR(255) NULL DEFAULT NULL,
  `phone` VARCHAR(255) NULL DEFAULT NULL,
  `createdAt` DATETIME NOT NULL,
  `updatedAt` DATETIME NOT NULL,
  PRIMARY KEY (`id`),
  UNIQUE INDEX `id` (`id` ASC) VISIBLE,
  UNIQUE INDEX `phone` (`phone` ASC) VISIBLE)
ENGINE = InnoDB
AUTO_INCREMENT = 5
DEFAULT CHARACTER SET = utf8;


-- -----------------------------------------------------
-- Table `sql12626833`.`products`
-- -----------------------------------------------------
CREATE TABLE IF NOT EXISTS `sql12626833`.`products` (
  `id` INT(11) NOT NULL AUTO_INCREMENT,
  `name` VARCHAR(255) NOT NULL,
  `count` INT(11) NULL DEFAULT NULL,
  `pricePerProduct` DECIMAL(10,0) NULL DEFAULT NULL,
  `massPerProduct` DOUBLE NULL DEFAULT NULL,
  `createdAt` DATETIME NOT NULL,
  `updatedAt` DATETIME NOT NULL,
  `purchaseInvoice_id` INT(11) NULL DEFAULT NULL,
  `supplier_id` INT(11) NULL DEFAULT NULL,
  `productType_id` INT(11) NULL DEFAULT NULL,
  PRIMARY KEY (`id`),
  UNIQUE INDEX `id` (`id` ASC) VISIBLE,
  INDEX `purchaseInvoice_id` (`purchaseInvoice_id` ASC) VISIBLE,
  INDEX `supplier_id` (`supplier_id` ASC) VISIBLE,
  INDEX `productType_id` (`productType_id` ASC) VISIBLE,
  CONSTRAINT `products_ibfk_1`
    FOREIGN KEY (`purchaseInvoice_id`)
    REFERENCES `sql12626833`.`purchase_invoices` (`id`)
    ON DELETE CASCADE
    ON UPDATE CASCADE,
  CONSTRAINT `products_ibfk_2`
    FOREIGN KEY (`supplier_id`)
    REFERENCES `sql12626833`.`suppliers` (`id`)
    ON UPDATE CASCADE,
  CONSTRAINT `products_ibfk_3`
    FOREIGN KEY (`productType_id`)
    REFERENCES `sql12626833`.`product_types` (`id`)
    ON UPDATE CASCADE)
ENGINE = InnoDB
AUTO_INCREMENT = 5
DEFAULT CHARACTER SET = utf8;


-- -----------------------------------------------------
-- Table `sql12626833`.`service_invoices`
-- -----------------------------------------------------
CREATE TABLE IF NOT EXISTS `sql12626833`.`service_invoices` (
  `id` INT(11) NOT NULL AUTO_INCREMENT,
  `createdAt` DATETIME NOT NULL,
  `updatedAt` DATETIME NOT NULL,
  `customer_id` INT(11) NULL DEFAULT NULL,
  PRIMARY KEY (`id`),
  UNIQUE INDEX `id` (`id` ASC) VISIBLE,
  INDEX `customer_id` (`customer_id` ASC) VISIBLE,
  CONSTRAINT `service_invoices_ibfk_1`
    FOREIGN KEY (`customer_id`)
    REFERENCES `sql12626833`.`customers` (`id`)
    ON UPDATE CASCADE)
ENGINE = InnoDB
AUTO_INCREMENT = 4
DEFAULT CHARACTER SET = utf8;


-- -----------------------------------------------------
-- Table `sql12626833`.`service_types`
-- -----------------------------------------------------
CREATE TABLE IF NOT EXISTS `sql12626833`.`service_types` (
  `id` INT(11) NOT NULL AUTO_INCREMENT,
  `name` VARCHAR(255) NOT NULL,
  `price` DECIMAL(10,0) NULL DEFAULT NULL,
  `createdAt` DATETIME NOT NULL,
  `updatedAt` DATETIME NOT NULL,
  PRIMARY KEY (`id`),
  UNIQUE INDEX `id` (`id` ASC) VISIBLE,
  UNIQUE INDEX `name` (`name` ASC) VISIBLE)
ENGINE = InnoDB
AUTO_INCREMENT = 5
DEFAULT CHARACTER SET = utf8;


-- -----------------------------------------------------
-- Table `sql12626833`.`services`
-- -----------------------------------------------------
CREATE TABLE IF NOT EXISTS `sql12626833`.`services` (
  `id` INT(11) NOT NULL AUTO_INCREMENT,
  `name` VARCHAR(255) NOT NULL,
  `extraPrice` DECIMAL(10,0) NULL DEFAULT NULL,
  `prepay` DECIMAL(10,0) NULL DEFAULT NULL,
  `count` INT(11) NULL DEFAULT NULL,
  `deliveryDate` DATETIME NULL DEFAULT NULL,
  `status` TINYINT(1) NULL DEFAULT NULL,
  `createdAt` DATETIME NOT NULL,
  `updatedAt` DATETIME NOT NULL,
  `serviceType_id` INT(11) NULL DEFAULT NULL,
  `serviceInvoice_id` INT(11) NULL DEFAULT NULL,
  PRIMARY KEY (`id`),
  UNIQUE INDEX `id` (`id` ASC) VISIBLE,
  INDEX `serviceType_id` (`serviceType_id` ASC) VISIBLE,
  INDEX `serviceInvoice_id` (`serviceInvoice_id` ASC) VISIBLE,
  CONSTRAINT `services_ibfk_1`
    FOREIGN KEY (`serviceType_id`)
    REFERENCES `sql12626833`.`service_types` (`id`)
    ON UPDATE CASCADE,
  CONSTRAINT `services_ibfk_2`
    FOREIGN KEY (`serviceInvoice_id`)
    REFERENCES `sql12626833`.`service_invoices` (`id`)
    ON DELETE CASCADE
    ON UPDATE CASCADE)
ENGINE = InnoDB
AUTO_INCREMENT = 7
DEFAULT CHARACTER SET = utf8;


SET SQL_MODE=@OLD_SQL_MODE;
SET FOREIGN_KEY_CHECKS=@OLD_FOREIGN_KEY_CHECKS;
SET UNIQUE_CHECKS=@OLD_UNIQUE_CHECKS;
