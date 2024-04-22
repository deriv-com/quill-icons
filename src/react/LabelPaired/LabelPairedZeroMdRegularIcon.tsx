import * as React from 'react';
import { SVGProps, Ref, forwardRef } from 'react';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const LabelPairedZeroMdRegularIcon = (
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
      <path d='M0 10c0-2.75 2.219-5 5-5 2.75 0 5 2.25 5 5v4c0 2.781-2.25 5-5 5-2.781 0-5-2.219-5-5zm5-4c-2.219 0-4 1.813-4 4v4c0 2.219 1.781 4 4 4 2.188 0 4-1.781 4-4v-4c0-2.187-1.812-4-4-4' />
    </g>
    <defs>
      <clipPath id='0d8f3723792c420f17365cbc91408ba5__a'>
        <path d='M0 0h10v24H0z' />
      </clipPath>
    </defs>
  </svg>
);
const ForwardRef = forwardRef(LabelPairedZeroMdRegularIcon);
export default ForwardRef;
