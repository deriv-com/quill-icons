import * as React from 'react';
import { SVGProps, Ref, forwardRef } from 'react';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const LabelPairedCircleBookmarkMdRegularIcon = (
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
      <path d='M8 5a6.98 6.98 0 0 0-6.062 3.5c-1.282 2.188-1.282 4.844 0 7C3.188 17.688 5.467 19 8 19c2.5 0 4.781-1.312 6.031-3.5 1.281-2.156 1.281-4.812 0-7C12.781 6.344 10.5 5 8 5m0 15c-2.875 0-5.5-1.5-6.937-4-1.438-2.469-1.438-5.5 0-8A8.02 8.02 0 0 1 8 4c2.844 0 5.469 1.531 6.906 4 1.438 2.5 1.438 5.531 0 8A7.94 7.94 0 0 1 8 20M6 9.5v4.969l1.688-1.344c.156-.156.437-.156.625 0L10 14.469V9.5c0-.25-.25-.5-.5-.5h-3c-.281 0-.5.25-.5.5M6.5 8h3c.813 0 1.5.688 1.5 1.5v6c0 .219-.125.375-.312.469a.425.425 0 0 1-.5-.063L8 14.156l-2.187 1.75a.55.55 0 0 1-.532.063A.485.485 0 0 1 5 15.5v-6A1.5 1.5 0 0 1 6.5 8' />
    </g>
    <defs>
      <clipPath id='32f2468b2bc599f4fab774f4aab326e7__a'>
        <path d='M0 0h16v24H0z' />
      </clipPath>
    </defs>
  </svg>
);
const ForwardRef = forwardRef(LabelPairedCircleBookmarkMdRegularIcon);
export default ForwardRef;
