<script>
  import LogBody from '../ui/logBody.svelte';
</script>

<div class="log">
  <h1>滞在者履歴</h1>

  <table>
    <thead>
      <tr>
        <th>学年</th>
        <th>名前</th>
        <th>滞在終了時間</th>
      </tr>
    </thead>
    <LogBody />
  </table>
</div>

<style lang="scss">
  .log {
    h1 {
      font-size: 40px;
      text-align: center;
      margin-top: 80px;
    }
    table {
      width: 80%;
      margin-top: 100px;
      margin-left: 10%;
      background-color: #dddddd;
      box-shadow: 0px 0px 20px rgba(3, 3, 3, 0.1);
      thead {
        tr {
          th {
            font-size: 20px;
          }
        }
      }
    }
  }
</style>
