<script lang="ts">
  import { onMount } from 'svelte';
  import { PUBLIC_API_URL } from '$env/static/public';

  type Stayer = {
    name: string;
    grade: string;
    startTime: string;
  };
  let stayerList: Stayer[] = [];
  const url = new URL(PUBLIC_API_URL);
  url.pathname = 'api/stayers/get';

  onMount(async () => {
    await fetch(url.toString())
      .then((res) => res.json())
      .then((data) => {
        stayerList = data.stayers.map((stayer: Stayer) => {
          const d = new Date(stayer.startTime);
          const startTime = `${d.getMonth() + 1}月${d.getDate()}日 ${d.getHours()}:${d.getMinutes()}`;
          return { ...stayer, startTime };
        });
        console.log(stayerList);
      })
      .catch((error) => {
        console.error(error);
      });
  });
</script>

<tbody>
  {#if stayerList.length === 0}
    <tr>
      <td colspan="3">誰もいません</td>
    </tr>
  {/if}
  {#each stayerList as stayer}
    <tr>
      <td class="grade">{stayer.name}</td>
      <td class="name">{stayer.grade}</td>
      <td class="time">{stayer.startTime}</td>
    </tr>
  {/each}
</tbody>

<style lang="scss">
  tbody {
    background-color: white;
    width: 100%;
    margin-left: 100%;
    margin-right: 0%;
    border-spacing: 10px;
    tr {
      .grade {
        text-align: center;
        margin-left: 10%;
        font-size: 20px;
      }
      .name {
        text-align: center;
        font-size: 20px;
      }
      .time {
        text-align: center;
        font-size: 20px;
      }
    }
  }
</style>
