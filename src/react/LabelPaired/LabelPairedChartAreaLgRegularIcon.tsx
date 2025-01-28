import * as React from 'react';
import { SVGProps, Ref, forwardRef } from 'react';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const LabelPairedChartAreaLgRegularIcon = (
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
      <path d='M1.25 7.375v13.75C1.25 22.18 2.07 23 3.125 23h16.25c.313 0 .625.313.625.625a.64.64 0 0 1-.625.625H3.125C1.367 24.25 0 22.883 0 21.125V7.375c0-.312.273-.625.625-.625.313 0 .625.313.625.625m10.352 6.523L8.75 11.047l-3.594 3.555a.59.59 0 0 0-.156.43v4.218h12.5v-3.672c0-.156-.078-.273-.156-.39l-2.422-2.852-1.563 1.562a1.21 1.21 0 0 1-.859.352c-.352 0-.664-.117-.898-.352m0-1.757L12.5 13l.86-.86.663-.663a1.264 1.264 0 0 1 1.836.078l2.422 2.812c.274.352.469.781.469 1.211v3.672c0 .703-.586 1.25-1.25 1.25H5c-.703 0-1.25-.547-1.25-1.25v-4.219c0-.469.195-.976.547-1.328l3.555-3.555c.468-.468 1.289-.468 1.757 0z' />
    </g>
    <defs>
      <clipPath id='b777113e429a0afcc584a5356e478238__a'>
        <path d='M0 0h20v30H0z' />
      </clipPath>
    </defs>
  </svg>
);
const ForwardRef = forwardRef(LabelPairedChartAreaLgRegularIcon);
export default ForwardRef;
