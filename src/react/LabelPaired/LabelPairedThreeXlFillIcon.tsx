import * as React from 'react';
import { SVGProps, Ref, forwardRef } from 'react';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const LabelPairedThreeXlFillIcon = (
  { title, titleId, ...props }: SVGProps<SVGSVGElement> & SVGRProps,
  ref: Ref<SVGSVGElement>,
) => (
  <svg
    xmlns='http://www.w3.org/2000/svg'
    width={15}
    height={36}
    viewBox='0 0 15 36'
    role='img'
    ref={ref}
    aria-labelledby={titleId}
    {...props}
  >
    {title ? <title id={titleId}>{title}</title> : null}
    <g>
      <path d='M0 9c0-.797.656-1.5 1.5-1.5h11.25c.61 0 1.172.422 1.36.984a1.45 1.45 0 0 1-.376 1.641l-6.14 5.625h1.031A6.38 6.38 0 0 1 15 22.125 6.35 6.35 0 0 1 8.625 28.5H4.922a5.3 5.3 0 0 1-4.688-2.86l-.093-.187c-.375-.75-.094-1.64.656-2.015s1.64-.094 2.015.656l.094.187c.375.75 1.172 1.219 2.016 1.219h3.703C10.453 25.5 12 24 12 22.125c0-1.828-1.547-3.375-3.375-3.375H3.75a1.49 1.49 0 0 1-1.406-.937 1.45 1.45 0 0 1 .375-1.641l6.14-5.672H1.5A1.48 1.48 0 0 1 0 9' />
    </g>
    <defs>
      <clipPath id='76407be1da3c8c59173b1ca41de23939__a'>
        <path d='M0 0h15v36H0z' />
      </clipPath>
    </defs>
  </svg>
);
const ForwardRef = forwardRef(LabelPairedThreeXlFillIcon);
export default ForwardRef;
