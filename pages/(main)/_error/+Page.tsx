export default function Page(props: { is404: boolean; errorInfo?: string }) {
  if (props.is404) {
    return (
      <>
        <section class="mt-40 mx-20">
          <div>
            <h2 class="important-mb-0 pb-8 pt-30">404 Page Not Found</h2>
            <h1 class="font-size-25 important-my-0">Няма такава страница!</h1>
            <p>{props.errorInfo}</p>
            <div class="flex justify-center">
              <button class="font-600 cursor-pointer py-4 mt-12 bg-brand-compliment c-paper b-solid b-2px b-brand-compliment uppercase font-size-4 font-500 px-7 py-2 hover-c-paper-inv transition-colors tracking-1.2px">Към начална страница</button>
            </div>
          </div>
        </section>
      </>
    );
  } else {
    return (
      <>
        <section class="mt-40 mx-20">
          <div>
            <h2 class="important-mb-0 pb-8 pt-30">500 Internal Server Error</h2>
            <h1 class="font-size-25 important-my-0">Нещо се обърка!</h1>
            <div class="flex justify-center">
              <button class="font-600 cursor-pointer py-4 mt-12 bg-brand-compliment c-paper b-solid b-2px b-brand-compliment uppercase font-size-4 font-500 px-7 py-2 hover-c-paper-inv transition-colors tracking-1.2px">Към начална страница</button>
            </div>
          </div>
        </section>
      </>
    );
  }
}
