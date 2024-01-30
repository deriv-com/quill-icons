import * as React from 'react';
import { SVGProps, Ref, forwardRef } from 'react';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const LabelPairedSixLgRegularIcon = (
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
      <path d='M11.5 18q-.04-2.109-1.445-3.555Q8.609 13.04 6.5 13q-2.109.04-3.477 1.445-1.406 1.368-1.523 3.438V18q.04 2.109 1.445 3.555Q4.391 22.96 6.5 23q2.109-.04 3.555-1.445Q11.46 20.109 11.5 18m-6.29-6.094a5.3 5.3 0 0 1 1.29-.156q2.656.078 4.414 1.836T12.75 18q-.078 2.656-1.836 4.414T6.5 24.25q-2.655-.078-4.414-1.836T.25 18v-.234a6.45 6.45 0 0 1 1.602-3.985l6.054-6.836q.43-.39.899-.039.39.43.039.899z' />
    </g>
    <defs>
      <clipPath id='6ecb645906e34b69108238a6d676bbee__a'>
        <path d='M0 0h13v30H0z' />
      </clipPath>
    </defs>
  </svg>
);
const ForwardRef = forwardRef(LabelPairedSixLgRegularIcon);
export default ForwardRef;
