<!doctype html>
<html lang="en">
<head>
	<meta name="viewport" content="width=device-width, initial-scale=1.0">	
	<meta name="description" content="NAVI - Orbit Management Program 100% pure decentralized smart contract system">
    <meta name="keywords" content="NAVI - Orbit Management Program 100% decentralized smart contract system.">
    <meta name="author" content="NAVI - Orbit Management Program">
	<title> Transfer USDT Fund : NAVI - Orbit Management Program </title>
    <link rel="shortcut icon" type="image/x-icon" href="./assets/img/favicon.png" />
	<link href="./assets/css/fonts.css" rel="stylesheet">
	<link href="./assets/css/bootstrap.min.css" rel="stylesheet">
	<link href="./assets/fontawesome/css/all.min.css" rel="stylesheet" />
	<link href="./assets/css/shared.css?v=1" rel="stylesheet" />
	<link href="./assets/css/utility.css?v=1" rel="stylesheet" />
	<link href="./assets/css/navbar.css?v=1" rel="stylesheet" />
	<link href="./assets/css/footer.css?v=1" rel="stylesheet" />  
	<link href="./assets/css/dashboard.css?v=1" rel="stylesheet">   
	<link href="./assets/css/modal.css?v=1" rel="stylesheet">
</head>
<body class="transferUsdtFundPage">
    <?php include_once './header.php'; ?>
    <!-- NAV BAR END-->
	<div class="container-fluid">
		<div class="row">
			<!-- SIDEBAR START-->
			<?php include_once './sidebar.php'; ?>
			<!-- SIDEBAR  START-->
			<!-- MAIN CONTENT  START-->
			<main class ="col-md-10 ms-sm-auto">
				<section class ="sec-welcome-infos">
					<h1 class="text-white" data-lang="Transfer_Usdt_Fund">Transfer <span class ="text-g">USDT FUND</span></h1>
					<?php include_once './top-cycle.php'; ?>
					<div class ="container-fluid">
						<div class ="deposit-details">
							<div class ="row">
								<div class ="col-md-8">
									<div class ="row deposit-data">
										<div class ="col-6">
											<h1>25 USDT</h1>
										</div>
										<div class ="col-6">
											<h4 data-lang="Dashboard_Min_Transfer">Minimum Transfer</h4>
										</div>
									<hr>
									</div>
									<div class ="row deposit-data">
										<div class ="col-6">
											<h1 class="availableUsdt">0 USDT</h1>
										</div>
										<div class ="col-6">
											<h4 data-lang="Dashboard_USDT_Available">Available USDT</h4>
										</div>
									<hr>
									</div>
									<div class ="row deposit-data">
										<div class ="col-6">
											<h1>+25</h1>
										</div>
										<div class ="col-6">
											<h4 data-lang="Dashboard_Transfer_Rule2">Increasing Multiples of 25</h4>
										</div>
									<hr>
									</div>
									<div class ="row deposit-data">
										<div class ="col-6">
											<div class ="deposit-amount">
												<input type="text" class="inputTransferUSDT" placeholder="Enter Amount">
											</div>
											<!-- <h1><span class ="text-g">1000 USDT</span></h1> -->
										</div>
										<div class ="col-6">
											<h4 class ="text-g" data-lang="Dashboard_Transfer_Amount">Transfer Amount</h4>
										</div>
									<hr>
									</div>
									<div class ="row deposit-data">
										<div class ="col-6">
											<div class ="deposit-amount">
												<input type="text" class="inputTransferAddr" placeholder="Enter receiver address">
											</div>
											<!-- <h1><span class ="text-g">1000 USDT</span></h1> -->
										</div>
										<div class ="col-6">
											<h4 class ="text-g" data-lang="Dashboard_Transfer_Address">Receiver Address</h4>
										</div>
										<hr>
									</div>
									<div class="d-buttons">
										<button class ="d-confirm transferUsdt-confirm-btn" data-lang="Dashboard_Confirm"> Confirm </button>
									</div>
								</div>								
							</div>
						</div>
					</div>
				</section>
			</main>
            <!-- MAIN CONTENT  END-->
		</div>			
	</div>
	<?php include_once './footer.php'; ?>
	<script src="./assets/js/jquery.min.js"></script>
    <script src="./assets/js/jquery.i18n.properties.min.js"></script>
	<script src="./assets/js/bootstrap.bundle.min.js"></script>
	<script src="./assets/js/layer/layer.js"></script>
	<script src="./assets/js/web3.min.js"></script>
	<script src="./assets/js/sweetalert2/sweetalert2.all.min.js"></script>
	<script src="./assets/js/app.js?v=<?= time(); ?>"></script>
</body>
</html>