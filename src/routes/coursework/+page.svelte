<script lang="ts">
	import Header from '../Header.svelte';
	import Navbar from '../Navbar.svelte';
</script>

<Header />

<div class="main flex">
	<Navbar currentPage="coursework" />
	<div class="prose m-4">
		<h3>Coursework</h3>

		<p>
			The following is a list of some classes that I am taking or have taken at MIT, as well as some
			that I plan on taking in the future.
		</p>

		Spring 2024:
		<ul class="mt-0">
			<li>Design and Analysis of Algorithms (6.046)</li>
			<li>Introduction to Topology (18.901)</li>
			<li>Algebra II (18.702)</li>
			<li>Introduction to Low-Level Programming in C and Assembly (6.0004)</li>
		</ul>

		IAP 2023:
		<ul class="mt-0">
			<li>Classical Mechanics II (8.223)</li>
		</ul>

		Fall 2023:
		<ul class="mt-0">
			<li>Graph Theory and Additive Combinatorics (18.225)</li>
			<li>Introduction to the Theory of Computation (18.404)</li>
		</ul>
	</div>
</div>
