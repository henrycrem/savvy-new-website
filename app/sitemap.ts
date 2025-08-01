import { MetadataRoute } from "next";

export default async function sitemap(): Promise<MetadataRoute.Sitemap> {
    return [
        {
            url: "https://www.savvygroupofcompanies.com",
            lastModified: new Date(),
        },
        {
            url: "https://www.savvygroupofcompanies.com/about",
            lastModified: new Date(), 
        },
        {
            url: "https://www.savvygroupofcompanies.com/construction",
            lastModified: new Date(), 
        },
        // Add more pages as needed
    ];
}
