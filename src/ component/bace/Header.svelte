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
      <a class="administrator" href="/admin">管理者</a>
    {/if}
  </div>
</header>

<style lang="scss">
  .adpage {
    background-color: #f0f0f0;
    height: 50px;
    width: 100%;
    display: flex;

    .now {
      background-color: #a6a6a6;
      color: black;
      text-decoration: none;
      font-size: 20px;
      margin-top: 10px;
      margin-bottom: 10px;
      margin-left: auto;
      margin-right: 10px;
      border-radius: 10px;
    }
    .log {
      background-color: #a6a6a6;
      color: black;
      text-decoration: none;
      font-size: 20px;
      margin-top: 10px;
      margin-bottom: 10px;
      margin-right: 10px;
      border-radius: 10px;
    }
    .administrator {
      background-color: #a6a6a6;
      color: black;
      text-decoration: none;
      font-size: 20px;
      margin-top: 10px;
      margin-bottom: 10px;
      margin-left: 0;
      margin-right: 10px;
      border-radius: 10px;
    }
    .now:hover {
      background-color: #787878;
      margin-top: 10px;
      margin-bottom: 10px;
      border-radius: 10px;
    }
    .log:hover {
      background-color: #787878;
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
