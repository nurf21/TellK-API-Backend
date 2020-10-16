-- phpMyAdmin SQL Dump
-- version 5.0.2
-- https://www.phpmyadmin.net/
--
-- Host: 127.0.0.1
-- Generation Time: Oct 16, 2020 at 04:52 AM
-- Server version: 10.4.13-MariaDB
-- PHP Version: 7.4.8

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Database: `tellk`
--

-- --------------------------------------------------------

--
-- Table structure for table `contact`
--

CREATE TABLE `contact` (
  `contact_id` int(11) NOT NULL,
  `user_id` int(11) NOT NULL,
  `target_id` int(11) NOT NULL,
  `contact_created_at` timestamp NOT NULL DEFAULT current_timestamp()
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Dumping data for table `contact`
--

INSERT INTO `contact` (`contact_id`, `user_id`, `target_id`, `contact_created_at`) VALUES
(1, 2, 1, '2020-10-13 01:44:24'),
(2, 2, 3, '2020-10-13 01:46:16');

-- --------------------------------------------------------

--
-- Table structure for table `groups`
--

CREATE TABLE `groups` (
  `group_id` int(11) NOT NULL,
  `group_name` varchar(200) NOT NULL,
  `group_created_at` timestamp NOT NULL DEFAULT current_timestamp() ON UPDATE current_timestamp(),
  `group_updated_at` timestamp NOT NULL DEFAULT '0000-00-00 00:00:00'
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Dumping data for table `groups`
--

INSERT INTO `groups` (`group_id`, `group_name`, `group_created_at`, `group_updated_at`) VALUES
(1, 'HTML', '2020-10-15 08:20:34', '0000-00-00 00:00:00'),
(2, 'CSS', '2020-10-15 08:20:34', '0000-00-00 00:00:00');

-- --------------------------------------------------------

--
-- Table structure for table `message`
--

CREATE TABLE `message` (
  `message_id` int(11) NOT NULL,
  `room_id` int(11) NOT NULL,
  `user_id` int(11) NOT NULL,
  `message` text NOT NULL,
  `message_created_at` timestamp NOT NULL DEFAULT current_timestamp()
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Dumping data for table `message`
--

INSERT INTO `message` (`message_id`, `room_id`, `user_id`, `message`, `message_created_at`) VALUES
(3, 57105, 2, 'halo', '2020-10-13 08:14:08'),
(4, 7763, 2, 'hai', '2020-10-13 08:14:13'),
(5, 57105, 2, 'apa kabar?', '2020-10-13 08:17:14'),
(6, 7763, 2, 'test', '2020-10-13 09:50:53'),
(7, 57105, 2, 'hmm', '2020-10-13 09:53:41'),
(8, 7763, 2, 'asd', '2020-10-13 09:54:18'),
(9, 57105, 2, 'dsa', '2020-10-13 09:55:10'),
(10, 7763, 2, 'zxc', '2020-10-13 09:56:48'),
(11, 57105, 1, 'baik', '2020-10-13 09:57:48'),
(12, 57105, 1, 'ok', '2020-10-13 09:58:12'),
(13, 57105, 2, 'apa kabar?', '2020-10-13 09:58:37'),
(14, 57105, 1, 'baik', '2020-10-13 09:59:49'),
(15, 57105, 2, 'sip', '2020-10-13 09:59:55'),
(16, 57105, 1, 'test', '2020-10-13 10:00:05'),
(17, 57105, 2, 'test juga', '2020-10-13 10:00:13'),
(18, 57105, 1, 'he', '2020-10-13 10:00:23'),
(19, 57105, 2, 'test', '2020-10-13 10:02:31'),
(20, 7763, 2, 'aaa', '2020-10-13 10:05:23'),
(21, 57105, 2, 'asd', '2020-10-13 10:10:18'),
(22, 57105, 1, 'hei', '2020-10-13 10:11:16'),
(23, 57105, 2, 'hei juga', '2020-10-13 10:11:24'),
(24, 57105, 1, 'hai', '2020-10-14 04:31:48'),
(25, 57105, 1, 'test', '2020-10-14 04:32:20'),
(26, 7763, 2, 'wkkw', '2020-10-14 04:32:28'),
(27, 57105, 1, 'test lagi', '2020-10-14 04:32:31'),
(28, 7763, 2, 'hmm', '2020-10-14 04:32:59'),
(29, 57105, 1, 'a', '2020-10-14 04:33:05'),
(30, 7763, 2, 'test', '2020-10-14 04:34:13'),
(31, 57105, 1, 'b', '2020-10-14 04:34:21'),
(32, 57105, 1, 'test', '2020-10-14 08:06:55'),
(33, 57105, 1, 'a', '2020-10-14 08:08:40'),
(34, 57105, 1, 'test', '2020-10-14 08:14:05'),
(35, 57105, 1, 'aa', '2020-10-14 08:15:56'),
(36, 57105, 1, 'bb', '2020-10-14 08:24:55'),
(37, 57105, 1, 'cc', '2020-10-14 08:26:33'),
(38, 57105, 2, 'a', '2020-10-14 08:31:54'),
(39, 57105, 2, 'b', '2020-10-14 08:32:30'),
(40, 57105, 2, 'c', '2020-10-14 08:34:33'),
(41, 57105, 2, '', '2020-10-14 08:34:39'),
(42, 57105, 1, 'd', '2020-10-14 08:34:44'),
(43, 57105, 1, 'e', '2020-10-14 08:35:20'),
(44, 57105, 1, 'f', '2020-10-14 08:35:42'),
(45, 57105, 1, 'g', '2020-10-14 08:50:06'),
(46, 57105, 1, 'h', '2020-10-14 08:50:24'),
(47, 57105, 2, 'asd', '2020-10-14 08:50:56'),
(48, 57105, 1, 'dsa', '2020-10-14 10:29:22'),
(49, 57105, 2, 'asd', '2020-10-14 10:29:50'),
(50, 57105, 1, 'fgh', '2020-10-14 10:30:11'),
(51, 57105, 2, 'halooooo', '2020-10-14 10:30:34'),
(52, 57105, 1, 'halo juga', '2020-10-14 10:30:47'),
(53, 57105, 2, 'test', '2020-10-14 10:31:29'),
(54, 57105, 1, 'test lagi', '2020-10-14 10:31:37'),
(55, 57105, 1, 'hmm', '2020-10-14 10:31:45'),
(59, 1, 2, 'Halo dari group HTML', '2020-10-15 08:31:39'),
(60, 2, 1, 'Halo dari group CSS', '2020-10-15 08:31:39'),
(61, 1, 2, 'test', '2020-10-15 08:08:32'),
(62, 57105, 2, 'test', '2020-10-15 08:10:44'),
(63, 7763, 2, 'asd', '2020-10-15 08:10:58'),
(64, 57105, 1, 'ASD', '2020-10-15 09:50:56'),
(65, 57105, 2, 'SDA', '2020-10-15 09:51:07'),
(66, 1, 2, 'HMM', '2020-10-15 09:51:37'),
(67, 1, 1, 'test', '2020-10-15 09:51:42'),
(68, 1, 2, 'haa', '2020-10-15 08:22:36'),
(69, 1, 2, 'asd', '2020-10-15 10:14:09');

-- --------------------------------------------------------

--
-- Table structure for table `room`
--

CREATE TABLE `room` (
  `id` int(11) NOT NULL,
  `room_id` int(11) NOT NULL,
  `user_id` int(11) NOT NULL,
  `room_created_at` timestamp NOT NULL DEFAULT current_timestamp(),
  `room_updated_at` timestamp NOT NULL DEFAULT '0000-00-00 00:00:00'
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Dumping data for table `room`
--

INSERT INTO `room` (`id`, `room_id`, `user_id`, `room_created_at`, `room_updated_at`) VALUES
(1, 57105, 2, '2020-10-13 01:44:35', '2020-10-15 09:51:07'),
(2, 57105, 1, '2020-10-13 01:44:35', '2020-10-15 09:51:07'),
(3, 7763, 2, '2020-10-13 01:46:22', '2020-10-15 08:10:58'),
(4, 7763, 3, '2020-10-13 01:46:22', '2020-10-15 08:10:58');

-- --------------------------------------------------------

--
-- Table structure for table `user`
--

CREATE TABLE `user` (
  `user_id` int(11) NOT NULL,
  `user_name` varchar(200) NOT NULL,
  `user_email` varchar(200) NOT NULL,
  `user_password` varchar(200) NOT NULL,
  `user_image` varchar(200) NOT NULL,
  `user_phone` varchar(13) NOT NULL,
  `user_lat` varchar(200) NOT NULL,
  `user_lng` varchar(200) NOT NULL,
  `user_activity` int(1) NOT NULL DEFAULT 0,
  `user_key` int(11) NOT NULL,
  `user_status` int(1) NOT NULL,
  `user_created_at` timestamp NOT NULL DEFAULT current_timestamp(),
  `user_updated_at` timestamp NOT NULL DEFAULT '0000-00-00 00:00:00'
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Dumping data for table `user`
--

INSERT INTO `user` (`user_id`, `user_name`, `user_email`, `user_password`, `user_image`, `user_phone`, `user_lat`, `user_lng`, `user_activity`, `user_key`, `user_status`, `user_created_at`, `user_updated_at`) VALUES
(1, 'Giri', 'test1@test.com', '$2b$08$poVIbZlyCfimFAfTXDnJWOQ24E/Y4x8yVoZCauRgUxHCr/OGHnrTG', '2020-10-13T08-22-08.300Z-depositphotos_179308454-stock-illustration-unknown-person-silhouette-glasses-profile.jpg', '081234567890', '-6.7215264', '108.5669429', 0, 0, 1, '2020-10-13 00:57:24', '2020-10-15 09:53:55'),
(2, 'Said', 'nurfauzangiri@gmail.com', '$2b$07$GhSIVXDfEo3Jb5WNKQWAU.xGDcr/h/aQfpD.GLRNv2j3CpxAJvnwy', '2020-10-13T07-54-13.151Z-avatar.png', '081234567891', '-6.721461', '108.56692869999999', 0, 0, 1, '2020-10-13 00:59:56', '2020-10-15 12:50:08'),
(3, 'Nurfauzan', 'test2@test.com', '$2b$08$fMTZ273D4ZS.br95TvgUU.mcwvoBUnO35vxDhu0DFWDpCrTYA56Xe', 'blank-profile.jpg', '081234567892', '-6.7215412', '108.5669348', 0, 0, 1, '2020-10-13 01:45:39', '2020-10-14 10:47:46');

--
-- Indexes for dumped tables
--

--
-- Indexes for table `contact`
--
ALTER TABLE `contact`
  ADD PRIMARY KEY (`contact_id`);

--
-- Indexes for table `groups`
--
ALTER TABLE `groups`
  ADD PRIMARY KEY (`group_id`);

--
-- Indexes for table `message`
--
ALTER TABLE `message`
  ADD PRIMARY KEY (`message_id`);

--
-- Indexes for table `room`
--
ALTER TABLE `room`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `user`
--
ALTER TABLE `user`
  ADD PRIMARY KEY (`user_id`);

--
-- AUTO_INCREMENT for dumped tables
--

--
-- AUTO_INCREMENT for table `contact`
--
ALTER TABLE `contact`
  MODIFY `contact_id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=3;

--
-- AUTO_INCREMENT for table `groups`
--
ALTER TABLE `groups`
  MODIFY `group_id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=3;

--
-- AUTO_INCREMENT for table `message`
--
ALTER TABLE `message`
  MODIFY `message_id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=70;

--
-- AUTO_INCREMENT for table `room`
--
ALTER TABLE `room`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=5;

--
-- AUTO_INCREMENT for table `user`
--
ALTER TABLE `user`
  MODIFY `user_id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=4;
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
