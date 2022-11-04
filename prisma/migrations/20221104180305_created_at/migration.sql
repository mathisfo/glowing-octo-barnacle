-- RedefineTables
PRAGMA foreign_keys=OFF;
CREATE TABLE "new_RefuelEntry" (
    "id" TEXT NOT NULL PRIMARY KEY,
    "createdAt" DATETIME NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "aircraft" TEXT NOT NULL,
    "pumpValue" INTEGER NOT NULL,
    "name" TEXT NOT NULL
);
INSERT INTO "new_RefuelEntry" ("aircraft", "id", "name", "pumpValue") SELECT "aircraft", "id", "name", "pumpValue" FROM "RefuelEntry";
DROP TABLE "RefuelEntry";
ALTER TABLE "new_RefuelEntry" RENAME TO "RefuelEntry";
PRAGMA foreign_key_check;
PRAGMA foreign_keys=ON;
