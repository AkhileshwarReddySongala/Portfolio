export default function Footer() {
  return (
    <footer className="flex w-full flex-col items-center justify-center px-4 pb-10 text-center text-gray-500 dark:bg-darkBg">
      <section className="max-w-[28rem] font-sans">
        <small className="mb-2 block text-xs text-gray-400">
          &copy; 2026 Akhileshwar Reddy Songala. All rights reserved.
        </small>
        <p className="text-xs text-gray-500">
          <span className="font-semibold text-gray-400">
            How about we break the ice and start a conversation?
          </span>{' '}
          It&apos;s like adding sprinkles to the cake of life - makes everything
          more fun!
        </p>
      </section>
    </footer>
  );
}
