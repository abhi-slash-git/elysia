import { Elysia } from '../src'

/**
 * Example of handle single static file
 *
 * For more advavnce use-case, eg. folder
 * @see https://github.com/saltyaom/kingworld-static
 */
new Elysia()
	.get('/tako', ({ set }) => {
		set.headers.server = 'KingWorld'

		return Bun.file('./example/takodachi.png')
	})
	.listen(8080)
