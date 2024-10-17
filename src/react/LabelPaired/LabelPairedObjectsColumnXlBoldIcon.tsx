import * as React from 'react';
import { SVGProps, Ref, forwardRef } from 'react';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const LabelPairedObjectsColumnXlBoldIcon = (
  { title, titleId, ...props }: SVGProps<SVGSVGElement> & SVGRProps,
  ref: Ref<SVGSVGElement>,
) => (
  <svg
    xmlns='http://www.w3.org/2000/svg'
    width={21}
    height={36}
    viewBox='0 0 21 36'
    role='img'
    ref={ref}
    aria-labelledby={titleId}
    {...props}
  >
    {title ? <title id={titleId}>{title}</title> : null}
    <g>
      <path d='M2.25 9.75v7.5h4.5v-7.5zM0 9.75A2.25 2.25 0 0 1 2.25 7.5h4.5C7.969 7.5 9 8.531 9 9.75v7.5a2.25 2.25 0 0 1-2.25 2.25h-4.5A2.22 2.22 0 0 1 0 17.25zm14.25 9v7.5h4.5v-7.5zm-2.25 0a2.25 2.25 0 0 1 2.25-2.25h4.5c1.219 0 2.25 1.031 2.25 2.25v7.5a2.25 2.25 0 0 1-2.25 2.25h-4.5A2.22 2.22 0 0 1 12 26.25zm-5.25 4.5h-4.5v3h4.5zM2.25 21h4.5C7.969 21 9 22.031 9 23.25v3a2.25 2.25 0 0 1-2.25 2.25h-4.5A2.22 2.22 0 0 1 0 26.25v-3A2.25 2.25 0 0 1 2.25 21m12-11.25v3h4.5v-3zm-2.25 0a2.25 2.25 0 0 1 2.25-2.25h4.5C19.969 7.5 21 8.531 21 9.75v3A2.25 2.25 0 0 1 18.75 15h-4.5A2.22 2.22 0 0 1 12 12.75z' />
    </g>
    <defs>
      <clipPath id='16843f6faecf007c8080713b8b9fed74__a'>
        <path d='M0 0h21v36H0z' />
      </clipPath>
    </defs>
  </svg>
);
const ForwardRef = forwardRef(LabelPairedObjectsColumnXlBoldIcon);
export default ForwardRef;
