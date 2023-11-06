export function update() {}

export function handleImageUpload(
  event: React.ChangeEvent<HTMLInputElement>
): string | undefined {
  let files: FileList | null = event.target.files;
  if (files && files.length) {
    const imageUrl = URL.createObjectURL(files[0]);
    return imageUrl;
  }
}

export function fakeData() {
  return [
    {
      data: {
        store: "asas",
        location: "chickenbake",
        drink: "",
        toppings: "",
        sugar: "",
      },
      id: 1699290741192,
      section: "Review",
    },
    {
      data: { text: "my link", link: "www.link.com" },
      id: 123,
      section: "Link",
    },
    { data: { title: "my title" }, id: 8888, section: "Title" },
  ];
}
