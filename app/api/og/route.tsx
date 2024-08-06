import { ImageResponse } from "next/og";
import { NextRequest } from "next/server";

export async function GET(request: NextRequest) {
  // Extract query parameters
  const url = new URL(request.url);
  const title = url.searchParams.get("title") || "Default Title";
  const description =
    url.searchParams.get("description") || "Default Description";

  return new ImageResponse(
    (
      <div tw="flex flex-col w-full h-full items-center justify-center bg-white">
        <div tw="flex bg-gray-950 w-full flex-col">
          <div tw="flex flex-col md:flex-row w-full py-12 px-4 md:items-center justify-between p-8">
            {/* Profile Section */}
            <div tw="flex flex-row items-center justify-start">
              <img
                src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSppkoKsaYMuIoNLDH7O8ePOacLPG1mKXtEng&s"
                alt="Profile Picture"
                width={50}
                height={50}
                className="rounded-full"
              />
              <div tw="flex flex-col ml-4">
                <h2 tw="text-3xl sm:text-4xl font-bold tracking-tight text-gray-900">
                  Username
                </h2>
                <span tw="text-gray-400 text-xl sm:text-xl font-bold tracking-tight">
                  @username
                </span>
              </div>
            </div>

            {/* Additional Image */}
            <div tw="flex flex-shrink-0 ml-4">
              <img
                src="https://cdn.prod.website-files.com/5d66bdc65e51a0d114d15891/64cebdd90aef8ef8c749e848_X-EverythingApp-Logo-Twitter.jpg"
                alt="Additional Logo"
                width={50}
                height={50}
                className="rounded-full"
              />
            </div>
          </div>

          {/* Tweet Content */}
          <div tw="flex flex-col w-full px-4 md:items-start justify-start">
            <h2 tw="text-3xl sm:text-4xl font-bold tracking-tight text-gray-900">
              {title}
            </h2>
            <p tw="text-2xl tracking-tight text-gray-900 text-left">
              {description}
            </p>
          </div>
        </div>
      </div>
    ),
    {
      width: 1200,
      height: 630,
    }
  );
}
