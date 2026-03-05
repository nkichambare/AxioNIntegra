import ReactMarkdown from 'react-markdown';

type ResourceBodyProps = {
  body: string;
};

export default function ResourceBody({ body }: ResourceBodyProps) {
  return (
    <div className="body-text text-secondary [&_a]:text-accent [&_a]:underline [&_a]:underline-offset-4 [&_h1]:mt-8 [&_h1]:text-[30px] [&_h1]:font-semibold [&_h1]:leading-[1.25] [&_h2]:mt-7 [&_h2]:text-[26px] [&_h2]:font-semibold [&_h2]:leading-[1.25] [&_h3]:mt-6 [&_h3]:text-[21px] [&_h3]:font-medium [&_h3]:leading-[1.3] [&_li]:leading-[1.7] [&_ol]:my-4 [&_ol]:ml-5 [&_ol]:list-decimal [&_p]:my-4 [&_ul]:my-4 [&_ul]:ml-5 [&_ul]:list-disc">
      <ReactMarkdown>{body}</ReactMarkdown>
    </div>
  );
}
