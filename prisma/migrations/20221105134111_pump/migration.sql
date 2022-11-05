-- CreateTable
CREATE TABLE "Pump" (
    "pumpid" TEXT NOT NULL,
    "capacity" INTEGER NOT NULL,

    CONSTRAINT "Pump_pkey" PRIMARY KEY ("pumpid")
);

-- CreateTable
CREATE TABLE "PumpRefuelEntry" (
    "id" TEXT NOT NULL,
    "refilledAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "amountRefield" INTEGER NOT NULL,

    CONSTRAINT "PumpRefuelEntry_pkey" PRIMARY KEY ("id")
);

-- AddForeignKey
ALTER TABLE "PumpRefuelEntry" ADD CONSTRAINT "PumpRefuelEntry_id_fkey" FOREIGN KEY ("id") REFERENCES "Pump"("pumpid") ON DELETE CASCADE ON UPDATE CASCADE;
