import * as React from 'react';
import { SVGProps, Ref, forwardRef } from 'react';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const LabelPairedMoonXlRegularIcon = (
  { title, titleId, ...props }: SVGProps<SVGSVGElement> & SVGRProps,
  ref: Ref<SVGSVGElement>,
) => (
  <svg
    xmlns='http://www.w3.org/2000/svg'
    width={18}
    height={36}
    viewBox='0 0 18 36'
    role='img'
    ref={ref}
    aria-labelledby={titleId}
    {...props}
  >
    {title ? <title id={titleId}>{title}</title> : null}
    <g>
      <path d='M8.953 9.14q-3.234.61-5.297 3.047Q1.546 14.579 1.5 18q.094 3.844 2.625 6.375T10.5 27q2.391-.047 4.406-1.172-3.843-.375-6.328-3.094Q6.094 20.064 6 16.125q0-2.062.797-3.844a8.8 8.8 0 0 1 2.156-3.14m3.094-1.03q.093.562-.375.843a8.6 8.6 0 0 0-3.047 2.953Q7.5 13.781 7.5 16.125q.095 3.516 2.39 5.813 2.344 2.344 5.813 2.437.75 0 1.406-.14.563-.047.797.421.235.47-.14.89-2.907 2.86-7.266 2.954-2.953-.047-5.297-1.453a9.8 9.8 0 0 1-3.75-3.75Q.047 20.953 0 18q.047-2.953 1.406-5.297a10.17 10.17 0 0 1 3.797-3.75q2.345-1.406 5.25-1.453.47 0 .89.047.563.047.704.562' />
    </g>
    <defs>
      <clipPath id='351d8a06e3ae296dc82ad4d22104f38e__a'>
        <path d='M0 0h18v36H0z' />
      </clipPath>
    </defs>
  </svg>
);
const ForwardRef = forwardRef(LabelPairedMoonXlRegularIcon);
export default ForwardRef;
