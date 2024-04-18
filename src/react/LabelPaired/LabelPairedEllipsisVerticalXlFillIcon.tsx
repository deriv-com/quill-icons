import * as React from 'react';
import { SVGProps, Ref, forwardRef } from 'react';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const LabelPairedEllipsisVerticalXlFillIcon = (
  { title, titleId, ...props }: SVGProps<SVGSVGElement> & SVGRProps,
  ref: Ref<SVGSVGElement>,
) => (
  <svg
    xmlns='http://www.w3.org/2000/svg'
    width={6}
    height={36}
    viewBox='0 0 6 36'
    role='img'
    ref={ref}
    aria-labelledby={titleId}
    {...props}
  >
    {title ? <title id={titleId}>{title}</title> : null}
    <g>
      <path d='M3 22.875c.938 0 1.781.516 2.25 1.313.469.843.469 1.828 0 2.625-.469.843-1.312 1.312-2.25 1.312-.984 0-1.828-.469-2.297-1.312-.469-.797-.469-1.782 0-2.625A2.64 2.64 0 0 1 3 22.875m0-7.5c.938 0 1.781.516 2.25 1.313.469.843.469 1.828 0 2.625-.469.843-1.312 1.312-2.25 1.312-.984 0-1.828-.469-2.297-1.312-.469-.797-.469-1.782 0-2.625A2.64 2.64 0 0 1 3 15.375M5.625 10.5c0 .984-.516 1.828-1.312 2.297-.844.469-1.829.469-2.625 0C.844 12.328.375 11.484.375 10.5c0-.937.469-1.781 1.313-2.25.796-.469 1.78-.469 2.625 0 .796.469 1.312 1.313 1.312 2.25' />
    </g>
    <defs>
      <clipPath id='ff6c8b70a9bbe97e2dab6d87701cc345__a'>
        <path d='M0 0h6v36H0z' />
      </clipPath>
    </defs>
  </svg>
);
const ForwardRef = forwardRef(LabelPairedEllipsisVerticalXlFillIcon);
export default ForwardRef;
