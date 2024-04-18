import * as React from 'react';
import { SVGProps, Ref, forwardRef } from 'react';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const LabelPairedCircleUserMdFillIcon = (
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
      <path d='M12.469 16.031C11.75 14.813 10.469 14 9 14H7c-1.5 0-2.781.813-3.469 2.031A5.97 5.97 0 0 0 8 18c1.75 0 3.344-.75 4.469-1.969M0 12a7.94 7.94 0 0 1 4-6.906c2.469-1.438 5.5-1.438 8 0C14.469 6.53 16 9.156 16 12c0 2.875-1.531 5.5-4 6.938-2.5 1.437-5.531 1.437-8 0A7.95 7.95 0 0 1 0 12m8 .5c.781 0 1.531-.406 1.938-1.125.406-.687.406-1.531 0-2.25A2.28 2.28 0 0 0 8 8c-.812 0-1.562.438-1.969 1.125-.406.719-.406 1.563 0 2.25C6.438 12.094 7.188 12.5 8 12.5' />
    </g>
    <defs>
      <clipPath id='335fd0545963eb6f75148302e1eef8b9__a'>
        <path d='M0 0h16v24H0z' />
      </clipPath>
    </defs>
  </svg>
);
const ForwardRef = forwardRef(LabelPairedCircleUserMdFillIcon);
export default ForwardRef;
