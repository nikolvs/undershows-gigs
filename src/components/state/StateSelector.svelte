<script>
  import * as R from "ramda";
  import { t, changeLanguage } from "@/utils/i18n";
  import { outclick } from "@/utils/actions";

  export let lang;
  export let states;
  export let selectedState;

  changeLanguage(lang);

  let open = false;
  let stateFilter = "";

  $: re = new RegExp(stateFilter, "i");
  $: regionSlices = R.pipe(
    R.filter(R.pipe(R.props(["code", "name"]), R.any(R.test(re)))),
    R.sortBy(R.prop("region")),
    R.groupWith(R.eqProps("region")),
    R.sortWith([R.descend(R.length)]),
    R.map((states) => ({
      states,
      name: R.head(states)?.region,
    })),
    R.splitEvery(3)
  )(states);
</script>

<div class="state-selector" use:outclick={() => (open = false)}>
  <div class="form-control">
    <label class="input-group input-group-md">
      <span>
        <img src={selectedState.icon} alt={selectedState.name} width="30" />
      </span>
      <input
        type="text"
        placeholder={t("state.selector.placeholder", {
          state: selectedState.name,
        })}
        class="w-full text-lg input input-md"
        bind:value={stateFilter}
        on:focus={() => (open = true)}
      />

      <button class="btn" on:click={() => (open = true)}>
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          stroke-width="1.5"
          stroke="currentColor"
          class="w-6 h-6"
        >
          <path
            stroke-linecap="round"
            stroke-linejoin="round"
            d="M19.5 8.25l-7.5 7.5-7.5-7.5"
          />
        </svg>
      </button>
    </label>
  </div>

  <div
    class="menu menu-compact w-full bg-neutral rounded-b-lg p-4 z-10"
    class:absolute={open}
    class:hidden={!open}
  >
    {#each regionSlices as regionSlice}
      <div class="flex flex-wrap">
        {#each regionSlice as region}
          <ul class="flex-1">
            <li class="menu-title">
              <span>{t(region.name)}</span>
            </li>
            {#each region.states as state}
              <li>
                <a href={state.path}>
                  <img
                    src={state.icon}
                    alt={state.name}
                    width="20"
                    class="inline"
                  />
                  <span>{state.name}</span>
                </a>
              </li>
            {/each}
          </ul>
        {/each}
      </div>
    {/each}
  </div>
</div>

<style lang="postcss">
  .state-selector {
    @apply w-full relative;
  }
</style>
