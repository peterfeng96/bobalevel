//Utility Store
import { UserDataType } from "@/types";

export async function signup(id: string, password: string) {
  const response = await fetch(`https://api.bobalevel.com/api/signup`, {
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
export async function login(id: string, password: string): Promise<Response> {
  const response = await fetch(`https://api.bobalevel.com/api/login`, {
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

export function logout(): void {
  fetch(`https://api.bobalevel.com/api/logout`, {
    method: "POST",
    cache: "no-store",
    credentials: "include",
  });
}

export async function getAdmin(): Promise<Response> {
  const response = await fetch(`https://api.bobalevel.com/api/admin`, {
    cache: "no-store",
    credentials: "include",
  });
  return response;
}

//Get user data from Spring Boot backend/MongoDB
export async function getUserData(id: String): Promise<any> {
  const json = await fetch(`https://api.bobalevel.com/api/user/${id}`, {
    cache: "no-store",
  });
  if (json.status == 200) {
    const data = await json.json();
    return data;
  } else {
    return new Promise((resolve, reject) => {
      resolve(false);
    });
  }
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
export function updateUserData(id: String, settings: any, posts: any): void {
  fetch(`https://api.bobalevel.com/api/user/${id}`, {
    method: "PUT",
    credentials: "include",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({ id, settings, posts }),
  });
}
//Add http to any link/url that doesn't have http or https
export function normalizeUrl(url: string): string {
  if (!url.startsWith("http://") || !url.startsWith("https://")) {
    url = "http://" + url;
  }
  return url;
}
