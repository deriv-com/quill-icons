import * as React from 'react';
import { SVGProps, Ref, forwardRef } from 'react';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const LabelPairedLightbulbLgBoldIcon = (
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
      <path d='M11.602 15.227q.858-1.25.898-2.852-.04-2.109-1.445-3.555Q9.609 7.414 7.5 7.375q-2.109.04-3.555 1.445Q2.54 10.266 2.5 12.375q.04 1.602.898 2.852.196.312.508.703a18.6 18.6 0 0 1 1.524 2.304q.585 1.133.742 2.266H4.258a4.5 4.5 0 0 0-.469-1.367 19 19 0 0 0-1.328-1.992l-.625-.86Q.664 14.601.625 12.375q.079-2.93 2.031-4.844Q4.57 5.578 7.5 5.5q2.93.079 4.844 2.031 1.953 1.913 2.031 4.844-.04 2.227-1.21 3.906-.314.43-.626.82v.04a19 19 0 0 0-1.328 1.992q-.35.664-.469 1.367H8.828q.156-1.132.742-2.266a22 22 0 0 1 1.563-2.304q.273-.39.469-.703M7.5 10.5q-.781.039-1.328.547-.508.546-.547 1.328Q5.586 12.96 5 13q-.585-.039-.625-.625.04-1.328.898-2.227.9-.858 2.227-.898.585.039.625.625-.039.585-.625.625m0 15q-1.328-.04-2.227-.898-.859-.9-.898-2.227v-.625h6.25v.625q-.039 1.328-.898 2.227-.9.858-2.227.898' />
    </g>
    <defs>
      <clipPath id='5005ea05221345a32320dd8bc4588260__a'>
        <path d='M0 0h15v30H0z' />
      </clipPath>
    </defs>
  </svg>
);
const ForwardRef = forwardRef(LabelPairedLightbulbLgBoldIcon);
export default ForwardRef;
