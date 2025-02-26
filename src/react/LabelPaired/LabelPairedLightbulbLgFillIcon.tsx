import * as React from 'react';
import { SVGProps, Ref, forwardRef } from 'react';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const LabelPairedLightbulbLgFillIcon = (
  { title, titleId, ...props }: SVGProps<SVGSVGElement> & SVGRProps,
  ref: Ref<SVGSVGElement>,
) => (
  <svg
    xmlns='http://www.w3.org/2000/svg'
    width={15}
    height={30}
    viewBox='0 0 15 30'
    role='img'
    ref={ref}
    aria-labelledby={titleId}
    {...props}
  >
    {title ? <title id={titleId}>{title}</title> : null}
    <g>
      <path d='M10.625 20.5h-6.25c-.39-1.21-1.172-2.305-1.953-3.36l-.586-.82C1.055 15.187.625 13.86.625 12.375A6.86 6.86 0 0 1 7.5 5.5c3.79 0 6.875 3.086 6.875 6.914 0 1.445-.469 2.774-1.25 3.906l-.586.82c-.781 1.055-1.562 2.15-1.914 3.36m-3.125 5c-1.758 0-3.125-1.367-3.125-3.125v-.625h6.25v.625A3.11 3.11 0 0 1 7.5 25.5M4.375 12.375A3.11 3.11 0 0 1 7.5 9.25a.64.64 0 0 0 .625-.625C8.125 8.313 7.813 8 7.5 8c-2.422 0-4.375 1.992-4.375 4.375 0 .352.273.625.625.625a.64.64 0 0 0 .625-.625' />
    </g>
    <defs>
      <clipPath id='bc49ebe83713b1d9eb751ff1509b8b82__a'>
        <path d='M0 0h15v30H0z' />
      </clipPath>
    </defs>
  </svg>
);
const ForwardRef = forwardRef(LabelPairedLightbulbLgFillIcon);
export default ForwardRef;
