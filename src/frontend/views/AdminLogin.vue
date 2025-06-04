<script>
import axios from "axios";
import loginValidation from "../libraries/loginValidation.js";

export default {
  data() {
    return {
      username: "",
      password: "",
    };
  },
  methods: {
    async loginHandle() {
      try {
        loginValidation(this.username, this.password);

        const loginData = {
          username: this.username,
          password: this.password,
        };

        const response = await axios.post("api/login", loginData);

        if (response.data.token) {
          localStorage.setItem("token", response.data.token);
        } else {
          throw new Error("No token received.");
        }

        this.$router.push("/admin/dashboard");
      } catch (error) {
        console.error(
          "Login failed: ",
          error.message || "An unexpected error occurred."
        );
      }
    },
  },
};
</script>

<template>
  <main>
    <header>
      <div class="logo">hello code</div>
      <h1>Login, Pengajar</h1>
    </header>
    <form method="post" @submit.prevent="loginHandle">
      <div class="group-input">
        <input type="text" placeholder="username" v-model="username" />
        <input type="password" placeholder="password" v-model="password" />
      </div>
      <button>SIGN IN</button>
    </form>
  </main>
</template>

<style scoped>
main {
  height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: var(--admin-primary-color);
}

header {
  display: flex;
  align-items: center;
  gap: 2rem;
  position: fixed;
  top: 0;
  left: 0;
  margin-inline-start: 3rem;
  margin-block-start: 3rem;
}

.logo {
  width: 100px;
  text-align: center;
  font-weight: 800;
  font-size: 2rem;
  line-height: 80%;
}

h1 {
  font-size: 3rem;
  color: var(--admin-secondary-color);
}

.group-input {
  display: flex;
  flex-direction: column;
  gap: 1rem;
}

form {
  display: flex;
  flex-direction: column;
  gap: 2rem;
  max-width: 592px;
  width: 100%;
}

input {
  border-radius: 2rem;
  border: none;
  background-color: var(--admin-primary-color);
  font-size: 1rem;
  font-weight: 800;
  opacity: 0.5;
  box-shadow: 0 4px 4px rgba(0, 0, 0, 0.25);
  padding: 0.5rem 1.5rem;
}

button {
  border-radius: 2rem;
  border: none;
  background-color: var(--admin-secondary-color);
  color: var(--admin-primary-color);
  font-size: 1rem;
  font-weight: 800;
  padding: 0.5rem 1rem;
  cursor: pointer;
  width: 30%;
  margin-inline: auto;
  transition: background-color 0.1s ease-in-out;
}

button:hover {
  background-color: #6f9ad3;
}

@media (max-width: 1024px) {
  header {
    gap: 1.5rem;
    margin-inline-start: 2.5rem;
    margin-block-start: 2.5rem;
  }
  .logo {
    font-size: 1.8rem;
  }

  h1 {
    font-size: 2.5rem;
  }

  form {
    max-width: 450px;
  }

  input,
  button {
    font-size: 0.8rem;
  }
}

@media (max-width: 768px) {
  header {
    gap: 0.5rem;
    margin-inline-start: 2rem;
    margin-block-start: 2rem;
  }

  .logo {
    font-size: 1.3rem;
  }

  h1 {
    font-size: 1.8rem;
  }

  form {
    max-width: 350px;
  }

  input,
  button {
    font-size: 0.7rem;
  }
}

@media (max-width: 425px) {
  header {
    gap: 4.5rem;
    width: 100%;
    flex-direction: column;
    padding-block-start: 3.5rem;
    margin-inline-start: 0;
    margin-block-start: 0;
  }

  .logo {
    font-size: 1.3rem;
  }

  h1 {
    font-size: 1.5rem;
    align-self: stretch;
    margin-inline-start: 1rem;
  }

  form {
    max-width: 350px;
  }

  input,
  button {
    font-size: 0.7rem;
  }
}
</style>
