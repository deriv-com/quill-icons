import * as React from 'react';
import { SVGProps, Ref, forwardRef } from 'react';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const LabelPairedXmarkMdBoldIcon = (
  { title, titleId, ...props }: SVGProps<SVGSVGElement> & SVGRProps,
  ref: Ref<SVGSVGElement>,
) => (
  <svg
    xmlns='http://www.w3.org/2000/svg'
    width={12}
    height={24}
    viewBox='0 0 12 24'
    role='img'
    ref={ref}
    aria-labelledby={titleId}
    {...props}
  >
    {title ? <title id={titleId}>{title}</title> : null}
    <g>
      <path d='m10.781 8.281-3.75 3.75 3.719 3.719a.684.684 0 0 1 0 1.031.684.684 0 0 1-1.031 0l-3.75-3.718L2.25 16.78a.684.684 0 0 1-1.031 0c-.313-.281-.313-.75 0-1.062L4.937 12 1.22 8.281c-.313-.281-.313-.75 0-1.062.281-.282.75-.282 1.062 0L6 10.969 9.719 7.25c.281-.312.75-.312 1.062 0a.736.736 0 0 1 0 1.031' />
    </g>
    <defs>
      <clipPath id='c51560efdc165976e116a16d50ab1c76__a'>
        <path d='M0 0h12v24H0z' />
      </clipPath>
    </defs>
  </svg>
);
const ForwardRef = forwardRef(LabelPairedXmarkMdBoldIcon);
export default ForwardRef;
