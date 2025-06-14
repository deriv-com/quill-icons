import * as React from 'react';
import { SVGProps, Ref, forwardRef } from 'react';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const LabelPairedCircleEightMdBoldIcon = (
  { title, titleId, ...props }: SVGProps<SVGSVGElement> & SVGRProps,
  ref: Ref<SVGSVGElement>,
) => (
  <svg
    xmlns='http://www.w3.org/2000/svg'
    width={16}
    height={24}
    viewBox='0 0 16 24'
    role='img'
    ref={ref}
    aria-labelledby={titleId}
    {...props}
  >
    {title ? <title id={titleId}>{title}</title> : null}
    <g>
      <path d='M14.5 12c0-2.312-1.25-4.437-3.25-5.625a6.52 6.52 0 0 0-6.5 0C2.719 7.563 1.5 9.688 1.5 12a6.51 6.51 0 0 0 3.25 5.656 6.52 6.52 0 0 0 6.5 0c2-1.187 3.25-3.312 3.25-5.656M0 12a7.94 7.94 0 0 1 4-6.906c2.469-1.438 5.5-1.438 8 0C14.469 6.53 16 9.156 16 12c0 2.875-1.531 5.5-4 6.938-2.5 1.437-5.531 1.437-8 0A7.95 7.95 0 0 1 0 12m8.25-4c1.219 0 2.25 1.031 2.25 2.25 0 .5-.156.969-.437 1.313.562.468.937 1.156.937 1.937 0 1.406-1.125 2.5-2.5 2.5h-1A2.47 2.47 0 0 1 5 13.5c0-.781.344-1.469.906-1.937A2.26 2.26 0 0 1 5.5 10.25C5.5 9.031 6.5 8 7.75 8zm-.5 3h.5a.74.74 0 0 0 .75-.75.76.76 0 0 0-.75-.75h-.5a.74.74 0 0 0-.75.75c0 .438.313.75.75.75m.5 1.5H7.5c-.562 0-1 .469-1 1 0 .563.438 1 1 1h1c.531 0 1-.437 1-1 0-.531-.469-1-1-1z' />
    </g>
    <defs>
      <clipPath id='796a8fd25be03c13bffcf48fd4f0e0f7__a'>
        <path d='M0 0h16v24H0z' />
      </clipPath>
    </defs>
  </svg>
);
const ForwardRef = forwardRef(LabelPairedCircleEightMdBoldIcon);
export default ForwardRef;
