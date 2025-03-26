import React from 'react';

const Breadcrumb = ({ items }) => {
  return (
    <div className="max-w-6xl flex flex-col justify-center xs:px-spacing20 xs:my-spacing4 w-full mx-auto md:px-spacing100 md:my-auto md:py-spacing4 xs:pt-spacing10 xs:pb-spacing20 xs:!my-0">
      {/* Structured Data */}
      <script type="application/ld+json">
        {JSON.stringify({
          "@context": "https://schema.org",
          "@type": "BreadcrumbList",
          "itemListElement": items.map((item, index) => ({
            "@type": "ListItem",
            "position": index + 1,
            "name": item.name,
            "item": item.url
          }))
        })}
      </script>

      {/* Breadcrumb Navigation */}
      <nav aria-label="breadcrumb">
        <ol className="md:text-captionNormal xs:text-captionSmall flex justify-start items-center">
          {items.map((item, index) => (
            <React.Fragment key={item.url}>
              <li>
                {index === items.length - 1 ? (
                  <span className="whitespace-nowrap md:text-captionNormal font-medium -tracking-0.14 md:font-450 md:-tracking-0.14 xs:text-captionSmall xs:-tracking-105 text-greyscale-main truncate">
                    {item.name}
                  </span>
                ) : (
                  <>
                    <a href={item.url} className="whitespace-nowrap md:text-captionNormal font-medium -tracking-0.14 md:font-450 md:-tracking-0.14 xs:text-captionSmall xs:-tracking-105 text-greyscale-2">
                      {item.name}
                    </a>
                    {/* Add the ">" separator */}
                    <span className="mx-2 text-greyscale-4">{'>'}</span>
                  </>
                )}
              </li>
            </React.Fragment>
          ))}
        </ol>
      </nav>
    </div>
  );
};

export default Breadcrumb;