import { IEvent } from '@/lib/database/models/event.model'
import { formatDateTime } from '@/lib/utils'
import { auth } from '@clerk/nextjs'
import Image from 'next/image'
import Link from 'next/link'
import React from 'react'
import { DeleteConfirmation } from './DeleteConfirmation'
import { getOrdersByEvent } from '@/lib/actions/order.actions'

type CardProps = {
  event: IEvent,
  hasOrderLink?: boolean,
  hidePrice?: boolean
}

const Card = async ({ event, hasOrderLink, hidePrice }: CardProps) => {
  const { sessionClaims } = auth();
  const userId = sessionClaims?.userId as string;

  const isEventCreator = event.organizer && userId === event.organizer._id.toString();
  
  const eventId = (event?._id as string) || '';
  const searchText = '';
  const orders = await getOrdersByEvent({ eventId, searchString: searchText })

  return (
    <div className="group relative flex min-h-[380px] w-full max-w-[300px] flex-col overflow-hidden rounded-xl bg-white shadow-md transition-all hover:shadow-lg md:min-h-[538px]">
      <Link 
        href={`/events/${event._id}`}
        style={{backgroundImage: `url(${event.imageUrl})`}}
        className="flex-center flex-grow bg-gray-50 bg-cover bg-center text-grey-500 min-h-[360px] min-w-[280px]"
      />
      {/* IS EVENT CREATOR ... */}

      {isEventCreator && !hidePrice && (
        <div className="absolute right-2 top-2 flex flex-col gap-4 rounded-xl bg-white p-3 shadow-sm transition-all">
          <Link href={`/events/${event._id}/update`}>
            <Image src="/assets/icons/edit.svg" alt="edit" width={20} height={20} />
          </Link>

          <DeleteConfirmation eventId={event._id} />
        </div>
      )}

      <div
        className="flex min-h-[230px] flex-col gap-3 p-5 md:gap-2"
      > 
       

        <Link href={`/events/${event._id}`}>
          <p className="p-medium-16 md:p-medium-20 line-clamp-2 flex-1 text-black">{event.title}</p>
        </Link>

        {!hidePrice && 
       <div className="flex">
          <p className="p-semibold-14 rounded-full bg-green-200 px-2 py-1 text-grey-500 line-clamp-1">
            {event.category.name}
          </p>
        </div>}

        <p className="p-medium-16 p-medium-18 text-grey-500">
          {formatDateTime(event.startDateTime).dateTime}
        </p>

        <p className="p-medium-14 md:p-medium-16 text-grey-600">
            {event.location}
          </p>

          <div className="flex justify-between items-center mt-3">
          <p className="p-medium-14 md:p-medium-16 text-grey-600">
            LKR {event.price}/=
          </p>
          <a href={`/events/${event._id}`} className="flex gap-2">
            <button className={`text-white rounded-lg p-2 ${orders.length >= event.maxCount ? 'bg-red-600' : 'bg-green-600'}`}>
              {orders.length >= event.maxCount ? 'Sold Out' : `Buy Tickets` }
            </button>
          </a>
        </div> 

        

        <div className="flex-between w-full">
          

          {hasOrderLink && (
            <Link href={`/orders?eventId=${event._id}`} className="flex gap-2">
              <p className="text-primary-500">Order Details</p>
              <Image src="/assets/icons/arrow.svg" alt="search" width={10} height={10} />
            </Link>
          )}
        </div>
      </div>
    </div>
  )
}

export default Card