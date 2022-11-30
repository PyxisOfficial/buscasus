-- phpMyAdmin SQL Dump
-- version 5.1.0
-- https://www.phpmyadmin.net/
--
-- Host: 127.0.0.1
-- Tempo de geração: 30-Nov-2022 às 02:56
-- Versão do servidor: 10.4.19-MariaDB
-- versão do PHP: 8.0.6

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
  `primeiroAcesso` tinyint(1) NOT NULL,
  `idHospital` int(11) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Extraindo dados da tabela `tbadmin`
--

INSERT INTO `tbadmin` (`idAdmin`, `loginAdmin`, `senhaAdmin`, `tipoAdmin`, `primeiroAcesso`, `idHospital`) VALUES
(1, 'admin', '123', 1, 0, 0),
(2, 'adminHospitalGeralGuaianases', '1234', 0, 0, 1),
(3, 'adminHospitalDelphinaRinaldi', '1234', 0, 0, 2),
(4, 'adminHospitalRioMar', '1234', 0, 0, 3),
(5, 'adminHospitalGetulioVargas', '1234', 0, 0, 6),
(6, 'adminHospitalAdventistaManaus', '1234', 0, 0, 9),
(7, 'adminHospitalAlbertEinstein', '1234', 0, 0, 5),
(8, 'adminHospitalCentralGuaianases', '1234', 0, 0, 10),
(9, 'adminHospitalMunicipalSouzaAguiar', '1234', 0, 0, 7),
(10, 'adminHospitalSantaMarcelina', '1234', 0, 0, 4),
(11, 'adminHospitalUniversitárioFranciscaMendes', '1234', 0, 0, 8);

-- --------------------------------------------------------

--
-- Estrutura da tabela `tbespecialidade`
--

CREATE TABLE `tbespecialidade` (
  `idEspecialidade` int(11) NOT NULL,
  `nomeEspecialidade` varchar(100) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Extraindo dados da tabela `tbespecialidade`
--

INSERT INTO `tbespecialidade` (`idEspecialidade`, `nomeEspecialidade`) VALUES
(1, 'Clínico Geral'),
(2, 'Imunologia'),
(3, 'Angiologia'),
(4, 'Cardiologia'),
(5, 'Cirurgia Geral'),
(6, 'Cirurgia Pediátrica'),
(7, 'Cirurgia Plástica'),
(8, ' Clínica Médica'),
(9, 'Dermatologia'),
(10, 'Infecto-Parasitárias'),
(11, 'DST/AIDS'),
(12, 'Endocrinologia'),
(13, 'Fisiatria'),
(14, 'Fonoaudiologia '),
(15, 'Gastroenterologia'),
(16, 'Genética'),
(17, 'Geriatria'),
(18, 'Ginecologia'),
(19, 'Hematologia'),
(20, 'Homeopatia'),
(21, 'Acupuntura '),
(22, ' Medicina Preventiva e Social'),
(23, 'Nefrologia'),
(24, 'Neurologia'),
(25, ' Nutrição e Dietética'),
(26, 'Obstetrícia'),
(27, 'Odontologia'),
(28, 'Oftalmologia'),
(29, 'Oncologia'),
(30, 'Ortopedia '),
(31, 'Traumatologia'),
(32, 'Otorrinolaringologia'),
(33, 'Pediatria'),
(34, 'Psicologia '),
(35, 'Pneumologia'),
(36, 'Proctologia'),
(37, 'Psiquiatria'),
(38, 'Reumatologia'),
(39, 'Urologia'),
(40, 'Neurocirurgia');

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
  `fotoHospital` varchar(200) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Extraindo dados da tabela `tbhospital`
--

INSERT INTO `tbhospital` (`idHospital`, `nomeHospital`, `emailHospital`, `aberturaHospital`, `fechamentoHospital`, `cnpjHospital`, `ufHospital`, `logradouroHospital`, `complementoHospital`, `cepHospital`, `cidadeHospital`, `bairroHospital`, `fotoHospital`) VALUES
(1, 'Hospital Geral de Guaianases', 'HospitalGeralGuaianases@gmail.com', '00:00:00', '23:59:00', '46.374.500/0109-04', 'SP', 'Avenida Miguel Achiole da Fonceca', '', '08461-110', 'São Paulo', 'Jardim São Paulo(Zona Leste)', 'hospitalGeralGuaianases.jpg'),
(2, 'Hospital Delphina Rinaldi Abdel Aziz', 'HospitalDelphinaRinaldi@gmail.com', '00:00:00', '23:59:00', '23.453.830/0022-02', 'AM', 'Avenida Torquato Tapajós', '', '69093-415', 'Manaus', 'Colônia Terra Nova', 'hospitalDelphinaRinaldi.png'),
(3, 'Hospital Rio Mar', 'HospitalRioMar@gmail.com', '00:00:00', '23:59:00', '32.154.700/0001-27', 'RJ', 'Rua Augusto Camossa Saldanha', '', '22793-310', 'Rio de Janeiro', 'Barra da Tijuca', 'hospitalRioMar.jpg'),
(4, 'Hospital Santa Marcelina', 'HospitalSantaMarcelina@gmail.com', '00:00:00', '23:59:00', '60.742.616/0001-60', 'SP', 'Rua Santa Marcelina', '', '08270-070', 'São Paulo', 'Vila Carmosina', 'hospitalSantaMarcelina.jpg'),
(5, 'Hospital Albert Einstein', 'HospitalAlbertEinstein@gmail.com', '00:00:00', '23:59:00', '60.765.823/0001-30', 'SP', 'Avenida Albert Einstein', '', '05652-900', 'São Paulo', 'Jardim Leonor', 'hospitalAlbertEinstein.jpg'),
(6, 'Hospital Getúlio Vargas', 'HospitalGetulioVargas@gmail.com', '00:00:00', '23:59:00', '10.572.048/0005-51', 'RJ', 'Avenida Lobo Júnior', '', '21070-061', 'Rio de Janeiro', 'Penha Circular', 'hospitalGetulioVargas.jpg'),
(7, 'Hospital Municipal Souza Aguiar', 'HospitalMunicipalSouzaAguiar@gmail.com', '00:00:00', '23:59:00', '29.468.055/0002-93', 'RJ', 'Praça da República', '', '20211-350', 'Rio de Janeiro', 'Centro', 'hospitalMunicipalSouzaAguiar.jpg'),
(8, 'Hospital Universitário Francisca Mendes', 'HospitalUniversitárioFranciscaMendes@gmail.com', '07:00:00', '16:00:00', '21.245.455/0001-47', 'AM', 'Avenida Camapuã', '', '69097-720', 'Manaus', 'Cidade Nova', 'hospitalUniversitárioFranciscaMendes.jpg'),
(9, 'Hospital Adventista de Manaus', 'HospitalAdventistaManaus@gmail.com', '00:00:00', '23:59:00', '83.367.342/0007-67', 'AM', 'Avenida Governador Danilo Areosa', '', '69075-351', 'Manaus', 'Distrito Industrial I', 'hospitalAdventistaManaus.jpeg'),
(10, 'Hospital Central de Guaianases', 'HospitalCentralGuaianases@gmail.com', '00:00:00', '23:59:00', '53.636.015/0001-07', 'SP', 'Rua Cabo José Teixeira', '', '08451-010', 'São Paulo', 'Vila Iolanda(Lajeado)', 'hospitalCentralGuaianases.jpg');

-- --------------------------------------------------------

--
-- Estrutura da tabela `tbmedico`
--

CREATE TABLE `tbmedico` (
  `idMedico` int(11) NOT NULL,
  `nomeMedico` varchar(100) NOT NULL,
  `cpfMedico` varchar(14) NOT NULL,
  `crmMedico` varchar(13) NOT NULL,
  `fotoMedico` varchar(150) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Extraindo dados da tabela `tbmedico`
--

INSERT INTO `tbmedico` (`idMedico`, `nomeMedico`, `cpfMedico`, `crmMedico`, `fotoMedico`) VALUES
(1, 'Ana Lúcia de Paula', '958.466.470-06', 'CRM/SP 198765', 'doutoraAna.jpg'),
(2, 'Simone da Silva Santos Ferreira', '306.326.300-19', 'CRM/RJ 434252', 'doutoraSimone.jpg'),
(3, 'Humberto Tadeu Silveira Pinto', '340.433.790-56', 'CRM/RJ 652425', 'doutorHumberto.jpg'),
(4, 'Simara Campos Ferreira', '140.054.260-00', 'CRM/SP 786543', 'doutoraSimara.jpg'),
(5, 'Gustavo José Alencar Pinto', '273.441.410-43', 'CRM/SP 091726', 'images.jpg'),
(6, 'Dorivaldo Benegripe de Amora Camporim', '980.518.260-60', 'CRM/AM 826672', 'doutorDorivaldo.jpg'),
(7, 'Antônio José dos Santos Junior ', '306.741.120-08', 'CRM/SP 252415', 'doutorJunior.jpg'),
(8, 'Lenildo dos Santos', '811.238.210-70', 'CRM/SP 754252', 'doutorBruno.jpg'),
(9, 'Vanessa Duarte Costa', '504.060.680-03', 'CRM/RJ 656792', 'doutoraEduarda.jpg'),
(10, 'Marlon Marques', '933.396.140-24', 'CRM/SP 982617', 'doutorAlexandre.jpg'),
(12, 'Clodoaldo Pinheiro Bastos', '802.682.070-38', 'CRM/AM 278394', 'doutorCaua.jpg'),
(13, 'Alan Vidal de Negreiros ', '973.389.060-09', 'CRM/AM 912325', 'doutorRhian.jpg'),
(14, 'Aline Mendonça Cordeiro ', '283.278.290-68', 'CRM/AM 979775', 'doutoraKiriko.jpg'),
(15, 'Elaine Lima Silva', '303.673.410-42', 'CRM/AM 876522', 'doutoraAline.jpg'),
(16, 'Regiane Astigarraga Falconeri', '160.512.080-46', 'CRM/RJ 825362', 'doutoraFernanda.jpg'),
(17, 'Leandro Coelho Saraiva', '947.261.660-77', 'CRM/RJ 998425', 'doutorCleber.jpg'),
(18, 'André Simão de Almeira', '626.878.210-04', 'CRM/RJ 765923', 'doutorRhuan.jpg'),
(19, 'Luciano Ferreira de Macedo', '185.519.580-11', 'CRM/RJ 827629', 'doutorGuilherme.jpg'),
(20, 'Emilene Pereira Lima', '916.867.520-83', 'CRM/RJ 425262', 'doutoraEmilene.jpg'),
(21, 'Carlos Eduardo de Carvalho', '038.461.240-79', 'CRM/SP 984352', 'carlo.jpg'),
(22, 'Rosângela Freire de Oliveira Silva', '060.903.590-84', 'CRM/SP 919286', 'rosangela.jpg'),
(23, 'Ana Aparecida Santiago Gomes', '495.501.320-13', 'CRM/SP 862425', 'santiago.jpg'),
(24, 'Ana Lúcia de Paula', '958.466.470-06', 'CRM/SP 198765', 'doutoraAna.jpg'),
(25, 'Simone da Silva Santos Ferreira', '306.326.300-19', 'CRM/RJ 434252', 'doutoraSimone.jpg'),
(26, 'Humberto Tadeu Silveira Pinto', '340.433.790-56', 'CRM/RJ 652425', 'doutorHumberto.jpg'),
(27, 'Simara Campos Ferreira', '140.054.260-00', 'CRM/SP 786543', 'doutoraSimara.jpg'),
(28, 'Gustavo José Alencar Pinto', '273.441.410-43', 'CRM/SP 091726', 'images.jpg'),
(29, 'Dorivaldo Benegripe de Amora Camporim', '980.518.260-60', 'CRM/AM 826672', 'doutorDorivaldo.jpg'),
(30, 'Antônio José dos Santos Junior ', '306.741.120-08', 'CRM/SP 252415', 'doutorJunior.jpg'),
(31, 'Lenildo dos Santos', '811.238.210-70', 'CRM/SP 754252', 'doutorBruno.jpg'),
(32, 'Vanessa Duarte Costa', '504.060.680-03', 'CRM/RJ 656792', 'doutoraEduarda.jpg'),
(33, 'Marlon Marques', '933.396.140-24', 'CRM/SP 982617', 'doutorAlexandre.jpg'),
(34, 'Clodoaldo Pinheiro Bastos', '802.682.070-38', 'CRM/AM 278394', 'doutorCaua.jpg'),
(35, 'Alan Vidal de Negreiros ', '973.389.060-09', 'CRM/AM 912325', 'doutorRhian.jpg'),
(36, 'Aline Mendonça Cordeiro ', '283.278.290-68', 'CRM/AM 979775', 'doutoraKiriko.jpg'),
(37, 'Elaine Lima Silva', '303.673.410-42', 'CRM/AM 876522', 'doutoraAline.jpg'),
(38, 'Regiane Astigarraga Falconeri', '160.512.080-46', 'CRM/RJ 825362', 'doutoraFernanda.jpg'),
(39, 'Leandro Coelho Saraiva', '947.261.660-77', 'CRM/RJ 998425', 'doutorCleber.jpg'),
(40, 'André Simão de Almeira', '626.878.210-04', 'CRM/RJ 765923', 'doutorRhuan.jpg'),
(41, 'Luciano Ferreira de Macedo', '185.519.580-11', 'CRM/RJ 827629', 'doutorGuilherme.jpg'),
(42, 'Emilene Pereira Lima', '916.867.520-83', 'CRM/RJ 425262', 'doutoraEmilene.jpg'),
(43, 'Carlos Eduardo de Carvalho', '038.461.240-79', 'CRM/SP 984352', 'carlo.jpg'),
(44, 'Rosângela Freire de Oliveira Silva', '060.903.590-84', 'CRM/SP 919286', 'rosangela.jpg'),
(45, 'Ana Aparecida Santiago Gomes', '495.501.320-13', 'CRM/SP 862425', 'santiago.jpg'),
(46, 'Ana Lúcia de Paula', '958.466.470-06', 'CRM/SP 198765', 'doutoraAna.jpg'),
(47, 'Simone da Silva Santos Ferreira', '306.326.300-19', 'CRM/RJ 434252', 'doutoraSimone.jpg'),
(48, 'Humberto Tadeu Silveira Pinto', '340.433.790-56', 'CRM/RJ 652425', 'doutorHumberto.jpg'),
(49, 'Simara Campos Ferreira', '140.054.260-00', 'CRM/SP 786543', 'doutoraSimara.jpg'),
(50, 'Gustavo José Alencar Pinto', '273.441.410-43', 'CRM/SP 091726', 'images.jpg'),
(51, 'Dorivaldo Benegripe de Amora Camporim', '980.518.260-60', 'CRM/AM 826672', 'doutorDorivaldo.jpg'),
(52, 'Antônio José dos Santos Junior ', '306.741.120-08', 'CRM/SP 252415', 'doutorJunior.jpg'),
(53, 'Lenildo dos Santos', '811.238.210-70', 'CRM/SP 754252', 'doutorBruno.jpg'),
(54, 'Vanessa Duarte Costa', '504.060.680-03', 'CRM/RJ 656792', 'doutoraEduarda.jpg'),
(55, 'Marlon Marx', '933.396.140-24', 'CRM/SP 982617', 'doutorAlexandre.jpg'),
(56, 'Clodoaldo Pinheiro Bastos', '802.682.070-38', 'CRM/AM 278394', 'doutorCaua.jpg'),
(57, 'Alan Vidal de Negreiros ', '973.389.060-09', 'CRM/AM 912325', 'doutorRhian.jpg'),
(58, 'Aline Mendonça Cordeiro ', '283.278.290-68', 'CRM/AM 979775', 'doutoraKiriko.jpg'),
(59, 'Elaine Lima Silva', '303.673.410-42', 'CRM/AM 876522', 'doutoraAline.jpg'),
(60, 'Regiane Astigarraga Falconeri', '160.512.080-46', 'CRM/RJ 825362', 'doutoraFernanda.jpg'),
(61, 'Leandro Coelho Saraiva', '947.261.660-77', 'CRM/RJ 998425', 'doutorCleber.jpg'),
(62, 'André Simão de Almeira', '626.878.210-04', 'CRM/RJ 765923', 'doutorRhuan.jpg'),
(63, 'Luciano Ferreira de Macedo', '185.519.580-11', 'CRM/RJ 827629', 'doutorGuilherme.jpg'),
(64, 'Emilene Pereira Lima', '916.867.520-83', 'CRM/RJ 425262', 'doutoraEmilene.jpg'),
(65, 'Carlos Eduardo de Carvalho', '038.461.240-79', 'CRM/SP 984352', 'carlo.jpg'),
(66, 'Rosângela Freire de Oliveira Silva', '060.903.590-84', 'CRM/SP 919286', 'rosangela.jpg'),
(67, 'Ana Aparecida Santiago Gomes', '495.501.320-13', 'CRM/SP 862425', 'santiago.jpg'),
(68, 'Ana Lúcia de Paula', '958.466.470-06', 'CRM/SP 198765', 'doutoraAna.jpg'),
(69, 'Simone da Silva Santos Ferreira', '306.326.300-19', 'CRM/RJ 434252', 'doutoraSimone.jpg'),
(70, 'Humberto Tadeu Silveira Pinto', '340.433.790-56', 'CRM/RJ 652425', 'doutorHumberto.jpg'),
(71, 'Simara Campos Ferreira', '140.054.260-00', 'CRM/SP 786543', 'doutoraSimara.jpg'),
(72, 'Gustavo José Alencar Pinto', '273.441.410-43', 'CRM/SP 091726', 'images.jpg'),
(73, 'Dorivaldo Benegripe de Amora Camporim', '980.518.260-60', 'CRM/AM 826672', 'doutorDorivaldo.jpg'),
(74, 'Antônio José dos Santos Junior ', '306.741.120-08', 'CRM/SP 252415', 'doutorJunior.jpg'),
(75, 'Lenildo dos Santos', '811.238.210-70', 'CRM/SP 754252', 'doutorBruno.jpg'),
(76, 'Vanessa Duarte Costa', '504.060.680-03', 'CRM/RJ 656792', 'doutoraEduarda.jpg'),
(77, 'Marlon Marx', '933.396.140-24', 'CRM/SP 982617', 'doutorAlexandre.jpg'),
(78, 'Clodoaldo Pinheiro Bastos', '802.682.070-38', 'CRM/AM 278394', 'doutorCaua.jpg'),
(79, 'Alan Vidal de Negreiros ', '973.389.060-09', 'CRM/AM 912325', 'doutorRhian.jpg'),
(80, 'Aline Mendonça Cordeiro ', '283.278.290-68', 'CRM/AM 979775', 'doutoraKiriko.jpg'),
(81, 'Elaine Lima Silva', '303.673.410-42', 'CRM/AM 876522', 'doutoraAline.jpg'),
(82, 'Regiane Astigarraga Falconeri', '160.512.080-46', 'CRM/RJ 825362', 'doutoraFernanda.jpg'),
(83, 'Leandro Coelho Saraiva', '947.261.660-77', 'CRM/RJ 998425', 'doutorCleber.jpg'),
(84, 'André Simão de Almeira', '626.878.210-04', 'CRM/RJ 765923', 'doutorRhuan.jpg'),
(85, 'Luciano Ferreira de Macedo', '185.519.580-11', 'CRM/RJ 827629', 'doutorGuilherme.jpg'),
(86, 'Emilene Pereira Lima', '916.867.520-83', 'CRM/RJ 425262', 'doutoraEmilene.jpg'),
(87, 'Carlos Eduardo de Carvalho', '038.461.240-79', 'CRM/SP 984352', 'carlo.jpg'),
(88, 'Rosângela Freire de Oliveira Silva', '060.903.590-84', 'CRM/SP 919286', 'rosangela.jpg'),
(89, 'Ana Aparecida Santiago Gomes', '495.501.320-13', 'CRM/SP 862425', 'santiago.jpg'),
(90, 'Ana Lúcia de Paula', '958.466.470-06', 'CRM/SP 198765', 'doutoraAna.jpg'),
(91, 'Simone da Silva Santos Ferreira', '306.326.300-19', 'CRM/RJ 434252', 'doutoraSimone.jpg'),
(93, 'Simara Campos Ferreira', '140.054.260-00', 'CRM/SP 786543', 'doutoraSimara.jpg'),
(94, 'Gustavo José Alencar Pinto', '273.441.410-43', 'CRM/SP 091726', 'images.jpg'),
(95, 'Dorivaldo Benegripe de Amora Camporim', '980.518.260-60', 'CRM/AM 826672', 'doutorDorivaldo.jpg'),
(96, 'Antônio José dos Santos Junior ', '306.741.120-08', 'CRM/SP 252415', 'doutorJunior.jpg'),
(97, 'Lenildo dos Santos', '811.238.210-70', 'CRM/SP 754252', 'doutorBruno.jpg'),
(98, 'Vanessa Duarte Costa', '504.060.680-03', 'CRM/RJ 656792', 'doutoraEduarda.jpg'),
(99, 'Marlon Marx', '933.396.140-24', 'CRM/SP 982617', 'doutorAlexandre.jpg'),
(100, 'Clodoaldo Pinheiro Bastos', '802.682.070-38', 'CRM/AM 278394', 'doutorCaua.jpg'),
(101, 'Alan Vidal de Negreiros ', '973.389.060-09', 'CRM/AM 912325', 'doutorRhian.jpg'),
(102, 'Aline Mendonça Cordeiro ', '283.278.290-68', 'CRM/AM 979775', 'doutoraKiriko.jpg'),
(103, 'Elaine Lima Silva', '303.673.410-42', 'CRM/AM 876522', 'doutoraAline.jpg'),
(104, 'Regiane Astigarraga Falconeri', '160.512.080-46', 'CRM/RJ 825362', 'doutoraFernanda.jpg'),
(105, 'Leandro Coelho Saraiva', '947.261.660-77', 'CRM/RJ 998425', 'doutorCleber.jpg'),
(106, 'André Simão de Almeira', '626.878.210-04', 'CRM/RJ 765923', 'doutorRhuan.jpg'),
(107, 'Luciano Ferreira de Macedo', '185.519.580-11', 'CRM/RJ 827629', 'doutorGuilherme.jpg'),
(108, 'Emilene Pereira Lima', '916.867.520-83', 'CRM/RJ 425262', 'doutoraEmilene.jpg'),
(109, 'Carlos Eduardo de Carvalho', '038.461.240-79', 'CRM/SP 984352', 'carlo.jpg'),
(110, 'Rosângela Freire de Oliveira Silva', '060.903.590-84', 'CRM/SP 919286', 'rosangela.jpg'),
(111, 'Ana Aparecida Santiago Gomes', '495.501.320-13', 'CRM/SP 862425', 'santiago.jpg'),
(112, 'Ana Lúcia de Paula', '958.466.470-06', 'CRM/SP 198765', 'doutoraAna.jpg'),
(113, 'Simone da Silva Santos Ferreira', '306.326.300-19', 'CRM/RJ 434252', 'doutoraSimone.jpg'),
(114, 'Humberto Tadeu Silveira Pinto', '340.433.790-56', 'CRM/RJ 652425', 'doutorHumberto.jpg'),
(115, 'Simara Campos Ferreira', '140.054.260-00', 'CRM/SP 786543', 'doutoraSimara.jpg'),
(116, 'Gustavo José Alencar Pinto', '273.441.410-43', 'CRM/SP 091726', 'images.jpg'),
(117, 'Dorivaldo Benegripe de Amora Camporim', '980.518.260-60', 'CRM/AM 826672', 'doutorDorivaldo.jpg'),
(118, 'Antônio José dos Santos Junior ', '306.741.120-08', 'CRM/SP 252415', 'doutorJunior.jpg'),
(119, 'Lenildo dos Santos', '811.238.210-70', 'CRM/SP 754252', 'doutorBruno.jpg'),
(120, 'Vanessa Duarte Costa', '504.060.680-03', 'CRM/RJ 656792', 'doutoraEduarda.jpg'),
(121, 'Marlon Marx', '933.396.140-24', 'CRM/SP 982617', 'doutorAlexandre.jpg'),
(122, 'Clodoaldo Pinheiro Bastos', '802.682.070-38', 'CRM/AM 278394', 'doutorCaua.jpg'),
(123, 'Alan Vidal de Negreiros ', '973.389.060-09', 'CRM/AM 912325', 'doutorRhian.jpg'),
(124, 'Aline Mendonça Cordeiro ', '283.278.290-68', 'CRM/AM 979775', 'doutoraKiriko.jpg'),
(125, 'Elaine Lima Silva', '303.673.410-42', 'CRM/AM 876522', 'doutoraAline.jpg'),
(126, 'Regiane Astigarraga Falconeri', '160.512.080-46', 'CRM/RJ 825362', 'doutoraFernanda.jpg'),
(127, 'Leandro Coelho Saraiva', '947.261.660-77', 'CRM/RJ 998425', 'doutorCleber.jpg'),
(128, 'André Simão de Almeira', '626.878.210-04', 'CRM/RJ 765923', 'doutorRhuan.jpg'),
(129, 'Luciano Ferreira de Macedo', '185.519.580-11', 'CRM/RJ 827629', 'doutorGuilherme.jpg'),
(130, 'Emilene Pereira Lima', '916.867.520-83', 'CRM/RJ 425262', 'doutoraEmilene.jpg'),
(131, 'Carlos Eduardo de Carvalho', '038.461.240-79', 'CRM/SP 984352', 'carlo.jpg'),
(132, 'Rosângela Freire de Oliveira Silva', '060.903.590-84', 'CRM/SP 919286', 'rosangela.jpg'),
(133, 'Ana Aparecida Santiago Gomes', '495.501.320-13', 'CRM/SP 862425', 'santiago.jpg'),
(134, 'Ana Lúcia de Paula', '958.466.470-06', 'CRM/SP 198765', 'doutoraAna.jpg'),
(135, 'Simone da Silva Santos Ferreira', '306.326.300-19', 'CRM/RJ 434252', 'doutoraSimone.jpg'),
(136, 'Humberto Tadeu Silveira Pinto', '340.433.790-56', 'CRM/RJ 652425', 'doutorHumberto.jpg'),
(137, 'Simara Campos Ferreira', '140.054.260-00', 'CRM/SP 786543', 'doutoraSimara.jpg'),
(138, 'Gustavo José Alencar Pinto', '273.441.410-43', 'CRM/SP 091726', 'images.jpg'),
(139, 'Dorivaldo Benegripe de Amora Camporim', '980.518.260-60', 'CRM/AM 826672', 'doutorDorivaldo.jpg'),
(140, 'Antônio José dos Santos Junior ', '306.741.120-08', 'CRM/SP 252415', 'doutorJunior.jpg'),
(141, 'Lenildo dos Santos', '811.238.210-70', 'CRM/SP 754252', 'doutorBruno.jpg'),
(142, 'Vanessa Duarte Costa', '504.060.680-03', 'CRM/RJ 656792', 'doutoraEduarda.jpg'),
(143, 'Marlon Marx', '933.396.140-24', 'CRM/SP 982617', 'doutorAlexandre.jpg'),
(144, 'Clodoaldo Pinheiro Bastos', '802.682.070-38', 'CRM/AM 278394', 'doutorCaua.jpg'),
(145, 'Alan Vidal de Negreiros ', '973.389.060-09', 'CRM/AM 912325', 'doutorRhian.jpg'),
(146, 'Aline Mendonça Cordeiro ', '283.278.290-68', 'CRM/AM 979775', 'doutoraKiriko.jpg'),
(147, 'Elaine Lima Silva', '303.673.410-42', 'CRM/AM 876522', 'doutoraAline.jpg'),
(148, 'Regiane Astigarraga Falconeri', '160.512.080-46', 'CRM/RJ 825362', 'doutoraFernanda.jpg'),
(149, 'Leandro Coelho Saraiva', '947.261.660-77', 'CRM/RJ 998425', 'doutorCleber.jpg'),
(150, 'André Simão de Almeira', '626.878.210-04', 'CRM/RJ 765923', 'doutorRhuan.jpg'),
(151, 'Luciano Ferreira de Macedo', '185.519.580-11', 'CRM/RJ 827629', 'doutorGuilherme.jpg'),
(152, 'Emilene Pereira Lima', '916.867.520-83', 'CRM/RJ 425262', 'doutoraEmilene.jpg'),
(153, 'Carlos Eduardo de Carvalho', '038.461.240-79', 'CRM/SP 984352', 'carlo.jpg'),
(154, 'Rosângela Freire de Oliveira Silva', '060.903.590-84', 'CRM/SP 919286', 'rosangela.jpg'),
(155, 'Ana Aparecida Santiago Gomes', '495.501.320-13', 'CRM/SP 862425', 'santiago.jpg'),
(156, 'Ana Lúcia de Paula', '958.466.470-06', 'CRM/SP 198765', 'doutoraAna.jpg'),
(157, 'Simone da Silva Santos Ferreira', '306.326.300-19', 'CRM/RJ 434252', 'doutoraSimone.jpg'),
(158, 'Humberto Tadeu Silveira Pinto', '340.433.790-56', 'CRM/RJ 652425', 'doutorHumberto.jpg'),
(159, 'Simara Campos Ferreira', '140.054.260-00', 'CRM/SP 786543', 'doutoraSimara.jpg'),
(160, 'Gustavo José Alencar Pinto', '273.441.410-43', 'CRM/SP 091726', 'images.jpg'),
(162, 'Antônio José dos Santos Junior ', '306.741.120-08', 'CRM/SP 252415', 'doutorJunior.jpg'),
(163, 'Lenildo dos Santos', '811.238.210-70', 'CRM/SP 754252', 'doutorBruno.jpg'),
(164, 'Vanessa Duarte Costa', '504.060.680-03', 'CRM/RJ 656792', 'doutoraEduarda.jpg'),
(165, 'Marlon Marx', '933.396.140-24', 'CRM/SP 982617', 'doutorAlexandre.jpg'),
(166, 'Clodoaldo Pinheiro Bastos', '802.682.070-38', 'CRM/AM 278394', 'doutorCaua.jpg'),
(167, 'Alan Vidal de Negreiros ', '973.389.060-09', 'CRM/AM 912325', 'doutorRhian.jpg'),
(168, 'Aline Mendonça Cordeiro ', '283.278.290-68', 'CRM/AM 979775', 'doutoraKiriko.jpg'),
(169, 'Elaine Lima Silva', '303.673.410-42', 'CRM/AM 876522', 'doutoraAline.jpg'),
(170, 'Regiane Astigarraga Falconeri', '160.512.080-46', 'CRM/RJ 825362', 'doutoraFernanda.jpg'),
(171, 'Leandro Coelho Saraiva', '947.261.660-77', 'CRM/RJ 998425', 'doutorCleber.jpg'),
(172, 'André Simão de Almeira', '626.878.210-04', 'CRM/RJ 765923', 'doutorRhuan.jpg'),
(173, 'Luciano Ferreira de Macedo', '185.519.580-11', 'CRM/RJ 827629', 'doutorGuilherme.jpg'),
(174, 'Emilene Pereira Lima', '916.867.520-83', 'CRM/RJ 425262', 'doutoraEmilene.jpg'),
(175, 'Carlos Eduardo de Carvalho', '038.461.240-79', 'CRM/SP 984352', 'carlo.jpg'),
(176, 'Rosângela Freire de Oliveira Silva', '060.903.590-84', 'CRM/SP 919286', 'rosangela.jpg'),
(177, 'Ana Aparecida Santiago Gomes', '495.501.320-13', 'CRM/SP 862425', 'santiago.jpg'),
(178, 'Ana Lúcia de Paula', '958.466.470-06', 'CRM/SP 198765', 'doutoraAna.jpg'),
(179, 'Simone da Silva Santos Ferreira', '306.326.300-19', 'CRM/RJ 434252', 'doutoraSimone.jpg'),
(180, 'Humberto Tadeu Silveira Pinto', '340.433.790-56', 'CRM/RJ 652425', 'doutorHumberto.jpg'),
(181, 'Simara Campos Ferreira', '140.054.260-00', 'CRM/SP 786543', 'doutoraSimara.jpg'),
(182, 'Gustavo José Alencar Pinto', '273.441.410-43', 'CRM/SP 091726', 'images.jpg'),
(183, 'Dorivaldo Benegripe de Amora Camporim', '980.518.260-60', 'CRM/AM 826672', 'doutorDorivaldo.jpg'),
(184, 'Antônio José dos Santos Junior ', '306.741.120-08', 'CRM/SP 252415', 'doutorJunior.jpg'),
(185, 'Lenildo dos Santos', '811.238.210-70', 'CRM/SP 754252', 'doutorBruno.jpg'),
(186, 'Vanessa Duarte Costa', '504.060.680-03', 'CRM/RJ 656792', 'doutoraEduarda.jpg'),
(187, 'Marlon Marx', '933.396.140-24', 'CRM/SP 982617', 'doutorAlexandre.jpg'),
(188, 'Clodoaldo Pinheiro Bastos', '802.682.070-38', 'CRM/AM 278394', 'doutorCaua.jpg'),
(189, 'Alan Vidal de Negreiros ', '973.389.060-09', 'CRM/AM 912325', 'doutorRhian.jpg'),
(190, 'Aline Mendonça Cordeiro ', '283.278.290-68', 'CRM/AM 979775', 'doutoraKiriko.jpg'),
(191, 'Elaine Lima Silva', '303.673.410-42', 'CRM/AM 876522', 'doutoraAline.jpg'),
(192, 'Regiane Astigarraga Falconeri', '160.512.080-46', 'CRM/RJ 825362', 'doutoraFernanda.jpg'),
(193, 'Leandro Coelho Saraiva', '947.261.660-77', 'CRM/RJ 998425', 'doutorCleber.jpg'),
(194, 'André Simão de Almeira', '626.878.210-04', 'CRM/RJ 765923', 'doutorRhuan.jpg'),
(195, 'Luciano Ferreira de Macedo', '185.519.580-11', 'CRM/RJ 827629', 'doutorGuilherme.jpg'),
(196, 'Emilene Pereira Lima', '916.867.520-83', 'CRM/RJ 425262', 'doutoraEmilene.jpg'),
(197, 'Carlos Eduardo de Carvalho', '038.461.240-79', 'CRM/SP 984352', 'carlo.jpg'),
(198, 'Rosângela Freire de Oliveira Silva', '060.903.590-84', 'CRM/SP 919286', 'rosangela.jpg'),
(199, 'Ana Aparecida Santiago Gomes', '495.501.320-13', 'CRM/SP 862425', 'santiago.jpg'),
(200, 'Ana Lúcia de Paula', '958.466.470-06', 'CRM/SP 198765', 'doutoraAna.jpg'),
(201, 'Simone da Silva Santos Ferreira', '306.326.300-19', 'CRM/RJ 434252', 'doutoraSimone.jpg'),
(202, 'Humberto Tadeu Silveira Pinto', '340.433.790-56', 'CRM/RJ 652425', 'doutorHumberto.jpg'),
(203, 'Simara Campos Ferreira', '140.054.260-00', 'CRM/SP 786543', 'doutoraSimara.jpg'),
(204, 'Gustavo José Alencar Pinto', '273.441.410-43', 'CRM/SP 091726', 'images.jpg'),
(205, 'Dorivaldo Benegripe de Amora Camporim', '980.518.260-60', 'CRM/AM 826672', 'doutorDorivaldo.jpg'),
(206, 'Antônio José dos Santos Junior ', '306.741.120-08', 'CRM/SP 252415', 'doutorJunior.jpg'),
(207, 'Lenildo dos Santos', '811.238.210-70', 'CRM/SP 754252', 'doutorBruno.jpg'),
(208, 'Vanessa Duarte Costa', '504.060.680-03', 'CRM/RJ 656792', 'doutoraEduarda.jpg'),
(209, 'Marlon Marx', '933.396.140-24', 'CRM/SP 982617', 'doutorAlexandre.jpg'),
(210, 'Clodoaldo Pinheiro Bastos', '802.682.070-38', 'CRM/AM 278394', 'doutorCaua.jpg'),
(211, 'Alan Vidal de Negreiros ', '973.389.060-09', 'CRM/AM 912325', 'doutorRhian.jpg'),
(212, 'Aline Mendonça Cordeiro ', '283.278.290-68', 'CRM/AM 979775', 'doutoraKiriko.jpg'),
(213, 'Elaine Lima Silva', '303.673.410-42', 'CRM/AM 876522', 'doutoraAline.jpg'),
(214, 'Regiane Astigarraga Falconeri', '160.512.080-46', 'CRM/RJ 825362', 'doutoraFernanda.jpg'),
(215, 'Leandro Coelho Saraiva', '947.261.660-77', 'CRM/RJ 998425', 'doutorCleber.jpg'),
(216, 'André Simão de Almeira', '626.878.210-04', 'CRM/RJ 765923', 'doutorRhuan.jpg'),
(217, 'Luciano Ferreira de Macedo', '185.519.580-11', 'CRM/RJ 827629', 'doutorGuilherme.jpg'),
(218, 'Emilene Pereira Lima', '916.867.520-83', 'CRM/RJ 425262', 'doutoraEmilene.jpg'),
(219, 'Carlos Eduardo de Carvalho', '038.461.240-79', 'CRM/SP 984352', 'carlo.jpg'),
(220, 'Rosângela Freire de Oliveira Silva', '060.903.590-84', 'CRM/SP 919286', 'rosangela.jpg'),
(221, 'Ana Aparecida Santiago Gomes', '495.501.320-13', 'CRM/SP 862425', 'santiago.jpg');

-- --------------------------------------------------------

--
-- Estrutura da tabela `tbmedicoespecialidade`
--

CREATE TABLE `tbmedicoespecialidade` (
  `idMedicoEspecialidade` int(11) NOT NULL,
  `idMedico` int(11) NOT NULL,
  `idEspecialidade` int(11) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Extraindo dados da tabela `tbmedicoespecialidade`
--

INSERT INTO `tbmedicoespecialidade` (`idMedicoEspecialidade`, `idMedico`, `idEspecialidade`) VALUES
(1, 1, 8),
(2, 1, 22),
(3, 1, 25),
(4, 2, 18),
(5, 2, 17),
(6, 2, 20),
(7, 2, 19),
(8, 2, 8),
(9, 3, 8),
(10, 3, 22),
(11, 3, 3),
(12, 3, 4),
(13, 3, 11),
(14, 4, 25),
(15, 4, 14),
(16, 4, 13),
(17, 4, 23),
(18, 4, 10),
(19, 4, 2),
(20, 5, 39),
(21, 5, 31),
(22, 5, 38),
(23, 5, 37),
(24, 5, 34),
(25, 6, 39),
(26, 6, 11),
(27, 6, 37),
(28, 6, 31),
(29, 7, 4),
(30, 7, 7),
(31, 7, 6),
(32, 7, 9),
(33, 7, 12),
(34, 8, 29),
(35, 8, 30),
(36, 8, 32),
(37, 8, 27),
(38, 8, 28),
(39, 8, 10),
(40, 9, 21),
(41, 9, 8),
(42, 9, 22),
(43, 9, 31),
(44, 9, 38),
(45, 9, 20),
(46, 9, 2),
(47, 9, 10),
(48, 9, 17),
(49, 10, 8),
(50, 10, 22),
(51, 10, 25),
(52, 10, 21),
(53, 10, 3),
(55, 10, 4),
(57, 10, 5),
(59, 10, 6),
(61, 10, 7),
(63, 10, 1),
(65, 10, 9),
(67, 10, 11),
(69, 10, 12),
(71, 10, 13),
(73, 10, 14),
(75, 10, 15),
(77, 10, 16),
(79, 10, 17),
(81, 10, 18),
(83, 10, 19),
(85, 10, 20),
(87, 10, 2),
(89, 10, 10),
(91, 10, 23),
(93, 10, 40),
(95, 10, 24),
(97, 10, 26),
(99, 10, 27),
(101, 10, 28),
(103, 10, 29),
(105, 10, 30),
(107, 10, 32),
(109, 10, 33),
(111, 10, 35),
(113, 10, 36),
(115, 10, 34),
(117, 10, 37),
(119, 10, 38),
(121, 10, 31),
(123, 10, 39),
(129, 12, 12),
(130, 12, 13),
(131, 12, 14),
(132, 12, 15),
(133, 12, 28),
(134, 12, 27),
(135, 12, 37),
(136, 12, 34),
(137, 12, 36),
(138, 13, 8),
(139, 13, 22),
(140, 13, 25),
(141, 13, 21),
(142, 13, 3),
(143, 13, 37),
(144, 13, 34),
(145, 13, 36),
(146, 14, 21),
(147, 14, 25),
(148, 14, 9),
(149, 14, 7),
(150, 14, 6),
(151, 14, 16),
(152, 14, 15),
(153, 14, 17),
(154, 15, 13),
(155, 15, 12),
(156, 15, 11),
(157, 15, 9),
(158, 15, 1),
(159, 15, 24),
(160, 16, 38),
(161, 16, 31),
(162, 16, 39),
(163, 16, 30),
(164, 16, 32),
(165, 16, 33),
(166, 16, 29),
(167, 16, 28),
(168, 17, 8),
(169, 17, 22),
(170, 17, 25),
(171, 17, 21),
(172, 17, 3),
(173, 17, 4),
(174, 17, 5),
(175, 17, 6),
(176, 17, 7),
(177, 17, 1),
(178, 17, 9),
(179, 17, 11),
(180, 17, 12),
(181, 17, 13),
(182, 17, 14),
(183, 17, 15),
(184, 17, 16),
(185, 17, 17),
(186, 17, 18),
(187, 17, 19),
(188, 17, 20),
(189, 17, 2),
(190, 17, 10),
(191, 17, 23),
(192, 17, 40),
(193, 17, 24),
(194, 17, 26),
(195, 17, 27),
(196, 17, 28),
(197, 17, 29),
(198, 17, 30),
(199, 17, 32),
(200, 17, 33),
(201, 17, 35),
(202, 17, 36),
(203, 17, 34),
(204, 17, 37),
(205, 17, 38),
(206, 17, 31),
(207, 17, 39),
(208, 18, 9),
(209, 18, 1),
(210, 18, 7),
(211, 18, 6),
(212, 18, 25),
(213, 18, 22),
(214, 18, 8),
(215, 18, 3),
(216, 18, 17),
(217, 18, 16),
(218, 18, 15),
(219, 18, 30),
(220, 18, 27),
(221, 19, 13),
(222, 19, 14),
(223, 19, 15),
(224, 19, 16),
(225, 19, 17),
(226, 19, 18),
(227, 19, 19),
(228, 19, 20),
(229, 19, 2),
(230, 19, 10),
(231, 19, 23),
(232, 19, 40),
(233, 19, 24),
(234, 20, 9),
(235, 20, 1),
(236, 20, 7),
(237, 20, 6),
(238, 20, 8),
(239, 20, 22),
(240, 20, 25),
(241, 20, 2),
(242, 20, 20),
(243, 20, 19),
(244, 20, 18),
(245, 21, 13),
(246, 21, 12),
(247, 21, 11),
(248, 21, 9),
(249, 21, 17),
(250, 21, 15),
(251, 21, 16),
(252, 21, 34),
(253, 21, 35),
(254, 21, 36),
(255, 21, 33),
(256, 22, 8),
(257, 22, 22),
(258, 22, 7),
(259, 22, 6),
(260, 22, 5),
(261, 22, 13),
(262, 22, 12),
(263, 22, 40),
(264, 22, 23),
(265, 22, 10),
(266, 22, 2),
(267, 23, 12),
(268, 23, 14),
(269, 23, 13),
(270, 23, 40),
(271, 23, 23),
(272, 23, 2),
(273, 23, 10),
(274, 23, 35),
(275, 23, 33),
(276, 23, 32),
(277, 23, 30),
(278, 23, 37),
(279, 23, 38);

-- --------------------------------------------------------

--
-- Estrutura da tabela `tbmedicohospital`
--

CREATE TABLE `tbmedicohospital` (
  `idMedicoHospital` int(11) NOT NULL,
  `idMedico` int(11) NOT NULL,
  `idHospital` int(11) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Extraindo dados da tabela `tbmedicohospital`
--

INSERT INTO `tbmedicohospital` (`idMedicoHospital`, `idMedico`, `idHospital`) VALUES
(1, 1, 1),
(2, 2, 1),
(3, 3, 1),
(4, 4, 1),
(5, 5, 1),
(6, 6, 1),
(7, 7, 1),
(8, 8, 1),
(9, 9, 1),
(10, 10, 1),
(11, 11, 1),
(12, 12, 1),
(13, 13, 1),
(14, 14, 1),
(15, 15, 1),
(16, 16, 1),
(17, 17, 1),
(18, 18, 1),
(19, 19, 1),
(20, 20, 1),
(21, 21, 1),
(22, 22, 1),
(23, 23, 1),
(24, 24, 2),
(25, 25, 2),
(26, 26, 2),
(27, 27, 2),
(28, 28, 2),
(29, 29, 2),
(30, 30, 2),
(31, 31, 2),
(32, 32, 2),
(33, 33, 2),
(34, 34, 2),
(35, 35, 2),
(36, 36, 2),
(37, 37, 2),
(38, 38, 2),
(39, 39, 2),
(40, 40, 2),
(41, 41, 2),
(42, 42, 2),
(43, 43, 2),
(44, 44, 2),
(45, 45, 2),
(46, 46, 2),
(47, 47, 3),
(48, 48, 3),
(49, 49, 3),
(50, 50, 3),
(51, 51, 3),
(52, 52, 3),
(53, 53, 3),
(54, 54, 3),
(55, 55, 3),
(56, 56, 3),
(57, 57, 3),
(58, 58, 3),
(59, 59, 3),
(60, 60, 3),
(61, 61, 3),
(62, 62, 3),
(63, 63, 3),
(64, 64, 3),
(65, 65, 3),
(66, 66, 3),
(67, 67, 3),
(68, 68, 3),
(69, 69, 3),
(70, 70, 4),
(71, 71, 4),
(72, 72, 4),
(73, 73, 4),
(74, 74, 4),
(75, 75, 4),
(76, 76, 4),
(77, 77, 4),
(78, 78, 4),
(79, 79, 4),
(80, 80, 4),
(81, 81, 4),
(82, 82, 4),
(83, 83, 4),
(84, 84, 4),
(85, 85, 4),
(86, 86, 4),
(87, 87, 4),
(88, 88, 4),
(89, 89, 4),
(90, 90, 4),
(91, 91, 4),
(92, 92, 4),
(93, 93, 5),
(94, 94, 5),
(95, 95, 5),
(96, 96, 5),
(97, 97, 5),
(98, 98, 5),
(99, 99, 5),
(100, 100, 5),
(101, 101, 5),
(102, 102, 5),
(103, 103, 5),
(104, 104, 5),
(105, 105, 5),
(106, 106, 5),
(107, 107, 5),
(108, 108, 5),
(109, 109, 5),
(110, 110, 5),
(111, 111, 5),
(112, 112, 5),
(113, 113, 5),
(114, 114, 5),
(115, 115, 5),
(116, 116, 6),
(117, 117, 6),
(118, 118, 6),
(119, 119, 6),
(120, 120, 6),
(121, 121, 6),
(122, 122, 6),
(123, 123, 6),
(124, 124, 6),
(125, 125, 6),
(126, 126, 6),
(127, 127, 6),
(128, 128, 6),
(129, 129, 6),
(130, 130, 6),
(131, 131, 6),
(132, 132, 6),
(133, 133, 6),
(134, 134, 6),
(135, 135, 6),
(136, 136, 6),
(137, 137, 6),
(138, 138, 6),
(139, 139, 7),
(140, 140, 7),
(141, 141, 7),
(142, 142, 7),
(143, 143, 7),
(144, 144, 7),
(145, 145, 7),
(146, 146, 7),
(147, 147, 7),
(148, 148, 7),
(149, 149, 7),
(150, 150, 7),
(151, 151, 7),
(152, 152, 7),
(153, 153, 7),
(154, 154, 7),
(155, 155, 7),
(156, 156, 7),
(157, 157, 7),
(158, 158, 7),
(159, 159, 7),
(160, 160, 7),
(161, 161, 7),
(162, 162, 8),
(163, 163, 8),
(164, 164, 8),
(165, 165, 8),
(166, 166, 8),
(167, 167, 8),
(168, 168, 8),
(169, 169, 8),
(170, 170, 8),
(171, 171, 8),
(172, 172, 8),
(173, 173, 8),
(174, 174, 8),
(175, 175, 8),
(176, 176, 8),
(177, 177, 8),
(178, 178, 8),
(179, 179, 8),
(180, 180, 8),
(181, 181, 8),
(182, 182, 8),
(183, 183, 8),
(184, 184, 8),
(185, 185, 9),
(186, 186, 9),
(187, 187, 9),
(188, 188, 9),
(189, 189, 9),
(190, 190, 9),
(191, 191, 9),
(192, 192, 9),
(193, 193, 9),
(194, 194, 9),
(195, 195, 9),
(196, 196, 9),
(197, 197, 9),
(198, 198, 9),
(199, 199, 9),
(200, 200, 9),
(201, 201, 9),
(202, 202, 9),
(203, 203, 9),
(204, 204, 9),
(205, 205, 9),
(206, 206, 9),
(207, 207, 9),
(208, 208, 10),
(209, 209, 10),
(210, 210, 10),
(211, 211, 10),
(212, 212, 10),
(213, 213, 10),
(214, 214, 10),
(215, 215, 10),
(216, 216, 10),
(217, 217, 10),
(218, 218, 10),
(219, 219, 10),
(220, 220, 10),
(221, 221, 10),
(222, 222, 10),
(223, 223, 10),
(224, 224, 10),
(225, 225, 10),
(226, 226, 10),
(227, 227, 10),
(228, 228, 10),
(229, 229, 10),
(230, 230, 10);

-- --------------------------------------------------------

--
-- Estrutura da tabela `tbplantao`
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

--
-- Extraindo dados da tabela `tbplantao`
--

INSERT INTO `tbplantao` (`idPlantao`, `dataPlantao`, `inicioPlantao`, `fimPlantao`, `idEspecialidade`, `idMedico`, `presencaMedico`, `idHospital`) VALUES
(1, '2022-07-01', '10:30:00', '22:40:00', 11, 17, 1, 1),
(2, '2022-07-02', '10:30:00', '22:40:00', 11, 17, 1, 1),
(3, '2022-07-03', '10:30:00', '22:40:00', 11, 17, 0, 1),
(4, '2022-07-04', '10:30:00', '22:40:00', 11, 17, 0, 1),
(5, '2022-07-22', '10:30:00', '22:40:00', 11, 17, 1, 1),
(6, '2022-07-23', '10:30:00', '22:40:00', 11, 17, 0, 1),
(7, '2022-07-24', '10:30:00', '22:40:00', 11, 17, 1, 1),
(8, '2022-07-25', '10:30:00', '22:40:00', 11, 17, 1, 1),
(9, '2022-07-01', '08:30:00', '22:40:00', 25, 13, 0, 1),
(10, '2022-07-02', '08:30:00', '22:40:00', 25, 13, 1, 1),
(11, '2022-07-03', '08:30:00', '22:40:00', 25, 13, 0, 1),
(12, '2022-07-04', '08:30:00', '22:40:00', 25, 13, 0, 1),
(13, '2022-07-05', '08:30:00', '22:40:00', 25, 13, 0, 1),
(14, '2022-07-19', '08:30:00', '22:40:00', 25, 13, 1, 1),
(15, '2022-07-20', '08:30:00', '22:40:00', 25, 13, 1, 1),
(16, '2022-07-21', '08:30:00', '22:40:00', 25, 13, 0, 1),
(17, '2022-07-22', '08:30:00', '22:40:00', 25, 13, 0, 1),
(18, '2022-07-23', '08:30:00', '22:40:00', 25, 13, 1, 1),
(19, '2022-07-31', '08:30:00', '22:40:00', 25, 13, 1, 1),
(20, '2022-07-30', '08:30:00', '22:40:00', 25, 13, 0, 1),
(21, '2022-07-01', '08:30:00', '22:40:00', 4, 7, 0, 1),
(22, '2022-07-22', '09:50:00', '00:40:00', 4, 7, 1, 1),
(23, '2022-08-01', '09:50:00', '20:30:00', 1, 8, 1, 1),
(24, '2022-08-02', '09:50:00', '20:30:00', 1, 8, 1, 1),
(25, '2022-08-03', '09:50:00', '20:30:00', 1, 8, 1, 1),
(26, '2022-08-04', '09:50:00', '20:30:00', 1, 8, 0, 1),
(27, '2022-08-05', '09:50:00', '20:30:00', 1, 8, 0, 1),
(28, '2022-08-06', '09:50:00', '20:30:00', 1, 8, 1, 1),
(29, '2022-08-08', '09:50:00', '20:30:00', 1, 8, 1, 1),
(30, '2022-08-09', '09:50:00', '20:30:00', 1, 8, 1, 1),
(31, '2022-08-10', '09:50:00', '20:30:00', 1, 8, 0, 1),
(32, '2022-08-11', '09:50:00', '20:30:00', 1, 8, 0, 1),
(33, '2022-08-12', '09:50:00', '20:30:00', 1, 8, 1, 1),
(34, '2022-08-13', '09:50:00', '20:30:00', 1, 8, 1, 1),
(35, '2022-08-07', '09:50:00', '20:30:00', 1, 8, 0, 1),
(36, '2022-08-22', '09:50:00', '20:30:00', 1, 8, 0, 1),
(37, '2022-08-23', '09:50:00', '20:30:00', 1, 8, 1, 1),
(38, '2022-08-24', '09:50:00', '20:30:00', 1, 8, 0, 1),
(39, '2022-08-25', '09:50:00', '20:30:00', 1, 8, 1, 1),
(40, '2022-08-26', '09:50:00', '20:30:00', 1, 8, 1, 1),
(41, '2022-08-27', '09:50:00', '20:30:00', 1, 8, 1, 1),
(42, '2022-08-28', '09:50:00', '20:30:00', 1, 8, 1, 1),
(43, '2022-08-29', '09:50:00', '20:30:00', 1, 8, 1, 1),
(44, '2022-08-30', '09:50:00', '20:30:00', 1, 8, 0, 1),
(45, '2022-08-31', '09:50:00', '20:30:00', 1, 8, 0, 1),
(46, '2022-08-06', '10:30:00', '20:30:00', 33, 23, 0, 1),
(47, '2022-08-13', '11:30:00', '20:30:00', 33, 23, 1, 1),
(48, '2022-08-20', '12:30:00', '20:30:00', 33, 23, 1, 1),
(49, '2022-08-01', '12:30:00', '20:30:00', 39, 6, 1, 1),
(50, '2022-08-02', '12:30:00', '20:30:00', 39, 6, 0, 1),
(51, '2022-08-03', '12:30:00', '20:30:00', 39, 6, 1, 1),
(52, '2022-08-04', '12:30:00', '20:30:00', 39, 6, 1, 1),
(53, '2022-08-05', '12:30:00', '20:30:00', 39, 6, 0, 1),
(54, '2022-08-06', '12:30:00', '20:30:00', 39, 6, 0, 1),
(55, '2022-08-07', '12:30:00', '20:30:00', 39, 6, 0, 1),
(56, '2022-08-14', '12:30:00', '20:30:00', 39, 6, 0, 1),
(57, '2022-08-21', '12:30:00', '20:30:00', 39, 6, 0, 1),
(58, '2022-08-28', '12:30:00', '20:30:00', 39, 6, 0, 1),
(59, '2022-08-29', '12:30:00', '20:30:00', 39, 6, 1, 1),
(60, '2022-08-31', '12:30:00', '20:30:00', 39, 6, 1, 1),
(61, '2022-08-24', '12:30:00', '20:30:00', 39, 6, 0, 1),
(62, '2022-08-23', '12:30:00', '20:30:00', 39, 6, 1, 1),
(63, '2022-08-22', '12:30:00', '20:30:00', 39, 6, 1, 1),
(64, '2022-08-08', '12:30:00', '20:30:00', 39, 6, 1, 1),
(65, '2022-08-15', '12:30:00', '20:30:00', 39, 6, 1, 1),
(66, '2022-08-16', '12:30:00', '20:30:00', 39, 6, 1, 1),
(67, '2022-08-09', '12:30:00', '20:30:00', 39, 6, 0, 1),
(68, '2022-08-30', '12:30:00', '20:30:00', 39, 6, 0, 1),
(69, '2022-08-25', '12:30:00', '20:30:00', 39, 6, 1, 1),
(70, '2022-08-17', '12:30:00', '20:30:00', 39, 6, 1, 1),
(71, '2022-08-18', '12:30:00', '20:30:00', 39, 6, 1, 1),
(72, '2022-08-11', '12:30:00', '20:30:00', 39, 6, 1, 1),
(73, '2022-08-10', '12:30:00', '20:30:00', 39, 6, 1, 1),
(74, '2022-08-12', '12:30:00', '20:30:00', 39, 6, 1, 1),
(75, '2022-08-19', '12:30:00', '20:30:00', 39, 6, 1, 1),
(76, '2022-08-26', '12:30:00', '20:30:00', 39, 6, 0, 1),
(77, '2022-08-27', '12:30:00', '20:30:00', 39, 6, 0, 1),
(78, '2022-08-20', '12:30:00', '20:30:00', 39, 6, 0, 1),
(79, '2022-08-13', '12:30:00', '20:30:00', 39, 6, 0, 1),
(80, '2022-08-01', '05:20:00', '00:30:00', 1, 9, 1, 1),
(81, '2022-08-02', '05:20:00', '00:30:00', 1, 9, 1, 1),
(82, '2022-08-03', '05:20:00', '00:30:00', 1, 9, 1, 1),
(83, '2022-08-04', '05:20:00', '00:30:00', 1, 9, 0, 1),
(84, '2022-08-05', '05:20:00', '00:30:00', 1, 9, 0, 1),
(85, '2022-08-06', '05:20:00', '00:30:00', 1, 9, 0, 1),
(86, '2022-08-07', '05:20:00', '00:30:00', 1, 9, 1, 1),
(87, '2022-08-22', '05:20:00', '00:30:00', 1, 9, 1, 1),
(88, '2022-08-23', '05:20:00', '00:30:00', 1, 9, 1, 1),
(89, '2022-08-24', '05:20:00', '00:30:00', 1, 9, 0, 1),
(90, '2022-08-25', '05:20:00', '00:30:00', 1, 9, 1, 1),
(91, '2022-08-26', '05:20:00', '00:30:00', 1, 9, 1, 1),
(92, '2022-08-27', '05:20:00', '00:30:00', 1, 9, 1, 1),
(93, '2022-08-28', '05:20:00', '00:30:00', 1, 9, 0, 1),
(94, '2022-08-29', '05:20:00', '00:30:00', 1, 9, 0, 1),
(95, '2022-08-30', '05:20:00', '00:30:00', 1, 9, 0, 1),
(96, '2022-08-31', '05:20:00', '00:30:00', 1, 9, 1, 1),
(97, '2022-09-02', '05:20:00', '00:30:00', 22, 13, 1, 1),
(98, '2022-09-16', '05:20:00', '21:30:00', 22, 13, 0, 1),
(99, '2022-09-01', '10:20:00', '21:30:00', 9, 18, 1, 1),
(100, '2022-09-02', '10:20:00', '21:30:00', 9, 18, 1, 1),
(101, '2022-09-03', '10:20:00', '21:30:00', 9, 18, 1, 1),
(102, '2022-09-04', '10:20:00', '21:30:00', 9, 18, 1, 1),
(103, '2022-09-15', '10:20:00', '21:30:00', 9, 18, 1, 1),
(104, '2022-09-16', '10:20:00', '21:30:00', 9, 18, 1, 1),
(105, '2022-09-17', '10:20:00', '21:30:00', 9, 18, 1, 1),
(106, '2022-09-18', '10:20:00', '21:30:00', 9, 18, 0, 1),
(107, '2022-09-27', '10:20:00', '21:30:00', 9, 18, 0, 1),
(108, '2022-09-28', '10:20:00', '21:30:00', 9, 18, 1, 1),
(109, '2022-09-29', '10:20:00', '21:30:00', 9, 18, 1, 1),
(110, '2022-09-30', '10:20:00', '21:30:00', 9, 18, 0, 1),
(111, '2022-09-01', '12:20:00', '23:00:00', 1, 10, 1, 1),
(112, '2022-09-02', '12:20:00', '23:00:00', 1, 10, 0, 1),
(113, '2022-09-03', '12:20:00', '23:00:00', 1, 10, 0, 1),
(114, '2022-09-04', '12:20:00', '23:00:00', 1, 10, 0, 1),
(115, '2022-09-11', '12:20:00', '23:00:00', 1, 10, 1, 1),
(116, '2022-09-05', '12:20:00', '23:00:00', 1, 10, 0, 1),
(117, '2022-09-12', '12:20:00', '23:00:00', 1, 10, 0, 1),
(118, '2022-09-13', '12:20:00', '23:00:00', 1, 10, 1, 1),
(119, '2022-09-06', '12:20:00', '23:00:00', 1, 10, 0, 1),
(120, '2022-09-07', '12:20:00', '23:00:00', 1, 10, 1, 1),
(121, '2022-09-14', '12:20:00', '23:00:00', 1, 10, 1, 1),
(122, '2022-09-08', '12:20:00', '23:00:00', 1, 10, 1, 1),
(123, '2022-09-27', '12:20:00', '23:00:00', 1, 10, 1, 1),
(124, '2022-09-26', '12:20:00', '23:00:00', 1, 10, 0, 1),
(125, '2022-09-28', '12:20:00', '23:00:00', 1, 10, 1, 1),
(126, '2022-09-29', '12:20:00', '23:00:00', 1, 10, 1, 1),
(127, '2022-09-30', '12:20:00', '23:00:00', 1, 10, 1, 1),
(128, '2022-09-01', '08:30:00', '00:00:00', 1, 12, 1, 1),
(129, '2022-09-02', '08:30:00', '00:00:00', 1, 12, 1, 1),
(130, '2022-09-03', '08:30:00', '00:00:00', 1, 12, 0, 1),
(131, '2022-09-04', '08:30:00', '00:00:00', 1, 12, 0, 1),
(132, '2022-09-12', '08:30:00', '00:00:00', 1, 12, 1, 1),
(133, '2022-09-13', '08:30:00', '00:00:00', 1, 12, 1, 1),
(134, '2022-09-14', '08:30:00', '00:00:00', 1, 12, 1, 1),
(135, '2022-09-16', '08:30:00', '00:00:00', 1, 12, 1, 1),
(136, '2022-09-15', '08:30:00', '00:00:00', 1, 12, 0, 1),
(137, '2022-09-17', '08:30:00', '00:00:00', 1, 12, 1, 1),
(138, '2022-09-18', '08:30:00', '00:00:00', 1, 12, 1, 1),
(139, '2022-10-01', '08:30:00', '20:00:00', 1, 14, 1, 1),
(140, '2022-10-02', '08:30:00', '20:00:00', 1, 14, 1, 1),
(141, '2022-10-03', '08:30:00', '20:00:00', 1, 14, 0, 1),
(142, '2022-10-04', '08:30:00', '20:00:00', 1, 14, 0, 1),
(143, '2022-10-05', '08:30:00', '20:00:00', 1, 14, 0, 1),
(144, '2022-10-06', '08:30:00', '20:00:00', 1, 14, 0, 1),
(145, '2022-10-07', '08:30:00', '20:00:00', 1, 14, 1, 1),
(146, '2022-10-22', '08:30:00', '20:00:00', 1, 14, 1, 1),
(147, '2022-10-23', '08:30:00', '20:00:00', 1, 14, 0, 1),
(148, '2022-10-24', '08:30:00', '20:00:00', 1, 14, 0, 1),
(149, '2022-10-25', '08:30:00', '20:00:00', 1, 14, 0, 1),
(150, '2022-10-26', '08:30:00', '20:00:00', 1, 14, 1, 1),
(151, '2022-10-27', '08:30:00', '20:00:00', 1, 14, 1, 1),
(152, '2022-10-28', '08:30:00', '20:00:00', 1, 14, 1, 1),
(153, '2022-10-30', '08:30:00', '20:00:00', 1, 14, 1, 1),
(154, '2022-10-31', '08:30:00', '20:00:00', 1, 14, 1, 1),
(155, '2022-10-09', '10:30:00', '19:00:00', 20, 9, 0, 1),
(156, '2022-10-16', '10:30:00', '23:00:00', 20, 9, 0, 1),
(157, '2022-10-10', '07:30:00', '17:00:00', 14, 12, 0, 1),
(158, '2022-10-12', '07:30:00', '17:00:00', 14, 12, 0, 1),
(159, '2022-10-14', '07:30:00', '17:00:00', 14, 12, 1, 1),
(160, '2022-10-15', '07:30:00', '17:00:00', 14, 12, 1, 1),
(161, '2022-10-16', '07:30:00', '17:00:00', 14, 12, 1, 1),
(162, '2022-10-24', '07:30:00', '17:00:00', 14, 12, 1, 1),
(163, '2022-10-26', '07:30:00', '17:00:00', 14, 12, 1, 1),
(164, '2022-10-28', '07:30:00', '17:00:00', 14, 12, 0, 1),
(165, '2022-10-29', '07:30:00', '17:00:00', 14, 12, 0, 1),
(166, '2022-10-30', '07:30:00', '17:00:00', 14, 12, 0, 1),
(167, '2022-10-10', '07:30:00', '21:00:00', 12, 15, 0, 1),
(168, '2022-10-18', '07:30:00', '18:30:00', 12, 15, 1, 1),
(169, '2022-11-03', '10:44:00', '23:44:00', 1, 10, 1, 1),
(170, '2022-11-04', '10:44:00', '23:44:00', 1, 10, 1, 1),
(171, '2022-11-05', '10:44:00', '23:44:00', 1, 10, 0, 1),
(172, '2022-11-10', '10:44:00', '23:44:00', 1, 10, 1, 1),
(173, '2022-11-11', '10:44:00', '23:44:00', 1, 10, 0, 1),
(174, '2022-11-12', '10:44:00', '23:44:00', 1, 10, 1, 1),
(175, '2022-11-13', '10:44:00', '23:44:00', 1, 10, 1, 1),
(176, '2022-11-14', '10:44:00', '23:44:00', 1, 10, 1, 1),
(177, '2022-11-15', '10:44:00', '23:44:00', 1, 10, 1, 1),
(178, '2022-11-22', '10:44:00', '23:44:00', 1, 10, 1, 1),
(179, '2022-11-21', '10:44:00', '23:44:00', 1, 10, 1, 1),
(180, '2022-11-20', '10:44:00', '23:44:00', 1, 10, 0, 1),
(181, '2022-11-28', '10:44:00', '23:44:00', 1, 10, 1, 1),
(182, '2022-11-10', '13:25:00', '22:40:00', 37, 10, 0, 1),
(183, '2022-11-17', '13:25:00', '22:40:00', 37, 10, 1, 1),
(184, '2022-11-24', '13:25:00', '22:40:00', 37, 10, 1, 1),
(185, '2022-11-07', '13:25:00', '22:40:00', 37, 10, 1, 1),
(186, '2022-11-14', '13:25:00', '22:40:00', 37, 10, 0, 1),
(187, '2022-11-21', '13:25:00', '22:40:00', 37, 10, 0, 1),
(188, '2022-11-15', '15:25:00', '00:40:00', 37, 10, 1, 1),
(189, '2022-11-22', '15:25:00', '00:40:00', 37, 10, 1, 1),
(190, '2022-11-19', '15:25:00', '00:40:00', 37, 10, 1, 1),
(191, '2022-11-26', '15:25:00', '00:40:00', 37, 10, 1, 1),
(192, '2022-11-01', '10:25:00', '23:40:00', 23, 19, 1, 1),
(193, '2022-11-02', '10:25:00', '23:40:00', 23, 19, 1, 1),
(194, '2022-11-03', '10:25:00', '23:40:00', 23, 19, 1, 1),
(195, '2022-11-04', '10:25:00', '23:40:00', 23, 19, 1, 1),
(196, '2022-11-05', '10:25:00', '23:40:00', 23, 19, 1, 1),
(197, '2022-11-06', '10:25:00', '23:40:00', 23, 19, 1, 1),
(198, '2022-11-20', '10:25:00', '23:40:00', 23, 19, 1, 1),
(199, '2022-11-21', '10:25:00', '23:40:00', 23, 19, 1, 1),
(200, '2022-11-22', '10:25:00', '23:40:00', 23, 19, 1, 1),
(201, '2022-11-27', '10:25:00', '23:40:00', 23, 19, 0, 1),
(202, '2022-11-28', '10:25:00', '23:40:00', 23, 19, 0, 1),
(203, '2022-11-29', '10:25:00', '23:40:00', 23, 19, 1, 1),
(204, '2022-11-30', '10:25:00', '23:40:00', 23, 19, 1, 1),
(205, '2022-11-01', '12:30:00', '00:00:00', 16, 21, 1, 1),
(206, '2022-11-08', '12:30:00', '00:00:00', 16, 21, 1, 1),
(207, '2022-11-15', '12:30:00', '00:00:00', 16, 21, 1, 1),
(208, '2022-11-22', '12:30:00', '00:00:00', 16, 21, 0, 1),
(209, '2022-11-29', '12:30:00', '00:00:00', 16, 21, 0, 1),
(210, '2022-11-05', '12:30:00', '00:00:00', 16, 21, 0, 1),
(211, '2022-11-12', '12:30:00', '00:00:00', 16, 21, 1, 1),
(212, '2022-11-19', '12:30:00', '00:00:00', 16, 21, 1, 1),
(213, '2022-11-26', '12:30:00', '00:00:00', 16, 21, 1, 1),
(214, '2022-11-28', '15:30:00', '03:00:00', 16, 21, 1, 1),
(215, '2022-11-21', '15:30:00', '03:00:00', 16, 21, 1, 1),
(216, '2022-11-14', '15:30:00', '03:00:00', 16, 21, 0, 1),
(217, '2022-11-07', '15:30:00', '03:00:00', 16, 21, 1, 1),
(218, '2022-11-09', '10:30:00', '22:00:00', 25, 14, 0, 1),
(219, '2022-11-16', '10:30:00', '22:00:00', 25, 14, 1, 1),
(220, '2022-11-23', '10:30:00', '22:00:00', 25, 14, 0, 1),
(221, '2022-11-30', '10:30:00', '22:00:00', 25, 14, 1, 1),
(222, '2022-11-08', '10:30:00', '22:00:00', 25, 14, 1, 1),
(223, '2022-11-15', '10:30:00', '22:00:00', 25, 14, 1, 1),
(224, '2022-11-29', '10:30:00', '22:00:00', 25, 14, 1, 1),
(225, '2022-11-22', '10:30:00', '22:00:00', 25, 14, 1, 1),
(226, '2022-11-10', '10:30:00', '22:00:00', 25, 14, 1, 1),
(227, '2022-11-17', '10:30:00', '22:00:00', 25, 14, 0, 1),
(228, '2022-11-24', '10:30:00', '22:00:00', 25, 14, 0, 1),
(229, '2022-11-07', '11:00:00', '00:00:00', 25, 14, 1, 1),
(230, '2022-11-14', '11:00:00', '00:00:00', 25, 14, 1, 1),
(231, '2022-11-21', '11:00:00', '00:00:00', 25, 14, 1, 1),
(232, '2022-11-28', '11:00:00', '00:00:00', 25, 14, 1, 1),
(233, '2022-11-11', '11:00:00', '00:00:00', 25, 14, 1, 1),
(234, '2022-11-18', '11:00:00', '00:00:00', 25, 14, 1, 1),
(235, '2022-11-25', '11:00:00', '00:00:00', 25, 14, 0, 1),
(236, '2022-12-01', '09:00:00', '20:00:00', 1, 6, 0, 1),
(237, '2022-12-02', '09:00:00', '20:00:00', 1, 6, 1, 1),
(238, '2022-12-03', '09:00:00', '20:00:00', 1, 6, 1, 1),
(239, '2022-12-04', '09:00:00', '20:00:00', 1, 6, 1, 1),
(240, '2022-12-01', '10:00:00', '23:00:00', 21, 9, 1, 1);

-- --------------------------------------------------------

--
-- Estrutura da tabela `tbreclamacao`
--

CREATE TABLE `tbreclamacao` (
  `idReclamacao` int(11) NOT NULL,
  `txtReclamacao` text NOT NULL,
  `dataReclamacao` timestamp NOT NULL DEFAULT current_timestamp() ON UPDATE current_timestamp(),
  `dataPlantao` date NOT NULL,
  `idUsuario` int(11) NOT NULL,
  `idTipoReclamacao` int(11) NOT NULL,
  `idHospital` int(11) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Extraindo dados da tabela `tbreclamacao`
--

INSERT INTO `tbreclamacao` (`idReclamacao`, `txtReclamacao`, `dataReclamacao`, `dataPlantao`, `idUsuario`, `idTipoReclamacao`, `idHospital`) VALUES
(1, 'O hospital geral de guaianases estava com uma grande leva de médicos ausentes. Que descaso!', '2022-11-30 01:37:08', '0000-00-00', 7, 3, 1),
(2, 'O hospital central de guaianases está com um atendimento deplorável... ', '2022-11-30 01:37:08', '0000-00-00', 1, 2, 10),
(3, 'O hospital geral de guaianases estava com filas gigantescas.', '2022-11-30 01:44:24', '0000-00-00', 7, 5, 1),
(4, 'O hospital central de guaianases está extremamente sujo. Deplorável... ', '2022-11-30 01:44:17', '0000-00-00', 20, 1, 10),
(5, 'Acho um absurdo o hospital não ter insumos. Como que lido com isso??', '2022-11-30 01:43:25', '0000-00-00', 13, 4, 7),
(6, 'A demora deste hospital para atender os pacientes está muito grande', '2022-11-30 01:43:25', '0000-00-00', 31, 5, 4),
(7, 'O hospital não está seguindo o cronograma disponibilizado por eles no aplicativo.', '2022-11-30 01:53:15', '0000-00-00', 15, 6, 2),
(8, 'O hospital Rio Barra está fazendo descaso com os pacientes!', '2022-11-30 01:53:15', '0000-00-00', 3, 2, 3),
(9, 'Cheguei no hospital e ele não estava atendendo o clínico geral, mesmo falando que tinha médicos para o dia.', '2022-11-30 01:53:15', '0000-00-00', 8, 6, 8),
(10, 'O hospital não tinha maca para os pacientes em estado de emergência', '2022-11-30 01:53:15', '0000-00-00', 22, 7, 4),
(11, 'Não havia se quer um remédio para meu tio passando mal...', '2022-11-30 01:53:15', '0000-00-00', 17, 4, 6);

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
(1, '(11) 2551-3300', 1, 0),
(2, '(92) 3090-0500', 2, 0),
(3, '(21) 3578-2578', 3, 0),
(4, '(11) 9986-8653', 0, 1),
(5, '(21) 97536-2472', 0, 2),
(6, '(21) 97352-4241', 0, 3),
(7, '(11) 94826-2533', 0, 4),
(8, '(11) 95623-2573', 0, 5),
(9, '(92) 97636-7281', 0, 6),
(10, '(11) 97978-6324', 0, 7),
(11, '(11) 99853-2411', 0, 8),
(12, '(21) 91728-3451', 0, 9),
(13, '(11) 98764-5929', 0, 10),
(15, '(92) 98467-2535', 0, 12),
(16, '(92) 97989-5423', 0, 13),
(17, '(92) 97976-6423', 0, 14),
(18, '(92) 96674-2326', 0, 15),
(19, '(21) 97667-3435', 0, 16),
(20, '(21) 98986-5342', 0, 17),
(21, '(21) 98939-3752', 0, 18),
(22, '(21) 99536-7289', 0, 19),
(23, '(21) 91926-3424', 0, 20),
(24, '(11) 91927-3536', 0, 21),
(25, '(11) 98987-6211', 0, 22),
(26, '(11) 97993-2561', 0, 23),
(27, '(11) 2070-6000', 4, 0),
(28, '(11) 2151-1233', 5, 0),
(29, '(21) 2334-7856', 6, 0),
(30, '(21) 3111-2611', 7, 0),
(31, '(92) 3649-2750', 8, 0),
(32, '(92) 2123-1313', 9, 0),
(33, '(11) 2551-5151', 10, 0),
(34, '(11) 9986-8653', 0, 24),
(35, '(21) 97536-2472', 0, 25),
(36, '(21) 97352-4241', 0, 26),
(37, '(11) 94826-2533', 0, 27),
(38, '(11) 95623-2573', 0, 28),
(39, '(92) 97636-7281', 0, 29),
(40, '(11) 97978-6324', 0, 30),
(41, '(11) 99853-2411', 0, 31),
(42, '(21) 91728-3451', 0, 32),
(43, '(11) 98764-5929', 0, 33),
(44, '(92) 98467-2535', 0, 34),
(45, '(92) 97989-5423', 0, 35),
(46, '(92) 97976-6423', 0, 36),
(47, '(92) 96674-2326', 0, 37),
(48, '(21) 97667-3435', 0, 38),
(49, '(21) 98986-5342', 0, 39),
(50, '(21) 98939-3752', 0, 40),
(51, '(21) 99536-7289', 0, 41),
(52, '(21) 91926-3424', 0, 42),
(53, '(11) 91927-3536', 0, 43),
(54, '(11) 98987-6211', 0, 44),
(55, '(11) 97993-2561', 0, 45),
(56, '(11) 9986-8653', 0, 46),
(57, '(21) 97536-2472', 0, 47),
(58, '(21) 97352-4241', 0, 48),
(59, '(11) 94826-2533', 0, 49),
(60, '(11) 95623-2573', 0, 50),
(61, '(92) 97636-7281', 0, 51),
(62, '(11) 97978-6324', 0, 52),
(63, '(11) 99853-2411', 0, 53),
(64, '(21) 91728-3451', 0, 54),
(65, '(11) 98764-5929', 0, 55),
(66, '(92) 98467-2535', 0, 56),
(67, '(92) 97989-5423', 0, 57),
(68, '(92) 97976-6423', 0, 58),
(69, '(92) 96674-2326', 0, 59),
(70, '(21) 97667-3435', 0, 60),
(71, '(21) 98986-5342', 0, 61),
(72, '(21) 98939-3752', 0, 62),
(73, '(21) 99536-7289', 0, 63),
(74, '(21) 91926-3424', 0, 64),
(75, '(11) 91927-3536', 0, 65),
(76, '(11) 98987-6211', 0, 66),
(77, '(11) 97993-2561', 0, 67),
(78, '(11) 9986-8653', 0, 68),
(79, '(21) 97536-2472', 0, 69),
(80, '(21) 97352-4241', 0, 70),
(81, '(11) 94826-2533', 0, 71),
(82, '(11) 95623-2573', 0, 72),
(83, '(92) 97636-7281', 0, 73),
(84, '(11) 97978-6324', 0, 74),
(85, '(11) 99853-2411', 0, 75),
(86, '(21) 91728-3451', 0, 76),
(87, '(11) 98764-5929', 0, 77),
(88, '(92) 98467-2535', 0, 78),
(89, '(92) 97989-5423', 0, 79),
(90, '(92) 97976-6423', 0, 80),
(91, '(92) 96674-2326', 0, 81),
(92, '(21) 97667-3435', 0, 82),
(93, '(21) 98986-5342', 0, 83),
(94, '(21) 98939-3752', 0, 84),
(95, '(21) 99536-7289', 0, 85),
(96, '(21) 91926-3424', 0, 86),
(97, '(11) 91927-3536', 0, 87),
(98, '(11) 98987-6211', 0, 88),
(99, '(11) 97993-2561', 0, 89),
(100, '(11) 9986-8653', 0, 90),
(101, '(21) 97536-2472', 0, 91),
(103, '(11) 94826-2533', 0, 93),
(104, '(11) 95623-2573', 0, 94),
(105, '(92) 97636-7281', 0, 95),
(106, '(11) 97978-6324', 0, 96),
(107, '(11) 99853-2411', 0, 97),
(108, '(21) 91728-3451', 0, 98),
(109, '(11) 98764-5929', 0, 99),
(110, '(92) 98467-2535', 0, 100),
(111, '(92) 97989-5423', 0, 101),
(112, '(92) 97976-6423', 0, 102),
(113, '(92) 96674-2326', 0, 103),
(114, '(21) 97667-3435', 0, 104),
(115, '(21) 98986-5342', 0, 105),
(116, '(21) 98939-3752', 0, 106),
(117, '(21) 99536-7289', 0, 107),
(118, '(21) 91926-3424', 0, 108),
(119, '(11) 91927-3536', 0, 109),
(120, '(11) 98987-6211', 0, 110),
(121, '(11) 97993-2561', 0, 111),
(122, '(11) 9986-8653', 0, 112),
(123, '(21) 97536-2472', 0, 113),
(124, '(21) 97352-4241', 0, 114),
(125, '(11) 94826-2533', 0, 115),
(126, '(11) 95623-2573', 0, 116),
(127, '(92) 97636-7281', 0, 117),
(128, '(11) 97978-6324', 0, 118),
(129, '(11) 99853-2411', 0, 119),
(130, '(21) 91728-3451', 0, 120),
(131, '(11) 98764-5929', 0, 121),
(132, '(92) 98467-2535', 0, 122),
(133, '(92) 97989-5423', 0, 123),
(134, '(92) 97976-6423', 0, 124),
(135, '(92) 96674-2326', 0, 125),
(136, '(21) 97667-3435', 0, 126),
(137, '(21) 98986-5342', 0, 127),
(138, '(21) 98939-3752', 0, 128),
(139, '(21) 99536-7289', 0, 129),
(140, '(21) 91926-3424', 0, 130),
(141, '(11) 91927-3536', 0, 131),
(142, '(11) 98987-6211', 0, 132),
(143, '(11) 97993-2561', 0, 133),
(144, '(11) 9986-8653', 0, 134),
(145, '(21) 97536-2472', 0, 135),
(146, '(21) 97352-4241', 0, 136),
(147, '(11) 94826-2533', 0, 137),
(148, '(11) 95623-2573', 0, 138),
(149, '(92) 97636-7281', 0, 139),
(150, '(11) 97978-6324', 0, 140),
(151, '(11) 99853-2411', 0, 141),
(152, '(21) 91728-3451', 0, 142),
(153, '(11) 98764-5929', 0, 143),
(154, '(92) 98467-2535', 0, 144),
(155, '(92) 97989-5423', 0, 145),
(156, '(92) 97976-6423', 0, 146),
(157, '(92) 96674-2326', 0, 147),
(158, '(21) 97667-3435', 0, 148),
(159, '(21) 98986-5342', 0, 149),
(160, '(21) 98939-3752', 0, 150),
(161, '(21) 99536-7289', 0, 151),
(162, '(21) 91926-3424', 0, 152),
(163, '(11) 91927-3536', 0, 153),
(164, '(11) 98987-6211', 0, 154),
(165, '(11) 97993-2561', 0, 155),
(166, '(11) 9986-8653', 0, 156),
(167, '(21) 97536-2472', 0, 157),
(168, '(21) 97352-4241', 0, 158),
(169, '(11) 94826-2533', 0, 159),
(170, '(11) 95623-2573', 0, 160),
(172, '(11) 97978-6324', 0, 162),
(173, '(11) 99853-2411', 0, 163),
(174, '(21) 91728-3451', 0, 164),
(175, '(11) 98764-5929', 0, 165),
(176, '(92) 98467-2535', 0, 166),
(177, '(92) 97989-5423', 0, 167),
(178, '(92) 97976-6423', 0, 168),
(179, '(92) 96674-2326', 0, 169),
(180, '(21) 97667-3435', 0, 170),
(181, '(21) 98986-5342', 0, 171),
(182, '(21) 98939-3752', 0, 172),
(183, '(21) 99536-7289', 0, 173),
(184, '(21) 91926-3424', 0, 174),
(185, '(11) 91927-3536', 0, 175),
(186, '(11) 98987-6211', 0, 176),
(187, '(11) 97993-2561', 0, 177),
(188, '(11) 9986-8653', 0, 178),
(189, '(21) 97536-2472', 0, 179),
(190, '(21) 97352-4241', 0, 180),
(191, '(11) 94826-2533', 0, 181),
(192, '(11) 95623-2573', 0, 182),
(193, '(92) 97636-7281', 0, 183),
(194, '(11) 97978-6324', 0, 184),
(195, '(11) 99853-2411', 0, 185),
(196, '(21) 91728-3451', 0, 186),
(197, '(11) 98764-5929', 0, 187),
(198, '(92) 98467-2535', 0, 188),
(199, '(92) 97989-5423', 0, 189),
(200, '(92) 97976-6423', 0, 190),
(201, '(92) 96674-2326', 0, 191),
(202, '(21) 97667-3435', 0, 192),
(203, '(21) 98986-5342', 0, 193),
(204, '(21) 98939-3752', 0, 194),
(205, '(21) 99536-7289', 0, 195),
(206, '(21) 91926-3424', 0, 196),
(207, '(11) 91927-3536', 0, 197),
(208, '(11) 98987-6211', 0, 198),
(209, '(11) 97993-2561', 0, 199),
(210, '(11) 9986-8653', 0, 200),
(211, '(21) 97536-2472', 0, 201),
(212, '(21) 97352-4241', 0, 202),
(213, '(11) 94826-2533', 0, 203),
(214, '(11) 95623-2573', 0, 204),
(215, '(92) 97636-7281', 0, 205),
(216, '(11) 97978-6324', 0, 206),
(217, '(11) 99853-2411', 0, 207),
(218, '(21) 91728-3451', 0, 208),
(219, '(11) 98764-5929', 0, 209),
(220, '(92) 98467-2535', 0, 210),
(221, '(92) 97989-5423', 0, 211),
(222, '(92) 97976-6423', 0, 212),
(223, '(92) 96674-2326', 0, 213),
(224, '(21) 97667-3435', 0, 214),
(225, '(21) 98986-5342', 0, 215),
(226, '(21) 98939-3752', 0, 216),
(227, '(21) 99536-7289', 0, 217),
(228, '(21) 91926-3424', 0, 218),
(229, '(11) 91927-3536', 0, 219),
(230, '(11) 98987-6211', 0, 220),
(231, '(11) 97993-2561', 0, 221);

-- --------------------------------------------------------

--
-- Estrutura da tabela `tbtiporeclamacao`
--

CREATE TABLE `tbtiporeclamacao` (
  `idTipoReclamacao` int(11) NOT NULL,
  `tipoReclamacao` varchar(80) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Extraindo dados da tabela `tbtiporeclamacao`
--

INSERT INTO `tbtiporeclamacao` (`idTipoReclamacao`, `tipoReclamacao`) VALUES
(1, 'Má Higiene'),
(2, 'Mau atendimento'),
(3, 'Falta de médicos'),
(4, 'Falta de insumos'),
(5, 'Demora no atendimento'),
(6, 'Descumprimento de cronograma'),
(7, 'Falta de equipamentos necessários');

-- --------------------------------------------------------

--
-- Estrutura da tabela `tbusuario`
--

CREATE TABLE `tbusuario` (
  `idUsuario` int(11) NOT NULL,
  `nomeUsuario` varchar(60) NOT NULL,
  `emailUsuario` varchar(100) NOT NULL,
  `senhaUsuario` varchar(60) NOT NULL,
  `cpfUsuario` varchar(14) NOT NULL,
  `dataUsuario` timestamp NOT NULL DEFAULT current_timestamp() ON UPDATE current_timestamp()
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Extraindo dados da tabela `tbusuario`
--

INSERT INTO `tbusuario` (`idUsuario`, `nomeUsuario`, `emailUsuario`, `senhaUsuario`, `cpfUsuario`, `dataUsuario`) VALUES
(1, 'Gabriel Vinícius Matos Dantas', 'vmdgab@gmail.com', '12345678', '043.205.700-57', '2022-11-15 22:34:44'),
(2, 'Leandro Coelho Saraiva', 'coelhorubronegro@gmail.com', '12345678', '878.463.610-66', '2022-11-08 22:34:44'),
(3, 'Yuri Oliveira da Silva', 'veleenyurykk@gmail.com', '12345678', '094.084.370-63', '2022-11-01 22:34:04'),
(4, 'Leonardo Aparecido de Paula Santos', 'kblueplays@gmail.com', '123456678', '607.198.410-62', '2022-11-08 22:34:44'),
(5, 'José Henrique Almeida Motta', 'hrique2001625@gmail.com', '12345678', '021.632.510-20', '2022-11-01 22:34:44'),
(6, 'Luigi Tadeu Vicchietti', 'luigiTadeu241571@gmail.com', '12345678', '363.630.440-22', '2022-11-08 22:34:44'),
(7, 'Gislaine Coutinho Rodrigues', 'gisgitlaine2341@hotmail.com', '12345678', '703.118.280-86', '2022-11-08 22:34:44'),
(8, 'Kauanny Tenório Felix da Silva', 'kakaufeliz6790@hotmail.com', '12345678', '279.381.490-39', '2022-11-29 22:34:44'),
(9, 'Julia Alves Rufino', 'arufinoakajuju22@gmail.com', '12345678', '508.295.440-70', '2022-11-29 22:34:44'),
(10, 'Cauã Gustavo de Souza Mesquita', 'hjoklarjoel13@hotmail.com', '87654321', '652.213.780-19', '2022-11-22 22:34:44'),
(11, 'Wellington Augusto Souza Aguiar', 'wellgg777@outlook.com', '87654321', '830.217.360-68', '2022-11-29 22:34:44'),
(12, 'Felipe Santos de Almeida', 'lipefelipebru434@outlook.com', '12345678', '639.787.170-34', '2022-11-15 22:34:44'),
(13, 'Nicolas Nunes dos Santos', 'tulidando4352@gmail.com', '12345678', '776.864.820-06', '2022-11-15 22:34:44'),
(14, 'Marina Liz Simões Oliveira', 'lilimarina22@outlook.com', '12345678', '229.962.650-68', '2022-11-29 22:34:44'),
(15, 'Amanda Emídio Luciano de Freitas', 'AmDppt55fd@outlook.com', '12345678', '488.432.320-37', '2022-11-15 22:34:44'),
(16, 'Caio Pereira de Souza', 'caioguu1234@hotmail.com', '12345678', '237.223.990-25', '2022-11-29 22:34:44'),
(17, 'Caique de Andrade Lúcio', 'luciocaique33@gmail.com', '12345678', '369.195.990-31', '2022-11-15 22:34:44'),
(18, 'Camila Pinto Martins', 'camilaoko1@gmail.com', '12345678', '690.757.250-86', '2022-11-22 22:34:04'),
(19, 'Damaris Kamada Rodrigues da SIlva', 'damaris2203@gmail.com', '12345678', '713.335.380-65', '2022-11-15 22:34:44'),
(20, 'Danielle dos Santos Romano', 'romanos44dani7@outlook.com', '12345678', '952.757.610-58', '2022-11-22 22:34:44'),
(21, 'Fernando Almeida de Jesus Nogueira', 'nandophp22@gmail.com', '12345678', '977.355.810-09', '2022-11-22 22:34:44'),
(22, 'Gabriel Antônio da Silva Souto', 'gass33tvd@gmail.com', '12345678', '801.379.020-77', '2022-11-29 22:34:44'),
(23, 'Guilherme Cabral de LIma', 'guugui44fryg@outlook.com', '12345678', '012.309.610-38', '2022-11-29 22:34:44'),
(24, 'Igor Ferreira Gazuza de Freitas', 'gori625stsbgta@outlook.com', '12345678', '524.463.900-56', '2022-11-29 22:34:44'),
(25, 'Jonnas Kauan Santana de Oliveira', 'kauanwasd@gmail.com', '12345678', '663.223.430-50', '2022-11-29 22:34:44'),
(26, 'Kauan Matheus Barros de Oliveira', 'kkml43kaymli@gmail.com', '12345678', '482.235.240-40', '2022-11-29 22:34:44'),
(27, 'Kelvin Santos de Jesus', 'starkelvben10@hotmail.com', '12345678', '437.877.930-70', '2022-11-29 22:34:44'),
(28, 'Kevin Silva Estrela', 'bhkkelvigraga@outlook.com', '12345678', '749.172.600-35', '2022-11-29 22:34:44'),
(29, 'Kewen Dias de Araujo', 'kwewn90086@hotmail.com', '12345678', '059.612.590-99', '2022-11-29 22:34:44'),
(30, 'Maria Eduarda Veroneze Viegas', 'sepmaria@hotmail.com', '12345678', '294.338.440-25', '2022-11-29 22:34:44'),
(31, 'Nicollas Bispo Pereira', 'bbzibispo@gmail.com', '12345678', '694.761.370-10', '2022-11-29 22:34:44'),
(32, 'Pablo Vinícius Silva Santos', 'pabingg425sra@hotmail.com', '12345678', '029.742.790-31', '2022-11-29 22:34:44'),
(33, 'Pedro Henrique da Costa Lins', 'ph22riquehj77@gmail.com', '12345678', '892.749.210-20', '2022-11-29 22:34:44'),
(34, 'Pedro Henrique Silva', 'rrkph777@gmail.com', '12345678', '226.042.980-74', '2022-11-29 22:34:44'),
(35, 'Thiago Mendonça Rodrigues', 'thigosss3345vfgtred@outlook.com', '12345678', '265.696.750-36', '2022-11-29 22:34:44'),
(36, 'Victor Henrique Cavalcante Batista', 'vitosccp012@gmail.com', '12345678', '851.258.720-24', '2022-11-29 22:34:44');

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
  ADD PRIMARY KEY (`idEspecialidade`);

--
-- Índices para tabela `tbhospital`
--
ALTER TABLE `tbhospital`
  ADD PRIMARY KEY (`idHospital`);

--
-- Índices para tabela `tbmedico`
--
ALTER TABLE `tbmedico`
  ADD PRIMARY KEY (`idMedico`);

--
-- Índices para tabela `tbmedicoespecialidade`
--
ALTER TABLE `tbmedicoespecialidade`
  ADD PRIMARY KEY (`idMedicoEspecialidade`),
  ADD KEY `fk_idMedico` (`idMedico`),
  ADD KEY `fk_idEspecialidade` (`idEspecialidade`);

--
-- Índices para tabela `tbmedicohospital`
--
ALTER TABLE `tbmedicohospital`
  ADD PRIMARY KEY (`idMedicoHospital`),
  ADD KEY `fk_idMedico` (`idMedico`),
  ADD KEY `fk_idHospital` (`idHospital`);

--
-- Índices para tabela `tbplantao`
--
ALTER TABLE `tbplantao`
  ADD PRIMARY KEY (`idPlantao`),
  ADD KEY `fk_idMedico` (`idMedico`) USING BTREE,
  ADD KEY `fk_idHospital` (`idHospital`),
  ADD KEY `fk_idTipoPlantao` (`idEspecialidade`);

--
-- Índices para tabela `tbreclamacao`
--
ALTER TABLE `tbreclamacao`
  ADD PRIMARY KEY (`idReclamacao`),
  ADD KEY `fk_idTipoReclamacao` (`idTipoReclamacao`),
  ADD KEY `fk_idHospital` (`idHospital`),
  ADD KEY `fk_idUsuario` (`idUsuario`);

--
-- Índices para tabela `tbtelefone`
--
ALTER TABLE `tbtelefone`
  ADD PRIMARY KEY (`idTelefone`),
  ADD KEY `fk_idHospital` (`idHospital`),
  ADD KEY `fk_idMedico` (`idMedico`);

--
-- Índices para tabela `tbtiporeclamacao`
--
ALTER TABLE `tbtiporeclamacao`
  ADD PRIMARY KEY (`idTipoReclamacao`);

--
-- Índices para tabela `tbusuario`
--
ALTER TABLE `tbusuario`
  ADD PRIMARY KEY (`idUsuario`);

--
-- AUTO_INCREMENT de tabelas despejadas
--

--
-- AUTO_INCREMENT de tabela `tbadmin`
--
ALTER TABLE `tbadmin`
  MODIFY `idAdmin` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=12;

--
-- AUTO_INCREMENT de tabela `tbespecialidade`
--
ALTER TABLE `tbespecialidade`
  MODIFY `idEspecialidade` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=41;

--
-- AUTO_INCREMENT de tabela `tbhospital`
--
ALTER TABLE `tbhospital`
  MODIFY `idHospital` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=11;

--
-- AUTO_INCREMENT de tabela `tbmedico`
--
ALTER TABLE `tbmedico`
  MODIFY `idMedico` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=222;

--
-- AUTO_INCREMENT de tabela `tbmedicoespecialidade`
--
ALTER TABLE `tbmedicoespecialidade`
  MODIFY `idMedicoEspecialidade` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=280;

--
-- AUTO_INCREMENT de tabela `tbmedicohospital`
--
ALTER TABLE `tbmedicohospital`
  MODIFY `idMedicoHospital` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=231;

--
-- AUTO_INCREMENT de tabela `tbplantao`
--
ALTER TABLE `tbplantao`
  MODIFY `idPlantao` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=241;

--
-- AUTO_INCREMENT de tabela `tbreclamacao`
--
ALTER TABLE `tbreclamacao`
  MODIFY `idReclamacao` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=12;

--
-- AUTO_INCREMENT de tabela `tbtelefone`
--
ALTER TABLE `tbtelefone`
  MODIFY `idTelefone` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=232;

--
-- AUTO_INCREMENT de tabela `tbtiporeclamacao`
--
ALTER TABLE `tbtiporeclamacao`
  MODIFY `idTipoReclamacao` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=8;

--
-- AUTO_INCREMENT de tabela `tbusuario`
--
ALTER TABLE `tbusuario`
  MODIFY `idUsuario` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=37;
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
