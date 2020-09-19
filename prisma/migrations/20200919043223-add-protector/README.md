# Migration `20200919043223-add-protector`

This migration has been generated by Alex23925 at 9/18/2020, 9:32:23 PM.
You can check out the [state of the schema](./schema.prisma) after the migration.

## Database Steps

```sql
CREATE TABLE "public"."Protector" (
"id" SERIAL,
"createdAt" timestamp(3)   NOT NULL DEFAULT CURRENT_TIMESTAMP,
"img" text   NOT NULL DEFAULT E'protector',
"name" text   NOT NULL ,
"price" text   NOT NULL ,
"quantity" text   NOT NULL ,
"defense" text   NOT NULL ,
"evasion" text   NOT NULL ,
"multiplier" text   NOT NULL ,
"info" text   NOT NULL ,
PRIMARY KEY ("id")
)
```

## Changes

```diff
diff --git schema.prisma schema.prisma
migration 20200919034012-add-defaults..20200919043223-add-protector
--- datamodel.dml
+++ datamodel.dml
@@ -2,19 +2,32 @@
 // learn more about it in the docs: https://pris.ly/d/prisma-schema
 datasource db {
   provider = "postgresql"
-  url = "***"
+  url = "***"
 }
 generator client {
   provider = "prisma-client-js"
 }
+model Protector {
+  id         Int      @id @default(autoincrement())
+  createdAt  DateTime @default(now())
+  img        String   @default("protector")
+  name       String
+  price      String
+  quantity   String
+  defense    String
+  evasion    String
+  multiplier String
+  info       String
+}
+
 model RangeWeapon {
   id         Int      @id @default(autoincrement())
   createdAt  DateTime @default(now())
-  img        String @default("range")
+  img        String   @default("range")
   name       String
   price      String
   quantity   String
   attack     String
@@ -26,9 +39,9 @@
 model MeleeWeapon {
   id         Int      @id @default(autoincrement())
   createdAt  DateTime @default(now())
-  img        String @default("melee")
+  img        String   @default("melee")
   name       String
   price      String
   quantity   String
   attack     String
```

