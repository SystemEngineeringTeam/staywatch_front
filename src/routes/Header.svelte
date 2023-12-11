<script lang="ts">
  import {isAdmmin} from './store';
  import Stay from './stay.svelte';
  import Log from './log.svelte';
  import Administrator from './adoministrator.svelte';
  import Login from './login.svelte';
  let page: string;

  page = 'now';

  function nowPage() {
    page = 'now';
  }

  function logPage() {
    page = 'log';
  }

  function administratorPage() {
    page = 'administrator';
  }
  function login() {
    page = 'login';
  }

</script>

<header>
  <div class="adpage">
    <button class="now" on:click={nowPage}>現在の滞在者</button>
    <button class="log" on:click={logPage}>滞在履歴</button>
    {#if !$isAdmmin }
      <button class="administrator" on:click={login}>⚫️</button>
    {/if}
    {#if $isAdmmin}
      <button class="administrator" on:click={administratorPage}>管理者</button>
    {/if}
  </div>
</header>

{#if page == 'now'}
  <Stay />
{/if}

{#if page == 'log'}
  <Log />
{/if}

{#if page == 'administrator'}
  <Administrator />
{/if}

{#if page == 'login'}
  <Login/>
{/if}

<style lang="scss">
  .adpage {
    background-color: #f0f0f0;
    height: 50px;
    width: 100%;
    display: flex;

    .now {
      background-color: #a6a6a6;
      margin-top: 10px;
      margin-bottom: 10px;
      margin-left: auto;
      margin-right: 10px;
      border-radius: 10px;
    }
    .log {
      background-color: #a6a6a6;
      margin-top: 10px;
      margin-bottom: 10px;
      margin-right: 10px;
      border-radius: 10px;
    }
    .administrator {
      background-color: #a6a6a6;
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
