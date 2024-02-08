<script lang="ts">
  import { onMount } from 'svelte';
  import { PUBLIC_API_URL } from '$env/static/public';

  type Stayer = {
    name: string;
    grade: string;
    endTime: string;
  };
  let stayerList: Stayer[] = [];

  onMount(async () => {
    const url = new URL(PUBLIC_API_URL);
    url.pathname = 'api/stayers/get';

    await fetch(url.toString())
      .then((res) => res.json())
      .then((data) => {
        stayerList = data.stayers;
      })
      .catch((err) => console.error(err));
  });
</script>

<tbody>
  {#if stayerList.length > 0}
    {#each stayerList as stayer}
      <tr>
        <td class="grade">{stayer.grade}</td>
        <td class="name">{stayer.name}</td>
        <td class="time">{stayer.endTime}</td>
      </tr>
    {/each}
  {:else}
    <tr>
      <td colspan="3">履歴はありません</td>
    </tr>
  {/if}
</tbody>

<style lang="scss">
  tbody {
    background-color: white;
    width: 100%;
    border-spacing: 10px;

    tr {
      .grade {
        text-align: center;
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
