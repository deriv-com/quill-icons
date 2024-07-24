import * as React from 'react';
import { SVGProps, Ref, forwardRef } from 'react';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const LabelPairedExpandXlRegularIcon = (
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
      <path d='M6.75 7.5c.375 0 .75.375.75.75 0 .422-.375.75-.75.75H1.5v5.25c0 .422-.375.75-.75.75a.74.74 0 0 1-.75-.75v-6c0-.375.328-.75.75-.75zM0 21.75c0-.375.328-.75.75-.75.375 0 .75.375.75.75V27h5.25c.375 0 .75.375.75.75 0 .422-.375.75-.75.75h-6a.74.74 0 0 1-.75-.75zM20.25 7.5c.375 0 .75.375.75.75v6c0 .422-.375.75-.75.75a.74.74 0 0 1-.75-.75V9h-5.25a.74.74 0 0 1-.75-.75c0-.375.328-.75.75-.75zm-.75 14.25c0-.375.328-.75.75-.75.375 0 .75.375.75.75v6c0 .422-.375.75-.75.75h-6a.74.74 0 0 1-.75-.75c0-.375.328-.75.75-.75h5.25z' />
    </g>
    <defs>
      <clipPath id='bbb33e733ad9464ec558b0334ee0786b__a'>
        <path d='M0 0h21v36H0z' />
      </clipPath>
    </defs>
  </svg>
);
const ForwardRef = forwardRef(LabelPairedExpandXlRegularIcon);
export default ForwardRef;
