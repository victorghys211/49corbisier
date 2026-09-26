# Security Specification - Scouts 49 Corbisier

## 1. Data Invariants
- A photo must have a valid URL, title, and timestamp.
- A photo must be associated with an authenticated user (authorId).
- Users can only upload and delete their own photos.
- Everyone (including unauthenticated users) can view the photos.

## 2. The "Dirty Dozen" Payloads (Attack Vectors)
1. **Identity Spoofing**: Attempt to create a photo with an `authorId` that doesn't match the current user's UID.
2. **Shadow Field Injection**: Attempt to add a `verified: true` field to a photo document.
3. **Ghost Update**: Attempt to update a field that should be immutable (like `authorId` or `createdAt`).
4. **Timestamp Fraud**: Attempt to provide a client-side timestamp instead of a server-side timestamp for `createdAt`.
5. **ID Poisoning**: Attempt to use a 1MB string as a document ID for a new photo.
6. **Denial of Wallet (Size Attack)**: Attempt to upload a photo with a 1MB string for the `title` or `url`.
7. **Orphaned Write**: Attempt to create a photo without a required field (`url`).
8. **Malicious Delete**: Attempt to delete a photo owned by someone else.
9. **Query Scraping (No Relational Guard)**: Attempt to list photos without it being restricted by the collection rules.
10. **State Shortcut**: Attempt to update a status to a terminal state bypassing validation.
11. **Type Confusion**: Attempt to set `createdAt` as a boolean instead of a timestamp.
12. **PII Leakage**: Attempt to read user private data if it were stored in the same collection.

## 3. The Test Runner Plan
I will create `firestore.rules.test.ts` to verify these rules pass.
- All write operations must be authenticated.
- Creation must enforce `isValidPhoto` schema.
- Updates must be blocked if trying to change ownership or creation dates.
- Deletion must be restricted to the owner.
