-- phpMyAdmin SQL Dump
-- version 5.1.1
-- https://www.phpmyadmin.net/
--
-- Host: 127.0.0.1
-- Tempo de geração: 08-Nov-2022 às 21:52
-- Versão do servidor: 10.4.21-MariaDB
-- versão do PHP: 8.0.12

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Banco de dados: `bdbuscasus`
--

-- --------------------------------------------------------

--
-- Estrutura da tabela `tbadmin`
--

CREATE TABLE `tbadmin` (
  `idAdmin` int(11) NOT NULL,
  `loginAdmin` varchar(100) NOT NULL,
  `senhaAdmin` varchar(100) NOT NULL,
  `tipoAdmin` tinyint(1) NOT NULL,
  `idHospital` int(11) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Extraindo dados da tabela `tbadmin`
--

INSERT INTO `tbadmin` (`idAdmin`, `loginAdmin`, `senhaAdmin`, `tipoAdmin`, `idHospital`) VALUES
(1, 'admin', '12345678', 1, 0),
(2, 'hospital', '12345678', 0, 1),
(3, 'hospital2', '12345678', 0, 2),
(4, 'hospital3', '12345678', 0, 3),
(6, 'a', 's', 0, 1);

-- --------------------------------------------------------

--
-- Estrutura da tabela `tbespecialidade`
--

CREATE TABLE `tbespecialidade` (
  `idEspecialidade` int(11) NOT NULL,
  `nomeEspecialidade` varchar(100) NOT NULL,
  `idHospital` int(11) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Extraindo dados da tabela `tbespecialidade`
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
-- Estrutura da tabela `tbhospital`
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
  `fotoHospital` varchar(200) NOT NULL,
  `loginHospital` int(11) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Extraindo dados da tabela `tbhospital`
--

INSERT INTO `tbhospital` (`idHospital`, `nomeHospital`, `emailHospital`, `aberturaHospital`, `fechamentoHospital`, `cnpjHospital`, `ufHospital`, `logradouroHospital`, `complementoHospital`, `cepHospital`, `cidadeHospital`, `bairroHospital`, `fotoHospital`, `loginHospital`) VALUES
(1, 'Hospital Geral de Guaianazes', 'hospitalgeral@gmail.com', '00:00:00', '12:59:00', '96.192.941/0001-43', 'SP', 'Av. Miguel Achiole da Fonseca, 135', '', '08461-11', 'São Paulo', 'Jardim São Paulo', 'hospital-geral.jpg', 0),
(2, 'Hospital Regional de Ferraz de Vasconcelos', 'hospitalferraz@gmail.com', '00:00:00', '23:59:00', '12.273.666/0001-00', 'SP', 'Rua Princesa Isabel', '', '08502-200', 'Ferraz de Vasconcelos', 'Vila Correa', 'regional-ferraz.jpg', 0),
(3, 'Hospital Santa Maria', 'hospitalsantamaria@gmail.com', '00:00:00', '23:59:00', '28.526.827/0001-52', 'SP', 'Avenida Armando Salles de Oliveira', '', '08673-000', 'Suzano', 'Parque Suzano', 'santa-maria.jpg', 0);

-- --------------------------------------------------------

--
-- Estrutura da tabela `tbmedico`
--

CREATE TABLE `tbmedico` (
  `idMedico` int(11) NOT NULL,
  `nomeMedico` varchar(100) NOT NULL,
  `cpfMedico` varchar(14) NOT NULL,
  `crmMedico` varchar(13) NOT NULL,
  `fotoMedico` varchar(150) NOT NULL,
  `ausenciasMedico` int(11) NOT NULL,
  `idEspecialidade` int(11) NOT NULL,
  `idHospital` int(11) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Extraindo dados da tabela `tbmedico`
--

INSERT INTO `tbmedico` (`idMedico`, `nomeMedico`, `cpfMedico`, `crmMedico`, `fotoMedico`, `ausenciasMedico`, `idEspecialidade`, `idHospital`) VALUES
(1, 'Dorivaldo Benegripe', '550.428.460-00', 'CRM/SP 123456', 'medico.jpg', 2, 1, 1),
(2, 'Paulo Mendonça', '229.761.370-99', 'CRM/SP 345676', 'medico-4.jpg', 3, 2, 1),
(3, 'Liz Neiva Macena', '693.977.460-22', 'CRM/SP 574535', 'medico-6.jpg', 1, 3, 1),
(4, 'Laura Morais Canário', '443.336.660-90', 'CRM/SP 468523', 'medico-7.jpg', 1, 4, 1),
(5, 'Valentim Ramos Monte', '897.043.620-05', 'CRM/SP 468511', 'medico-1.png', 2, 5, 1),
(6, 'Virgílio Aldeia Rangel', '354.471.870-79', 'CRM/SP 544633', 'medico-2.jpg', 1, 6, 1),
(7, 'Izabella Leão Milheirão', '760.615.780-40', 'CRM/SP 655432', 'medico-8.png', 2, 7, 1),
(8, 'Luna Serpa Olivares', '991.764.430-00', 'CRM/SP 842564', 'medico-5.png', 6, 8, 1);

-- --------------------------------------------------------

--
-- Estrutura da tabela `tbplantao`
--

CREATE TABLE `tbplantao` (
  `idPlantao` int(11) NOT NULL,
  `dataPlantao` date NOT NULL,
  `inicioPlantao` time NOT NULL,
  `fimPlantao` time NOT NULL,
  `idTipoPlantao` int(11) NOT NULL,
  `idMedico` int(11) NOT NULL,
  `presencaMedico` tinyint(1) NOT NULL,
  `idHospital` int(11) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Extraindo dados da tabela `tbplantao`
--

INSERT INTO `tbplantao` (`idPlantao`, `dataPlantao`, `inicioPlantao`, `fimPlantao`, `idTipoPlantao`, `idMedico`, `presencaMedico`, `idHospital`) VALUES
(5, '2022-11-09', '08:00:00', '21:00:00', 1, 1, 0, 1);

-- --------------------------------------------------------

--
-- Estrutura da tabela `tbreclamacao`
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
-- Estrutura da tabela `tbtelefone`
--

CREATE TABLE `tbtelefone` (
  `idTelefone` int(11) NOT NULL,
  `numTelefone` varchar(15) NOT NULL,
  `idHospital` int(11) NOT NULL,
  `idMedico` int(11) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Extraindo dados da tabela `tbtelefone`
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
-- Estrutura da tabela `tbtipoplantao`
--

CREATE TABLE `tbtipoplantao` (
  `idTipoPlantao` int(11) NOT NULL,
  `tipoPlantao` varchar(100) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Extraindo dados da tabela `tbtipoplantao`
--

INSERT INTO `tbtipoplantao` (`idTipoPlantao`, `tipoPlantao`) VALUES
(1, 'COVID');

-- --------------------------------------------------------

--
-- Estrutura da tabela `tbtiporeclamacao`
--

CREATE TABLE `tbtiporeclamacao` (
  `idTipoReclamacao` int(11) NOT NULL,
  `tipoReclamacao` varchar(80) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Índices para tabelas despejadas
--

--
-- Índices para tabela `tbadmin`
--
ALTER TABLE `tbadmin`
  ADD PRIMARY KEY (`idAdmin`),
  ADD KEY `fk_idHospital` (`idHospital`);

--
-- Índices para tabela `tbespecialidade`
--
ALTER TABLE `tbespecialidade`
  ADD PRIMARY KEY (`idEspecialidade`),
  ADD KEY `fk_idHospital` (`idHospital`);

--
-- Índices para tabela `tbhospital`
--
ALTER TABLE `tbhospital`
  ADD PRIMARY KEY (`idHospital`);

--
-- Índices para tabela `tbmedico`
--
ALTER TABLE `tbmedico`
  ADD PRIMARY KEY (`idMedico`),
  ADD KEY `fk_idEspecialidade` (`idEspecialidade`),
  ADD KEY `fk_idHospital` (`idHospital`);

--
-- Índices para tabela `tbplantao`
--
ALTER TABLE `tbplantao`
  ADD PRIMARY KEY (`idPlantao`),
  ADD KEY `fk_idMedico` (`idMedico`) USING BTREE,
  ADD KEY `fk_idHospital` (`idHospital`),
  ADD KEY `fk_idTipoPlantao` (`idTipoPlantao`);

--
-- Índices para tabela `tbreclamacao`
--
ALTER TABLE `tbreclamacao`
  ADD PRIMARY KEY (`idReclamacao`),
  ADD KEY `fk_idTipoReclamacao` (`idTipoReclamacao`),
  ADD KEY `fk_idHospital` (`idHospital`);

--
-- Índices para tabela `tbtelefone`
--
ALTER TABLE `tbtelefone`
  ADD PRIMARY KEY (`idTelefone`),
  ADD KEY `fk_idHospital` (`idHospital`),
  ADD KEY `fk_idMedico` (`idMedico`);

--
-- Índices para tabela `tbtipoplantao`
--
ALTER TABLE `tbtipoplantao`
  ADD PRIMARY KEY (`idTipoPlantao`);

--
-- Índices para tabela `tbtiporeclamacao`
--
ALTER TABLE `tbtiporeclamacao`
  ADD PRIMARY KEY (`idTipoReclamacao`);

--
-- AUTO_INCREMENT de tabelas despejadas
--

--
-- AUTO_INCREMENT de tabela `tbadmin`
--
ALTER TABLE `tbadmin`
  MODIFY `idAdmin` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=7;

--
-- AUTO_INCREMENT de tabela `tbespecialidade`
--
ALTER TABLE `tbespecialidade`
  MODIFY `idEspecialidade` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=14;

--
-- AUTO_INCREMENT de tabela `tbhospital`
--
ALTER TABLE `tbhospital`
  MODIFY `idHospital` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=9;

--
-- AUTO_INCREMENT de tabela `tbmedico`
--
ALTER TABLE `tbmedico`
  MODIFY `idMedico` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=16;

--
-- AUTO_INCREMENT de tabela `tbplantao`
--
ALTER TABLE `tbplantao`
  MODIFY `idPlantao` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=14;

--
-- AUTO_INCREMENT de tabela `tbreclamacao`
--
ALTER TABLE `tbreclamacao`
  MODIFY `idReclamacao` int(11) NOT NULL AUTO_INCREMENT;

--
-- AUTO_INCREMENT de tabela `tbtelefone`
--
ALTER TABLE `tbtelefone`
  MODIFY `idTelefone` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=24;

--
-- AUTO_INCREMENT de tabela `tbtipoplantao`
--
ALTER TABLE `tbtipoplantao`
  MODIFY `idTipoPlantao` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=3;

--
-- AUTO_INCREMENT de tabela `tbtiporeclamacao`
--
ALTER TABLE `tbtiporeclamacao`
  MODIFY `idTipoReclamacao` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=4;
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
