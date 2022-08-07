<template>
    <footer id="footer" class="bg-light text-center text-white footer">
  <!-- Grid container -->
  <div class="container p-4 pb-0">
    <!-- Section: Social media -->
    <section class="mb-4">

      <!-- Linkedin -->
      <a
        class="btn btn-primary btn-floating m-1 "
        style="background-color: #0A66C2"
        href="https://www.linkedin.com/in/mateusz-kr%C3%B3l-01b731185/"
        target="_blank"
        role="button"
        ><i class="fab fa-linkedin-in"></i></a>
      <!-- Github -->
      <a
        class="btn btn-primary btn-floating m-1 "
        style="background-color: #333333;"
        href="https://github.com/zizoko1337"
        target="_blank"
        role="button"
        ><i class="fab fa-github"></i
      ></a>
    </section>
    <!-- Section: Social media -->
  </div>
  <!-- Grid container -->

  <!-- Copyright -->
  <div class="text-center p-3 footer-color">
    © 2022 Copyright: mkCode
  </div>
  <!-- Copyright -->
</footer>
</template>

<script>

export default {
  name: 'FooterBar',
  el: '#footer',

 
};
</script>

<style scoped>
#footer {
  position: absolute;
  bottom: 0;
  width: 100%;
}

a{
  text-decoration: none;
}

.footer-color {
  background-color: #0060cd;
}

</style>
