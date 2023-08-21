export default async function getPostDetails(postid) {
  // console.log(`https://basic-blog.teamrabbil.com/api/post-details/${postid}`);
  const res = await fetch(
    `https://basic-blog.teamrabbil.com/api/post-details/${postid}`
  );

  if (!res.ok) {
    throw new Error("Fetching Api error");
  }
  return res.json();
}
