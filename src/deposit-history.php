<!doctype html>
<html lang="en">
<head>
	<meta name="viewport" content="width=device-width, initial-scale=1.0">	
	<meta name="description" content="NAVI - Orbit Management Program 100% pure decentralized smart contract system">
    <meta name="keywords" content="NAVI - Orbit Management Program 100% decentralized smart contract system.">
    <meta name="author" content="NAVI - Orbit Management Program">
	<title> Deposit History : NAVI - Orbit Management Program </title>
    <link rel="shortcut icon" type="image/x-icon" href="./assets/img/favicon.png" />
	<link href="./assets/css/fonts.css" rel="stylesheet" />
	<link href="./assets/css/bootstrap.min.css" rel="stylesheet" />
	<link href="./assets/fontawesome/css/all.min.css" rel="stylesheet" />
	<link href="./assets/css/shared.css?v=1" rel="stylesheet" />
	<link href="./assets/css/utility.css?v=1" rel="stylesheet" />
	<link href="./assets/css/navbar.css?v=1" rel="stylesheet" />
	<link href="./assets/css/footer.css?v=1" rel="stylesheet" /> 
	<link href="./assets/css/deposit.css?v=1" rel="stylesheet" />
	<link href="./assets/css/modal.css?v=1" rel="stylesheet">	 
</head>
<body class="depositHistoryPage">	
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
					<h1 data-lang="Deposit_Details">Deposit <span class ="text-g">Details</span></h1>
					<?php include_once './top-cycle.php'; ?>
				</section>
                <section class ="sec-latest-deposit">
					<div class="row">
						<div class="col-md-12">                 
							<div class="latest-despositor-text">
							</div>
							<div class="latest-despositor-data">
								<table class="table orders-table">
									<thead>
										<tr>
											<th scope="col" data-lang="Deposit_Amount">Amount </th>
											<th scope="col" data-lang="Deposit_Time">Start Time</th>
											<th scope="col" data-lang="Deposit_Time">Unfreeze Time</th>
											<th scope="col" data-lang="Deposit_Reward">Reward</th>
                                            <th scope="col" data-lang="Deposit_Status">Status</th>
										</tr>
									</thead>
									<tbody></tbody>
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
	<script src="./assets/js/bootstrap.bundle.min.js"></script>
	<script src="./assets/js/jquery.min.js"></script>
    <script src="./assets/js/jquery.i18n.properties.min.js"></script>
	<script src="./assets/js/web3.min.js"></script>
	<script src="./assets/js/sweetalert2/sweetalert2.all.min.js"></script>
	<script src="./assets/js/app.js?v=<?= time(); ?>"></script>
</body>
</html>
