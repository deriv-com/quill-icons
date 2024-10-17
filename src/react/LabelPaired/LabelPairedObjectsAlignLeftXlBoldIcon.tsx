import * as React from 'react';
import { SVGProps, Ref, forwardRef } from 'react';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const LabelPairedObjectsAlignLeftXlBoldIcon = (
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
      <path d='M0 7.125C0 6.515.469 6 1.125 6c.61 0 1.125.516 1.125 1.125v21.75A1.11 1.11 0 0 1 1.125 30C.469 30 0 29.531 0 28.875zm8.25 7.125h13.5v-3H8.25zm-2.25-3A2.25 2.25 0 0 1 8.25 9h13.5C22.969 9 24 10.031 24 11.25v3a2.25 2.25 0 0 1-2.25 2.25H8.25A2.22 2.22 0 0 1 6 14.25zm2.25 13.5h7.5v-3h-7.5zm-2.25-3a2.25 2.25 0 0 1 2.25-2.25h7.5c1.219 0 2.25 1.031 2.25 2.25v3A2.25 2.25 0 0 1 15.75 27h-7.5A2.22 2.22 0 0 1 6 24.75z' />
    </g>
    <defs>
      <clipPath id='e28932f6d2d9e536926c135745aeb5ca__a'>
        <path d='M0 0h24v36H0z' />
      </clipPath>
    </defs>
  </svg>
);
const ForwardRef = forwardRef(LabelPairedObjectsAlignLeftXlBoldIcon);
export default ForwardRef;
