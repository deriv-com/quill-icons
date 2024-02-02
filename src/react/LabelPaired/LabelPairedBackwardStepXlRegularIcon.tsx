import * as React from 'react';
import { SVGProps, Ref, forwardRef } from 'react';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const LabelPairedBackwardStepXlRegularIcon = (
  { title, titleId, ...props }: SVGProps<SVGSVGElement> & SVGRProps,
  ref: Ref<SVGSVGElement>,
) => (
  <svg
    xmlns='http://www.w3.org/2000/svg'
    width={15}
    height={36}
    viewBox='0 0 15 36'
    role='img'
    ref={ref}
    aria-labelledby={titleId}
    {...props}
  >
    {title ? <title id={titleId}>{title}</title> : null}
    <g>
      <path d='M3 9.75v6.375l8.39-6.844q.33-.28.797-.281.563 0 .938.375t.375.938v15.375q0 .562-.375.937t-.937.375q-.47 0-.797-.281L3 19.875v6.375q-.046.704-.75.75-.703-.046-.75-.75V9.75q.046-.703.75-.75.704.047.75.75m9 .984L3.047 18 12 25.266z' />
    </g>
    <defs>
      <clipPath id='3a004f66b18953f4__a'>
        <path d='M0 0h15v36H0z' />
      </clipPath>
    </defs>
  </svg>
);
const ForwardRef = forwardRef(LabelPairedBackwardStepXlRegularIcon);
export default ForwardRef;
