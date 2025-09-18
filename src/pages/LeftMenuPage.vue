<template>
  <div class="container">
    <div class="page-header">
      <h1 class="page-title">Разделы</h1>
      <img :src="longArrowIcon" alt="Длинная стрелка" class="page-arrow" />
    </div>
    <div class="content">



      <!-- Горизонтальный скролл с секциями -->
      <div class="sections-scroller">
        <button class="section-card">Об университете</button>
        <button class="section-card">Об учёбе</button>
        <button class="section-card">Студенческий совет</button>
        <button class="section-card">Творческие коллективы</button>
        <button class="section-card">Клубы по интересам</button>
        <button class="section-card">Мероприятия</button>
        <button class="section-card">Инфраструктура</button>
        <button class="section-card">FAQ</button>
      </div>

    </div>

    <footer class="footer">
      <button class="btn btn-left" @click="goHome">
        <img :src="menuIcon" alt="Меню" class="btn-img" />
      </button>
      <button class="btn btn-center" @click="goHome">
        <img :src="putevodIcon" alt="Путеводитель" class="btn-img" />
      </button>
      <button class="btn btn-right">
        <img :src="ikIcon" alt="ИК" class="btn-img" />
      </button>
    </footer>
  </div>

</template>

<script setup lang="ts">
import { useRouter } from 'vue-router'
import menuIcon from '@/assets/logo/menu.svg'
import putevodIcon from '@/assets/logo/logo_putevod.svg'
import ikIcon from '@/assets/logo/logo_ik.svg'
import longArrowIcon from '@/assets/logo/long_strelka.svg'

const router = useRouter()
const goHome = () => router.push({ name: 'main-menu' })
</script>

<style scoped>
.container {
  min-height: 100vh;
  background-color: #161715;
  max-width: 390px;
  margin: 0 auto;
  display: grid;
  grid-template-rows: 1fr auto;
  padding: 0.5rem 1rem;
}

.content {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: flex-start;
  min-height: calc(100vh - 90px);
  padding-bottom: 90px;
}

.logo {
  display: block;
  margin: 0 auto;
}

.page-title {
  font-family: 'Days Sans', 'GothamThin', sans-serif;
  font-weight: 900;
  color: #FFFFFF;
  text-align: left;
  letter-spacing: 0.02em;
  font-size: clamp(20px, 9vw, 28px);
  margin: 0;
}

.page-header {
  display: flex;
  align-items: center;
  justify-content: flex-start;
  gap: clamp(8px, 3vw, 16px);
  margin: 4rem 0 0.75rem 0; /* опускаем ниже */
  padding-left: clamp(12px, 0vw, 20px); /* смещаем влево относительно контейнера */
}

.page-arrow {
  height: clamp(16px, 4.5vw, 24px);
  width: auto;
  display: block;
}

/* Горизонтальный скролл */
.sections-scroller {
  width: 100%;
  max-width: 390px;
  display: flex;
  gap: clamp(10px, 3vw, 16px);
  overflow-x: auto;
  overflow-y: hidden;
  -webkit-overflow-scrolling: touch;
  padding: 0 clamp(12px, 5vw, 20px);
  margin-top: 0; /* вплотную к заголовку */
  scroll-snap-type: x proximity;
}

.sections-scroller::-webkit-scrollbar { display: none; }
.sections-scroller { -ms-overflow-style: none; scrollbar-width: none; }

.section-card {
  flex: 0 0 auto;
  scroll-snap-align: start;
  min-width: clamp(120px, 40vw, 160px);
  height: clamp(48px, 12vw, 60px);
  border: none;
  border-radius: 20px;
  background: #2A2B28;
  color: #FFFFFF;
  font-family: 'GothamThin', sans-serif;
  font-size: clamp(14px, 3.8vw, 16px);
  padding: 0 16px;
  display: flex;
  align-items: center;
  justify-content: center;
}

.section-card:active { transform: scale(0.98); }

.description {
  color: rgba(255, 255, 255, 0.9);
  font-size: clamp(0.9rem, 2.8vw, 1rem);
  line-height: 1.5;
  text-align: center;
  max-width: 320px;
}

  .btn {
    flex: 1;
    margin: 0 0.3rem;
    padding: 0.2rem 0.2rem;
    border: none;
    background: transparent;
    box-shadow: none;
    display: flex;
    align-items: center;
    justify-content: center;
    border-radius: 1.2rem;
    transition: transform 0.1s;
  }
  .btn:active {
    transform: scale(0.97);
  }
  .btn-img {
    width: 3.2rem;
    height: 3.2rem;
    object-fit: contain;
    display: block;
  }

.footer {
  position: fixed;
  bottom: 0;
  left: 50%;
  transform: translateX(-50%);
  width: 100%;
  max-width: 390px;
  height: clamp(56px, 18.5vw, 72px); /* адаптивная высота, 72px при ширине 390 */
  padding: 0 clamp(12px, 5vw, 20px);
  display: flex;
  gap: 10px; /* уменьшаем зазоры, чтобы влезла более широкая центральная кнопка */
  justify-content: space-between;
  align-items: center;
  background-color: #8AA8FF;
  z-index: 10;
  border-radius: 20px 20px 0 0;
}

.btn {
  display: flex;
  align-items: center;
  justify-content: center;  height: clamp(40px, 12.3vw, 40px); /* 40px при 390 ширине */
  border: none;
  border-radius: 12px;
  background: transparent;
  padding: 0;
  box-shadow: none;
}

/* Пропорции кнопок относительно макета 390px шириной
   Левая: 40px, Центр: 182px, Правая: 50px → оставшееся пространство — гибкие отступы
*/
.btn-left {
  width: clamp(36px, 10.3vw, 40px);
}
.btn-center {
  width: clamp(150px, 46.2vw, 180px);
}
.btn-right {
  width: clamp(42px, 12.8vw, 50px);
}

.btn-img {
  width: 100%;
  height: 100%;
  object-fit: contain;
}

/* Стрелка, указывающая на левую кнопку */

@media (max-width: 400px) {
  .logo {
    width: min(28rem, 80vw);
    height: min(28rem, 80vw);
    margin: 0 auto 1rem auto;
  }
}

@media (min-width: 768px) {
  .logo {
    width: min(32rem, 70vw);
    height: min(32rem, 70vw);
    margin: 0 auto 1rem auto;
  }
}
</style>


