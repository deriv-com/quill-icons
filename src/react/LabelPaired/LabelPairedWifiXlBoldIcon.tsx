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
      <path d='M1.875 14.719q-.843.61-1.594-.094-.61-.843.094-1.594a22.1 22.1 0 0 1 6.656-4.078Q10.781 7.5 15 7.5t7.969 1.453a22.1 22.1 0 0 1 6.656 4.078q.703.75.094 1.594-.75.703-1.594.094a19.6 19.6 0 0 0-6-3.656Q18.796 9.75 15 9.75t-7.125 1.313a19.6 19.6 0 0 0-6 3.656M15 18q-4.641.094-7.875 3.047-.796.656-1.594-.047-.61-.844.094-1.594a13.5 13.5 0 0 1 4.266-2.672q2.39-.984 5.109-.984 2.72 0 5.11.984a13.5 13.5 0 0 1 4.265 2.672q.703.75.094 1.594-.798.703-1.594.047Q19.641 18.093 15 18m2.625 7.875q-.047 1.5-1.312 2.25-1.312.75-2.625 0-1.266-.75-1.313-2.25.047-1.5 1.313-2.25 1.312-.75 2.624 0 1.266.75 1.313 2.25' />
    </g>
    <defs>
      <clipPath id='b8a8c278360f6e37134d6e3b44ae07cf__a'>
        <path d='M0 0h30v36H0z' />
      </clipPath>
    </defs>
  </svg>
);
const ForwardRef = forwardRef(LabelPairedWifiXlBoldIcon);
export default ForwardRef;
