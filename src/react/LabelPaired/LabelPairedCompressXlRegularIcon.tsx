import * as React from 'react';
import { SVGProps, Ref, forwardRef } from 'react';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const LabelPairedCompressXlRegularIcon = (
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
      <path d='M7.5 8.25v6c0 .422-.375.75-.75.75h-6a.74.74 0 0 1-.75-.75c0-.375.328-.75.75-.75H6V8.25c0-.375.328-.75.75-.75.375 0 .75.375.75.75M.75 21h6c.375 0 .75.375.75.75v6c0 .422-.375.75-.75.75a.74.74 0 0 1-.75-.75V22.5H.75a.74.74 0 0 1-.75-.75c0-.375.328-.75.75-.75M15 8.25v5.25h5.25c.375 0 .75.375.75.75 0 .422-.375.75-.75.75h-6a.74.74 0 0 1-.75-.75v-6c0-.375.328-.75.75-.75.375 0 .75.375.75.75M14.25 21h6c.375 0 .75.375.75.75 0 .422-.375.75-.75.75H15v5.25c0 .422-.375.75-.75.75a.74.74 0 0 1-.75-.75v-6c0-.375.328-.75.75-.75' />
    </g>
    <defs>
      <clipPath id='057716f5aef67cc197ec0a9d7a81f767__a'>
        <path d='M0 0h21v36H0z' />
      </clipPath>
    </defs>
  </svg>
);
const ForwardRef = forwardRef(LabelPairedCompressXlRegularIcon);
export default ForwardRef;
