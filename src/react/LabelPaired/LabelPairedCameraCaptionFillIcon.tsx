import * as React from 'react';
import { SVGProps, Ref, forwardRef } from 'react';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const LabelPairedCameraCaptionFillIcon = (
  { title, titleId, ...props }: SVGProps<SVGSVGElement> & SVGRProps,
  ref: Ref<SVGSVGElement>,
) => (
  <svg
    xmlns='http://www.w3.org/2000/svg'
    width={12}
    height={18}
    viewBox='0 0 12 18'
    role='img'
    ref={ref}
    aria-labelledby={titleId}
    {...props}
  >
    {title ? <title id={titleId}>{title}</title> : null}
    <g>
      <path d='M3.492 5.023c.14-.445.563-.773 1.055-.773H7.43c.492 0 .914.328 1.054.773l.258.727H10.5c.82 0 1.5.68 1.5 1.5v6c0 .844-.68 1.5-1.5 1.5h-9a1.48 1.48 0 0 1-1.5-1.5v-6c0-.82.656-1.5 1.5-1.5h1.734zM6 8c-.82 0-1.547.445-1.969 1.125a2.27 2.27 0 0 0 0 2.25A2.27 2.27 0 0 0 6 12.5c.797 0 1.523-.422 1.945-1.125a2.27 2.27 0 0 0 0-2.25C7.523 8.445 6.797 8 6 8' />
    </g>
    <defs>
      <clipPath id='c66351d7d64a276633129dd72e275ff3__a'>
        <path d='M0 0h12v18H0z' />
      </clipPath>
    </defs>
  </svg>
);
const ForwardRef = forwardRef(LabelPairedCameraCaptionFillIcon);
export default ForwardRef;
