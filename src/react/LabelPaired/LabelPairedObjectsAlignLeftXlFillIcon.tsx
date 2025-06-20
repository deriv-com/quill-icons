import * as React from 'react';
import { SVGProps, Ref, forwardRef } from 'react';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const LabelPairedObjectsAlignLeftXlFillIcon = (
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
      <path d='M0 7.125C0 6.515.469 6 1.125 6c.61 0 1.125.516 1.125 1.125v21.75A1.11 1.11 0 0 1 1.125 30C.469 30 0 29.531 0 28.875zM8.25 9h13.5C22.969 9 24 10.031 24 11.25v3a2.25 2.25 0 0 1-2.25 2.25H8.25A2.22 2.22 0 0 1 6 14.25v-3A2.25 2.25 0 0 1 8.25 9m0 10.5h7.5c1.219 0 2.25 1.031 2.25 2.25v3A2.25 2.25 0 0 1 15.75 27h-7.5A2.22 2.22 0 0 1 6 24.75v-3a2.25 2.25 0 0 1 2.25-2.25' />
    </g>
    <defs>
      <clipPath id='4319d293677a9a9433918549c89b3234__a'>
        <path d='M0 0h24v36H0z' />
      </clipPath>
    </defs>
  </svg>
);
const ForwardRef = forwardRef(LabelPairedObjectsAlignLeftXlFillIcon);
export default ForwardRef;
