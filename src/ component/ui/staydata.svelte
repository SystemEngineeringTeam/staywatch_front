<script>
  const todos = [{ text: 'aaa' }];
</script>

{#each todos as todos}
  <p>{todos.text}</p>
{:else}
  <p>No tasks today!</p>
{/each}

<style>
</style>
