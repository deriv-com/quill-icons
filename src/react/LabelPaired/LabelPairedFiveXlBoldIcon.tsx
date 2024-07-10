import * as React from 'react';
import { SVGProps, Ref, forwardRef } from 'react';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const LabelPairedFiveXlBoldIcon = (
  { title, titleId, ...props }: SVGProps<SVGSVGElement> & SVGRProps,
  ref: Ref<SVGSVGElement>,
) => (
  <svg
    xmlns='http://www.w3.org/2000/svg'
    width={15}
    height={36}
    viewBox='0 0 15 36'
    role='img'
    ref={ref}
    aria-labelledby={titleId}
    {...props}
  >
    {title ? <title id={titleId}>{title}</title> : null}
    <g>
      <path d='M1.5 8.438A1.16 1.16 0 0 1 2.625 7.5h9.75c.61 0 1.125.516 1.125 1.125a1.11 1.11 0 0 1-1.125 1.125H3.563l-1.126 6.375h6.376c3.374 0 6.187 2.813 6.187 6.188 0 3.421-2.812 6.187-6.187 6.187h-4.5c-1.688 0-3.282-.937-4.032-2.484l-.187-.375c-.281-.563-.047-1.22.515-1.5.563-.282 1.22-.047 1.5.515l.188.375c.375.75 1.172 1.219 2.015 1.219h4.5a3.93 3.93 0 0 0 3.938-3.937c0-2.157-1.781-3.938-3.937-3.938H1.125A1.2 1.2 0 0 1 .235 18 1.35 1.35 0 0 1 0 17.063z' />
    </g>
    <defs>
      <clipPath id='5b063ab86abac1a05f02cca06742f213__a'>
        <path d='M0 0h15v36H0z' />
      </clipPath>
    </defs>
  </svg>
);
const ForwardRef = forwardRef(LabelPairedFiveXlBoldIcon);
export default ForwardRef;
