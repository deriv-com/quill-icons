import * as React from 'react';
import { SVGProps, Ref, forwardRef } from 'react';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const LabelPairedChartTradingviewLgRegularIcon = (
  { title, titleId, ...props }: SVGProps<SVGSVGElement> & SVGRProps,
  ref: Ref<SVGSVGElement>,
) => (
  <svg
    xmlns='http://www.w3.org/2000/svg'
    width={24}
    height={30}
    viewBox='0 0 24 30'
    role='img'
    ref={ref}
    aria-labelledby={titleId}
    {...props}
  >
    {title ? <title id={titleId}>{title}</title> : null}
    <g>
      <path d='M3.738 23.664V7.258a.6.6 0 0 1 .586-.586c.352 0 .586.273.586.586v15.976c0 .625.508 1.094 1.133 1.094h13.594a.6.6 0 0 1 .586.586.575.575 0 0 1-.586.586H5.574a1.81 1.81 0 0 1-1.836-1.836m16.328-9.766a.704.704 0 0 0-.859 0l-6.055 6.094-1.523-1.523c-.469-.469-1.211-.469-1.64 0l-2.54 2.5a.613.613 0 0 0 0 .86.566.566 0 0 0 .82 0l2.54-2.54 1.523 1.523c.469.47 1.211.47 1.64 0l6.094-6.054a.613.613 0 0 0 0-.86m-6.484-4.023c0-.43-.39-.82-.86-.82-.468 0-.859.39-.859.82 0 .469.39.82.86.82.468 0 .859-.351.859-.82m.664-.82-1.758 4.687h1.29l1.718-4.687zm-5.781 0v1.054H10.3v3.633h1.133V9.055z' />
    </g>
    <defs>
      <clipPath id='cc1273268f4f1e741faea28efa9e7ad4__a'>
        <path d='M0 0h24v30H0z' />
      </clipPath>
    </defs>
  </svg>
);
const ForwardRef = forwardRef(LabelPairedChartTradingviewLgRegularIcon);
export default ForwardRef;
