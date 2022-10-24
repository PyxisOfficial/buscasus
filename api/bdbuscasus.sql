-- phpMyAdmin SQL Dump
-- version 5.0.4
-- https://www.phpmyadmin.net/
--
-- Host: 127.0.0.1
-- Generation Time: Oct 24, 2022 at 10:31 PM
-- Server version: 10.4.17-MariaDB
-- PHP Version: 8.0.2

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Database: `bdbuscasus`
--

-- --------------------------------------------------------

--
-- Table structure for table `tbadmin`
--

CREATE TABLE `tbadmin` (
  `idAdmin` int(11) NOT NULL,
  `loginAdmin` varchar(100) NOT NULL,
  `senhaAdmin` varchar(100) NOT NULL,
  `tipoAdmin` tinyint(1) NOT NULL,
  `idHospital` int(11) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Dumping data for table `tbadmin`
--

INSERT INTO `tbadmin` (`idAdmin`, `loginAdmin`, `senhaAdmin`, `tipoAdmin`, `idHospital`) VALUES
(1, 'admin', '123', 1, 0),
(2, 'hospital', '123', 0, 1),
(3, 'hospital2', '123', 0, 2),
(4, 'hospital3', '123', 0, 3);

-- --------------------------------------------------------

--
-- Table structure for table `tbespecialidade`
--

CREATE TABLE `tbespecialidade` (
  `idEspecialidade` int(11) NOT NULL,
  `nomeEspecialidade` varchar(100) NOT NULL,
  `idHospital` int(11) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Dumping data for table `tbespecialidade`
--

INSERT INTO `tbespecialidade` (`idEspecialidade`, `nomeEspecialidade`, `idHospital`) VALUES
(1, 'Ortopedia', 1),
(2, 'Dermatologia', 1),
(3, 'Ginecologia', 1),
(4, 'Anestesiologia', 1),
(5, 'Pediatria', 1),
(6, 'Oftalmologia', 1),
(7, 'Obstetricia', 1),
(8, 'Urologia', 1),
(9, 'Oncologia', 1),
(10, 'Endocrinologia', 1),
(11, 'Hematologia', 1),
(12, 'Neurologia', 1),
(13, 'Patologia', 1);

-- --------------------------------------------------------

--
-- Table structure for table `tbhospital`
--

CREATE TABLE `tbhospital` (
  `idHospital` int(11) NOT NULL,
  `nomeHospital` varchar(100) NOT NULL,
  `emailHospital` varchar(150) NOT NULL,
  `aberturaHospital` time NOT NULL,
  `fechamentoHospital` time NOT NULL,
  `cnpjHospital` varchar(18) NOT NULL,
  `ufHospital` varchar(2) NOT NULL,
  `logradouroHospital` varchar(150) NOT NULL,
  `complementoHospital` varchar(100) NOT NULL,
  `cepHospital` varchar(10) NOT NULL,
  `cidadeHospital` varchar(50) NOT NULL,
  `bairroHospital` varchar(50) NOT NULL,
  `fotoHospital` varchar(200) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Dumping data for table `tbhospital`
--

INSERT INTO `tbhospital` (`idHospital`, `nomeHospital`, `emailHospital`, `aberturaHospital`, `fechamentoHospital`, `cnpjHospital`, `ufHospital`, `logradouroHospital`, `complementoHospital`, `cepHospital`, `cidadeHospital`, `bairroHospital`, `fotoHospital`) VALUES
(1, 'Hospital Geral de Guaianazes', 'hospitalgeral@gmail.com', '00:00:00', '12:59:00', '96.192.941/0001-43', 'SP', 'Av. Miguel Achiole da Fonseca, 135', '', '08461-110', 'São Paulo', 'Jardim São Paulo', 'hospital-geral.jpg'),
(2, 'Hospital Regional de Ferraz de Vasconcelos', 'hospitalferraz@gmail.com', '00:00:00', '23:59:00', '12.273.666/0001-00', 'SP', 'Rua Princesa Isabel', '', '08502-200', 'Ferraz de Vasconcelos', 'Vila Correa', 'regional-ferraz.jpg'),
(3, 'Hospital Santa Maria', 'hospitalsantamaria@gmail.com', '00:00:00', '23:59:00', '28.526.827/0001-52', 'SP', 'Avenida Armando Salles de Oliveira', '', '08673-000', 'Suzano', 'Parque Suzano', 'santa-maria.jpg');

-- --------------------------------------------------------

--
-- Table structure for table `tbmedico`
--

CREATE TABLE `tbmedico` (
  `idMedico` int(11) NOT NULL,
  `nomeMedico` varchar(100) NOT NULL,
  `cpfMedico` varchar(14) NOT NULL,
  `crmMedico` varchar(13) NOT NULL,
  `fotoMedico` varchar(150) NOT NULL,
  `idEspecialidade` int(11) NOT NULL,
  `idHospital` int(11) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Dumping data for table `tbmedico`
--

INSERT INTO `tbmedico` (`idMedico`, `nomeMedico`, `cpfMedico`, `crmMedico`, `fotoMedico`, `idEspecialidade`, `idHospital`) VALUES
(1, 'Dorivaldo Benegripe', '550.428.460-00', 'CRM/SP 123456', 'medico.jpg', 1, 1),
(2, 'Paulo Mendonça', '229.761.370-99', 'CRM/SP 345676', 'medico-4.jpg', 2, 1),
(3, 'Liz Neiva Macena', '693.977.460-22', 'CRM/SP 574535', 'medico-6.jpg', 3, 1),
(4, 'Laura Morais Canário', '443.336.660-90', 'CRM/SP 468523', 'medico-7.jpg', 4, 1),
(5, 'Valentim Ramos Monte', '897.043.620-05', 'CRM/SP 468511', 'medico-1.png', 5, 1),
(6, 'Virgílio Aldeia Rangel', '354.471.870-79', 'CRM/SP 544633', 'medico-2.jpg', 6, 1),
(7, 'Izabella Leão Milheirão', '760.615.780-40', 'CRM/SP 655432', 'medico-8.png', 7, 1),
(8, 'Luna Serpa Olivares', '991.764.430-00', 'CRM/SP 842564', 'medico-5.png', 8, 1);

-- --------------------------------------------------------

--
-- Table structure for table `tbplantao`
--

CREATE TABLE `tbplantao` (
  `idPlantao` int(11) NOT NULL,
  `dataPlantao` date NOT NULL,
  `inicioPlantao` time NOT NULL,
  `fimPlantao` time NOT NULL,
  `idEspecialidade` int(11) NOT NULL,
  `idMedico` int(11) NOT NULL,
  `idHospital` int(11) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

-- --------------------------------------------------------

--
-- Table structure for table `tbreclamacao`
--

CREATE TABLE `tbreclamacao` (
  `idReclamacao` int(11) NOT NULL,
  `txtReclamacao` text NOT NULL,
  `dataReclamacao` date NOT NULL,
  `dataPlantao` date NOT NULL,
  `idUsuario` int(11) NOT NULL,
  `idHospital` int(11) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

-- --------------------------------------------------------

--
-- Table structure for table `tbtelefone`
--

CREATE TABLE `tbtelefone` (
  `idTelefone` int(11) NOT NULL,
  `numTelefone` varchar(15) NOT NULL,
  `idHospital` int(11) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Dumping data for table `tbtelefone`
--

INSERT INTO `tbtelefone` (`idTelefone`, `numTelefone`, `idHospital`) VALUES
(1, '(11) 2551-3300', 1),
(2, '(11) 4674-8400', 2),
(3, '(11) 4746-5188', 3);

-- --------------------------------------------------------

--
-- Table structure for table `tbusuario`
--

CREATE TABLE `tbusuario` (
  `idUsuario` int(11) NOT NULL,
  `nomeUsuario` varchar(100) NOT NULL,
  `dtNasctoUsuario` date DEFAULT NULL,
  `senhaUsuario` varchar(100) NOT NULL,
  `cpfUsuario` varchar(14) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Indexes for dumped tables
--

--
-- Indexes for table `tbadmin`
--
ALTER TABLE `tbadmin`
  ADD PRIMARY KEY (`idAdmin`),
  ADD KEY `fk_idHospital` (`idHospital`);

--
-- Indexes for table `tbespecialidade`
--
ALTER TABLE `tbespecialidade`
  ADD PRIMARY KEY (`idEspecialidade`),
  ADD KEY `fk_idHospital` (`idHospital`);

--
-- Indexes for table `tbhospital`
--
ALTER TABLE `tbhospital`
  ADD PRIMARY KEY (`idHospital`);

--
-- Indexes for table `tbmedico`
--
ALTER TABLE `tbmedico`
  ADD PRIMARY KEY (`idMedico`),
  ADD KEY `fk_idEspecialidade` (`idEspecialidade`),
  ADD KEY `fk_idHospital` (`idHospital`);

--
-- Indexes for table `tbplantao`
--
ALTER TABLE `tbplantao`
  ADD PRIMARY KEY (`idPlantao`),
  ADD KEY `fk_idMedico` (`idMedico`) USING BTREE,
  ADD KEY `fk_idHospital` (`idHospital`),
  ADD KEY `fk_idEspecialidade` (`idEspecialidade`);

--
-- Indexes for table `tbreclamacao`
--
ALTER TABLE `tbreclamacao`
  ADD PRIMARY KEY (`idReclamacao`),
  ADD KEY `fk_idUsuario` (`idUsuario`) USING BTREE,
  ADD KEY `fk_idHospital` (`idHospital`) USING BTREE;

--
-- Indexes for table `tbtelefone`
--
ALTER TABLE `tbtelefone`
  ADD PRIMARY KEY (`idTelefone`),
  ADD KEY `fk_idHospital` (`idHospital`);

--
-- Indexes for table `tbusuario`
--
ALTER TABLE `tbusuario`
  ADD PRIMARY KEY (`idUsuario`);

--
-- AUTO_INCREMENT for dumped tables
--

--
-- AUTO_INCREMENT for table `tbadmin`
--
ALTER TABLE `tbadmin`
  MODIFY `idAdmin` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=5;

--
-- AUTO_INCREMENT for table `tbespecialidade`
--
ALTER TABLE `tbespecialidade`
  MODIFY `idEspecialidade` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=14;

--
-- AUTO_INCREMENT for table `tbhospital`
--
ALTER TABLE `tbhospital`
  MODIFY `idHospital` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=4;

--
-- AUTO_INCREMENT for table `tbmedico`
--
ALTER TABLE `tbmedico`
  MODIFY `idMedico` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=9;

--
-- AUTO_INCREMENT for table `tbplantao`
--
ALTER TABLE `tbplantao`
  MODIFY `idPlantao` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=5;

--
-- AUTO_INCREMENT for table `tbreclamacao`
--
ALTER TABLE `tbreclamacao`
  MODIFY `idReclamacao` int(11) NOT NULL AUTO_INCREMENT;

--
-- AUTO_INCREMENT for table `tbtelefone`
--
ALTER TABLE `tbtelefone`
  MODIFY `idTelefone` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=4;

--
-- AUTO_INCREMENT for table `tbusuario`
--
ALTER TABLE `tbusuario`
  MODIFY `idUsuario` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=2;
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
