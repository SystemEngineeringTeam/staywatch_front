<script lang="ts">
  import { isAdmmin } from '../store';
</script>

<header>
  <div class="adpage">
    <a class="now" href="/">現在の滞在者</a>
    <a class="log" href="/history">滞在履歴</a>
    {#if !$isAdmmin}
      <a class="administrator" href="/login">⚫️</a>
    {/if}
    {#if $isAdmmin}
      <a class="admin" href="/admin">管理人</a>
    {/if}
  </div>
</header>

<style lang="scss">
  .adpage {
    box-shadow: 0px 0px 20px rgba(3, 3, 3, 0.1);
    border-bottom: 1px solid #000000;
    position: fixed;
    top: 0%;
    background-color: #ffffff;
    height: 50px;
    width: 100%;
    display: flex;

    .now {
      border-bottom: 5px solid #b0aeae;
      background-color: #e0e0e0;
      color: black;
      text-decoration: none;
      font-size: 15px;
      margin-top: 10px;
      margin-bottom: 10px;
      margin-left: auto;
      margin-right: 10px;
      border-radius: 10px;
      height: 30px;
      width: 100px;
      text-align: center;
    }
    .log {
      text-align: center;
      height: 30px;
      width: 100px;
      border-bottom: 5px solid #b0aeae;
      background-color: #e0e0e0;
      color: black;
      text-decoration: none;
      font-size: 15px;
      margin-top: 10px;
      margin-bottom: 10px;
      margin-right: 10px;
      border-radius: 10px;
    }
    .administrator {
      background-color: #e0e0e0;
      color: black;
      text-decoration: none;
      font-size: 20px;
      margin-top: 10px;
      margin-bottom: 10px;
      margin-left: 0;
      margin-right: 10px;
      border-radius: 10px;
    }
    .admin {
      text-align: center;
      height: 30px;
      width: 100px;
      border-bottom: 5px solid #b0aeae;
      background-color: #e0e0e0;
      color: black;
      text-decoration: none;
      font-size: 15px;
      margin-top: 10px;
      margin-bottom: 10px;
      margin-right: 10px;
      border-radius: 10px;
    }
    .now:hover {
      background-color: #b0aeae;
      margin-top: 10px;
      margin-bottom: 10px;
      border-radius: 10px;
    }
    .log:hover {
      background-color: #b0aeae;
      margin-top: 10px;
      margin-bottom: 10px;
      border-radius: 10px;
    }
    .administrator:hover {
      background-color: #787878;
      margin-top: 10px;
      margin-bottom: 10px;
      border-radius: 10px;
    }
  }
</style>
