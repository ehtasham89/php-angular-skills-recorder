-- phpMyAdmin SQL Dump
-- version 4.7.4
-- https://www.phpmyadmin.net/
--
-- Host: 127.0.0.1
-- Generation Time: Apr 10, 2018 at 06:02 AM
-- Server version: 10.1.30-MariaDB
-- PHP Version: 7.2.1

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
SET AUTOCOMMIT = 0;
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Database: `questions`
--

-- --------------------------------------------------------

--
-- Table structure for table `migrations`
--

CREATE TABLE `migrations` (
  `id` int(10) UNSIGNED NOT NULL,
  `migration` varchar(255) COLLATE utf8mb4_unicode_ci NOT NULL,
  `batch` int(11) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

--
-- Dumping data for table `migrations`
--

INSERT INTO `migrations` (`id`, `migration`, `batch`) VALUES
(1, '2018_04_09_075005_questions', 1),
(2, '2018_04_09_075050_user_answers', 1);

-- --------------------------------------------------------

--
-- Table structure for table `questions`
--

CREATE TABLE `questions` (
  `id` int(10) UNSIGNED NOT NULL,
  `title` varchar(255) COLLATE utf8mb4_unicode_ci NOT NULL,
  `default_answer` float NOT NULL,
  `created_at` timestamp NULL DEFAULT NULL,
  `updated_at` timestamp NULL DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

--
-- Dumping data for table `questions`
--

INSERT INTO `questions` (`id`, `title`, `default_answer`, `created_at`, `updated_at`) VALUES
(1, 'PHP', 5, NULL, NULL),
(2, 'JavaScript', 5, NULL, NULL),
(3, 'NodeJS', 5, NULL, NULL),
(4, 'Angular', 5, NULL, NULL),
(5, 'MySQL', 5, NULL, NULL),
(6, 'MongoDB', 5, NULL, NULL),
(7, 'HTML5', 5, NULL, NULL),
(8, 'CSS', 5, NULL, NULL),
(9, 'ReactJS', 5, NULL, NULL),
(10, 'React-Native', 5, NULL, NULL);

-- --------------------------------------------------------

--
-- Table structure for table `user`
--

CREATE TABLE `user` (
  `id` int(10) UNSIGNED NOT NULL,
  `name` varchar(255) COLLATE utf8mb4_unicode_ci NOT NULL,
  `email` varchar(255) COLLATE utf8mb4_unicode_ci NOT NULL,
  `password` varchar(255) COLLATE utf8mb4_unicode_ci NOT NULL,
  `created_at` timestamp NULL DEFAULT NULL,
  `updated_at` timestamp NULL DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

--
-- Dumping data for table `user`
--

INSERT INTO `user` (`id`, `name`, `email`, `password`, `created_at`, `updated_at`) VALUES
(1, 'Usman Nasir', 'usman@gmail.com', '', NULL, NULL),
(3, 'Awais', 'awais@gmail.com', '', NULL, NULL),
(4, 'Ehtasham Nasir', 'ehtasham.nasir89@gmail.com', '', NULL, NULL),
(5, 'Jawad', 'jawad@gmail.com', '', NULL, NULL),
(6, 'Qasim', 'qasim@gmail.com', '', NULL, NULL),
(7, 'Zaigham', 'zaigham@gmail.com', '', NULL, NULL),
(8, 'Asjad', 'asjad@gmail.com', '', NULL, NULL),
(9, 'Waqas', 'waqas@gmail.com', '', NULL, NULL),
(10, 'Usman Tariq', 'usman.tariq@gmail.com', '', NULL, NULL),
(11, 'Hyder', 'hyder@gmail.com', '', NULL, NULL),
(12, 'Arslan', 'arslan@gmail.com', '', NULL, NULL),
(13, 'Usama Khalid', 'usama.khalid@gmail.com', '', NULL, NULL),
(14, 'Ali', 'ali@gmail.com', '', NULL, NULL),
(15, 'Bilal', 'bilal@gmail.com', '', NULL, NULL),
(16, 'Adil', 'adil@gmail.com', '', NULL, NULL);

-- --------------------------------------------------------

--
-- Table structure for table `users_answers`
--

CREATE TABLE `users_answers` (
  `id` int(10) UNSIGNED NOT NULL,
  `user_id` int(11) NOT NULL,
  `question_id` int(11) NOT NULL,
  `answer` double NOT NULL,
  `created_at` timestamp NULL DEFAULT NULL,
  `updated_at` timestamp NULL DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

--
-- Dumping data for table `users_answers`
--

INSERT INTO `users_answers` (`id`, `user_id`, `question_id`, `answer`, `created_at`, `updated_at`) VALUES
(1, 1, 1, 5, NULL, NULL),
(2, 1, 2, 5, NULL, NULL),
(3, 1, 3, 5, NULL, NULL),
(4, 1, 4, 5, NULL, NULL),
(5, 1, 5, 5, NULL, NULL),
(6, 1, 6, 5, NULL, NULL),
(7, 1, 7, 5, NULL, NULL),
(8, 1, 8, 5, NULL, NULL),
(9, 1, 9, 5, NULL, NULL),
(10, 1, 10, 5, NULL, NULL),
(21, 3, 1, 5, NULL, NULL),
(22, 3, 2, 6.34, NULL, NULL),
(23, 3, 3, 3.92, NULL, NULL),
(24, 3, 4, 5.41, NULL, NULL),
(25, 3, 5, 5, NULL, NULL),
(26, 3, 6, 2.78, NULL, NULL),
(27, 3, 7, 5, NULL, NULL),
(28, 3, 8, 6, NULL, NULL),
(29, 3, 9, 5, NULL, NULL),
(30, 3, 10, 5, NULL, NULL),
(31, 4, 1, 8.72, NULL, NULL),
(32, 4, 2, 8.17, NULL, NULL),
(33, 4, 3, 7.08, NULL, NULL),
(34, 4, 4, 8.87, NULL, NULL),
(35, 4, 5, 6.69, NULL, NULL),
(36, 4, 6, 6.94, NULL, NULL),
(37, 4, 7, 8.34, NULL, NULL),
(38, 4, 8, 7.73, NULL, NULL),
(39, 4, 9, 7.08, NULL, NULL),
(40, 4, 10, 6.04, NULL, NULL),
(41, 5, 1, 7.18, NULL, NULL),
(42, 5, 2, 6.39, NULL, NULL),
(43, 5, 3, 5.8, NULL, NULL),
(44, 5, 4, 2.6, NULL, NULL),
(45, 5, 5, 6.39, NULL, NULL),
(46, 5, 6, 5.5, NULL, NULL),
(47, 5, 7, 6.96, NULL, NULL),
(48, 5, 8, 5.3, NULL, NULL),
(49, 5, 9, 2.48, NULL, NULL),
(50, 5, 10, 1.24, NULL, NULL),
(51, 6, 1, 6.39, NULL, NULL),
(52, 6, 2, 3.82, NULL, NULL),
(53, 6, 3, 6.14, NULL, NULL),
(54, 6, 4, 3.82, NULL, NULL),
(55, 6, 5, 5.6, NULL, NULL),
(56, 6, 6, 3.77, NULL, NULL),
(57, 6, 7, 7.03, NULL, NULL),
(58, 6, 8, 5.85, NULL, NULL),
(59, 6, 9, 3.62, NULL, NULL),
(60, 6, 10, 3.22, NULL, NULL),
(61, 7, 1, 4.41, NULL, NULL),
(62, 7, 2, 6.34, NULL, NULL),
(63, 7, 3, 4.16, NULL, NULL),
(64, 7, 4, 5.65, NULL, NULL),
(65, 7, 5, 6.02, NULL, NULL),
(66, 7, 6, 4.56, NULL, NULL),
(67, 7, 7, 6.69, NULL, NULL),
(68, 7, 8, 4.26, NULL, NULL),
(69, 7, 9, 6.19, NULL, NULL),
(70, 7, 10, 4.51, NULL, NULL),
(71, 8, 1, 7.08, NULL, NULL),
(72, 8, 2, 3.42, NULL, NULL),
(73, 8, 3, 3.32, NULL, NULL),
(74, 8, 4, 4.21, NULL, NULL),
(75, 8, 5, 7.53, NULL, NULL),
(76, 8, 6, 3.92, NULL, NULL),
(77, 8, 7, 8.02, NULL, NULL),
(78, 8, 8, 7.28, NULL, NULL),
(79, 8, 9, 3.07, NULL, NULL),
(80, 8, 10, 7.93, NULL, NULL),
(81, 9, 1, 7.98, NULL, NULL),
(82, 9, 2, 2.43, NULL, NULL),
(83, 9, 3, 3.32, NULL, NULL),
(84, 9, 4, 3.12, NULL, NULL),
(85, 9, 5, 3.12, NULL, NULL),
(86, 9, 6, 2.88, NULL, NULL),
(87, 9, 7, 7.08, NULL, NULL),
(88, 9, 8, 3.32, NULL, NULL),
(89, 9, 9, 2.68, NULL, NULL),
(90, 9, 10, 8.22, NULL, NULL),
(91, 10, 1, 6.69, NULL, NULL),
(92, 10, 2, 7.53, NULL, NULL),
(93, 10, 3, 6.59, NULL, NULL),
(94, 10, 4, 8.12, NULL, NULL),
(95, 10, 5, 7.93, NULL, NULL),
(96, 10, 6, 5.95, NULL, NULL),
(97, 10, 7, 7.98, NULL, NULL),
(98, 10, 8, 8.37, NULL, NULL),
(99, 10, 9, 6, NULL, NULL),
(100, 10, 10, 2.6, NULL, NULL),
(101, 11, 1, 7.68, NULL, NULL),
(102, 11, 2, 9.04, NULL, NULL),
(103, 11, 3, 8.17, NULL, NULL),
(104, 11, 4, 7.28, NULL, NULL),
(105, 11, 5, 9.11, NULL, NULL),
(106, 11, 6, 7.53, NULL, NULL),
(107, 11, 7, 9.11, NULL, NULL),
(108, 11, 8, 9.36, NULL, NULL),
(109, 11, 9, 6.24, NULL, NULL),
(110, 11, 10, 5.7, NULL, NULL),
(111, 12, 1, 9.21, NULL, NULL),
(112, 12, 2, 8.12, NULL, NULL),
(113, 12, 3, 6.04, NULL, NULL),
(114, 12, 4, 3.47, NULL, NULL),
(115, 12, 5, 8.12, NULL, NULL),
(116, 12, 6, 6.09, NULL, NULL),
(117, 12, 7, 8.62, NULL, NULL),
(118, 12, 8, 6.94, NULL, NULL),
(119, 12, 9, 3.27, NULL, NULL),
(120, 12, 10, 1.44, NULL, NULL),
(121, 13, 1, 2.7, NULL, NULL),
(122, 13, 2, 2.08, NULL, NULL),
(123, 13, 3, 3.57, NULL, NULL),
(124, 13, 4, 1.44, NULL, NULL),
(125, 13, 5, 6.89, NULL, NULL),
(126, 13, 6, 2.58, NULL, NULL),
(127, 13, 7, 6.19, NULL, NULL),
(128, 13, 8, 2.48, NULL, NULL),
(129, 13, 9, 0.95, NULL, NULL),
(130, 13, 10, 1.79, NULL, NULL),
(131, 14, 1, 2.33, NULL, NULL),
(132, 14, 2, 7.18, NULL, NULL),
(133, 14, 3, 2.78, NULL, NULL),
(134, 14, 4, 6.94, NULL, NULL),
(135, 14, 5, 3.87, NULL, NULL),
(136, 14, 6, 5.95, NULL, NULL),
(137, 14, 7, 2.73, NULL, NULL),
(138, 14, 8, 7.63, NULL, NULL),
(139, 14, 9, 4.06, NULL, NULL),
(140, 14, 10, 5, NULL, NULL),
(141, 15, 1, 6.89, NULL, NULL),
(142, 15, 2, 3.62, NULL, NULL),
(143, 15, 3, 7.28, NULL, NULL),
(144, 15, 4, 5, NULL, NULL),
(145, 15, 5, 2.98, NULL, NULL),
(146, 15, 6, 7.48, NULL, NULL),
(147, 15, 7, 3.82, NULL, NULL),
(148, 15, 8, 3.87, NULL, NULL),
(149, 15, 9, 6.44, NULL, NULL),
(150, 15, 10, 3.87, NULL, NULL),
(151, 16, 1, 7.13, NULL, NULL),
(152, 16, 2, 2.93, NULL, NULL),
(153, 16, 3, 6.74, NULL, NULL),
(154, 16, 4, 5, NULL, NULL),
(155, 16, 5, 2.18, NULL, NULL),
(156, 16, 6, 6.94, NULL, NULL),
(157, 16, 7, 1.74, NULL, NULL),
(158, 16, 8, 6.49, NULL, NULL),
(159, 16, 9, 2.63, NULL, NULL),
(160, 16, 10, 7.18, NULL, NULL);

--
-- Indexes for dumped tables
--

--
-- Indexes for table `migrations`
--
ALTER TABLE `migrations`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `questions`
--
ALTER TABLE `questions`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `user`
--
ALTER TABLE `user`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `users_answers`
--
ALTER TABLE `users_answers`
  ADD PRIMARY KEY (`id`);

--
-- AUTO_INCREMENT for dumped tables
--

--
-- AUTO_INCREMENT for table `migrations`
--
ALTER TABLE `migrations`
  MODIFY `id` int(10) UNSIGNED NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=3;

--
-- AUTO_INCREMENT for table `questions`
--
ALTER TABLE `questions`
  MODIFY `id` int(10) UNSIGNED NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=11;

--
-- AUTO_INCREMENT for table `user`
--
ALTER TABLE `user`
  MODIFY `id` int(10) UNSIGNED NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=17;

--
-- AUTO_INCREMENT for table `users_answers`
--
ALTER TABLE `users_answers`
  MODIFY `id` int(10) UNSIGNED NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=161;
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
