CREATE TABLE `TalentBoard`
(
    `name`               varchar(256) NOT NULL,
    `skills`             json         NOT NULL COMMENT 'Array of skills of the user -> ["EC2", "Lambda"]',
    `industry`           varchar(256) NOT NULL,
    `jobRole`            varchar(256) NOT NULL,
    `proficiencyLevel`   varchar(18)  NOT NULL,
    `visibilityDuration` tinyint(4) NOT NULL COMMENT '1 -> 15 days, 2 -> 30 days, 3 -> 45 days, 4 -> 60 days, 5 -> 90 days',
    `relocation`         tinyint(1) NOT NULL DEFAULT '0',
    `state`              varchar(128) NOT NULL,
    `city`               varchar(128) NOT NULL,
    `experience`         tinyint(10) DEFAULT NULL COMMENT 'The experience of the user. 1 -> 0-1 year, 2 -> 1-3 years, 3 -> 4 - 7 years, 4 -> 8-10 years, 5 -> 11-15 years, 6 -> 16+ years',
    `linkedinUrl`        text CHARACTER SET utf8 NOT NULL,
    `createdAt`          timestamp    NOT NULL DEFAULT CURRENT_TIMESTAMP,
    `updatedAt`          timestamp NULL DEFAULT NULL ON UPDATE CURRENT_TIMESTAMP,
    `expireAfter`        date         NOT NULL,
    `profileStatus`      tinyint(4) DEFAULT '1'
) ENGINE=InnoDB DEFAULT CHARSET=latin1
