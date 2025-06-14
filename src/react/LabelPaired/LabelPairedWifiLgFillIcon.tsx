import * as React from 'react';
import { SVGProps, Ref, forwardRef } from 'react';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const LabelPairedWifiLgFillIcon = (
  { title, titleId, ...props }: SVGProps<SVGSVGElement> & SVGRProps,
  ref: Ref<SVGSVGElement>,
) => (
  <svg
    xmlns='http://www.w3.org/2000/svg'
    width={25}
    height={30}
    viewBox='0 0 25 30'
    role='img'
    ref={ref}
    aria-labelledby={titleId}
    {...props}
  >
    {title ? <title id={titleId}>{title}</title> : null}
    <g>
      <path d='M2.11 13.43c-.508.508-1.29.468-1.797-.04-.47-.468-.43-1.288.039-1.757C3.516 8.625 7.773 6.75 12.5 6.75c4.688 0 8.945 1.875 12.11 4.883.468.469.507 1.289.038 1.758-.507.507-1.289.547-1.796.039-2.696-2.578-6.329-4.18-10.352-4.18-4.062 0-7.695 1.602-10.39 4.18M12.5 15.5c-2.227 0-4.258.86-5.82 2.188a1.24 1.24 0 0 1-1.758-.079c-.43-.547-.39-1.328.117-1.797C7.031 14.095 9.65 13 12.5 13s5.43 1.094 7.422 2.813c.508.468.586 1.25.117 1.796a1.24 1.24 0 0 1-1.758.078C16.72 16.36 14.688 15.5 12.5 15.5m2.5 6.25c0 .898-.508 1.719-1.25 2.188-.781.43-1.758.43-2.5 0A2.54 2.54 0 0 1 10 21.75c0-.86.469-1.68 1.25-2.148.742-.43 1.719-.43 2.5 0 .742.468 1.25 1.289 1.25 2.148' />
    </g>
    <defs>
      <clipPath id='7254207d1405db5400f66deddd1c03dc__a'>
        <path d='M0 0h25v30H0z' />
      </clipPath>
    </defs>
  </svg>
);
const ForwardRef = forwardRef(LabelPairedWifiLgFillIcon);
export default ForwardRef;
