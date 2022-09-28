<script>
  import { t, changeLanguage } from "@/utils/i18n";

  export let lang;
  export let states;
  export let selectedState;

  changeLanguage(lang);
</script>

<div class="state-selector">
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
        class="input input-md w-full text-lg"
      />

      <button class="btn">
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
</div>

<style lang="postcss">
  .state-selector {
    @apply w-full;
  }
</style>
