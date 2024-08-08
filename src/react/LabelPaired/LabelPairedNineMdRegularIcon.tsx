import * as React from 'react';
import { SVGProps, Ref, forwardRef } from 'react';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const LabelPairedNineMdRegularIcon = (
  { title, titleId, ...props }: SVGProps<SVGSVGElement> & SVGRProps,
  ref: Ref<SVGSVGElement>,
) => (
  <svg
    xmlns='http://www.w3.org/2000/svg'
    width={10}
    height={24}
    viewBox='0 0 10 24'
    role='img'
    ref={ref}
    aria-labelledby={titleId}
    {...props}
  >
    {title ? <title id={titleId}>{title}</title> : null}
    <g>
      <path d='M1 10c0 2.219 1.781 4 4 4a4.003 4.003 0 0 0 4-3.875V10c0-2.187-1.812-4-4-4-2.219 0-4 1.813-4 4m5.031 4.906A6 6 0 0 1 5 15c-2.781 0-5-2.219-5-5 0-2.75 2.219-5 5-5 2.75 0 5 2.25 5 5 0 .063 0 .125-.031.188-.031 1.187-.469 2.343-1.281 3.218l-4.813 5.438c-.187.218-.5.218-.719.031a.465.465 0 0 1-.031-.687z' />
    </g>
    <defs>
      <clipPath id='1a59ebdb3d242aa07190f2918c84b66c__a'>
        <path d='M0 0h10v24H0z' />
      </clipPath>
    </defs>
  </svg>
);
const ForwardRef = forwardRef(LabelPairedNineMdRegularIcon);
export default ForwardRef;
