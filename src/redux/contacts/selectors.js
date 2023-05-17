import { createSelector } from "@reduxjs/toolkit";

export const selectLoading = state => state.contacts.isLoading;
export const selectFilter = state => state.contacts.filter;
export const selectAllContacts = state => state.contacts.items;
export const selectError = state => state.contacts.error;

export const selectFilteredContacts = createSelector(
       [selectAllContacts, selectFilter],
       (contacts, contactsFilter) => {
         return contacts.filter(contact =>
           contact.name.toLowerCase().includes(contactsFilter.toLowerCase().trim())
         );
       }
     );
    