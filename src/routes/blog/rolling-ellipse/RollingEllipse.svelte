<script>
    import Katex from '$lib/Katex.svelte';
</script>

<p>
    Note: This is my best attempt at transpiling an article originally intended for
    latex into blog form. You can find the original <a href="/archive/rolling-ellipse.pdf">here</a>.
</p>


<h3>Rolling Without Slipping</h3>

<p>
    <b>Definition:</b>
    Given an object<a name="footnote1_source" href="#footnote1_target"><sup>1</sup></a>
    <Katex math="R" /> and a fixed curve <Katex math="{String.raw`\gamma`}" /> initially tangent to it, 
    we say that <Katex math="R" /> <i>rolls without slipping</i>
    on <Katex math="{String.raw`\gamma`}" /> if <Katex math="R" /> 
    moves<a name="footnote2_source" href="#footnote2_target"><sup>2</sup></a>
    such that
</p>
<ul class="mt-0">
<li> Some point on the boundary of <Katex math="R" /> is always
    tangent to <Katex math="{String.raw`\gamma`}" />, and
<li> When any point on <Katex math="R" /> is
    this tangency point, it is stationary.
</ul>

<p>
    Notably, we make no distinction to any "point"
    that the object rotates about.
</p>

<h3>Tracking a Marked Point</h3>

<p>
    Let's see some implications of this definition 
    to tracking a marked point on an object that is
    rolling without slipping.
</p>

<p>
    <b>Proposition:</b>
    Mark a point <Katex math="P" /> on the object, and suppose
    that it moves on a path <Katex math="{String.raw`\Gamma_P`}" />. Furthermore,
    suppose that the object is
    tangent to <Katex math="{String.raw`\gamma`}" /> at <Katex math="T" />. 
    Then, <Katex math="PT" /> is normal to <Katex math="{String.raw`\Gamma_P`}" />.
</p>

<div class="max-w-96 m-auto">
    <img 
        class="w-full max-w-96 m-auto"
        src="/blog/rolling-ellipse/proposition_1.png"
        alt="Figure for Proposition 1"
    />
    <span>
        Figure 1: Marked point <Katex math="P" /> moving along path <Katex math="{String.raw`\Gamma_P`}" />
    </span>
</div>

<p>
    <i>Proof:</i>
    Let <Katex math="P(t)" /> denote the position of <Katex math="{String.raw`P`}" /> at time <Katex math="{String.raw`t`}" />.
    Let <Katex math="{String.raw`T(t)`}" /> denote the position of <Katex math="{String.raw`T`}" /> at time <Katex math="{String.raw`t`}" />.
    We consider both <Katex math="{String.raw`P`}" /> and <Katex math="{String.raw`T`}" /> to move with the object.

    Suppose the object is tangent to <Katex math="{String.raw`\gamma`}" /> at <Katex math="{String.raw`T`}" />
    at the time <Katex math="{String.raw`t=t_0`}" />. By definition, we have <Katex math="{String.raw`T'(t_0) = 0`}" />.
    Now note that, <Katex math="{String.raw`P'(t_0)`}" /> is 
    a tangent vector to <Katex math="{String.raw`\Gamma_P`}" /> at <Katex math="{String.raw`P`}" /> (at time <Katex math="{String.raw`t=t_0`}" />).
    In addition,
    <Katex math="{String.raw`\begin{aligned}
        P'(t_0) \cdot (T(t_0) - P(t_0)) 
        &=  -\frac12 \frac{\mathrm{d}}{\mathrm{d}t} 
            \left[(T(t) - P(t)) \cdot (T(t) - P(t))\right] \bigg|_{t=t_0} \\
        &= -\frac12 \frac{\mathrm{d}}{\mathrm{d}t} \| T(t) - P(t) \|^2 \bigg|_{t=t_0}.
    \end{aligned}`}" displayMode={true} />

    is a constant, so <Katex math="{String.raw`P'(t_0) \cdot (T(t_0) - P(t_0)) = 0`}" />, as desired.
    <Katex math="{String.raw`\square`}" />
</p>

<p>
    Furthermore, since <Katex math="{String.raw`\| T(t) - P(t) \|`}" /> is does not depend on <Katex math="{String.raw`t`}" />, and
    <Katex math="{String.raw`T(t)`}" /> is momentarily stationary, we should be able to model
    the movement of <Katex math="{String.raw`P`}" /> when the time is near <Katex math="{String.raw`t`}" /> as following 
    the circle centered at <Katex math="{String.raw`T(t)`}" /> passing through <Katex math="{String.raw`P(t)`}" />.
    Unfortunately, this is not exactly true (e.g. though they are tangent, 
    the curvatures of said circle and <Katex math="{String.raw`\Gamma_P`}" /> are not always equal at <Katex math="{String.raw`P`}" />). 
</p>

<p>
    However, if we let <Katex math="{String.raw`s(t)`}" /> denote the arc
    length traversed by <Katex math="{String.raw`P`}" /> on <Katex math="{String.raw`\Gamma_P`}" /> from time <Katex math="{String.raw`0`}" /> to time <Katex math="{String.raw`t`}" />, and 
    let <Katex math="{String.raw`\theta(t)`}" /> denote the angle rotated by the object from time 
    <Katex math="{String.raw`0`}" /> to time <Katex math="{String.raw`t`}" /> (e.g. by marking a fixed line on the object,
    then tracking the angle the <Katex math="{String.raw`x`}" />-axis makes with it), we have
</p>

<p>
    <b>Theorem (Arc Length of Marked Points):</b>
    Suppose <Katex math="{String.raw`r(t)`}" /> is the distance from <Katex math="{String.raw`P(t)`}" /> to the tangency
    point of the object with <Katex math="{String.raw`\gamma`}" />. Then
    <Katex math="{String.raw`r = \frac{\mathrm{d}s}{\mathrm{d}\theta}`}" displayMode={true} />
    considering everything as a function of <Katex math="{String.raw`t`}" />.
</p>

<p>
    In other words, this states that if the object rotates by
    an infinitesimal angle of <Katex math="{String.raw`\mathrm{d}\theta`}" />, then 
    a point <Katex math="{String.raw`P`}" /> that is <Katex math="{String.raw`r`}" /> away from the tangency point of the object
    with <Katex math="{String.raw`\gamma`}" /> will move by <Katex math="{String.raw`r \, \mathrm{d}\theta`}" />. 
<p>

<p>
    <i>Proof of the Theorem:</i>
    This proof is a bit computational. We will show that, 
    using notation from the Proposition, at time <Katex math="{String.raw`t=t_0`}" />
    <Katex math="{String.raw`\| T(t_0) - P(t_0) \| = \frac{\mathrm{d}s}{\mathrm{d}\theta} \Bigg|_{t=t_0}.`}" displayMode={true} />
    Let <Katex math="{String.raw`r`}" /> be the <b>constant</b> equal to <Katex math="{String.raw`\| T(t_0) - P(t_0) \|`}" />, 
    and let <Katex math="{String.raw`\hat{\imath}`}" /> be the unit vector in the 
    positive <Katex math="{String.raw`x`}" /> direction. Finally, define
    <Katex math="{String.raw`\hat{n}(t) := \frac1r (T(t) - P(t)).`}" displayMode={true} />
    It's easy to see that <Katex math="{String.raw`\cos^{-1} (\hat{n} (t) \cdot \hat{\imath})`}" /> is the angle that
    the line <Katex math="{String.raw`PT`}" /> makes with the <Katex math="{String.raw`x`}" />-axis at time <Katex math="{String.raw`t`}" />, so it is
    off from <Katex math="{String.raw`\theta(t)`}" /> by a constant<a name="footnote3_source" href="#footnote3_target"><sup>3</sup></a>.
    Thus,
    <Katex 
        math="{String.raw`\frac{\mathrm{d}\theta}{\mathrm{d}s} 
    = \frac{\mathrm{d} \cos^{-1} (\hat{n} \cdot \hat{\imath})}{\mathrm{d}s} 
    = -\frac{1}{\sqrt{1 - (\hat{n} \cdot \hat{\imath})^2}} \cdot \frac{\mathrm{d}(\hat{n} \cdot \hat{\imath})}{\mathrm{d}s}.`}"
        displayMode={true}
    />
    We can check that 
    <Katex math="{String.raw`\frac{\mathrm{d}(\hat{n} \cdot \hat{\imath})}{\mathrm{d}s} 
    = \left(\hat{n}'(t) \cdot \hat{\imath} \right) \frac{\mathrm{d}t}{\mathrm{d}s} 
    = -\left(\frac{P'(t)}{r} \cdot \hat{\imath} \right) \frac{\mathrm{d}t}{\mathrm{d}s}
            = -\frac1r\left(\frac{\mathrm{d}P}{\mathrm{d}s} \cdot \hat{\imath}\right).`}"
        displayMode={true} />
    But note that <Katex math="{String.raw`\frac{\mathrm{d}P}{\mathrm{d}s} \big|_{t=t_0}`}" /> is the unit tangent 
    vector to <Katex math="{String.raw`\gamma_P`}" /> at <Katex math="{String.raw`P(t_0)`}" />, so by the Proposition,
    it and <Katex math="{String.raw`\hat{n}`}" /> form an orthonormal basis of <Katex math="{String.raw`\mathbb R^2`}" />
    <a name="footnote4_source" href="#footnote4_target"><sup>4</sup></a>.
    It follows that,
    <Katex math="{String.raw`(\hat{n} (t_0) \cdot \hat{\imath})^2 + 
    \left(\frac{\mathrm{d}P}{\mathrm{d}s} \bigg|_{t=t_0} \cdot \hat{\imath}\right)^2 
            = \| \hat{\imath} \|^2 = 1.`}"
        displayMode={true} />
    Therefore, 
    <Katex math="{String.raw`\frac{\mathrm{d}\theta}{\mathrm{d}s} \Bigg|_{t=t_0} = \frac1{r(t_0)},`}" displayMode={true} />
    as desired. <Katex math="{String.raw`\square`}" />
</p>

<h3>Example Problems</h3>

<p>
    <b>Problem 1 (Physics):</b>
    Suppose a circle with radius <Katex math="{String.raw`r`}" /> rolls without slipping on 
    a line such that its center moves with velocity
    <Katex math="{String.raw`v`}" /> and the entire circle rotates about its center
    with an angular velocity of <Katex math="{String.raw`\omega`}" />. Then <Katex math="{String.raw`v = r\omega`}" />.
</p>

<p>
    <i>Solution:</i>
    Track the position of the center. Note that it moves
    on a line at constant velocity and is always a distance <Katex math="{String.raw`r`}" />
    from the tangency point. Therefore, by the Theorem,
    <Katex 
        math="{String.raw`v = \frac{\mathrm{d}s}{\mathrm{d}t} = \frac{r \mathrm{d} \theta}{\mathrm{d}t} = r \omega. \square`}"
        displayMode={true}
    />
</p>

<p>
    <b>Problem 2 (Folklore):</b>
    Roll a coin around the circumference of another (fixed) coin of equal radius. 
    How many times does the moving coin rotate?
</p>

<p>
    <i>Solution:</i>
    Suppose the shared radius is <Katex math="{String.raw`r`}" />. 
    Again, track the position of the center of the rolling object. 
    Note that it moves on a circle with radius <Katex math="{String.raw`2r`}" /> concentric 
    with the fixed coin. Therefore, by the Theorem,
    <Katex math="{String.raw`\Delta \theta = \int \mathrm{d} \theta = \int \frac1r \, \mathrm{d}s =
            \frac1r \Delta S = \frac1r \cdot \tau \cdot 2r = 2\tau,`}"
        displayMode={true} />
    so the coin has rotated twice. <Katex math="{String.raw`\square`}" />
</p>

<p>
    <b>Problem 3 (Delaunay):</b>
    An ellipse with semimajor axis <Katex math="{String.raw`a`}" /> rolls without slipping along the 
    <Katex math="{String.raw`x`}" />-axis for one complete turn. Find the length of curve traced out
    by one focus <Katex math="{String.raw`F`}" />.
</p>

<p>
    Surprisingly (or unsurprisingly), this is independent of the eccentricity!
</p>

<p>
    <i>Solution:</i>
    By the Theorem,
    <Katex math="{String.raw`S = \int \mathrm{d} s = \int_0^\tau r \, \mathrm{d} \theta.`}" displayMode={true} />
    But by symmetry, for any <Katex math="{String.raw`\phi \in [0,\frac12 \tau)`}" />, the marked point on 
    the ellipse tangent to the <Katex math="{String.raw`x`}" />-axis when <Katex math="{String.raw`\theta = \phi`}" /> 
    (i.e. <Katex math="{String.raw`T(t_1)`}" /> for <Katex math="{String.raw`\theta(t_1) = \phi`}" />) is 
    the reflection over the center of the 
    ellipse of the marked point on the ellipse 
    tangent to the <Katex math="{String.raw`x`}" />-axis when <Katex math="{String.raw`\theta = \phi + \frac12 \tau`}" />.
    In other words, the moments in which the 
    ellipse is tangent to the <Katex math="{String.raw`x`}" />-axis at
    diametrically opposite points are a half turn away.

    But the sum of the distances from two diametrically
    opposite points to a fixed focus <Katex math="{String.raw`F`}" /> is simply <Katex math="{String.raw`2a`}" />
    since the two foci and the two diametrically opposite points
    form a parallelogram. Therefore,
    <Katex math="{String.raw`2S = \int_0^\tau 2a \, \mathrm{d}\theta = 2a \tau.`}" displayMode={true} />
    It follows that curve has length <Katex math="{String.raw`a \tau`}" />. <Katex math="{String.raw`\square`}" />
</p>

<h3>Footnotes</h3>
<p>
    <a name="footnote1_target" href="#footnote1_source"><sup>1</sup></a>
    We represent objects
    as the interiors of smooth,
    simple, closed, planar curves
</p>

<p>
    <a name="footnote2_target" href="#footnote2_source"><sup>2</sup></a>
    i.e. moves
    rigidly preserving orientation. You can 
    think about this as a path through the space 
    of rototranslations starting at the identity.
</p>

<p>
    <a name="footnote3_target" href="#footnote3_source"><sup>3</sup></a>
    Or off from <Katex math="{String.raw`-\theta(t)`}" />
    by a constant. It's iffy because we ideally want <Katex math="{String.raw`\theta`}" /> to be
    directed, but our dot product can only detect undirected
    angles. We can simply pretend all rotations are <Katex math="{String.raw`\ll \frac12 \tau`}" />, and
    that <Katex math="{String.raw`\theta(t)`}" /> is always defined so that 
    <Katex math="{String.raw`\frac{\mathrm{d}s}{\mathrm{d}\theta}`}" /> is positive.
</p>

<p>
    <a name="footnote4_target" href="#footnote4_source"><sup>4</sup></a>
    In fact, these are the tangent and normal unit vectors of
    the Frenet&mdash;Serret frame!
</p>
