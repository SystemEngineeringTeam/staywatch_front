
<script>
      import StayData from '../ui/staydata.svelte';
</script>

<div class="stay">
  <h1>現在の滞在者</h1>

  <div class="list">
    <div class="name">
      <h2 class="class">学年</h2>
      <h2 class="name">名前</h2>
      <h2 class="time">滞在開始時間</h2>
    </div>
    <StayData/>
  </div>
</div>

<style lang="scss">
.stay{
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
      border: solid 5px #717171; /*線*/
      border-radius: 10px; /*角の丸み*/

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
