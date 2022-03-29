import { Fragment } from 'react';
import { useRouter } from 'next/router';

import { getAllEvents } from '../../data/dummy-data';

import EventSearch from '../../components/events/events-search';
import EventList from '../../components/events/event-list';

function AllEventsPage() {
  const events = getAllEvents();
  const router = useRouter();

  function findEventsHandler(year, month) {
    router.push(`/events/${year}/${month}`);
  }

  return (
    <Fragment>
      <EventSearch onSearch={findEventsHandler} />
      <EventList items={events} />
    </Fragment>
  );
}

export default AllEventsPage;
