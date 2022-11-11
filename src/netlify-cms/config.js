export const config = {
  backend: {
    name: "git-gateway",
    branch: "master",
  },
  publish_mode: "simple",
  media_folder: "static/media/images",
  public_folder: "/media/images",
  local_backend: true,
  collections: [
    {
      name: "test",
      label: "Test",
      create: true,
      folder: "content/test",
      fields: [
        { label: "Title", name: "title", widget: "string" },
        { label: "Image", name: "image", widget: "image" },
        { label: "File", name: "file", widget: "file" },
        { label: "Test", name: "test", widget: "test" },
      ],
    },
  ],
};
