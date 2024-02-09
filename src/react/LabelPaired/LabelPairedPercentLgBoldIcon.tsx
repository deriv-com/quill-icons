import * as React from 'react';
import { SVGProps, Ref, forwardRef } from 'react';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const LabelPairedPercentLgBoldIcon = (
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
      <path d='m14.414 9.914-12.5 12.5q-.664.547-1.328 0-.547-.664 0-1.328l12.5-12.5q.664-.547 1.328 0 .548.664 0 1.328M4.375 10.5q-.04 1.055-.937 1.64-.938.47-1.876 0-.897-.585-.937-1.64.04-1.055.938-1.64.938-.47 1.875 0 .898.585.937 1.64m10 10q-.039 1.055-.937 1.64-.938.47-1.876 0-.898-.585-.937-1.64.038-1.055.938-1.64.937-.47 1.874 0 .9.585.938 1.64' />
    </g>
    <defs>
      <clipPath id='9b8476579d1190fadcaf5fe24762c98c__a'>
        <path d='M0 0h15v30H0z' />
      </clipPath>
    </defs>
  </svg>
);
const ForwardRef = forwardRef(LabelPairedPercentLgBoldIcon);
export default ForwardRef;
