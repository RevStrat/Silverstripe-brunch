<header>
	<div class="container">
		<div class="menu-toggle">
			<div class="hamburger">
				<div class="line"></div>
				<div class="line"></div>
				<div class="line"></div>
			</div>
		</div>
		<nav class="">
			<ul>
				<% loop $Menu(1) %>
					<li><a href="#$URLSegment" data-target="$URLSegment">$MenuTitle</a></li>
				<% end_loop %>
			</ul>
		</nav>
	</div>
</header>