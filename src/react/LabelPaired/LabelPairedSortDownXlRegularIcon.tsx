import * as React from 'react';
import { Ref, forwardRef } from 'react';
import { QuillSvgProps, sizes } from 'types';
export const LabelPairedSortDownXlRegularIcon = (
  { iconSize = 'md', ...props }: QuillSvgProps,
  ref: Ref<SVGSVGElement>,
) => (
  <svg
    xmlns='http://www.w3.org/2000/svg'
    viewBox='0 0 15 36'
    {...sizes[iconSize]}
    role='img'
    ref={ref}
    {...props}
  >
    <path
      fillOpacity={0.72}
      d='M7.219 26.906A.503.503 0 0 0 7.5 27a.503.503 0 0 0 .281-.094l5.625-5.343a.318.318 0 0 0 .094-.235.366.366 0 0 0-.328-.328H1.828a.366.366 0 0 0-.328.328c0 .094.031.172.094.235zm-1.032 1.078L.564 22.687A1.852 1.852 0 0 1 0 21.329c0-.531.172-.969.516-1.312.343-.344.78-.516 1.312-.516h11.344c.531 0 .969.172 1.312.516.344.343.516.78.516 1.312 0 .531-.187.985-.562 1.36l-5.626 5.296A1.881 1.881 0 0 1 7.5 28.5c-.5 0-.937-.172-1.312-.516'
    />
  </svg>
);
const ForwardRef = forwardRef(LabelPairedSortDownXlRegularIcon);
export default ForwardRef;
