<script>
  import { GigPoster } from "@/components/gig";

  export let state;
</script>

<div class="flex flex-wrap gap-8 py-8 justify-center">
  {#each state.gigs as gig}
    <GigPoster {gig} />
  {/each}
</div>
