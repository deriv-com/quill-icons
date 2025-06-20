import * as React from 'react';
import { SVGProps, Ref, forwardRef } from 'react';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const LabelPairedCloneXlFillIcon = (
  { title, titleId, ...props }: SVGProps<SVGSVGElement> & SVGRProps,
  ref: Ref<SVGSVGElement>,
) => (
  <svg
    xmlns='http://www.w3.org/2000/svg'
    width={24}
    height={36}
    viewBox='0 0 24 36'
    role='img'
    ref={ref}
    aria-labelledby={titleId}
    {...props}
  >
    {title ? <title id={titleId}>{title}</title> : null}
    <g>
      <path d='M13.5 27v-3h3v3c0 1.688-1.36 3-3 3H3c-1.687 0-3-1.312-3-3V16.5c0-1.64 1.313-3 3-3h3v3H3V27zm-3-4.5c-1.687 0-3-1.312-3-3V9c0-1.64 1.313-3 3-3H21c1.64 0 3 1.36 3 3v10.5c0 1.688-1.36 3-3 3z' />
    </g>
    <defs>
      <clipPath id='da2809889dfb775511ff6db8feb9f5a7__a'>
        <path d='M0 0h24v36H0z' />
      </clipPath>
    </defs>
  </svg>
);
const ForwardRef = forwardRef(LabelPairedCloneXlFillIcon);
export default ForwardRef;
