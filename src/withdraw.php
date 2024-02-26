<!doctype html>
<html lang="en">
<head>
	<meta name="viewport" content="width=device-width, initial-scale=1.0">	
	<meta name="description" content="NAVI - Orbit Management Program 100% pure decentralized smart contract system">
    <meta name="keywords" content="NAVI - Orbit Management Program 100% decentralized smart contract system.">
    <meta name="author" content="NAVI - Orbit Management Program">
	<title> Withdraw Fund : NAVI - Orbit Management Program </title>
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
	<style>
		.action button{
			width: 100% !important;
		}
	</style>
</head>
<body class="withdrawPage">
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
					<h1 class="text-white" data-lang="Withdraw_Details">Withdraw <span class ="text-g">USDT FUND</span></h1>
					<?php include_once './top-cycle.php'; ?>
					<div class ="container-fluid">
						<div class ="withdraw-details">
							<div class ="row">
								<div class ="col-md-8">
									<div class ="withdraw-action">
										<div class ="action-amount">
											<div>
												<h2 data-lang="Dashboard_Withdrawable"><span class="text-g" >Available </span>Withdraw</h2>
												<h3 class="available-amount">0.00 USDT</h3>
											</div>											
										</div>
										
										<div class ="row deposit-data">
											<div class ="col-6">
												<div class ="deposit-amount">
													<input type="text" class="input-amount" placeholder="Enter Token Amount">
												</div>
											</div>
											<div class ="col-6">
												<h4 class ="text-g" data-lang="Dashboard_Deposit_Amount">Token Amount</h4>
											</div>
											<hr>
										</div>

										<div class="action">
											<button class="w-confirm withdraw-confirm-btn" data-lang="Dashboard_Confirm"> Confirm </button>
										</div>
									</div>
								</div>
									
								<div class ="col-md-4 top">
									<div class ="withdraw-action">
										<div class ="">
											<p >The maximum Buy of each file must be unlocked, and the maximum deposit amount of the next file can only be released after one full round, up to a maximum of 1250 USDT
											<br> Rollex Price will be updated by every transaction made in contract (Buy or Sale) <br>
												Every transaction price will be increased only <br>
												When user buying Rollex token then supply will be generated automatically and when user <br>
												selling Rollex then supply will be reduced and sold token will be burned </p>
										</div>
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