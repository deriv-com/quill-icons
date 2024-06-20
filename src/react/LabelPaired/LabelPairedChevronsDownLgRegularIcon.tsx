import * as React from 'react';
import { SVGProps, Ref, forwardRef } from 'react';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const LabelPairedChevronsDownLgRegularIcon = (
  { title, titleId, ...props }: SVGProps<SVGSVGElement> & SVGRProps,
  ref: Ref<SVGSVGElement>,
) => (
  <svg
    xmlns='http://www.w3.org/2000/svg'
    width={20}
    height={30}
    viewBox='0 0 20 30'
    role='img'
    ref={ref}
    aria-labelledby={titleId}
    {...props}
  >
    {title ? <title id={titleId}>{title}</title> : null}
    <g>
      <path d='M2.031 8.469a.66.66 0 0 1 0-.899.66.66 0 0 1 .899 0L10 14.64l7.031-7.07a.66.66 0 0 1 .899 0 .66.66 0 0 1 0 .899l-7.5 7.5a.66.66 0 0 1-.899 0zm0 7.5a.66.66 0 0 1 0-.899.66.66 0 0 1 .899 0L10 22.14l7.031-7.07a.66.66 0 0 1 .899 0 .66.66 0 0 1 0 .899l-7.5 7.5a.66.66 0 0 1-.899 0z' />
    </g>
    <defs>
      <clipPath id='8e16069aeb7a2e549202e16f799bf0c5__a'>
        <path d='M0 0h20v30H0z' />
      </clipPath>
    </defs>
  </svg>
);
const ForwardRef = forwardRef(LabelPairedChevronsDownLgRegularIcon);
export default ForwardRef;
