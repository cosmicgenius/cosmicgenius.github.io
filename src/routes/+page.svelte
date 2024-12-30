<script lang="ts">
    import Header from './Header.svelte';
    import Navbar from './Navbar.svelte';
</script>

<Header />

<div class="main flex">
    <Navbar currentPage="home" />
    <div class="m-4 prose">
        <h3>Home</h3>
        <img 
          class="m-4 mt-8 float-right"
          src="./album/240117_self.jpg" 
          alt="Picture of me"
        />
        <p>
          Welcome to my website! I am a first year student 
          at MIT, hoping to major in Mathematics 
          (Course 18 General) and
          Computer Science and Engineering (Course 6-3).
        </p>
        
        <p> 
          In mathematics, I am primarily interested 
          in combinatorics, especially 
          algebraic combinatorics and 
          combinatorial optimization. 
          In computer science, I am interested in 
          sustainable software 
          development and the practical efficiency of 
          algorithms, particularly 
          those on distributed systems.
        </p>

        <p class="clear-both">
          This website's design is modeled off of 
          <a href="https://www.mit.edu/~brwa">
          Brandon Wang's</a>.
        </p>
    </div>
</div>

<style>
    img {
        max-width: min(12rem, 100%);
    }
</style>
