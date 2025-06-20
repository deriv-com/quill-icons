import * as React from 'react';
import { SVGProps, Ref, forwardRef } from 'react';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const LabelPairedCircleUserXlFillIcon = (
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
      <path d='M18.703 24.047C17.625 22.219 15.703 21 13.5 21h-3c-2.25 0-4.172 1.219-5.203 3.047C6.937 25.875 9.328 27 12 27c2.625 0 5.016-1.125 6.703-2.953M0 18A11.91 11.91 0 0 1 6 7.64c3.703-2.156 8.25-2.156 12 0 3.703 2.157 6 6.094 6 10.36 0 4.313-2.297 8.25-6 10.406-3.75 2.157-8.297 2.157-12 0C2.25 26.25 0 22.313 0 18m12 .75c1.172 0 2.297-.61 2.906-1.687.61-1.032.61-2.297 0-3.375C14.296 12.656 13.172 12 12 12a3.44 3.44 0 0 0-2.953 1.688c-.61 1.078-.61 2.343 0 3.374.61 1.079 1.734 1.688 2.953 1.688' />
    </g>
    <defs>
      <clipPath id='c537b627ed7478c6fb4a8448e183c5fc__a'>
        <path d='M0 0h24v36H0z' />
      </clipPath>
    </defs>
  </svg>
);
const ForwardRef = forwardRef(LabelPairedCircleUserXlFillIcon);
export default ForwardRef;
