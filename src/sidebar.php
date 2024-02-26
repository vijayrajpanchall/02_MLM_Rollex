<?php $pageName =  basename($_SERVER['PHP_SELF']); ?>
<nav id="sidebarMenu" class="col-md-2 col-lg-2 bg-light sidebar collapse show">
    <div class="position-sticky sidebar-sticky">
        <div class="nav">
            <a class="nav-link" href="./dashboard.php">
                <span class="icon-sidebar <?= $pageName == 'dashboard.php' ? 'active':'in-active';?>">
                    <i class="fa-solid fa-house"></i>
                    <p data-lang="Nav_Dashboard">Dashboard</p>
                </span>
            </a>
            <a class="nav-link" href="./deposit.php">
                <span class="icon-sidebar <?= $pageName == 'deposit.php' ? 'active':'in-active';?>">
                    <i class="fa-solid fa-hand-holding-dollar"></i>
                    <p data-lang="Nav_Deposit">Deposit</p>
                </span>
            </a>
            <a class="nav-link" href="./deposit-history.php">
                <span class="icon-sidebar <?= $pageName == 'deposit-history.php' ? 'active':'in-active';?>">
                    <i class="fa-solid fa-file-invoice-dollar"></i>
                    <p data-lang="Nav_Deposit">Deposit History</p>
                </span>
            </a>
            <a class="nav-link" href="./withdraw.php">
                <span class="icon-sidebar <?= $pageName == 'withdraw.php' ? 'active':'in-active';?>">
                    <i class="fa-solid fa-coins"></i>
                    <p data-lang="Nav_Deposit">Withdraw</p>
                </span>
            </a>
            <a class="nav-link" href="./deposit-usdt-fund.php">
                <span class="icon-sidebar <?= $pageName == 'deposit-usdt-fund.php' ? 'active':'in-active';?>">
                    <i class="fa-solid fa-sack-dollar"></i>
                    <p data-lang="Nav_Deposit">Deposit USDT Fund</p>
                </span>
            </a>
            <a class="nav-link" href="./transfer-usdt-fund.php">
                <span class="icon-sidebar <?= $pageName == 'transfer-usdt-fund.php' ? 'active':'in-active';?>">
                    <i class="fa-solid fa-money-bill-transfer"></i>
                    <p data-lang="Nav_Deposit">Transfer USDT Fund</p>
                </span>
            </a>
            <a class="nav-link" href="./deposit-by-activation.php">
                <span class="icon-sidebar <?= $pageName == 'deposit-by-activation.php' ? 'active':'in-active';?>">
                    <i class="fa-solid fa-money-check-dollar"></i>
                    <p data-lang="Nav_Deposit">Deposit By Activation</p>
                </span>
            </a>
            <a class="nav-link" href="./transfer-activation-fund.php">
                <span class="icon-sidebar <?= $pageName == 'transfer-activation-fund.php' ? 'active':'in-active';?>">
                    <i class="fa-solid fa-money-bill-transfer"></i>
                    <p data-lang="Nav_Deposit">Transfer Activation Fund</p>
                </span>
            </a>
        </div>
    </div>
</nav>