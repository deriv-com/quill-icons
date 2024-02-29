import * as React from 'react';
import { SVGProps, Ref, forwardRef } from 'react';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const LabelPairedSortLgRegularIcon = (
  { title, titleId, ...props }: SVGProps<SVGSVGElement> & SVGRProps,
  ref: Ref<SVGSVGElement>,
) => (
  <svg
    xmlns='http://www.w3.org/2000/svg'
    width={13}
    height={30}
    viewBox='0 0 13 30'
    role='img'
    ref={ref}
    aria-labelledby={titleId}
    {...props}
  >
    {title ? <title id={titleId}>{title}</title> : null}
    <g>
      <path d='M1.578 12.531a.27.27 0 0 0-.078.196.305.305 0 0 0 .273.273h9.454a.305.305 0 0 0 .273-.273.27.27 0 0 0-.078-.196L6.734 8.078A.4.4 0 0 0 6.5 8a.4.4 0 0 0-.234.078zm-.86-.937L5.407 7.18q.469-.43 1.094-.43t1.094.43l4.687 4.453q.47.428.469 1.094 0 .664-.43 1.093-.429.43-1.093.43H1.773q-.663 0-1.093-.43-.43-.429-.43-1.093t.469-1.133m.86 6.875 4.688 4.453A.4.4 0 0 0 6.5 23a.4.4 0 0 0 .234-.078l4.688-4.453a.27.27 0 0 0 .078-.196.305.305 0 0 0-.273-.273H1.773a.305.305 0 0 0-.273.273q0 .118.078.196m-.86.937a1.54 1.54 0 0 1-.468-1.133q0-.663.43-1.093.429-.43 1.093-.43h9.454q.664 0 1.093.43.43.429.43 1.093t-.469 1.133L7.594 23.82q-.469.43-1.094.43t-1.094-.43z' />
    </g>
    <defs>
      <clipPath id='6531d6bf4e421fdce3336a0f882347b9__a'>
        <path d='M0 0h13v30H0z' />
      </clipPath>
    </defs>
  </svg>
);
const ForwardRef = forwardRef(LabelPairedSortLgRegularIcon);
export default ForwardRef;
