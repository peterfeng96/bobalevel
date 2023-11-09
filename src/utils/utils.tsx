//Utility Store
export async function signup(id: string, password: string) {
  const response = await fetch(`${process.env.BACKEND_API}/api/signup`, {
    method: "POST",
    cache: "no-store",
    credentials: "include",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({ id, password }),
  });
  return response;
}
export async function login(id: string, password: string) {
  const response = await fetch(`${process.env.BACKEND_API}/api/signup`, {
    method: "POST",
    cache: "no-store",
    credentials: "include",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({ id, password }),
  });
  return response;
}

export function logout() {
  fetch(`${process.env.BACKEND_API}/api/logout`, {
    method: "POST",
    cache: "no-store",
    credentials: "include",
  });
}

export async function getAdmin() {
  const response = await fetch(`${process.env.BACKEND_API}/api/admin`, {
    cache: "no-store",
    credentials: "include",
  });
  console.log(response);
  return response;
}

//Get user data from Spring Boot backend/MongoDB
export async function getUserData(id: String) {
  const json = await fetch(`${process.env.BACKEND_API}/api/user/${id}`, {
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
      `${process.env.IMAGE_UPLOAD}/${userId}/${id}`,
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
  fetch(`${process.env.BACKEND_API}/api/user/${id}`, {
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
