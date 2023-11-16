<template>
    <div class="row">
        <div v-for="index in 8" :key="index" class="col-md-4 mb-3">
            <b-card
                title="Kitap Adı"
                img-src="https://picsum.photos/600/300/?image=25"
                img-alt="Image"
                img-top
                tag="article"
                style="max-width: 20rem;"
            >
                <b-card-text>
                 Kitap açıklaması
                </b-card-text>
        
                <b-button href="#" variant="primary w-100">SEPETE EKLE</b-button>
            </b-card>
        </div>
    </div>
  </template>
  
  <script>
  export default {
    name: "Card"
  }
  </script>