import React from 'react';
import { ContactModel } from "../types";

export default function Contact() {
  const contact: ContactModel = {
    first: "Your",
    last: "Name",
    avatar: "https://placekitten.com/g/200/200",
    twitter: "your_handle",
    notes: "Some notes",
    favorite: true,
    id: '',
    createdAt: 1
  }
  return (
    <div id="contact">
      <div>
        <img
          key={contact.avatar}
          src={contact.avatar}
          alt={contact.first}
        />
      </div>

      <div>
        <h1>
          {contact.first || contact.last ? (
            <>
              {contact.first} {contact.last}
            </>
          ) : (
            <i>No Name</i>
          )}{" "}
          <Favorite contact={contact} />
        </h1>

        {contact.twitter && (
          <p>
            <a
              rel="noreferrer"
              target="_blank"
              href={`https://twitter.com/${contact.twitter}`}
            >
              {contact.twitter}
            </a>
          </p>
        )}

        {contact.notes && <p>{contact.notes}</p>}

        <div>
          <form action="edit">
            <button type="submit">Edit</button>
          </form>
          <form
            method="delete"
            action="destroy"
          >
            <button type="submit">Delete</button>
          </form>
        </div>
      </div>
    </div>
  );
}

const Favorite: React.FC<{contact: ContactModel}> = ({ contact }) => {
  let favorite = contact.favorite;

  return (
    <form method="post">
      <button
        name="favorite"
        value={favorite ? "false" : "true"}
        aria-label={
          favorite
            ? "Remove from favorites"
            : "Add to favorites"
        }
      >
        {favorite ? "★" : "☆"}
      </button>
    </form>
  );
}