import * as React from 'react';
import { SVGProps, Ref, forwardRef } from 'react';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const LabelPairedLocationCrosshairsCaptionBoldIcon = (
  { title, titleId, ...props }: SVGProps<SVGSVGElement> & SVGRProps,
  ref: Ref<SVGSVGElement>,
) => (
  <svg
    xmlns='http://www.w3.org/2000/svg'
    width={12}
    height={18}
    viewBox='0 0 12 18'
    role='img'
    ref={ref}
    aria-labelledby={titleId}
    {...props}
  >
    {title ? <title id={titleId}>{title}</title> : null}
    <g>
      <path d='M6 3.5q.516.047.563.563v.984q1.546.21 2.625 1.266 1.054 1.077 1.289 2.625h.96q.516.045.563.562-.047.515-.562.563h-.961q-.235 1.546-1.29 2.624-1.077 1.055-2.624 1.29v.96q-.048.516-.563.563-.516-.047-.562-.562v-.961q-1.548-.235-2.625-1.29-1.056-1.077-1.266-2.624H.563Q.046 10.015 0 9.5q.047-.516.563-.562h.984q.21-1.548 1.266-2.626Q3.89 5.258 5.438 5.048v-.984Q5.483 3.547 6 3.5m-3.375 6q0 .915.445 1.688t1.243 1.242A3.4 3.4 0 0 0 6 12.875q.89 0 1.688-.445a3.4 3.4 0 0 0 1.242-1.242A3.3 3.3 0 0 0 9.375 9.5q0-.915-.445-1.687A3.4 3.4 0 0 0 7.688 6.57 3.4 3.4 0 0 0 6 6.125q-.89 0-1.687.445A3.4 3.4 0 0 0 3.07 7.812 3.3 3.3 0 0 0 2.625 9.5m4.5 0a1.17 1.17 0 0 0-.562-.984 1.2 1.2 0 0 0-1.125 0q-.54.351-.563.984.024.633.563.984.563.282 1.125 0 .538-.351.562-.984m-3.375 0q0-.609.305-1.125.304-.516.82-.82Q5.415 7.25 6 7.25a2.26 2.26 0 0 1 1.945 1.125q.305.516.305 1.125t-.305 1.125A2.255 2.255 0 0 1 6 11.75a2.26 2.26 0 0 1-1.945-1.125A2.17 2.17 0 0 1 3.75 9.5' />
    </g>
    <defs>
      <clipPath id='a92d9ad60c79efb6__a'>
        <path d='M0 0h12v18H0z' />
      </clipPath>
    </defs>
  </svg>
);
const ForwardRef = forwardRef(LabelPairedLocationCrosshairsCaptionBoldIcon);
export default ForwardRef;
