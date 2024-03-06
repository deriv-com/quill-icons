import * as React from 'react';
import { SVGProps, Ref, forwardRef } from 'react';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const LabelPairedMicrophoneCaptionRegularIcon = (
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
      <path d='M6 5.75a1.52 1.52 0 0 0-.445-1.055A1.52 1.52 0 0 0 4.5 4.25a1.52 1.52 0 0 0-1.055.445Q3.024 5.118 3 5.75V9.5q.024.633.445 1.055.423.421 1.055.445a1.52 1.52 0 0 0 1.055-.445Q5.976 10.133 6 9.5zm-3.75 0q.023-.96.656-1.594Q3.54 3.524 4.5 3.5q.96.024 1.594.656.632.633.656 1.594V9.5q-.024.96-.656 1.594-.633.633-1.594.656-.96-.024-1.594-.656-.632-.633-.656-1.594zM1.5 8.375V9.5q.024 1.266.867 2.133.868.843 2.133.867 1.266-.024 2.133-.867.843-.868.867-2.133V8.375q.023-.352.375-.375.352.023.375.375V9.5q-.024 1.5-.984 2.531-.937 1.032-2.391 1.196v1.523h1.5q.352.023.375.375-.023.352-.375.375h-3.75q-.352-.023-.375-.375.023-.352.375-.375h1.5v-1.523q-1.454-.164-2.39-1.196Q.772 11.001.75 9.5V8.375q.023-.352.375-.375.352.023.375.375' />
    </g>
    <defs>
      <clipPath id='5345d660bb417f0dcfb2a4a9ae87b5d4__a'>
        <path d='M0 0h9v18H0z' />
      </clipPath>
    </defs>
  </svg>
);
const ForwardRef = forwardRef(LabelPairedMicrophoneCaptionRegularIcon);
export default ForwardRef;
