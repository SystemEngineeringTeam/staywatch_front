<script>
  import { isAdmmin } from '../store';
  import {goto} from '$app/navigation';

  let password = '';
  const handleSubmit = () => {
    if (password == 'Set') {
      isAdmmin.set(true);
      goto('/admin');
    } else {
      alert('パスワードが違います');
    }
  };
</script>

<div class="login">
  <h1>管理人ログインページ</h1>
  <input
    type="password"
    class="password"
    bind:value={password}
    placeholder="パスワードを入力してください"
  />
  <button on:click={handleSubmit}>▶︎</button>
</div>

<style lang="scss">
  .login {
    h1 {
      font-size: 40px;
      text-align: center;
      margin-top: 80px;
    }

    .password {
      margin-top: 180px;
      margin-left: 25%;
      margin-right: auto;
      background-color: white;
      width: 50%;
      border: solid 5px #717171;
      border-radius: 10px;
    }
  }
</style>
