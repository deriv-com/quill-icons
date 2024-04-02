import * as React from 'react';
import { SVGProps, Ref, forwardRef } from 'react';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const LabelPairedShieldCheckXlFillIcon = (
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
      <path d='m12.61 6.14 8.812 3.75c1.031.47 1.828 1.454 1.828 2.672-.047 4.688-1.969 13.172-10.031 17.063a2.88 2.88 0 0 1-2.485 0C2.672 25.735.75 17.25.75 12.563c-.047-1.22.75-2.204 1.781-2.672l8.813-3.75a1.5 1.5 0 0 1 1.265 0m2.015 9.61c0-1.406-1.219-2.625-2.625-2.625-1.453 0-2.625 1.219-2.625 2.625 0 1.078.61 1.969 1.5 2.39v3.235c0 .656.469 1.125 1.125 1.125a1.11 1.11 0 0 0 1.125-1.125v-3.234c.844-.422 1.5-1.313 1.5-2.391' />
    </g>
    <defs>
      <clipPath id='8bf9b34a8147cd4b89c6a41e4aacfb40__a'>
        <path d='M0 0h24v36H0z' />
      </clipPath>
    </defs>
  </svg>
);
const ForwardRef = forwardRef(LabelPairedShieldCheckXlFillIcon);
export default ForwardRef;
