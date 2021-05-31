CREATE TABLE `TalentBoard`
(
    `name`               VARCHAR(256) NOT NULL,
    `skills`             JSON         NOT NULL COMMENT 'Array of skills of the user -> ["EC2", "Lambda"]',
    `industry`           VARCHAR(256) NOT NULL,
    `jobRole`            VARCHAR(256) NOT NULL,
    `proficiencyLevel`   VARCHAR(18)  NOT NULL,
    `visibilityDuration` TINYINT(4) NOT NULL COMMENT '1 -> 15 days, 2 -> 30 days, 3 -> 45 days, 4 -> 60 days, 5 -> 90 days',
    `relocation`         TINYINT(1) NOT NULL DEFAULT '0',
    `state`              VARCHAR(128) NOT NULL,
    `city`               VARCHAR(128) NOT NULL,
    `experience`         TINYINT(10) DEFAULT NULL COMMENT 'The experience of the user. 1 -> 0-1 year, 2 -> 1-3 years, 3 -> 4 - 7 years, 4 -> 8-10 years, 5 -> 11-15 years, 6 -> 16+ years',
    `linkedinUrl`        TEXT CHARACTER SET utf8 NOT NULL,
    `createdAt`          TIMESTAMP NOT NULL DEFAULT CURRENT_TIMESTAMP,
    `updatedAt`          TIMESTAMP NULL DEFAULT NULL ON UPDATE CURRENT_TIMESTAMP,
    `expireAfter`        DATE         NOT NULL,
    `profileStatus`      TINYINT(4) DEFAULT '1'
) ENGINE=InnoDB DEFAULT CHARSET=latin1
