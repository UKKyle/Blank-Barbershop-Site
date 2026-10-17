-- Fresh client database for the simple-booking workflow.
CREATE TABLE IF NOT EXISTS simple_bookings (
  date TEXT NOT NULL,
  time TEXT NOT NULL,
  customer_name TEXT NOT NULL,
  customer_email TEXT,
  assigned_barber TEXT,
  PRIMARY KEY (date,time)
);
CREATE TABLE IF NOT EXISTS blocked_slots (
  date TEXT NOT NULL,
  time TEXT NOT NULL,
  PRIMARY KEY (date,time)
);
CREATE TABLE IF NOT EXISTS admin_audit_log (
  id TEXT PRIMARY KEY,
  occurred_at TEXT NOT NULL DEFAULT CURRENT_TIMESTAMP,
  actor_email TEXT NOT NULL,
  action TEXT NOT NULL,
  target TEXT NOT NULL,
  details TEXT NOT NULL DEFAULT '{}'
);
