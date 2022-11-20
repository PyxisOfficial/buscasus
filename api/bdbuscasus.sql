-- phpMyAdmin SQL Dump
-- version 5.0.4
-- https://www.phpmyadmin.net/
--
-- Host: 127.0.0.1
-- Generation Time: Nov 20, 2022 at 02:11 AM
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
  `primeiroAcesso` tinyint(1) NOT NULL,
  `idHospital` int(11) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Dumping data for table `tbadmin`
--

INSERT INTO `tbadmin` (`idAdmin`, `loginAdmin`, `senhaAdmin`, `tipoAdmin`, `primeiroAcesso`, `idHospital`) VALUES
(1, 'admin', '12345678', 1, 0, 0),
(2, 'hospital', '12345678', 0, 0, 1),
(3, 'hospital2', '12345678', 0, 0, 2),
(4, 'hospital3', '12345678', 0, 0, 3);

-- --------------------------------------------------------

--
-- Table structure for table `tbespecialidade`
--

CREATE TABLE `tbespecialidade` (
  `idEspecialidade` int(11) NOT NULL,
  `nomeEspecialidade` varchar(100) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Dumping data for table `tbespecialidade`
--

INSERT INTO `tbespecialidade` (`idEspecialidade`, `nomeEspecialidade`) VALUES
(1, 'Ortopedia'),
(2, 'Dermatologia'),
(3, 'Ginecologia'),
(4, 'Anestesiologia'),
(5, 'Pediatria'),
(6, 'Oftalmologia'),
(7, 'Obstetricia'),
(8, 'Urologia'),
(9, 'Oncologia'),
(10, 'Endocrinologia'),
(11, 'Hematologia'),
(12, 'Neurologia'),
(13, 'Patologia');

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
(1, 'Hospital Geral de Guaianazes', 'hospitalgeral@gmail.com', '00:00:00', '12:59:00', '96.192.941/0001-43', 'SP', 'Av. Miguel Achiole da Fonseca, 135', '', '08461-11', 'São Paulo', 'Jardim São Paulo', 'hospital-geral.jpg'),
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
  `ausenciasMedico` int(11) NOT NULL,
  `idHospital` int(11) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Dumping data for table `tbmedico`
--

INSERT INTO `tbmedico` (`idMedico`, `nomeMedico`, `cpfMedico`, `crmMedico`, `fotoMedico`, `ausenciasMedico`, `idHospital`) VALUES
(1, 'Dorivaldo Benegripe', '550.428.460-00', 'CRM/SP 123456', 'medico.jpg', 2, 1),
(2, 'Paulo Mendonça', '229.761.370-99', 'CRM/SP 345676', 'medico-4.jpg', 3, 1),
(3, 'Liz Neiva Macena', '693.977.460-22', 'CRM/SP 574535', 'medico-6.jpg', 1, 1),
(4, 'Laura Morais Canário', '443.336.660-90', 'CRM/SP 468523', 'medico-7.jpg', 1, 1),
(5, 'Valentim Ramos Monte', '897.043.620-05', 'CRM/SP 468511', 'medico-1.png', 2, 1),
(6, 'Virgílio Aldeia Rangel', '354.471.870-79', 'CRM/SP 544633', 'medico-2.jpg', 1, 1),
(7, 'Izabella Leão Milheirão', '760.615.780-40', 'CRM/SP 655432', 'medico-8.png', 2, 1),
(8, 'Luna Serpa Olivares', '991.764.430-00', 'CRM/SP 842564', 'medico-5.png', 6, 1);

-- --------------------------------------------------------

--
-- Table structure for table `tbmedicoespecialidade`
--

CREATE TABLE `tbmedicoespecialidade` (
  `idMedicoEspecialidade` int(11) NOT NULL,
  `idMedico` int(11) NOT NULL,
  `idEspecialidade` int(11) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Dumping data for table `tbmedicoespecialidade`
--

INSERT INTO `tbmedicoespecialidade` (`idMedicoEspecialidade`, `idMedico`, `idEspecialidade`) VALUES
(1, 1, 1),
(2, 1, 2),
(3, 2, 1),
(4, 2, 2),
(5, 3, 3),
(6, 3, 4),
(7, 4, 8),
(8, 4, 9),
(9, 5, 4),
(10, 5, 8),
(11, 6, 10),
(12, 6, 11),
(13, 7, 7),
(14, 7, 6),
(15, 8, 3),
(16, 8, 12);

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
  `presencaMedico` tinyint(1) NOT NULL,
  `idHospital` int(11) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

-- --------------------------------------------------------

--
-- Table structure for table `tbreclamacao`
--

CREATE TABLE `tbreclamacao` (
  `idReclamacao` int(11) NOT NULL,
  `emailUsuario` varchar(100) NOT NULL,
  `txtReclamacao` text NOT NULL,
  `dataReclamacao` timestamp NOT NULL DEFAULT current_timestamp() ON UPDATE current_timestamp(),
  `dataPlantao` date NOT NULL,
  `idTipoReclamacao` int(11) NOT NULL,
  `idHospital` int(11) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

-- --------------------------------------------------------

--
-- Table structure for table `tbtelefone`
--

CREATE TABLE `tbtelefone` (
  `idTelefone` int(11) NOT NULL,
  `numTelefone` varchar(15) NOT NULL,
  `idHospital` int(11) NOT NULL,
  `idMedico` int(11) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Dumping data for table `tbtelefone`
--

INSERT INTO `tbtelefone` (`idTelefone`, `numTelefone`, `idHospital`, `idMedico`) VALUES
(1, '(11) 2551-3303', 1, 0),
(2, '(11) 4674-8400', 2, 0),
(3, '(11) 4746-5188', 3, 0),
(4, '(11) 32088-7614', 0, 1),
(5, '(11) 3560-9569', 0, 2),
(6, '(11) 2182-3782', 0, 3),
(7, '(11) 2425-6651', 0, 4),
(8, '(11) 2968-3134', 0, 5),
(9, '(11) 3318-0148', 0, 6),
(10, '(11) 3684-1273', 0, 7),
(11, '(11) 3269-2158', 0, 8);

-- --------------------------------------------------------

--
-- Table structure for table `tbtiporeclamacao`
--

CREATE TABLE `tbtiporeclamacao` (
  `idTipoReclamacao` int(11) NOT NULL,
  `tipoReclamacao` varchar(80) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

-- --------------------------------------------------------

--
-- Table structure for table `tbusuario`
--

CREATE TABLE `tbusuario` (
  `idUsuario` int(11) NOT NULL,
  `nomeUsuario` varchar(60) NOT NULL,
  `emailUsuario` varchar(100) NOT NULL,
  `senhaUsuario` varchar(60) NOT NULL,
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
  ADD PRIMARY KEY (`idEspecialidade`);

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
  ADD KEY `fk_idHospital` (`idHospital`);

--
-- Indexes for table `tbmedicoespecialidade`
--
ALTER TABLE `tbmedicoespecialidade`
  ADD PRIMARY KEY (`idMedicoEspecialidade`),
  ADD KEY `fk_idMedico` (`idMedico`),
  ADD KEY `fk_idEspecialidade` (`idEspecialidade`);

--
-- Indexes for table `tbplantao`
--
ALTER TABLE `tbplantao`
  ADD PRIMARY KEY (`idPlantao`),
  ADD KEY `fk_idMedico` (`idMedico`) USING BTREE,
  ADD KEY `fk_idHospital` (`idHospital`),
  ADD KEY `fk_idTipoPlantao` (`idEspecialidade`);

--
-- Indexes for table `tbreclamacao`
--
ALTER TABLE `tbreclamacao`
  ADD PRIMARY KEY (`idReclamacao`),
  ADD KEY `fk_idTipoReclamacao` (`idTipoReclamacao`),
  ADD KEY `fk_idHospital` (`idHospital`);

--
-- Indexes for table `tbtelefone`
--
ALTER TABLE `tbtelefone`
  ADD PRIMARY KEY (`idTelefone`),
  ADD KEY `fk_idHospital` (`idHospital`),
  ADD KEY `fk_idMedico` (`idMedico`);

--
-- Indexes for table `tbtiporeclamacao`
--
ALTER TABLE `tbtiporeclamacao`
  ADD PRIMARY KEY (`idTipoReclamacao`);

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
  MODIFY `idAdmin` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=9;

--
-- AUTO_INCREMENT for table `tbespecialidade`
--
ALTER TABLE `tbespecialidade`
  MODIFY `idEspecialidade` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=16;

--
-- AUTO_INCREMENT for table `tbhospital`
--
ALTER TABLE `tbhospital`
  MODIFY `idHospital` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=9;

--
-- AUTO_INCREMENT for table `tbmedico`
--
ALTER TABLE `tbmedico`
  MODIFY `idMedico` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=19;

--
-- AUTO_INCREMENT for table `tbmedicoespecialidade`
--
ALTER TABLE `tbmedicoespecialidade`
  MODIFY `idMedicoEspecialidade` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=17;

--
-- AUTO_INCREMENT for table `tbplantao`
--
ALTER TABLE `tbplantao`
  MODIFY `idPlantao` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=36;

--
-- AUTO_INCREMENT for table `tbreclamacao`
--
ALTER TABLE `tbreclamacao`
  MODIFY `idReclamacao` int(11) NOT NULL AUTO_INCREMENT;

--
-- AUTO_INCREMENT for table `tbtelefone`
--
ALTER TABLE `tbtelefone`
  MODIFY `idTelefone` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=27;

--
-- AUTO_INCREMENT for table `tbtiporeclamacao`
--
ALTER TABLE `tbtiporeclamacao`
  MODIFY `idTipoReclamacao` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=7;

--
-- AUTO_INCREMENT for table `tbusuario`
--
ALTER TABLE `tbusuario`
  MODIFY `idUsuario` int(11) NOT NULL AUTO_INCREMENT;
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
