<!doctype html>
<html lang="en">
<head>
	<meta name="viewport" content="width=device-width, initial-scale=1.0">	
	<meta name="description" content="NAVI - Orbit Management Program 100% pure decentralized smart contract system">
    <meta name="keywords" content="NAVI - Orbit Management Program 100% decentralized smart contract system.">
    <meta name="author" content="NAVI - Orbit Management Program">
	<title> Dashboard : NAVI - Orbit Management Program</title>
    <link rel="shortcut icon" type="image/x-icon" href="./assets/img/favicon.png" />
	<link href="./assets/css/fonts.css" rel="stylesheet" />
	<link href="./assets/css/bootstrap.min.css" rel="stylesheet" />
	<link href="./assets/fontawesome/css/all.min.css" rel="stylesheet" />
	<link href="./assets/css/shared.css?v=1" rel="stylesheet" />
	<link href="./assets/css/utility.css?v=1" rel="stylesheet" />
	<link href="./assets/css/navbar.css?v=1" rel="stylesheet" />
	<link href="./assets/css/footer.css?v=1" rel="stylesheet" /> 
	<link href="./assets/css/dashboard.css?v=<?= time();?>" rel="stylesheet" />
	<link href="./assets/css/modal.css?v=<?= time();?>" rel="stylesheet">
</head>
<body class="dashboardPage">
	<!-- NAV BAR START-->
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
					<h1  data-lang="Dashboard_Welcome"> <span class ="text-w ">Welcome, </span> <span class ="text-g"> <span class="user-short-address"></span></span></h1>
					<div class ="additional-info">
						<div class ="additional-info-text">
							<h2 data-lang="Dashboard_Bonus_Title" class="text-warning">Welcome Bonus</h2>
							<h5 data-lang="Dashboard_Bonus_Rule">Get your first deposit <spna class="text-warning font-weight-bold text-uppercase">+ 5% welcome bonus</spna>.</h5>
						</div>
					</div>
					<?php include_once './top-cycle.php'; ?>
				</section>
				<section class ="sec-full-detail">
					<div class ="row">
						<div class="col-md-3">
							<div class ="detail-profile bg-starter">
								<div class ="detail-profile-info">
									<div class ="detail-level">
										<div class ="levels">
											<h2 class ="text-g level"> My Buying </h2>
										</div>
									</div>
									<div class ="detail-balance">
										<div class ="balance-info">
											<h3 data-lang="Dashboard_Income">Buy Amount </h3>
											<h4 class="myBuy">0.00</h4>
										</div>
										<div class ="balance-info">
											<input type="hidden" id="ref-link" value="" />
											<h3 data-lang="Dashboard_Referral_Link">Referral Link</h3>
											<button class="copyLink" data-lang="Dashboard_Copy"> Copy </button>
										</div>										
									</div>
								</div>
							</div>
						</div>
						<div class="col-md-3">
							<div class ="detail-profile bg-orion">
								<div class ="detail-profile-info">
									<div class ="detail-level">
										<div class ="levels-acheived" style="display: none;">
											<i class="fa-solid fa-crown text-warning fa-2xl"></i>
											<a class="c-ribbon c-ribbon--top c-ribbon--left" href="javascript:void(0);" target="_blank">Achieved</a>
										</div>
										<div class ="levels">
											<h2 class ="text-g level"> My Selling </h2>
										</div>
									</div>
									<div class ="detail-balance orion-progress">
										<div class ="balance-info">
											<h3 data-lang="Dashboard_Income">Sell Amount</h3>
											<h4 class=""><spna class="mySell">0 USDT</h4>
										</div>										
										<div class ="balance-info">
											<p class="p_level"> Click more </p>
										</div>
									</div>
								</div>
							</div>
						</div>
						<div class="col-md-3">
							<div class ="detail-profile bg-cygnus">
								<div class ="detail-profile-info">
									<div class ="detail-level">
										<div class ="levels-acheived" style="display: none;">
											<i class="fa-solid fa-crown text-warning fa-2xl"></i>
											<a class="c-ribbon c-ribbon--top c-ribbon--left" href="javascript:void(0);" target="_blank">Achieved</a>
										</div>
										<div class ="levels">
											<h2 class ="text-g level"> Level Income </h2>
										</div>
									</div>
									<div class ="detail-balance cygnus-progress">
										<div class ="balance-info">
											<h3 data-lang="Dashboard_Income">Rollex </h3>
											<h4 class=""><spna class="levelIncome">0.00 RLX</h4>
										</div>
										
										<div class ="balance-info">
											<p class="p_level"> Click more</p>
										</div>												
									</div>
								</div>
							</div>
						</div>
						<div class="col-md-3">
							<div class ="detail-profile bg-cygnus">
								<div class ="detail-profile-info">
									<div class ="detail-level">
										<div class ="levels-acheived" style="display: none;">
											<i class="fa-solid fa-crown text-warning fa-2xl"></i>
											<a class="c-ribbon c-ribbon--top c-ribbon--left" href="javascript:void(0);" target="_blank">Achieved</a>
										</div>
										<div class ="levels">
											<h2 class ="text-g level"> My Holding Token </h2>
										</div>
									</div>
									<div class ="detail-balance cygnus-progress">
										<div class ="balance-info">
											<h3 data-lang="Dashboard_Income">Rollex </h3>
											<h4 class=""><spna class="myHolding">0.00 RLX</h4>
										</div>
										
										<div class ="balance-info">
											<p class="p_level"> <span class="myUsdtValue" > 0 USDT </span></p>
										</div>												
									</div>
								</div>
							</div>
						</div>
					</div>
					<div class ="row">
						<div class="col-md-12">
							<div class="detail-transaction">
								<div class ="row">
									<div class ="col-6 col-md-2">
										<a href ="./deposit.php">
											<div class="detail-withdraw bg-cadetblue">
												<i class="fa-solid fa-hand-holding-dollar"></i>
												<h2 data-lang="Dashboard_Deposit">Deposit</h2>
											</div>
										</a>
									</div>
									<div class ="col-6 col-md-2">
										<a href ="./withdraw.php" >
											<div class="detail-withdraw bg-cadetred">
												<i class="fa-solid fa-coins"></i>
												<h2 data-lang="Dashboard_Withdraw">Withdraw</h2>
											</div>
										</a>
									</div>
									<div class ="col-6 col-md-2">
										<a href ="./deposit-usdt-fund.php">
											<div class="detail-withdraw bg-cadetgreen">
												<i class="fa-solid fa-sack-dollar"></i>
												<h2 data-lang="Dashboard_Withdraw">Deposit USDT</h2>
											</div>
										</a>
									</div>
									<div class ="col-6 col-md-2">
										<a href ="./transfer-usdt-fund.php" >
											<div class="detail-withdraw bg-cadetlightgreen">
												<i class="fa-solid fa-money-bill-transfer"></i>
												<h2 data-lang="Dashboard_Withdraw">Transfer USDT</h2>
											</div>
										</a>
									</div>
									<div class ="col-6 col-md-2">
										<a href ="./deposit-by-activation.php" >
											<div class="detail-withdraw bg-cadetbrown">
												<i class="fa-solid fa-money-check-dollar"></i>
												<h2 data-lang="Dashboard_Withdraw">Deposit By Activation</h2>
											</div>
										</a>
									</div>
									<div class ="col-6 col-md-2">
										<a href ="./transfer-activation-fund.php" >
											<div class="detail-withdraw bg-cadetlightbrown">
												<i class="fa-solid fa-money-bill-transfer"></i>
												<h2 data-lang="Dashboard_Withdraw">Transfer Activation </h2>
											</div>
										</a>
									</div>
								</div>
							</div>
						</div>
					</div>					
				</section>
				<section class ="sec-latest-deposit">
					<div class="row">
						<div>                 
							<div class="latest-despositor-text">
								<h3 data-lang="Dashboard_Depositors"> <span class ="text-w">Latest</span> Depositors</h3>
							</div>
							<div class="latest-despositor-data">
								<table class="table latest-despositor-table">
									<thead>
										<tr>
											<th scope="col" data-lang="Dashboard_Time">Time </th>
											<th scope="col" data-lang="Dashboard_Address">Address</th>
											<th scope="col" data-lang="Dashboard_Amount">Amount</th>
										</tr>
									</thead>
									<tbody>
										<tr>
											<td>Waitting</td>
											<td class="address_color">Waitting</td>
											<td>
												<div class="main-latest-despositor-data-amount">
													<img src="./assets/img/t-icon.png" height="18">
													<h3>Waitting</h3>
												</div>
											</td>
										</tr>
										<tr>
											<td>Waitting</td>
											<td class="address_color">Waitting</td>
											<td>
												<div class="main-latest-despositor-data-amount">
													<img src="./assets/img/t-icon.png" height="18">
													<h3>Waitting</h3>
												</div>
											</td>
										</tr>
										<tr>
											<td>Waitting</td>
											<td class="address_color">Waitting</td>
											<td>
												<div class="main-latest-despositor-data-amount">
													<img src="./assets/img/t-icon.png" height="18">
													<h3>Waitting</h3>
												</div>
											</td>
										</tr>
										<tr>
											<td>Waitting</td>
											<td class="address_color">Waitting</td>
											<td>
												<div class="main-latest-despositor-data-amount">
													<img src="./assets/img/t-icon.png" height="18">
													<h3>Waitting</h3>
												</div>
											</td>
										</tr>
										<tr>
											<td>Waitting</td>
											<td class="address_color">Waitting</td>
											<td>
												<div class="main-latest-despositor-data-amount">
													<img src="./assets/img/t-icon.png" height="18">
													<h3>Waitting</h3>
												</div>
											</td>
										</tr>
									</tbody>
								</table>
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
	<!-- <script src="./assets/js/layer/layer.js"></script> -->
	<script src="./assets/js/web3.min.js"></script>
	<script src="./assets/js/sweetalert2/sweetalert2.all.min.js"></script>
	<script src="./assets/js/app.js?v=<?= time(); ?>"></script>
</body>
</html>
