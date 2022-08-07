<template>
    <!-- eslint-disable -->
    <section class="vh-110 page">
        <div class="container py-5 h-100">
            <div class="row d-flex justify-content-center align-items-center h-100 ">
                <div class="col-12 col-md-8 col-lg-6 col-xl-5 ">
                    <div class="card shadow-2-strong error-card justify-content-center align-items-center shadow" style="border-radius: 1rem">
                        
                        <h1>ERROR</h1>
                        <img src="../../assets/404.png" alt="">
                        <h2>Page not found</h2>
                      
                    </div>
                </div>
            </div>
        </div>
    </section>

</template>

<script>
export default {
    name: 'NotFound',

}
</script>

<style>
.error-card {
    padding: 50px;
}
img {
    max-width: 200px;
}
h1, h2 {
    color: black;
}
</style>