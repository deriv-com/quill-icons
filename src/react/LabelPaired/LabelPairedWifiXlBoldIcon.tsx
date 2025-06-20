import * as React from 'react';
import { SVGProps, Ref, forwardRef } from 'react';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const LabelPairedWifiXlBoldIcon = (
  { title, titleId, ...props }: SVGProps<SVGSVGElement> & SVGRProps,
  ref: Ref<SVGSVGElement>,
) => (
  <svg
    xmlns='http://www.w3.org/2000/svg'
    width={30}
    height={36}
    viewBox='0 0 30 36'
    role='img'
    ref={ref}
    aria-labelledby={titleId}
    {...props}
  >
    {title ? <title id={titleId}>{title}</title> : null}
    <g>
      <path d='M1.828 14.719c-.469.422-1.172.375-1.547-.094a1.12 1.12 0 0 1 .094-1.594C4.265 9.61 9.375 7.5 15 7.5c5.578 0 10.688 2.11 14.578 5.531.469.422.516 1.125.14 1.594a1.12 1.12 0 0 1-1.593.094C24.609 11.625 20.015 9.75 15 9.75a19.84 19.84 0 0 0-13.172 4.969M15 18a11.5 11.5 0 0 0-7.875 3.094A1.12 1.12 0 0 1 5.531 21a1.16 1.16 0 0 1 .047-1.594c2.484-2.25 5.766-3.656 9.422-3.656 3.61 0 6.89 1.406 9.375 3.656.422.422.469 1.125.047 1.594a1.12 1.12 0 0 1-1.594.094A11.48 11.48 0 0 0 15 18m2.625 7.875c0 .984-.516 1.828-1.312 2.297-.844.469-1.829.469-2.625 0-.844-.469-1.313-1.313-1.313-2.297 0-.937.469-1.781 1.313-2.25.796-.469 1.78-.469 2.624 0 .797.469 1.313 1.313 1.313 2.25' />
    </g>
    <defs>
      <clipPath id='ecfc6515e706b188092cd64d564440c2__a'>
        <path d='M0 0h30v36H0z' />
      </clipPath>
    </defs>
  </svg>
);
const ForwardRef = forwardRef(LabelPairedWifiXlBoldIcon);
export default ForwardRef;
