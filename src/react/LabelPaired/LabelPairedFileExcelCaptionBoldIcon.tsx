import * as React from 'react';
import { SVGProps, Ref, forwardRef } from 'react';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const LabelPairedFileExcelCaptionBoldIcon = (
  { title, titleId, ...props }: SVGProps<SVGSVGElement> & SVGRProps,
  ref: Ref<SVGSVGElement>,
) => (
  <svg
    xmlns='http://www.w3.org/2000/svg'
    width={9}
    height={18}
    viewBox='0 0 9 18'
    role='img'
    ref={ref}
    aria-labelledby={titleId}
    {...props}
  >
    {title ? <title id={titleId}>{title}</title> : null}
    <g>
      <path d='M1.125 14q.023.352.375.375h6q.352-.023.375-.375V7.25H6a.73.73 0 0 1-.54-.21.73.73 0 0 1-.21-.54V4.625H1.5q-.352.023-.375.375zM1.5 3.5h3.89q.61 0 1.055.445l2.11 2.11Q9 6.5 9 7.133V14a1.52 1.52 0 0 1-.445 1.055q-.422.421-1.055.445h-6a1.52 1.52 0 0 1-1.055-.445A1.52 1.52 0 0 1 0 14V5q.024-.632.445-1.055Q.868 3.524 1.5 3.5m2.133 5.46.867 1.126.867-1.125q.352-.375.797-.094.375.352.094.797L5.203 11l1.055 1.336q.28.445-.094.797-.445.28-.797-.094L4.5 11.914l-.867 1.125q-.352.375-.797.094-.375-.352-.094-.797L3.797 11 2.742 9.664q-.28-.445.094-.797.445-.28.797.094' />
    </g>
    <defs>
      <clipPath id='5d0c070454228a59d4e4dd126093d91a__a'>
        <path d='M0 0h9v18H0z' />
      </clipPath>
    </defs>
  </svg>
);
const ForwardRef = forwardRef(LabelPairedFileExcelCaptionBoldIcon);
export default ForwardRef;
