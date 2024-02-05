<script lang="ts">
  import stayersRes from './stayData.json';
</script>

<tbody>
  {#each stayersRes.stayers as stayer}
    <tr>
      <td class="grade">{stayer.grade}</td>
      <td class="name">{stayer.name}</td>
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
