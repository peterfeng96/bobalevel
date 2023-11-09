//Utility Store

export async function login() {
  const json = await fetch("http://localhost:8080/api/login", {
    method: "POST",
    cache: "no-store",
    credentials: "include",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({ id: "bobaluver", password: "bobaluver" }),
  });
  if (json.status !== 200) location.href = "http://localhost:3000/admin/login";

  const data = await json.json();

  return data;
}

export async function getAdmin() {
  const json = await fetch("http://localhost:8080/api/admin", {
    cache: "no-store",
    credentials: "include",
  });
  if (json.status !== 200) window.location.href = "http://localhost:3000/login";
  const data = await json.json();
  return data;
}

//Get user data from Spring Boot backend/MongoDB
export async function getUserData(id: String) {
  const json = await fetch(`http://localhost:8080/api/user/${id}`, {
    cache: "no-store",
  });
  const data = await json.json();
  return data;
}
//Upload Profile and Post Images to AWS S3 bucket
export async function handleImageUpload(
  event: React.ChangeEvent<HTMLInputElement>,
  userId: string,
  id?: string
): Promise<string | undefined> {
  let files: FileList | null = event.target.files;
  if (files && files.length) {
    const response = await fetch(
      `https://pdgyiqazc2.execute-api.us-east-2.amazonaws.com/dev/boba-level-images/${userId}/${id}`,
      {
        method: "PUT",
        headers: {
          "Content-Type": "image/*",
        },
        body: files[0],
      }
    );
    console.log(response);
    return `https://boba-level-images.s3.us-east-2.amazonaws.com/${userId}/${id}`;
  }
}
//Update user data to Spring Boot backend/MongoDB
export function updateUserData(id: String, settings: any, posts: any) {
  console.log({ id, settings, posts });
  fetch(`http://localhost:8080/api/user/${id}`, {
    method: "PUT",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({ id, settings, posts }),
  });
}
//Add http to any link/url that doesn't have it
export function normalizeUrl(url: string) {
  if (!url.startsWith("http://") || !url.startsWith("https://")) {
    url = "http://" + url;
  }
  return url;
}
