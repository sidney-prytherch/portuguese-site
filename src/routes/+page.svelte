<script lang="ts">
	import { enhance } from '$app/forms';
	import type { PageServerData } from './$types';

	let { data }: { data: PageServerData } = $props();
</script>

<h1>Hi, {data.user.username}!</h1>
<p>Your user ID is {data.user.id}.</p>


<!-- <script lang="ts">
    import {TENSES} from './VerbForm';
</script> -->
<h1>Welcome to your library project</h1>
<p>Create your package using @sveltejs/package and preview/showcase your work with SvelteKit</p>
<p>Visit <a href="demo/login">svelte.dev/docs/kit</a> to read the documentation</p>
<p>Visit <a href="user/presets">user presets</a></p>

<input
    type="text"

/>


<form method="post" action="?/logout" use:enhance>
	<button>Sign out</button>
</form>
