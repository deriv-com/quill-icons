import * as React from 'react';
import { SVGProps, Ref, forwardRef } from 'react';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const LabelPairedComputerMouseScrollwheelLgFillIcon = (
  { title, titleId, ...props }: SVGProps<SVGSVGElement> & SVGRProps,
  ref: Ref<SVGSVGElement>,
) => (
  <svg
    xmlns='http://www.w3.org/2000/svg'
    width={15}
    height={30}
    viewBox='0 0 15 30'
    role='img'
    ref={ref}
    aria-labelledby={titleId}
    {...props}
  >
    {title ? <title id={titleId}>{title}</title> : null}
    <g>
      <path d='M6.25 5.5h2.5c3.438 0 6.25 2.813 6.25 6.25v7.5a6.243 6.243 0 0 1-6.25 6.25h-2.5A6.22 6.22 0 0 1 0 19.25v-7.5A6.243 6.243 0 0 1 6.25 5.5m2.5 5c0-.664-.586-1.25-1.25-1.25-.703 0-1.25.586-1.25 1.25v1.25c0 .703.547 1.25 1.25 1.25.664 0 1.25-.547 1.25-1.25z' />
    </g>
    <defs>
      <clipPath id='3e2b82c59ce164be0c7902434f36b91d__a'>
        <path d='M0 0h15v30H0z' />
      </clipPath>
    </defs>
  </svg>
);
const ForwardRef = forwardRef(LabelPairedComputerMouseScrollwheelLgFillIcon);
export default ForwardRef;
