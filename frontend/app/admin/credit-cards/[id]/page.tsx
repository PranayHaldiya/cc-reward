import { Metadata } from 'next';
import CreditCardDetail from './CreditCardDetail';

export const dynamic = 'force-dynamic';

interface GenerateMetadataProps {
  params: { id: string };
  searchParams: { [key: string]: string | string[] | undefined };
}

export async function generateMetadata({ params }: GenerateMetadataProps): Promise<Metadata> {
  return {
    title: `Credit Card Details - ${params.id}`,
  };
}

export default async function Page({ params }: GenerateMetadataProps) {
  return <CreditCardDetail id={params.id} />;
} 