<script>
  export let gig;
</script>

<div class="card w-96 shadow-xl">
  <figure>
    <img
      src={`/images/posters/${gig.poster}`}
      class="block w-full object-cover"
      style="height: 30rem;"
      alt={gig.artists?.join(", ")}
    />
  </figure>
  <div class="card-body bg-neutral p-2">
    <div class="card-actions justify-center">
      <button class="text-white font-bold">
        <span> Ver mais </span>
      </button>
    </div>
  </div>
</div>
