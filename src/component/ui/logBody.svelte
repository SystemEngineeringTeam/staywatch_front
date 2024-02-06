<script lang="ts">
  import stayersRes from './logData.json';
  import { onMount } from 'svelte';

  type Stayer = {
    name: string;
    grade: string;
    endTime: string;
  };
  let stayerList: Stayer[] = [];
  const url =
    'https://raw.githubusercontent.com/SystemEngineeringTeam/staywatch_front/main/src/component/ui/logData.json';
  onMount(() => {
    fetch(url)
      .then((res) => res.json())
      .then((data) => {
        stayerList = data.stayers;
      });
  });
</script>

<tbody>
  {#if stayersRes.stayers.length > 0}
    {#each stayersRes.stayers as stayer}
      <tr>
        <td class="grade">{stayer.grade}</td>
        <td class="name">{stayer.name}</td>
        <td class="time">{stayer.startTime}</td>
      </tr>
    {/each}
  {:else}
    <tr>
      <td colspan="3">誰もいません</td>
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
