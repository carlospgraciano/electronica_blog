<template>
  <div class="container">
    <div class="header">
      <h1>Sobre nosotros</h1>
    </div>
    <div class="col">
      <img src="/images/sobre_nosotros/carlos_polanco.jpg" alt="Foto de Dimas Aguero" class="student-image">
      <h3 class="student-name">
        Carlos Polanco (19-0728)
      </h3>
      <p class="student-description">
        Estudiante de TIC en UNIBE y egresado del ITLA (Software)
      </p>
    </div>
    <div class="col">
      <img src="/images/sobre_nosotros/dimas_aguero.jpeg" alt="Foto de Dimas Aguero" class="student-image">
      <h3 class="student-name">
        Dimas Aguero (19-0748)
      </h3>
      <p class="student-description">
        Estudiante de TIC en UNIBE y egresado del ITLA (Software)
      </p>
    </div>
  </div>
</template>
<script>
export default {
  name: 'AboutUs'
}
</script>
<style scoped>
.container {
  width: 100%;
  display: flex;
  flex-flow: row wrap;
  justify-content: center;
  margin-top: 3%;
}

.container .header {
  flex-basis: 100%;
  display: flex;
  flex-flow: row wrap;
  justify-content: center;
  padding: 0 2%;
}

.container .col {
  flex-basis: 46%;
  display: flex;
  flex-flow: row wrap;
  justify-content: center;
  padding: 0 2%;
}

.student-image, .student-description, .student-name {
  flex-basis: 100%;
  text-align: center;
}

.student-image {
  object-fit: cover;
  border-radius: 20%;
  object-position: 50% 5%;
  height: 380px;
}
.student-name {
  margin-bottom: 10px;
  color: #3eaf7c;
}
.student-description {
  margin-top: 0;
  color: #4e6e8e;
}


</style>