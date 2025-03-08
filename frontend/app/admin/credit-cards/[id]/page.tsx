'use client';

import { Metadata } from 'next';
import CreditCardDetail from './CreditCardDetail';

export const dynamic = 'force-dynamic';

type PageProps = {
  params: { id: string };
  searchParams: { [key: string]: string | string[] | undefined };
};

export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  return {
    title: `Credit Card Details - ${params.id}`,
  };
}

export default function Page(props: PageProps) {
  return (
    <div className="min-h-screen bg-gray-100 dark:bg-gray-900">
      <CreditCardDetail id={props.params.id} />
    </div>
  );
} 
