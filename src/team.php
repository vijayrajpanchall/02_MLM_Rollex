<!doctype html>
<html lang="en">
<head>
	<title> Team </title>
	<meta name="viewport" content="width=device-width, initial-scale=1.0">	
	<!-- IIMPORT FONTS -->
	<link href="./assets/css/fonts.css" rel="stylesheet">
	<!-- BOOTSTRAP CSS-->
	<link href="./assets/css/bootstrap.min.css" rel="stylesheet">	
	<!-- CUSTOM  CSS-->
	<link href="./assets/css/shared.css" rel="stylesheet">  
	<link href="./assets/css/utility.css" rel="stylesheet">
	<link href="./assets/css/navbar.css" rel="stylesheet">
	<link href="./assets/css/footer.css" rel="stylesheet"> 
	<link href="./assets/css/team.css" rel="stylesheet"> 
	<link href="./assets/css/modal.css" rel="stylesheet"> 
	 
</head>
<body class="teamPage">
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
					<h1 data-lang="Deposit_Details">My <span class ="text-g">Team</span></h1>
					<?php include_once './top-cycle.php'; ?>
				</section>
				<section class ="sec-team-infos">
					<div class ="row">
						<div class="col-md-6">
							<div class ="team-info background-orange">
								<h3 data-lang="Team_Total">Team Total Performance</h3>
								<h2 class="team-total-deposit"> $0</h2>
							</div>
						</div>
						<div class="col-md-6 ">
							<div class ="team-info  background-pink">
								<h3 data-lang="Team_A">Team A Performance</h3>
								<h2 class="max-deposit"> $0</h2>
							</div>
						</div>
					</div>
					<div class ="row">
						<div class="col-md-6">
							<div class ="team-info  background-blue">
								<h3 data-lang="Team_Members">Team Members</h3>
								<h2 class="team-number"> 0</h2>
							</div>
						</div>
						<div class="col-md-6 ">
							<div class ="team-info  background-violet">
								<h3 data-lang="Team_B">Team B Performance</h3>
								<h2 class="other-deposit"> $0</h2>
							</div>
						</div>
					</div>
				</section>
				<section class ="sec-requirement-infos">
					<h2 data-lang="Team_Requirements">Team Users</h2>
					<p data-lang="Team_Desc">Users into different levels</p>
					<div class ="container">
						<div class ="row" style="margin: 20px 0">
							<div class ="col-md-12 requirement-star">
								
							</div>
						</div>
					</div>
				</section>
			</main>
			<!-- MAIN CONTENT  END-->
		</div>			
	</div>
	<?php include_once './footer.php'; ?>
	<script src="./assets/js/bootstrap.min.bundle.min.js"></script>
	<script src="./assets/js/jquery.min.js"></script>
    <script src="./assets/js/jquery.i18n.properties.min.js"></script>
	<script src="./assets/js/web3.min.js"></script>
	<script src="./assets/js/sweetalert2/sweetalert2.all.min.js"></script>
	<script src="./assets/js/app.js?ver=<?= time(); ?>"></script>
</body>
</html>
