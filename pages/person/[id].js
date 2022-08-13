import { useRouter } from "next/router";

export default async function Detail() {
  const router = useRouter();
  const res = await fetch(
    `https://billions-api.nomadcoders.workers.dev/person/${router.query.name}`
  );
  const worker = await res.json();
  console.log(worker);
  return (
    <div>
      <div>{worker.id}</div>
    </div>
  );
}
