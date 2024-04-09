import HomeButton from "@/components/home-button";
import { notFound } from "next/navigation";
import { db } from "@/db";
import SnippetEditForm from "@/components/snippet-edit-form";

interface SnippetEditPageProps {
  params: {
    id: string;
  };
}

export default async function SnippetEditPage(props: SnippetEditPageProps) {
  const id = parseInt(props.params.id);
  const snippet = await db.snippet.findFirst({
    where: { id },
  });

  if (!snippet) {
    return notFound();
  }

  return (
    <div>
      <HomeButton />
      <div>{snippet.id}</div>
      <div>{snippet.title}</div>
      <SnippetEditForm snippet={snippet} />
    </div>
  );
}
