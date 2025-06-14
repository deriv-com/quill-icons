import * as React from 'react';
import { SVGProps, Ref, forwardRef } from 'react';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const LabelPairedInfoXlFillIcon = (
  { title, titleId, ...props }: SVGProps<SVGSVGElement> & SVGRProps,
  ref: Ref<SVGSVGElement>,
) => (
  <svg
    xmlns='http://www.w3.org/2000/svg'
    width={9}
    height={36}
    viewBox='0 0 9 36'
    role='img'
    ref={ref}
    aria-labelledby={titleId}
    {...props}
  >
    {title ? <title id={titleId}>{title}</title> : null}
    <g>
      <path d='M2.25 9.75c0-.797.422-1.5 1.125-1.922.656-.422 1.547-.422 2.25 0C6.281 8.25 6.75 8.953 6.75 9.75c0 .844-.469 1.547-1.125 1.969-.703.422-1.594.422-2.25 0-.703-.422-1.125-1.125-1.125-1.969M0 16.5c0-.797.656-1.5 1.5-1.5h3c.797 0 1.5.703 1.5 1.5V27h1.5c.797 0 1.5.703 1.5 1.5 0 .844-.703 1.5-1.5 1.5h-6A1.48 1.48 0 0 1 0 28.5c0-.797.656-1.5 1.5-1.5H3v-9H1.5A1.48 1.48 0 0 1 0 16.5' />
    </g>
    <defs>
      <clipPath id='2794c7395f4262ba1417c19b220c9204__a'>
        <path d='M0 0h9v36H0z' />
      </clipPath>
    </defs>
  </svg>
);
const ForwardRef = forwardRef(LabelPairedInfoXlFillIcon);
export default ForwardRef;
