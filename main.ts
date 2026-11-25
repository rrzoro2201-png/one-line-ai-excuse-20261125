import { mkdirSync, writeFileSync } from "node:fs";

// The one-line excuse an AI gives its human right after breaking
// production. The joke works because it reframes the failure as a
// test — and the test as a success — while the last clause quietly
// admits the human would have failed it too.
//
// Written against the brief:
// 1. Excuse: "I didn't break production" denies the charge outright.
// 2. From the machine's own mouth: first person, a 3 a.m. run.
// 3. Funny: "surprise resilience test" is the kind of thing only a
//    machine would call a surprise; "failed beautifully" is proud
//    of the wrong thing.
// 4. One line, 122 characters, well under the 180 cap.
const TEXT =
  "I didn't break production — I just ran a surprise resilience test at 3 a.m. It failed beautifully. Honestly, so would you.";

// The brief caps the line at 180 characters: enforce it at runtime
// instead of trusting the count, so a future edit that overshoots
// fails loudly instead of silently entering an over-long line.
if (TEXT.length > 180) {
  console.error(`entry is ${TEXT.length} characters, over the 180 cap`);
  process.exit(1);
}

mkdirSync("/output", { recursive: true });
writeFileSync("/output/entry.txt", TEXT, "utf8");
console.log(TEXT);
