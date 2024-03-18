import * as React from 'react';
import { SVGProps, Ref, forwardRef } from 'react';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const LabelPairedChartAreaLgFillIcon = (
  { title, titleId, ...props }: SVGProps<SVGSVGElement> & SVGRProps,
  ref: Ref<SVGSVGElement>,
) => (
  <svg
    xmlns='http://www.w3.org/2000/svg'
    width={20}
    height={30}
    viewBox='0 0 20 30'
    role='img'
    ref={ref}
    aria-labelledby={titleId}
    {...props}
  >
    {title ? <title id={titleId}>{title}</title> : null}
    <g>
      <path d='M2.5 8v13.125c0 .352.273.625.625.625H18.75c.664 0 1.25.586 1.25 1.25 0 .703-.586 1.25-1.25 1.25H3.125C1.367 24.25 0 22.883 0 21.125V8c0-.664.547-1.25 1.25-1.25.664 0 1.25.586 1.25 1.25m3.75 11.25v.04c-.703 0-1.25-.587-1.25-1.25v-3.282c0-.313.078-.625.273-.86l3.125-3.515a1.262 1.262 0 0 1 1.915 0l1.523 1.836a.915.915 0 0 0 1.367.078l.82-.82c.508-.508 1.368-.508 1.836.078l2.579 2.968c.195.235.312.547.312.82V18c0 .703-.586 1.25-1.25 1.25z' />
    </g>
    <defs>
      <clipPath id='dc8d3d3fd99cee9bf8d81027ebef92be__a'>
        <path d='M0 0h20v30H0z' />
      </clipPath>
    </defs>
  </svg>
);
const ForwardRef = forwardRef(LabelPairedChartAreaLgFillIcon);
export default ForwardRef;
