import * as React from 'react';
import { SVGProps, Ref, forwardRef } from 'react';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const LabelPairedBookmarkMdRegularIcon = (
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
      <path d='M0 5.5q.03-.625.438-1.062A1.63 1.63 0 0 1 1.5 4h9q.624.03 1.063.438.405.436.437 1.062v13.813q-.062.624-.687.687a.58.58 0 0 1-.376-.125L6 16.594l-4.937 3.281A.58.58 0 0 1 .688 20q-.625-.062-.688-.687zM1.5 5q-.469.031-.5.5v13.219l4.719-3.125a.47.47 0 0 1 .562 0L11 18.719V5.5q-.03-.469-.5-.5z' />
    </g>
    <defs>
      <clipPath id='62b73a590a7a74658b0e24b1e1229c97__a'>
        <path d='M0 0h12v24H0z' />
      </clipPath>
    </defs>
  </svg>
);
const ForwardRef = forwardRef(LabelPairedBookmarkMdRegularIcon);
export default ForwardRef;
