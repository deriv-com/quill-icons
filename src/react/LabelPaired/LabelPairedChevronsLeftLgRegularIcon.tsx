import * as React from 'react';
import { SVGProps, Ref, forwardRef } from 'react';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const LabelPairedChevronsLeftLgRegularIcon = (
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
      <path d='m2.031 15.07 7.5-7.5a.66.66 0 0 1 .899 0 .66.66 0 0 1 0 .899L3.36 15.5l7.07 7.07a.66.66 0 0 1 0 .899.66.66 0 0 1-.899 0l-7.5-7.5a.66.66 0 0 1 0-.899m15-7.5a.66.66 0 0 1 .899 0 .66.66 0 0 1 0 .899L10.86 15.5l7.07 7.07a.66.66 0 0 1 0 .899.66.66 0 0 1-.899 0l-7.5-7.5a.66.66 0 0 1 0-.899z' />
    </g>
    <defs>
      <clipPath id='89b70e59927ee1a5e53fdee93697e138__a'>
        <path d='M0 0h20v30H0z' />
      </clipPath>
    </defs>
  </svg>
);
const ForwardRef = forwardRef(LabelPairedChevronsLeftLgRegularIcon);
export default ForwardRef;
