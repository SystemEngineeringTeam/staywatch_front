<script>
  import StayersBody from '../ui/stayersBody.svelte';
</script>

<div class="stay">
  <h1>現在の滞在者</h1>

  <table>
    <thead>
      <tr>
        <th>学年</th>
        <th>名前</th>
        <th>滞在開始時間</th>
      </tr>
    </thead>
    <StayersBody />
  </table>
</div>

<style lang="scss">
  .stay {
    table {
      border-radius: 5px;
      width: 80%;
      margin-top: 100px;
      margin-left: 10%;
      background-color: #dddddd;
      box-shadow: 0px 0px 20px rgba(3, 3, 3, 0.1);

      th {
        font-size: 20px;
      }
    }
    h1 {
      font-size: 40px;
      text-align: center;
      margin-top: 80px;
    }
  }
</style>
