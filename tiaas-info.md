---
title: Training Infrastructure as a Service
--- 


<p>The <a href="https://usegalaxy.be">useGalaxy.be</a> server provides <strong>Training Infrastructure as a Service (TIaaS)</strong> for the Galaxy training community.
You provide the training, we provide the <strong>infrastructure at no cost</strong>.</p>

<h2 id="why-tiaas">Why TIaaS?</h2>

<ul>
  <!-- <li>Separate queue where only your training’s jobs will run.</li> -->
  <li>No Galaxy maintenance</li>
  <li>No Galaxy administration</li>
  <li>Free infrastructure</li>
  <li>Make use of <a href="https://training.galaxyproject.org">Galaxy Training Materials</a>.</li>
  <li>See how your students are progressing on a dashboard</li>
</ul>

<h2 id="how-tiaas-works">How TIaaS Works</h2>

<p>We have several “pools” of virtual machines (VMs) attached to useGalaxy.be that run user jobs. For trainings that request TIaaS, we attach a new pool of VMs that is specially labelled for that training. When users join a training using a <strong>special URL</strong> we provide you, they are assigned to a <strong>special training group</strong>. Their jobs will then <strong>preferentially run on a training machine</strong>, and, in the event there is no more capacity, they will run on the main queue. If a spot on a training VM opens up first, they will run there rather than continuing to wait in the main queue. The jobs run by the rest of users on our server are instructed to avoid the training pools.</p>

<p>Some more general information about the TIaaS service:</p>

<ul>
  <li><a href="https://usegalaxy.be/tiaas/calendar/">A calendar</a> that shows when TIaaS trainings are booked.</li>
  <li><a href="https://usegalaxy.be/tiaas/stats/">Some statistics</a> about the TIaaS events.</li>
</ul>

<h3 id="before-the-training">Before the training</h3>

<p>Before users can join a specific training, they need to be <strong>logged into the <a href="https://usegalaxy.be/">useGalaxy.be</a> server</strong>.</p>

<p>To <strong>import data</strong>:</p>

<ul>
  <li>
    <p>If you are using the <a href="https://training.galaxyproject.org/">Galaxy Training Network (GTN) material</a> for
your workshop, then some of the <a href="https://usegalaxy.be/libraries/folders/F71dd6a15eadf6281">training data is already available on Galaxy BE</a>.</p>
  </li>
  <li>
    <p>If you are using your own data, you can upload it to your account into a history. Later, you can <a href="https://usegalaxy.be/histories/sharing">make it accessible</a> to your trainees. Your trainees will then be able to <a href="https://usegalaxy.be/histories/import">import your history</a> and start working with your data.</p>
  </li>
</ul>

<p>We recommend to use Galaxy’s default storage location during the training. This will help us in cleaning up unused data and offer Galaxy as a more sustainable service. To see which storage location is in use for your history, click on the <code class="language-plaintext highlighter-rouge">Preferred Storage Location</code> on the right panel (History panel).

<p>You can learn more about managing storage options on the <a href="https://training.galaxyproject.org/training-material/faqs/galaxy/manage_your_galaxy_storage.html#tip-what-can-you-do-after-you-connected-a-storage">Galaxy Training Network page</a>.</p>

<h3 id="after-the-training">After the training</h3>

<p>Once the training is over, the data will stay available for further use. However, we encourage you to <strong>clean up all the histories</strong> whenever this data will not be used anymore.</p>

<p>To keep running this free service for your trainees, <strong>we need your feedback and support</strong>. It would be great if you could:</p>

<ul>
  <li>Write us a (short) testimonial about your experience with the provided TIaaS for us to use in our promotional materials, reports, and funding applications.</li>
  <li>If you made use of GTN material, fill in the feedback form found at the end of every GTN tutorial.</li>
  </ul>

<h2 id="disclaimer">Disclaimer</h2>

<p>We <em>cannot</em> promise any degree of uptime. We will do our best to have this service online and functioning during the entire time period, but there are cases where the service may experience interruptions that are outside of our control.</p>

<h2 id="Availability">Availability</h2>

<p>While we strive to fulfill all the requests we receive, the availability of the service depends on overall resource and personnel availability.</p>

<h2 id="application-process">Application Process</h2>

<ol>
  <li>
    <p>Fill out the request form:</p>

    <p><button type="button" class="btn btn-primary btn-lg" onclick="window.open('https://usegalaxy.be/tiaas/new/')">Request Training Infrastructure</button></p>

    <p>Please try to submit your application <strong>at least two weeks in advance of the training</strong>.</p>
  </li>
  <li>With the information that you input in the form, we will:
    <ul>
      <li>Test the training material you plan on using</li>
      <li>Give you a URL your users will access to join the training</li>
      <li>Give you a URL to the dashboard for you to see the queue status</li>
    </ul>
  </li>
  <li>Done! You are ready to run your training!</li>
</ol>
