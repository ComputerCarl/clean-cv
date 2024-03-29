exports.categories = [
  "SaaS",
  "Design",
  "Databases",
  "Automation",
  "Development",
  "Productivity",
  "E-Commerce",
  "DevOps",
  "Video",
]

exports.logos = [
  { filename: "gatsby", label: "Gatsby JS", categories: ["development"] },
  { filename: "react", label: "React JS", categories: ["development"] },
  { filename: "mocha", label: "Mocha", categories: ["development"] },
  { filename: "jest", label: "Jest", categories: ["development"] },
  {
    filename: "bootstrap",
    label: "Bootstrap",
    categories: ["development", "design"],
  },
  {
    filename: "ant-design",
    label: "Ant Design UI",
    categories: ["development", "design"],
  },
  {
    filename: "postgresql",
    label: "PostgreSQL",
    categories: ["development", "databases"],
  },
  {
    filename: "azure",
    label: "Azure Cloud",
    categories: ["devops", "automation", "saas"],
  },
  {
    filename: "resolve",
    label: "Davinci Resolve",
    categories: ["design", "video"],
  },
  { filename: "css", label: "CSS", categories: ["development", "design"] },
  {
    filename: "deepdetect",
    label: "DeepDetect",
    categories: ["e-commerce", "automation"],
  },
  {
    filename: "docker(1)",
    label: "Docker",
    categories: ["automation", "devops"],
  },
  {
    filename: "javascript",
    label: "Javascript",
    categories: ["automation", "devops", "development", "e-commerce"],
  },
  {
    filename: "elementor",
    label: "Elementor",
    categories: ["development", "design", "e-commerce", "saas"],
  },
  {
    filename: "excel",
    label: "Microsoft Excel",
    categories: ["automation", "e-commerce", "productivity"],
  },
  {
    filename: "gitlab",
    label: "GitLab",
    categories: ["devops", "development", "saas", "automation"],
  },
  {
    filename: "graphql",
    label: "GraphQL",
    categories: ["development", "databases"],
  },
  { filename: "html", label: "HTML", categories: ["development"] },
  { filename: "jquery", label: "jQuery", categories: ["development"] },
  { filename: "hubspot", label: "HubSpot", categories: ["marketing", "saas"] },
  {
    filename: "mongo",
    label: "Mongo DB",
    categories: ["development", "databases"],
  },
  {
    filename: "office",
    label: "Microsoft Office",
    categories: ["productivity", "saas"],
  },
  {
    filename: "material-ui",
    label: "Material UI",
    categories: ["development", "design"],
  },
  {
    filename: "postman",
    label: "Postman",
    categories: ["development", "automation", "saas"],
  },
  {
    filename: "python",
    label: "Python",
    categories: ["development", "automation", "devops"],
  },
  { filename: "redux", label: "Redux", categories: ["development"] },
  { filename: "shopify", label: "Shopify", categories: ["e-commerce", "saas"] },
  {
    filename: "selenium",
    label: "Selenium",
    categories: ["automation", "e-commerce", "devops", "productivity"],
  },
  {
    filename: "tailwind-css",
    label: "Tailwind CSS",
    categories: ["development", "design"],
  },
  {
    filename: "github",
    label: "GitHub",
    categories: ["devops", "development", "saas", "automation"],
  },
  { filename: "ubuntu", label: "Ubuntu", categories: ["productivity"] },
  {
    filename: "mailchimp",
    label: "MailChimp",
    categories: ["productivity", "marketing", "saas"],
  },
  {
    filename: "visual-studio",
    label: "Visual Studio",
    categories: ["development"],
  },
  { filename: "windows", label: "Windows", categories: ["productivity"] },
  { filename: "slack-1", label: "Slack", categories: ["productivity", "saas"] },
  {
    filename: "woocommerce",
    label: "WooCommerce",
    categories: ["e-commerce", "saas"],
  },
  {
    filename: "adobe-photoshop-cs6",
    label: "Photoshop",
    categories: ["design", "e-commerce"],
  },
  {
    filename: "snipcart",
    label: "SnipCart",
    categories: ["e-commerce", "saas"],
  },
  {
    filename: "wordpress-blue",
    label: "WordPress",
    categories: ["design", "development", "saas"],
  },
  {
    filename: "plus",
    label: "...and more",
    categories: this.categories.map(el => el.toLowerCase()),
  },
]
