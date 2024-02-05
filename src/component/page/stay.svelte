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
    .list {
      margin-top: 80px;
      margin-left: auto;
      margin-right: auto;
      background-color: white;
      width: 90%;
      border: solid 10px #dbd1d1;
      border-radius: 10px;

      .name {
        display: flex;
        background-color: #717171;

        .class {
          margin-left: 20px;
          font-size: 20px;
        }
        .name {
          margin-left: 25%;
          font-size: 20px;
        }
        .time {
          margin-left: 25%;
          font-size: 20px;
        }
      }
      li {
        list-style: none;
        font-size: 30px;
        margin-top: 10px;
        margin-bottom: 10px;
        margin-left: 10px;
        margin-right: 10px;
        border-bottom: 2px solid #717171;
        height: 50px;
        text-align: center;
        line-height: 50px;
      }
    }
  }
</style>
