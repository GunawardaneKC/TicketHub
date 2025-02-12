import CategoryFilter from '@/components/shared/CategoryFilter';
import Collection from '@/components/shared/Collection';
import Search from '@/components/shared/Search';
import { Button } from '@/components/ui/button';
import { getAllEvents } from '@/lib/actions/event.actions';
import { SearchParamProps } from '@/types';
import Link from 'next/link';
import Carousel from '@/components/shared/Carousel'; // Import the custom Carousel component

export default async function Home({ searchParams }: SearchParamProps) {
  const page = Number(searchParams?.page) || 1;
  const searchText = (searchParams?.query as string) || '';
  const category = (searchParams?.category as string) || '';

  const events = await getAllEvents({
    query: searchText,
    category,
    page,
    limit: 6,
  });

  // Collect all image URLs
  const eventImages = events?.data.map((event: any) => event.imageUrl) || [];

  return (
    <>
      <section className=" bg-green-100 bg-dotted-pattern bg-contain py-5 md:py-10">
        <div className="wrapper grid grid-cols-1 gap-5 md:grid-cols-2 2xl:gap-0">
          <div className="flex flex-col justify-center gap-8">
            <h1 className="h1-bold">Get Ready for the Show of a Lifetime!</h1>
            <p className="p-regular-20 md:p-regular-24">
              Discover and book tickets for the hottest musical concerts and live events. Never miss out on the music that moves you!
            </p>
            <Button size="lg" variant="custom" asChild className="button w-full sm:w-fit">
              <Link href="#events">Explore Events</Link>
            </Button>
          </div>

          {/* Use the custom Carousel component for event images */}
          <div className="">
            <Carousel images={eventImages} />
          </div>
        </div>
      </section>

      <section id="events" className="wrapper my-8 flex flex-col gap-8 md:gap-12">
        <h2 className="h2-bold">Upcoming Events</h2>

        <div className="flex w-full flex-col gap-5 md:flex-row">
          <Search />
          <CategoryFilter />
        </div>

        <Collection
          data={events?.data}
          emptyTitle="No Events Found"
          emptyStateSubtext="Come back later"
          collectionType="All_Events"
          limit={6}
          page={page}
          totalPages={events?.totalPages}
        />
      </section>
    </>
  );
}
