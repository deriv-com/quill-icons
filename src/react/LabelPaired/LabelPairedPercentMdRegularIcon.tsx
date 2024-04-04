import * as React from 'react';
import { SVGProps, Ref, forwardRef } from 'react';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const LabelPairedPercentMdRegularIcon = (
  { title, titleId, ...props }: SVGProps<SVGSVGElement> & SVGRProps,
  ref: Ref<SVGSVGElement>,
) => (
  <svg
    xmlns='http://www.w3.org/2000/svg'
    width={12}
    height={24}
    viewBox='0 0 12 24'
    role='img'
    ref={ref}
    aria-labelledby={titleId}
    {...props}
  >
    {title ? <title id={titleId}>{title}</title> : null}
    <g>
      <path d='M2 7c-.562 0-1 .469-1 1 0 .563.438 1 1 1 .531 0 1-.437 1-1 0-.531-.469-1-1-1m0 3A2.03 2.03 0 0 1 .25 9c-.344-.594-.344-1.375 0-2C.625 6.406 1.281 6 2 6c.688 0 1.344.406 1.719 1 .344.625.344 1.406 0 2A2.02 2.02 0 0 1 2 10m8 5c-.562 0-1 .469-1 1 0 .563.438 1 1 1 .531 0 1-.437 1-1 0-.531-.469-1-1-1m0 3a2.03 2.03 0 0 1-1.75-1c-.344-.594-.344-1.375 0-2 .375-.594 1.031-1 1.75-1 .688 0 1.344.406 1.719 1 .344.625.344 1.406 0 2A2.02 2.02 0 0 1 10 18m1.844-11.125-11 11a.53.53 0 0 1-.719 0 .53.53 0 0 1 0-.719l11-11a.53.53 0 0 1 .719 0 .53.53 0 0 1 0 .719' />
    </g>
    <defs>
      <clipPath id='3fc9bbc35aaff3eb5524312c66784c26__a'>
        <path d='M0 0h12v24H0z' />
      </clipPath>
    </defs>
  </svg>
);
const ForwardRef = forwardRef(LabelPairedPercentMdRegularIcon);
export default ForwardRef;
