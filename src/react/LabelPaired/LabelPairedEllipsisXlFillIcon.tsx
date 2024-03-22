import * as React from 'react';
import { SVGProps, Ref, forwardRef } from 'react';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const LabelPairedEllipsisXlFillIcon = (
  { title, titleId, ...props }: SVGProps<SVGSVGElement> & SVGRProps,
  ref: Ref<SVGSVGElement>,
) => (
  <svg
    xmlns='http://www.w3.org/2000/svg'
    width={21}
    height={36}
    viewBox='0 0 21 36'
    role='img'
    ref={ref}
    aria-labelledby={titleId}
    {...props}
  >
    {title ? <title id={titleId}>{title}</title> : null}
    <g>
      <path d='M.375 18c0-.937.469-1.781 1.313-2.25.796-.469 1.78-.469 2.625 0 .796.469 1.312 1.313 1.312 2.25 0 .984-.516 1.828-1.312 2.297-.844.469-1.829.469-2.625 0C.844 19.828.375 18.984.375 18m7.5 0c0-.937.469-1.781 1.313-2.25.796-.469 1.78-.469 2.624 0 .797.469 1.313 1.313 1.313 2.25 0 .984-.516 1.828-1.312 2.297-.844.469-1.829.469-2.626 0-.843-.469-1.312-1.313-1.312-2.297M18 15.375c.938 0 1.781.516 2.25 1.313.469.843.469 1.828 0 2.625-.469.843-1.312 1.312-2.25 1.312-.984 0-1.828-.469-2.297-1.312-.469-.797-.469-1.782 0-2.625A2.64 2.64 0 0 1 18 15.375' />
    </g>
    <defs>
      <clipPath id='975c6eac99ea60574c0e56cf77bd623f__a'>
        <path d='M0 0h21v36H0z' />
      </clipPath>
    </defs>
  </svg>
);
const ForwardRef = forwardRef(LabelPairedEllipsisXlFillIcon);
export default ForwardRef;
