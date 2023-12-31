<script lang="ts">
  import type { Stayers } from '../../type';
  import stayersRes from "./logData.json";
  
  

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

<style lang=scss>
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
