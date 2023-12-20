import * as React from 'react';
import { Ref, forwardRef } from 'react';
import { QuillSvgProps, sizes } from 'types';
export const LabelPairedBookmarkSmRegularIcon = (
  { iconSize = 'md', ...props }: QuillSvgProps,
  ref: Ref<SVGSVGElement>,
) => (
  <svg
    xmlns='http://www.w3.org/2000/svg'
    viewBox='0 0 11 22'
    {...sizes[iconSize]}
    role='img'
    ref={ref}
    {...props}
  >
    <g clipPath='url(#a)'>
      <path
        fillOpacity={0.72}
        d='M.25 5.063c.018-.365.146-.675.383-.93.255-.237.565-.365.93-.383h7.875c.364.018.674.146.93.383.236.255.364.565.382.93v12.085c-.037.365-.237.566-.602.602a.509.509 0 0 1-.328-.11L5.5 14.77l-4.32 2.87a.51.51 0 0 1-.328.11c-.365-.037-.566-.237-.602-.602zm1.313-.438c-.274.018-.42.164-.438.438v11.566l4.129-2.735a.41.41 0 0 1 .492 0l4.129 2.735V5.062c-.018-.273-.164-.419-.437-.437z'
      />
    </g>
    <defs>
      <clipPath id='a'>
        <path d='M0 0h11v22H0z' />
      </clipPath>
    </defs>
  </svg>
);
const ForwardRef = forwardRef(LabelPairedBookmarkSmRegularIcon);
export default ForwardRef;
