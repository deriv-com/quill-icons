import * as React from 'react';
import { SVGProps, Ref, forwardRef } from 'react';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const LabelPairedPlayLgFillIcon = (
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
      <path d='m2.852 7.023 11.25 6.875c.546.352.898.977.898 1.602 0 .664-.352 1.29-.898 1.602l-11.25 6.875c-.586.351-1.329.39-1.914.039C.352 23.703 0 23.078 0 22.375V8.625c0-.664.352-1.29.938-1.602a1.87 1.87 0 0 1 1.914 0' />
    </g>
    <defs>
      <clipPath id='59fed6d6afea2e0522e6d752916dd691__a'>
        <path d='M0 0h15v30H0z' />
      </clipPath>
    </defs>
  </svg>
);
const ForwardRef = forwardRef(LabelPairedPlayLgFillIcon);
export default ForwardRef;
