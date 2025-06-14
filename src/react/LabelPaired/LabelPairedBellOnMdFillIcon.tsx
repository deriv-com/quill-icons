import * as React from 'react';
import { SVGProps, Ref, forwardRef } from 'react';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const LabelPairedBellOnMdFillIcon = (
  { title, titleId, ...props }: SVGProps<SVGSVGElement> & SVGRProps,
  ref: Ref<SVGSVGElement>,
) => (
  <svg
    xmlns='http://www.w3.org/2000/svg'
    width={20}
    height={24}
    viewBox='0 0 20 24'
    role='img'
    ref={ref}
    aria-labelledby={titleId}
    {...props}
  >
    {title ? <title id={titleId}>{title}</title> : null}
    <g>
      <path d='M10 4c.531 0 1 .469 1 1v.625c2.281.438 4 2.469 4 4.875v.594c0 1.469.531 2.906 1.5 4l.219.25c.281.312.343.719.187 1.094-.156.343-.531.562-.906.562H4c-.406 0-.781-.219-.937-.562a1.01 1.01 0 0 1 .187-1.094l.219-.25a6.08 6.08 0 0 0 1.531-4V10.5c0-2.406 1.719-4.437 4-4.875V5c0-.531.438-1 1-1m1.406 15.438A1.96 1.96 0 0 1 10 20c-.531 0-1.062-.187-1.437-.562C8.187 19.063 8 18.53 8 18h4c0 .531-.219 1.063-.594 1.438M0 10.25a.74.74 0 0 1 .75-.75h2.5a.76.76 0 0 1 .75.75.74.74 0 0 1-.75.75H.75a.72.72 0 0 1-.75-.75m16.75-.75h2.5a.76.76 0 0 1 .75.75.74.74 0 0 1-.75.75h-2.5a.72.72 0 0 1-.75-.75.74.74 0 0 1 .75-.75m1.906-4.812a.74.74 0 0 1-.343 1l-2 1a.74.74 0 0 1-1-.344.74.74 0 0 1 .343-1l2-1a.74.74 0 0 1 1 .343m-17 1a.74.74 0 0 1-.343-1 .74.74 0 0 1 1-.344l2 1a.74.74 0 0 1 .343 1 .74.74 0 0 1-1 .343z' />
    </g>
    <defs>
      <clipPath id='e349fdfdd32e3d7d195006422af4bfc4__a'>
        <path d='M0 0h20v24H0z' />
      </clipPath>
    </defs>
  </svg>
);
const ForwardRef = forwardRef(LabelPairedBellOnMdFillIcon);
export default ForwardRef;
