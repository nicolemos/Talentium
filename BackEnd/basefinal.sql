

SET @OLD_UNIQUE_CHECKS=@@UNIQUE_CHECKS, UNIQUE_CHECKS=0;
SET @OLD_FOREIGN_KEY_CHECKS=@@FOREIGN_KEY_CHECKS, FOREIGN_KEY_CHECKS=0;
SET @OLD_SQL_MODE=@@SQL_MODE, SQL_MODE='ONLY_FULL_GROUP_BY,STRICT_TRANS_TABLES,NO_ZERO_IN_DATE,NO_ZERO_DATE,ERROR_FOR_DIVISION_BY_ZERO,NO_ENGINE_SUBSTITUTION';


-- -----------------------------------------------------
-- Schema homeservice
-- -----------------------------------------------------
DROP SCHEMA IF EXISTS `homeservice` ;

-- -----------------------------------------------------
-- Schema homeservice
-- -----------------------------------------------------
CREATE SCHEMA IF NOT EXISTS `homeservice` DEFAULT CHARACTER SET utf8 ;
USE `homeservice` ;

-- -----------------------------------------------------
-- Table `homeservice`.`usuarios`
-- -----------------------------------------------------
CREATE TABLE IF NOT EXISTS `homeservice`.`usuarios` (
  `id` INT NOT NULL AUTO_INCREMENT,
  `email` VARCHAR(45) UNIQUE  NOT NULL,
  `contrasenia` VARCHAR(45) NOT NULL,
  `avatar` VARCHAR(250) NULL DEFAULT 'url',
  PRIMARY KEY (`id`))
ENGINE = InnoDB;


-- -----------------------------------------------------
-- Table `homeservice`.`direcciones`
-- -----------------------------------------------------
CREATE TABLE IF NOT EXISTS `homeservice`.`direcciones` (
  `id` INT NOT NULL AUTO_INCREMENT,
  `calle` VARCHAR(45) NOT NULL,
  `numero` VARCHAR(45) NOT NULL,
  `provincia` VARCHAR(45) NOT NULL,
  `localidad` VARCHAR(45) NOT NULL,
  PRIMARY KEY (`id`))
ENGINE = InnoDB;


-- -----------------------------------------------------
-- Table `homeservice`.`productos`
-- -----------------------------------------------------
CREATE TABLE IF NOT EXISTS `homeservice`.`productos` (
  `id` INT NOT NULL AUTO_INCREMENT,
  `nombre` VARCHAR(45) NOT NULL,
  `precio` DECIMAL(18,2) NOT NULL,
  `descripcion` VARCHAR(45) NULL DEFAULT NULL,
  `cantidad` INT NOT NULL DEFAULT 1,
  `foto` VARCHAR(250) NULL DEFAULT NULL,
  PRIMARY KEY (`id`))
ENGINE = InnoDB
COMMENT = '		';


-- -----------------------------------------------------
-- Table `homeservice`.`profesionales_productos`
-- -----------------------------------------------------
CREATE TABLE IF NOT EXISTS `homeservice`.`profesionales_productos` (
  `id` INT NOT NULL AUTO_INCREMENT,
  `prof_producto_id` INT NULL DEFAULT NULL,
  PRIMARY KEY (`id`),
  INDEX `prof_producto_id_idx` (`prof_producto_id` ASC) VISIBLE,
  CONSTRAINT `prof_producto_id`
    FOREIGN KEY (`prof_producto_id`)
    REFERENCES `homeservice`.`productos` (`id`)
    ON DELETE NO ACTION
    ON UPDATE NO ACTION)
ENGINE = InnoDB;


-- -----------------------------------------------------
-- Table `homeservice`.`ordenes`
-- -----------------------------------------------------
CREATE TABLE IF NOT EXISTS `homeservice`.`ordenes` (
  `id` int NOT NULL AUTO_INCREMENT,
  `descripcion` varchar(250) NOT NULL,
  `profesional_id` int DEFAULT NULL,
  `precio` decimal(18,2) DEFAULT NULL,
  `fecha` date NOT NULL,
  `ESTADO` enum('Inicial','Pendiente','Aprobada') NOT NULL DEFAULT 'Inicial',
  `cliente_id` int DEFAULT NULL,
  PRIMARY KEY (`id`),
  KEY `profesional_id_idx` (`profesional_id`),
  KEY `cliente_id` (`cliente_id`),
  CONSTRAINT `ordenes_ibfk_1` FOREIGN KEY (`cliente_id`) REFERENCES `clientes` (`id`),
  CONSTRAINT `profesional_id` FOREIGN KEY (`profesional_id`) REFERENCES `profesionales` (`id`)
    )
ENGINE = InnoDB;


-- -----------------------------------------------------
-- Table `homeservice`.`profesionales`
-- -----------------------------------------------------
CREATE TABLE IF NOT EXISTS `homeservice`.`profesionales` (
  `id` INT NOT NULL AUTO_INCREMENT,
  `nombre` VARCHAR(45) NOT NULL,
  `apellido` VARCHAR(45) NOT NULL,
  `cuit` VARCHAR(45) UNIQUE  NOT NULL,
  `imagen` VARCHAR(250) NULL DEFAULT NULL,
  `profesional_usuario_id` INT NULL DEFAULT NULL,
  `PROFESION` ENUM("Otros") NOT NULL DEFAULT 'Otros',
  `profesional_direccion_id` INT NULL DEFAULT NULL,
  `profesional_producto_id` INT NULL DEFAULT NULL,
  `cbu` VARCHAR(45) NOT NULL,
  `clasificacion` INT NULL DEFAULT NULL,
  `profesional_orden_id` INT NULL DEFAULT NULL,
  `activo` TINYINT NOT NULL DEFAULT 1,
  PRIMARY KEY (`id`),
  INDEX `profesional_usuario_id_idx` (`profesional_usuario_id` ASC) VISIBLE,
  INDEX `profesional_direccion_id_idx` (`profesional_direccion_id` ASC) VISIBLE,
  INDEX `profesional_producto_id_idx` (`profesional_producto_id` ASC) VISIBLE,
  INDEX `profesional_orden_id_idx` (`profesional_orden_id` ASC) VISIBLE,
  CONSTRAINT `profesional_usuario_id`
    FOREIGN KEY (`profesional_usuario_id`)
    REFERENCES `homeservice`.`usuarios` (`id`)
    ON DELETE NO ACTION
    ON UPDATE NO ACTION,
  CONSTRAINT `profesional_direccion_id`
    FOREIGN KEY (`profesional_direccion_id`)
    REFERENCES `homeservice`.`direcciones` (`id`)
    ON DELETE NO ACTION
    ON UPDATE NO ACTION,
  CONSTRAINT `profesional_producto_id`
    FOREIGN KEY (`profesional_producto_id`)
    REFERENCES `homeservice`.`profesionales_productos` (`id`)
    ON DELETE NO ACTION
    ON UPDATE NO ACTION,
  CONSTRAINT `profesional_orden_id`
    FOREIGN KEY (`profesional_orden_id`)
    REFERENCES `homeservice`.`ordenes` (`id`)
    ON DELETE NO ACTION
    ON UPDATE NO ACTION)
ENGINE = InnoDB;


-- -----------------------------------------------------
-- Table `homeservice`.`compras_productos`
-- -----------------------------------------------------
CREATE TABLE IF NOT EXISTS `homeservice`.`compras_productos` (
  `id` INT NOT NULL AUTO_INCREMENT,
  `producto_id` INT NULL DEFAULT NULL,
  `cantidad` INT NOT NULL DEFAULT 1,
  PRIMARY KEY (`id`),
  INDEX `producto_id_idx` (`producto_id` ASC) VISIBLE,
  CONSTRAINT `producto_id`
    FOREIGN KEY (`producto_id`)
    REFERENCES `homeservice`.`productos` (`id`)
    ON DELETE NO ACTION
    ON UPDATE NO ACTION)
ENGINE = InnoDB;


-- -----------------------------------------------------
-- Table `homeservice`.`compras`
-- -----------------------------------------------------
CREATE TABLE IF NOT EXISTS `homeservice`.`compras` (
  `id` INT NOT NULL AUTO_INCREMENT,
  `compra_producto_id` INT NULL DEFAULT NULL,
  `fecha` DATE NOT NULL,
  PRIMARY KEY (`id`),
  INDEX `compra_producto_id_idx` (`compra_producto_id` ASC) VISIBLE,
  CONSTRAINT `compra_producto_id`
    FOREIGN KEY (`compra_producto_id`)
    REFERENCES `homeservice`.`compras_productos` (`id`)
    ON DELETE NO ACTION
    ON UPDATE NO ACTION)
ENGINE = InnoDB;


-- -----------------------------------------------------
-- Table `homeservice`.`clientes`
-- -----------------------------------------------------
CREATE TABLE IF NOT EXISTS `homeservice`.`clientes` (
  `id` INT NOT NULL AUTO_INCREMENT,
  `nombre` VARCHAR(45) NOT NULL,
  `apellido` VARCHAR(45) NOT NULL,
  `dni` VARCHAR(45) UNIQUE NOT NULL,
  `imagen` VARCHAR(150) NULL DEFAULT NULL,
  `cliente_usuario_id` INT NULL DEFAULT NULL,
  `cliente_direccion_id` INT NULL DEFAULT NULL,
  `clasificacion` TINYINT NULL DEFAULT NULL,
  `cliente_orden_id` INT NULL DEFAULT NULL,
  `compra_id` INT NULL DEFAULT NULL,
  `activo` TINYINT NOT NULL DEFAULT 1,
  PRIMARY KEY (`id`),
  INDEX `cliente_usuario_id_idx` (`cliente_usuario_id` ASC) VISIBLE,
  INDEX `cliente_direccion_id_idx` (`cliente_direccion_id` ASC) VISIBLE,
  INDEX `cliente_orden_id_idx` (`cliente_orden_id` ASC) VISIBLE,
  INDEX `compra_id_idx` (`compra_id` ASC) VISIBLE,
  CONSTRAINT `cliente_usuario_id`
    FOREIGN KEY (`cliente_usuario_id`)
    REFERENCES `homeservice`.`usuarios` (`id`)
    ON DELETE NO ACTION
    ON UPDATE NO ACTION,
  CONSTRAINT `cliente_direccion_id`
    FOREIGN KEY (`cliente_direccion_id`)
    REFERENCES `homeservice`.`direcciones` (`id`)
    ON DELETE NO ACTION
    ON UPDATE NO ACTION,
  CONSTRAINT `cliente_orden_id`
    FOREIGN KEY (`cliente_orden_id`)
    REFERENCES `homeservice`.`ordenes` (`id`)
    ON DELETE NO ACTION
    ON UPDATE NO ACTION,
  CONSTRAINT `compra_id`
    FOREIGN KEY (`compra_id`)
    REFERENCES `homeservice`.`compras` (`id`)
    ON DELETE NO ACTION
    ON UPDATE NO ACTION)
ENGINE = InnoDB;


SET SQL_MODE=@OLD_SQL_MODE;
SET FOREIGN_KEY_CHECKS=@OLD_FOREIGN_KEY_CHECKS;
SET UNIQUE_CHECKS=@OLD_UNIQUE_CHECKS;