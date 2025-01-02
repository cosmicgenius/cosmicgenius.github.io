<script lang="ts">
    import PageTemplate from '$lib/PageTemplate.svelte';
</script>

<PageTemplate currentPage="home">
    <h2>Home</h2>
    <img
        class="float-right m-4 mt-2 w-48 max-w-full border border-black"
        src="./album/240117_self.jpg"
        alt="Picture of me"
    />
    <p>
        Welcome to my website!
        Currently, I am training models at <a href="https://www.linkedin.com/company/codeiumdev/">Codeium</a>
        while on a gap year from MIT. I plan to return to MIT in fall of 2025 to complete my degree (most
        likely in mathematics).
    </p>

    <p>
        I am primarily interested in developing new techniques to push the boundaries of what
        is possible. In mathematics, my focus has mainly been on applying algebraic techniques to
        combinatorics. I am now venturing into the AI space.
    </p>

    <!--
    <p>
        In mathematics, I am primarily interested in combinatorics, especially algebraic combinatorics
        and combinatorial optimization. In computer science, I am interested in sustainable software
        development and the practical efficiency of algorithms, particularly those on distributed
        systems.
    </p>
    -->

    <p>
        This website's design is modeled off of
        <a href="https://www.mit.edu/~brwa"> Brandon Wang's</a>.
    </p>
</PageTemplate>
