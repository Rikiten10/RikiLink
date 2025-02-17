// src/hooks.server.js
import { auth } from '$lib/server/lucia';
import { sequence } from '@sveltejs/kit/hooks';

export const handle = sequence(auth.handleAuth()); // Ensure proper auth handle