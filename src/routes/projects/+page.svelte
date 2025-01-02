<script lang="ts">
	import PageTemplate from '$lib/PageTemplate.svelte';
</script>

<PageTemplate currentPage="projects">
    <h2>Projects</h2>

    <p>The following is a list of some of the math/cs related projects that I have done.</p>

    <div>
        <img
            class="float-right mb-4 ml-4 mt-2 w-72 max-w-full border border-black"
            src="./album/240117_factorize.png"
            alt="Successful factorization of a 90 digit number"
        />
        <p>
            <a href="https://github.com/cosmicgenius/factorize"> cosmicgenius/factorize</a>: A
            <a href="https://www.rieselprime.de/ziki/Self-initializing_quadratic_sieve"
                >self-initializing quadratic sieve</a
            >
            implementation with large primes partial results and block Gaussian elimination, written in C++.
            Successfully factored a 100 digit RSA key on my laptop in 10 hours.
        </p>
    </div>

    <div class="clear-right">
        <p>
            <a href="https://github.com/opalarchive/opal/tree/beta"> opalarchive/opal</a>: A website
            allowing users to collaborate on shared problem databases, originally meant for facilitating
            math contest creation. Features included problem ratings, filtering, tags, comments, export
            to LaTeX, and connection to an personal external database. Designed with two friends.
        </p>
        <img
            class="float-left mb-4 mr-4 mt-2 w-60 max-w-full border border-black"
            src="./album/240117_opal.png"
            alt="Demo problem post that was used on opal"
        />
        <p>
            Made with React and Next.js, with a Node.js backend. Uses MongoDB for the main database, and
            Firebase for external databases. No longer being maintained.
        </p>
    </div>

    <div class="clear-left">
        <img
            class="float-right mb-4 ml-4 mt-2 w-48 max-w-full border border-black"
            src="./album/240117_trains.png"
            alt={'A sample level from the game "Trains!"'}
        />
        <p>
            <a href="https://cosmicgenius.itch.io/trains"> Trains!</a>: A puzzle game about controlling
            block-shaped trains in order to push enemies into water, inspired by
            <a href="https://www.minecraft.net/">Minecraft </a>'s pistons and games like
            <a href="https://hempuli.com/baba/">Baba Is You</a>. All sprites and game logic are mine.
            Made with Godot and gdscript.
        </p>
    </div>

    <div class="clear-right">
        <img
            class="float-left mb-4 mr-4 mt-2 w-64 max-w-full border border-black"
            src="./album/240117_tsqx.png"
            alt="A sample diagram produced by tsqx and Asymptote"
        />
        <p>
            <a href="https://github.com/cosmicgenius/tsqx"> cosmicgenius/tsqx</a>, fork of
            <a href="https://github.com/cjquines/tsqx"> cjquines/tsqx</a>: An preprocessor for the
            Asymptote vector graphics language adding shorthand, especially for olympiad geometry, and
            lisp-like syntax. Written in Python.
        </p>
    </div>

    <div class="clear-left">
        <img
            class="float-right mb-4 ml-4 mt-2 w-48 max-w-full border border-black"
            src="./album/240117_ellipse.png"
            alt="A diagram with a point marked on an object 
              rolling without slipping"
        />
        <p>
            <a href="archive/rolling-ellipse.pdf"> Tracking Points While Rolling Without Slipping</a>:
            An article analyzing how to describe the trajectory of points on objects that are rolling
            without slipping, inspired by the classic
            <a href="https://en.wikipedia.org/wiki/Coin_rotation_paradox"> coin rotation paradox</a> and
            <a href="https://projecteuler.net/problem=525"> Project Euler problem 525</a>.
        </p>
    </div>
    <h2>Publications</h2>

    <p>
        Y. Gao, <b>A. Wang</b> (2023). Consecutive patterns in Coxeter groups.
        <i>Journal of Algebra</i>, Vol. 634, 650-666,
        <a href="https://doi.org/10.1016/j.jalgebra.2023.07.029">
            https://doi.org/10.1016/j.jalgebra.2023.07.029</a
        >.
    </p>
</PageTemplate>

