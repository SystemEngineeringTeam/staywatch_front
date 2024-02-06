<script lang="ts">
  import { onMount } from "svelte";

  type Stayer = {
    name: string;
    grade: string;
    startTime: string;
  };
  let stayerList: Stayer[] = [];
  const url="https://raw.githubusercontent.com/SystemEngineeringTeam/staywatch_front/main/src/component/ui/logData.json";
  onMount(() =>{
    fetch(url).then((res) => res.json()).then((data)=>{
      stayerList=data.stayers;
    });
  })
</script>

<tbody>
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
