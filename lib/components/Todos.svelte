<script>
  import TodoForm from "$lib/components/TodoForm.svelte";
  import TodoList from "$lib/components/TodoList.svelte";
</script>

<h1>Todos</h1>

<h2>Add Todo</h2>
<TodoForm />

<h2>Existing Todos</h2>
<TodoList />
