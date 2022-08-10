-- CreateTable
CREATE TABLE "Noti" (
    "id" TEXT NOT NULL,
    "position" VARCHAR(20),
    "reward" INTEGER,
    "description" VARCHAR(200),
    "tech" VARCHAR(20),
    "createdAt" DATE DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3),
    "company_id" TEXT,

    CONSTRAINT "Noti_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Company" (
    "id" TEXT NOT NULL,
    "name" VARCHAR(20) NOT NULL,
    "country" VARCHAR(10) NOT NULL,
    "area" VARCHAR(10) NOT NULL,
    "createdAt" DATE DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3),

    CONSTRAINT "Company_pkey" PRIMARY KEY ("id")
);

-- AddForeignKey
ALTER TABLE "Noti" ADD CONSTRAINT "Noti_company_id_fkey" FOREIGN KEY ("company_id") REFERENCES "Company"("id") ON DELETE NO ACTION ON UPDATE NO ACTION;
