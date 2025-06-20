import * as React from 'react';
import { SVGProps, Ref, forwardRef } from 'react';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const LabelPairedLoaderXlBoldIcon = (
  { title, titleId, ...props }: SVGProps<SVGSVGElement> & SVGRProps,
  ref: Ref<SVGSVGElement>,
) => (
  <svg
    xmlns='http://www.w3.org/2000/svg'
    width={24}
    height={36}
    viewBox='0 0 24 36'
    role='img'
    ref={ref}
    aria-labelledby={titleId}
    {...props}
  >
    {title ? <title id={titleId}>{title}</title> : null}
    <g>
      <path d='M13.125 7.125v3.75A1.11 1.11 0 0 1 12 12c-.656 0-1.125-.469-1.125-1.125v-3.75C10.875 6.515 11.344 6 12 6c.61 0 1.125.516 1.125 1.125m0 18v3.75A1.11 1.11 0 0 1 12 30c-.656 0-1.125-.469-1.125-1.125v-3.75c0-.61.469-1.125 1.125-1.125.61 0 1.125.516 1.125 1.125M0 18c0-.61.469-1.125 1.125-1.125h3.75C5.485 16.875 6 17.391 6 18a1.11 1.11 0 0 1-1.125 1.125h-3.75C.469 19.125 0 18.656 0 18m19.125-1.125h3.75c.61 0 1.125.516 1.125 1.125a1.11 1.11 0 0 1-1.125 1.125h-3.75C18.469 19.125 18 18.656 18 18c0-.61.469-1.125 1.125-1.125m1.36-7.36c.421.47.421 1.172 0 1.594l-2.672 2.672c-.422.422-1.172.422-1.594 0s-.422-1.172 0-1.594l2.672-2.671c.422-.422 1.125-.422 1.593 0M7.734 23.86l-2.673 2.625a1.027 1.027 0 0 1-1.546 0 1.027 1.027 0 0 1 0-1.547l2.625-2.671c.422-.422 1.172-.422 1.593 0s.422 1.125 0 1.593M3.514 9.516a1.104 1.104 0 0 1 1.547 0l2.672 2.672c.422.421.422 1.171 0 1.593-.421.422-1.125.422-1.593 0L3.516 11.11c-.47-.421-.47-1.125 0-1.593m14.298 12.75 2.671 2.672a1.104 1.104 0 0 1 0 1.546c-.468.47-1.172.47-1.593 0l-2.672-2.625c-.422-.422-.422-1.172 0-1.593s1.172-.422 1.593 0' />
    </g>
    <defs>
      <clipPath id='45bb2cb93c6cc062655c03e1254d2423__a'>
        <path d='M0 0h24v36H0z' />
      </clipPath>
    </defs>
  </svg>
);
const ForwardRef = forwardRef(LabelPairedLoaderXlBoldIcon);
export default ForwardRef;
