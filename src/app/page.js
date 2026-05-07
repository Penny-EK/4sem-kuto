import { supabase } from "@/lib/supabaseClient";
import EventFilter from "@/components/EventFilter";

export default async function Home({ searchParams }) {
  const params = await searchParams;

  const menuFilterActive = params?.menu === "true";

  let query = supabase
    .from("events")
    .select("*")
    .order("event_date", { ascending: true });

  if (menuFilterActive) {
    query = query.eq("event_menu", true);
  }

  const { data: events, error } = await query;

  if (error) {
    console.error("Supabase error:", error);
  }

  return (
    <main>
      
      <h1 className="mx-auto w-[90%] uppercase">Events</h1>

      {menuFilterActive && (
        <p className="mx-auto mt-2 w-[90%]">Viser arrangementer med menu</p>
      )}

      <EventFilter events={events || []} />
    </main>
  );
}