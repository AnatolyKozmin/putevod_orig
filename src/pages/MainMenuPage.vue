<template>
  <div class="container">
    <div class="content">
      <img
        src="/src/assets/logo/putevod_and_cat.svg"
        alt="Логотип"
        class="logo"
      />

      <!-- Описание -->
      <div class="description">
        <p>Добро пожаловать в мини-приложение. Здесь ты найдешь много-много полезной информации об университете.</p>
        <p>Пользоваться просто: жми на кнопку меню в нижнем левом углу и выбирай интересующую тему.</p>
        <p>Не забудь заглянуть в раздел о создателях этого приложения. Открыть его можно касанием логотипа в правом углу.</p>
      </div>
    </div>

    <!-- Стрелка, указывающая на левую кнопку -->
    <div class="arrow-indicator">
      <img :src="arrowIcon" alt="Стрелка" class="arrow-img" />
    </div>

    <footer class="footer">
      <button class="btn btn-left" @click="goLeftPage">
        <img :src="menuIcon" alt="Меню" class="btn-img" />
      </button>
      <button class="btn btn-center">
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
import arrowIcon from '@/assets/logo/strelka.svg'

const router = useRouter()
const goLeftPage = () => router.push({ name: 'left-page' })
</script>

<style scoped>
.container {
  min-height: 100vh;
  background-color: #161715;
  max-width: 390px;
  margin: 0 auto;
  display: grid;
  grid-template-rows: 1fr auto;
  padding: 0.5rem 1rem; /* Минимальные отступы */
}

.content {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  min-height: calc(100vh - 90px);
  padding-bottom: 90px; /* чтобы контент не перекрывался футером на маленьких экранах */
  margin-top: -7rem; /* слегка поднимаем контент */
}

.logo {
  display: block;
  margin: 0 auto;
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


.description {
  color: rgba(255, 255, 255, 0.9);
  font-size: clamp(0.9rem, 2.8vw, 1rem);
  line-height: 1.5;
  text-align: center;
  max-width: 320px;
  margin-top: -2rem; /* Поднимаем текст еще выше */
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
  justify-content: center;
  height: clamp(40px, 12.3vw, 40px); /* 40px при 390 ширине */
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
.arrow-indicator {
  position: fixed;
  bottom: clamp(76px, 24.6vw, 112px); /* над футером */
  left: 50%;
  transform: translateX(-50%);
  z-index: 15;
  /* Привязка к левой кнопке: от центра влево */
  margin-left: calc(
    -50% +
    clamp(12px, 5vw, 20px) + /* внутренний отступ футера */
    clamp(18px, 5.15vw, 20px) + /* половина ширины левой кнопки */
    clamp(20px, 6vw, 28px) /* сильнее сдвигаем вправо */
  );
}

.arrow-img {
  width: clamp(40px, 9.8vw, 60px);
  height: clamp(40px, 9.8vw, 60px);
  object-fit: contain;
  filter: drop-shadow(0 2px 4px rgba(0, 0, 0, 0.3));
}

@media (max-width: 400px) {
  .content {
    margin-top: -1rem; /* на мобильных поднимаем чуть больше */
  }
  .logo {
    width: min(28rem, 80vw); /* Увеличенный размер для мобильных */
    height: min(28rem, 80vw);
    margin: -7rem auto 1rem auto; /* чуть выше */
  }

  .description {
    font-size: clamp(0.85rem, 2.5vw, 0.95rem);
    margin-top: -4rem;
    max-width: 280px;
  }
}

@media (min-width: 768px) {
  .logo {
    width: min(32rem, 70vw); /* Еще больше для планшетов */
    height: min(32rem, 70vw);
    margin: 0 auto 1rem auto;
  }

  .description {
    font-size: clamp(1rem, 2.2vw, 1.2rem);
    max-width: 350px;
  }
}
</style>
