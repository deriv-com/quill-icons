import * as React from 'react';
import { SVGProps, Ref, forwardRef } from 'react';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const LabelPairedBellOnMdBoldIcon = (
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
      <path d='M10 4c.531 0 1 .469 1 1v.625c2.281.438 4 2.469 4 4.875v.813c0 1.406.469 2.78 1.344 3.906l.468.562c.188.25.22.563.094.813a.73.73 0 0 1-.656.406H3.75a.74.74 0 0 1-.687-.406.78.78 0 0 1 .093-.813l.469-.562C4.5 14.094 5 12.719 5 11.313V10.5c0-2.406 1.719-4.437 4-4.875V5c0-.531.438-1 1-1m0 3c-1.937 0-3.5 1.594-3.5 3.5v.813c0 1.5-.437 2.937-1.25 4.187h9.469c-.813-1.25-1.219-2.687-1.219-4.187V10.5C13.5 8.594 11.906 7 10 7m2 11c0 .531-.219 1.063-.594 1.438A1.96 1.96 0 0 1 10 20c-.531 0-1.062-.187-1.437-.562C8.187 19.063 8 18.53 8 18h4M0 10.25a.74.74 0 0 1 .75-.75h2.5a.76.76 0 0 1 .75.75.74.74 0 0 1-.75.75H.75a.72.72 0 0 1-.75-.75m16.75-.75h2.5a.76.76 0 0 1 .75.75.74.74 0 0 1-.75.75h-2.5a.72.72 0 0 1-.75-.75.74.74 0 0 1 .75-.75m1.906-4.812a.74.74 0 0 1-.343 1l-2 1a.74.74 0 0 1-1-.344.74.74 0 0 1 .343-1l2-1a.74.74 0 0 1 1 .343m-17 1a.74.74 0 0 1-.343-1 .74.74 0 0 1 1-.344l2 1a.74.74 0 0 1 .343 1 .74.74 0 0 1-1 .343z' />
    </g>
    <defs>
      <clipPath id='e66878059385f499b69e5dba2f64ba9f__a'>
        <path d='M0 0h20v24H0z' />
      </clipPath>
    </defs>
  </svg>
);
const ForwardRef = forwardRef(LabelPairedBellOnMdBoldIcon);
export default ForwardRef;
