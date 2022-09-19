<script>
  export let states;
  export let selectedState;

  const onChange = (e) => {
    window.location.replace(e.target.value);
  };
</script>

<select
  class="select select-ghost w-full max-w-xs text-lg"
  on:change|preventDefault={onChange}
>
  {#each states as state}
    <option value={state.path} selected={state.code === selectedState}>
      {state.name}
    </option>
  {/each}
</select>
