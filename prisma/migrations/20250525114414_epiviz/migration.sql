-- CreateTable
CREATE TABLE `calendar` (
    `id` INTEGER NOT NULL AUTO_INCREMENT,
    `date_value` DATE NOT NULL,

    UNIQUE INDEX `date_value`(`date_value`),
    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `data` (
    `id` INTEGER NOT NULL AUTO_INCREMENT,
    `total_cases` INTEGER NOT NULL,
    `total_deaths` INTEGER NOT NULL,
    `new_cases` INTEGER NOT NULL,
    `new_deaths` INTEGER NOT NULL,
    `id_location` INTEGER NOT NULL,
    `id_pandemie` INTEGER NOT NULL,
    `id_calendar` INTEGER NOT NULL,

    INDEX `id_calendar`(`id_calendar`),
    INDEX `id_location`(`id_location`),
    INDEX `id_pandemie`(`id_pandemie`),
    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `location` (
    `id` INTEGER NOT NULL AUTO_INCREMENT,
    `country` VARCHAR(255) NOT NULL,
    `continent` VARCHAR(255) NULL,
    `latitude` DECIMAL(15, 6) NULL,
    `longitude` DECIMAL(15, 6) NULL,

    UNIQUE INDEX `country`(`country`),
    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `pandemie` (
    `id` INTEGER NOT NULL AUTO_INCREMENT,
    `type` VARCHAR(255) NULL,

    UNIQUE INDEX `type`(`type`),
    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `prediction` (
    `id` INTEGER NOT NULL AUTO_INCREMENT,
    `total_cases` INTEGER NOT NULL,
    `total_deaths` INTEGER NOT NULL,
    `new_cases` INTEGER NOT NULL,
    `new_deaths` INTEGER NOT NULL,
    `id_location` INTEGER NOT NULL,
    `id_pandemie` INTEGER NOT NULL,
    `id_calendar` INTEGER NOT NULL,

    INDEX `id_calendar`(`id_calendar`),
    INDEX `id_location`(`id_location`),
    INDEX `id_pandemie`(`id_pandemie`),
    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- AddForeignKey
ALTER TABLE `data` ADD CONSTRAINT `fk_data_calendar` FOREIGN KEY (`id_calendar`) REFERENCES `calendar`(`id`) ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `data` ADD CONSTRAINT `fk_data_location` FOREIGN KEY (`id_location`) REFERENCES `location`(`id`) ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `data` ADD CONSTRAINT `fk_data_pandemie` FOREIGN KEY (`id_pandemie`) REFERENCES `pandemie`(`id`) ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `prediction` ADD CONSTRAINT `fk_prediction_calendar` FOREIGN KEY (`id_calendar`) REFERENCES `calendar`(`id`) ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `prediction` ADD CONSTRAINT `fk_prediction_location` FOREIGN KEY (`id_location`) REFERENCES `location`(`id`) ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `prediction` ADD CONSTRAINT `fk_prediction_pandemie` FOREIGN KEY (`id_pandemie`) REFERENCES `pandemie`(`id`) ON DELETE RESTRICT ON UPDATE CASCADE;
