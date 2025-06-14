import * as React from 'react';
import { SVGProps, Ref, forwardRef } from 'react';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const LabelPairedInfoLgFillIcon = (
  { title, titleId, ...props }: SVGProps<SVGSVGElement> & SVGRProps,
  ref: Ref<SVGSVGElement>,
) => (
  <svg
    xmlns='http://www.w3.org/2000/svg'
    width={8}
    height={30}
    viewBox='0 0 8 30'
    role='img'
    ref={ref}
    aria-labelledby={titleId}
    {...props}
  >
    {title ? <title id={titleId}>{title}</title> : null}
    <g>
      <path d='M2.125 8.625c0-.664.352-1.25.938-1.602.546-.351 1.289-.351 1.874 0 .547.352.938.938.938 1.602 0 .703-.39 1.29-.937 1.64-.586.352-1.329.352-1.875 0a1.87 1.87 0 0 1-.938-1.64M.25 14.25C.25 13.586.797 13 1.5 13H4c.664 0 1.25.586 1.25 1.25V23H6.5c.664 0 1.25.586 1.25 1.25 0 .703-.586 1.25-1.25 1.25h-5c-.703 0-1.25-.547-1.25-1.25C.25 23.586.797 23 1.5 23h1.25v-7.5H1.5c-.703 0-1.25-.547-1.25-1.25' />
    </g>
    <defs>
      <clipPath id='5bded0da7978ce523aac94eb93089b7c__a'>
        <path d='M0 0h8v30H0z' />
      </clipPath>
    </defs>
  </svg>
);
const ForwardRef = forwardRef(LabelPairedInfoLgFillIcon);
export default ForwardRef;
