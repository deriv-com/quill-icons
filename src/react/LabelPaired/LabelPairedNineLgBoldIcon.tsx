import * as React from 'react';
import { SVGProps, Ref, forwardRef } from 'react';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const LabelPairedNineLgBoldIcon = (
  { title, titleId, ...props }: SVGProps<SVGSVGElement> & SVGRProps,
  ref: Ref<SVGSVGElement>,
) => (
  <svg
    xmlns='http://www.w3.org/2000/svg'
    width={13}
    height={30}
    viewBox='0 0 13 30'
    role='img'
    ref={ref}
    aria-labelledby={titleId}
    {...props}
  >
    {title ? <title id={titleId}>{title}</title> : null}
    <g>
      <path d='M2.125 13A4.37 4.37 0 0 0 6.5 17.375c1.25 0 2.383-.508 3.164-1.367l.234-.235A4.44 4.44 0 0 0 10.875 13c0-2.383-1.992-4.375-4.375-4.375-2.422 0-4.375 1.992-4.375 4.375m4.922 6.25H6.5A6.22 6.22 0 0 1 .25 13 6.243 6.243 0 0 1 6.5 6.75c3.438 0 6.25 2.813 6.25 6.25 0 1.64-.625 3.125-1.64 4.219l-5.47 6.718c-.312.391-.898.43-1.327.118-.391-.313-.43-.899-.118-1.328z' />
    </g>
    <defs>
      <clipPath id='9b6779b1e8a283bcfafa18ac14cda1cd__a'>
        <path d='M0 0h13v30H0z' />
      </clipPath>
    </defs>
  </svg>
);
const ForwardRef = forwardRef(LabelPairedNineLgBoldIcon);
export default ForwardRef;
