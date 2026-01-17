interface PostDateProps {
  date: string | Date;
  className?: string;
}

export default function PostDate({ date, className }: PostDateProps) {
  const formatDate = (date: string | Date) => {
    const dateString = new Date(date);
    return dateString.toLocaleDateString('en-US', {
      year: 'numeric',
      month: 'short',
      day: '2-digit',
    });
  };

  return <span className={className}>{formatDate(date)}</span>;
}
