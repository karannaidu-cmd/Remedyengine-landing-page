import Link from "next/link";
import { ChevronRight } from "lucide-react";

// Visible breadcrumb trail. Pair with breadcrumbJsonLd() from lib/seo for the
// structured-data equivalent on the same page.
export function Breadcrumbs({
  items,
}: {
  items: { name: string; path: string }[];
}) {
  return (
    <nav aria-label="Breadcrumb">
      <ol className="flex flex-wrap items-center gap-1.5 font-data text-xs text-ink-700">
        {items.map((item, i) => {
          const last = i === items.length - 1;
          return (
            <li key={item.path} className="flex items-center gap-1.5">
              {last ? (
                <span aria-current="page" className="text-ink-900">
                  {item.name}
                </span>
              ) : (
                <Link href={item.path} className="hover:text-remedy-600">
                  {item.name}
                </Link>
              )}
              {!last && <ChevronRight size={13} className="text-line-200" />}
            </li>
          );
        })}
      </ol>
    </nav>
  );
}
