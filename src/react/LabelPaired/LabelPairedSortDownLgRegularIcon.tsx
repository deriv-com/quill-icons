import * as React from 'react';
import { SVGProps, Ref, forwardRef } from 'react';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const LabelPairedSortDownLgRegularIcon = (
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
      <path d='M6.266 22.922A.4.4 0 0 0 6.5 23a.4.4 0 0 0 .234-.078l4.688-4.453a.27.27 0 0 0 .078-.196.305.305 0 0 0-.273-.273H1.773a.305.305 0 0 0-.273.273q0 .118.078.196zm-.86.898L.72 19.406a1.54 1.54 0 0 1-.469-1.133q0-.663.43-1.093.429-.43 1.093-.43h9.454q.664 0 1.093.43.43.429.43 1.093t-.469 1.133L7.594 23.82q-.469.43-1.094.43t-1.094-.43' />
    </g>
    <defs>
      <clipPath id='539de67c94bcf631__a'>
        <path d='M0 0h13v30H0z' />
      </clipPath>
    </defs>
  </svg>
);
const ForwardRef = forwardRef(LabelPairedSortDownLgRegularIcon);
export default ForwardRef;
