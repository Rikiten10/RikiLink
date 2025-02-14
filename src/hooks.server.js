import { redirect } from '@sveltejs/kit';
import { supabase } from '$lib/supabase';

export const handle = async ({ event, resolve }) => {
  const session = await event.locals.getSession();
  const { data: user } = await supabase
    .from('users')
    .select('is_admin')
    .eq('id', session?.user.id)
    .single();

  // Block access to admin routes if not admin
  if (event.url.pathname.startsWith('/admin') && !user?.is_admin) {
    throw redirect(303, '/');
  }

  return resolve(event);
};