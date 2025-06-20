import * as React from 'react';
import { SVGProps, Ref, forwardRef } from 'react';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const LabelPairedBriefcaseXlBoldIcon = (
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
      <path d='M8.25 8.625V10.5h7.5V8.625a.4.4 0 0 0-.375-.375h-6.75a.37.37 0 0 0-.375.375M6 10.5V8.625C6 7.219 7.172 6 8.625 6h6.75C16.781 6 18 7.219 18 8.625V10.5h3c1.64 0 3 1.36 3 3v12c0 1.688-1.36 3-3 3H3c-1.687 0-3-1.312-3-3v-12c0-1.64 1.313-3 3-3zm-3.75 9.75v5.25c0 .422.328.75.75.75h18c.375 0 .75-.328.75-.75v-5.25H15V21c0 .844-.703 1.5-1.5 1.5h-3A1.48 1.48 0 0 1 9 21v-.75zM9 18h12.75v-4.5c0-.375-.375-.75-.75-.75H3c-.422 0-.75.375-.75.75V18z' />
    </g>
    <defs>
      <clipPath id='c4bf00da5d988a6140564fec25946cc6__a'>
        <path d='M0 0h24v36H0z' />
      </clipPath>
    </defs>
  </svg>
);
const ForwardRef = forwardRef(LabelPairedBriefcaseXlBoldIcon);
export default ForwardRef;
