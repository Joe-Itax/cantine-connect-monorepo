-- CreateEnum
CREATE TYPE "UserRole" AS ENUM ('admin', 'parent', 'agent');

-- CreateEnum
CREATE TYPE "StatusSubscription" AS ENUM ('actif', 'expiré');

-- CreateTable
CREATE TABLE "User" (
    "id" TEXT NOT NULL,
    "email" TEXT NOT NULL,
    "password" TEXT,
    "role" "UserRole" NOT NULL,
    "name" TEXT NOT NULL,
    "searchableName" TEXT NOT NULL DEFAULT '',
    "isActive" BOOLEAN NOT NULL DEFAULT true,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "User_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Parent" (
    "id" TEXT NOT NULL,

    CONSTRAINT "Parent_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "EnrolledStudent" (
    "id" TEXT NOT NULL,
    "name" TEXT NOT NULL,
    "searchableName" TEXT NOT NULL DEFAULT '',
    "class" TEXT NOT NULL,
    "gender" TEXT NOT NULL,
    "matricule" TEXT NOT NULL,
    "isRegisteredToCanteen" BOOLEAN NOT NULL DEFAULT false,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "EnrolledStudent_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "CanteenStudent" (
    "id" TEXT NOT NULL,
    "enrolledStudentId" TEXT NOT NULL,
    "matriculeHashe" TEXT NOT NULL,
    "parentId" TEXT NOT NULL,
    "isActive" BOOLEAN NOT NULL DEFAULT true,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "CanteenStudent_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Abonnement" (
    "duration" INTEGER,
    "price" DOUBLE PRECISION,
    "startDate" TIMESTAMP(3) DEFAULT CURRENT_TIMESTAMP,
    "endDate" TIMESTAMP(3),
    "status" "StatusSubscription",
    "type" TEXT,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,
    "canteenStudentId" TEXT NOT NULL,
    "id" SERIAL NOT NULL,

    CONSTRAINT "Abonnement_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Repas" (
    "id" SERIAL NOT NULL,
    "canteenStudentId" TEXT NOT NULL,
    "date" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "status" BOOLEAN,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "Repas_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Notification" (
    "id" SERIAL NOT NULL,
    "canteenStudentId" TEXT NOT NULL,
    "message" TEXT NOT NULL,
    "read" BOOLEAN NOT NULL DEFAULT false,
    "type" TEXT NOT NULL,
    "details" JSONB,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "Notification_pkey" PRIMARY KEY ("id")
);

-- CreateIndex
CREATE UNIQUE INDEX "User_email_key" ON "User"("email");

-- CreateIndex
CREATE INDEX "User_email_idx" ON "User"("email");

-- CreateIndex
CREATE INDEX "User_searchableName_idx" ON "User"("searchableName");

-- CreateIndex
CREATE INDEX "User_id_idx" ON "User"("id");

-- CreateIndex
CREATE INDEX "User_isActive_idx" ON "User"("isActive");

-- CreateIndex
CREATE UNIQUE INDEX "Parent_id_key" ON "Parent"("id");

-- CreateIndex
CREATE UNIQUE INDEX "EnrolledStudent_matricule_key" ON "EnrolledStudent"("matricule");

-- CreateIndex
CREATE INDEX "EnrolledStudent_matricule_idx" ON "EnrolledStudent"("matricule");

-- CreateIndex
CREATE INDEX "EnrolledStudent_id_idx" ON "EnrolledStudent"("id");

-- CreateIndex
CREATE INDEX "EnrolledStudent_searchableName_idx" ON "EnrolledStudent"("searchableName");

-- CreateIndex
CREATE INDEX "EnrolledStudent_isRegisteredToCanteen_idx" ON "EnrolledStudent"("isRegisteredToCanteen");

-- CreateIndex
CREATE UNIQUE INDEX "CanteenStudent_enrolledStudentId_key" ON "CanteenStudent"("enrolledStudentId");

-- CreateIndex
CREATE UNIQUE INDEX "CanteenStudent_matriculeHashe_key" ON "CanteenStudent"("matriculeHashe");

-- CreateIndex
CREATE INDEX "CanteenStudent_id_idx" ON "CanteenStudent"("id");

-- CreateIndex
CREATE INDEX "CanteenStudent_enrolledStudentId_idx" ON "CanteenStudent"("enrolledStudentId");

-- CreateIndex
CREATE INDEX "CanteenStudent_matriculeHashe_idx" ON "CanteenStudent"("matriculeHashe");

-- CreateIndex
CREATE INDEX "CanteenStudent_parentId_idx" ON "CanteenStudent"("parentId");

-- CreateIndex
CREATE INDEX "Notification_id_idx" ON "Notification"("id");

-- AddForeignKey
ALTER TABLE "Parent" ADD CONSTRAINT "Parent_id_fkey" FOREIGN KEY ("id") REFERENCES "User"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "CanteenStudent" ADD CONSTRAINT "CanteenStudent_parentId_fkey" FOREIGN KEY ("parentId") REFERENCES "Parent"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "CanteenStudent" ADD CONSTRAINT "CanteenStudent_enrolledStudentId_fkey" FOREIGN KEY ("enrolledStudentId") REFERENCES "EnrolledStudent"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Abonnement" ADD CONSTRAINT "Abonnement_canteenStudentId_fkey" FOREIGN KEY ("canteenStudentId") REFERENCES "CanteenStudent"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Repas" ADD CONSTRAINT "Repas_canteenStudentId_fkey" FOREIGN KEY ("canteenStudentId") REFERENCES "CanteenStudent"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Notification" ADD CONSTRAINT "Notification_canteenStudentId_fkey" FOREIGN KEY ("canteenStudentId") REFERENCES "CanteenStudent"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
